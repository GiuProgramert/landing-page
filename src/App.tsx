import "./App.css";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Experiencies from "./components/Experiences";
import Repositories from "./components/Respositories";
import Footer from "./components/Footer";

import "./i18n";

function App() {
  return (
    <>
      <Navbar />

      <main className="container">
        <Profile />
        <Experiencies />
        {/* <Repositories /> */}
      </main>

      <Footer />
    </>
  );
}

export default App;
