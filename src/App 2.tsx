import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
