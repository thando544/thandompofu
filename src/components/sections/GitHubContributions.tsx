import { useEffect, useMemo, useState } from "react";
import { SITE_CONFIG } from "../../data/siteConfig";

type Contribution = {
  date: string;
  count: number;
  level: number;
};

type ContributionResponse = {
  total: { lastYear: number };
  contributions: Contribution[];
};

type AccountData = {
  username: string;
  label: string;
  total: number;
  contributions: Contribution[];
};

const LEVEL_COLORS = [
  "#171717",
  "#14532d",
  "#166534",
  "#22c55e",
  "#4ade80",
] as const;

const MONTH_LABELS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
] as const;

function organizeWeeks(contributions: Contribution[]) {
  if (contributions.length === 0) return [];

  const weeks: (Contribution | null)[][] = [];
  let currentWeek: (Contribution | null)[] = [];

  const firstDay = new Date(`${contributions[0].date}T00:00:00`).getDay();
  for (let index = 0; index < firstDay; index += 1) {
    currentWeek.push(null);
  }

  for (const contribution of contributions) {
    currentWeek.push(contribution);
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  }

  if (currentWeek.length > 0) {
    while (currentWeek.length < 7) currentWeek.push(null);
    weeks.push(currentWeek);
  }

  return weeks;
}

function getMonthLabels(weeks: (Contribution | null)[][]) {
  return weeks.map((week) => {
    const firstDay = week.find((day) => day !== null);
    if (!firstDay) return "";

    const date = new Date(`${firstDay.date}T00:00:00`);
    if (date.getDate() > 7) return "";

    return MONTH_LABELS[date.getMonth()];
  });
}

function formatContributionDate(date: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

async function fetchContributions(username: string) {
  const response = await fetch(
    `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
  );

  if (!response.ok) {
    throw new Error(`Failed to load contributions for ${username}`);
  }

  return response.json() as Promise<ContributionResponse>;
}

function ContributionCalendar({
  contributions,
  activeCell,
  onActiveCellChange,
}: {
  contributions: Contribution[];
  activeCell: { date: string; count: number } | null;
  onActiveCellChange: (cell: { date: string; count: number } | null) => void;
}) {
  const weeks = useMemo(() => organizeWeeks(contributions), [contributions]);
  const monthLabels = useMemo(() => getMonthLabels(weeks), [weeks]);

  return (
    <>
      <div className="mt-6 overflow-x-auto pb-2">
        <div className="min-w-max">
          <div
            className="github-contributions-months"
            style={{ gridTemplateColumns: `repeat(${weeks.length}, 1fr)` }}
          >
            {monthLabels.map((label, index) => (
              <span key={`${label}-${index}`}>{label}</span>
            ))}
          </div>

          <div className="github-contributions-grid">
            <div className="github-contributions-days" aria-hidden="true">
              <span />
              <span>Mon</span>
              <span />
              <span>Wed</span>
              <span />
              <span>Fri</span>
              <span />
            </div>

            <div
              className="github-contributions-weeks"
              style={{ gridTemplateColumns: `repeat(${weeks.length}, 1fr)` }}
            >
              {weeks.map((week, weekIndex) => (
                <div key={weekIndex} className="github-contributions-week">
                  {week.map((day, dayIndex) =>
                    day ? (
                      <button
                        key={day.date}
                        type="button"
                        className="github-contributions-cell"
                        style={{
                          backgroundColor:
                            LEVEL_COLORS[day.level] ?? LEVEL_COLORS[0],
                        }}
                        aria-label={`${day.count} contributions on ${formatContributionDate(day.date)}`}
                        onMouseEnter={() =>
                          onActiveCellChange({ date: day.date, count: day.count })
                        }
                        onFocus={() =>
                          onActiveCellChange({ date: day.date, count: day.count })
                        }
                        onMouseLeave={() => onActiveCellChange(null)}
                        onBlur={() => onActiveCellChange(null)}
                      />
                    ) : (
                      <span
                        key={`empty-${weekIndex}-${dayIndex}`}
                        className="github-contributions-cell github-contributions-cell--empty"
                        aria-hidden="true"
                      />
                    ),
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="min-h-5 text-xs text-neutral-500">
          {activeCell ? (
            <>
              <span className="font-medium text-neutral-300">
                {activeCell.count}
              </span>{" "}
              {activeCell.count === 1 ? "contribution" : "contributions"} on{" "}
              {formatContributionDate(activeCell.date)}
            </>
          ) : (
            "Select a day to inspect activity"
          )}
        </p>

        <div className="flex items-center gap-2 text-xs text-neutral-600">
          <span>Less</span>
          {LEVEL_COLORS.map((color, index) => (
            <span
              key={index}
              className="github-contributions-cell github-contributions-cell--legend"
              style={{ backgroundColor: color }}
            />
          ))}
          <span>More</span>
        </div>
      </div>
    </>
  );
}

export function GitHubContributions() {
  const [accounts, setAccounts] = useState<AccountData[]>([]);
  const [activeAccount, setActiveAccount] = useState(
    SITE_CONFIG.githubAccounts[0]?.username ?? "",
  );
  const [error, setError] = useState(false);
  const [activeCell, setActiveCell] = useState<{
    date: string;
    count: number;
  } | null>(null);

  useEffect(() => {
    let cancelled = false;

    Promise.all(
      SITE_CONFIG.githubAccounts.map(async (account) => {
        const response = await fetchContributions(account.username);
        return {
          username: account.username,
          label: account.label,
          total: response.total.lastYear,
          contributions: response.contributions,
        };
      }),
    )
      .then((results) => {
        if (!cancelled) setAccounts(results);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const selectedAccount = accounts.find(
    (account) => account.username === activeAccount,
  );

  return (
    <section className="mx-auto max-w-7xl px-6">
      <div className="quiet-card github-contributions">
        <div>
          <p className="section-kicker">Contribution activity</p>
          <h2 className="mt-3 text-2xl font-medium text-white">
            GitHub commit calendar
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-500">
            Public contribution history by account. Switch tabs to compare
            personal and company activity. Hover a day to inspect commit volume.
          </p>
        </div>

        <div
          className="mt-8 flex flex-wrap gap-2"
          role="tablist"
          aria-label="GitHub accounts"
        >
          {SITE_CONFIG.githubAccounts.map((account) => {
            const isActive = activeAccount === account.username;
            const accountTotal = accounts.find(
              (item) => item.username === account.username,
            )?.total;

            return (
              <button
                key={account.username}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`github-calendar-${account.username}`}
                id={`github-tab-${account.username}`}
                onClick={() => {
                  setActiveAccount(account.username);
                  setActiveCell(null);
                }}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  isActive
                    ? "border-white bg-white text-black"
                    : "border-neutral-800 text-neutral-400 hover:border-neutral-600 hover:text-white"
                }`}
              >
                <span>{account.label}</span>
                {accountTotal !== undefined ? (
                  <span
                    className={`ml-2 font-mono text-xs ${
                      isActive ? "text-neutral-600" : "text-neutral-600"
                    }`}
                  >
                    {accountTotal.toLocaleString()}
                  </span>
                ) : null}
              </button>
            );
          })}
        </div>

        {error ? (
          <p className="mt-8 text-sm text-neutral-500">
            Could not load the contribution calendar right now. Use the GitHub
            profile links above to view recent activity.
          </p>
        ) : !selectedAccount ? (
          <div className="github-contributions-skeleton mt-8" aria-hidden="true">
            {Array.from({ length: 53 }).map((_, index) => (
              <span
                key={index}
                className="github-contributions-cell github-contributions-cell--loading"
              />
            ))}
          </div>
        ) : (
          <div
            id={`github-calendar-${selectedAccount.username}`}
            role="tabpanel"
            aria-labelledby={`github-tab-${selectedAccount.username}`}
          >
            <p className="mt-8 text-sm text-neutral-400">
              <span className="font-medium text-white">
                {selectedAccount.total.toLocaleString()}
              </span>{" "}
              contributions in the last year on{" "}
              <span className="font-mono text-neutral-300">
                @{selectedAccount.username}
              </span>
            </p>

            <ContributionCalendar
              contributions={selectedAccount.contributions}
              activeCell={activeCell}
              onActiveCellChange={setActiveCell}
            />
          </div>
        )}
      </div>
    </section>
  );
}
