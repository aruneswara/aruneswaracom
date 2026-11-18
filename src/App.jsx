import Routes from "./Routes/Routes";
import Scroll from "./ScrollToTop/Scroll";
import { BrowserRouter, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./header-footer/Header";
import Footer from "./header-footer/Footer";
import ASCIICursorWave from "./components/Animation_code/ASCIICursorWave";

function AppFrame() {
  const { pathname } = useLocation();
  const isLivingBiography = pathname === "/living-biography";

  return (
    <div className={isLivingBiography ? "app-shell app-shell--immersive" : "app-shell"}>
      <Scroll />
      {!isLivingBiography && <ASCIICursorWave />}

      {!isLivingBiography && <Header />}
      <Routes />
      {!isLivingBiography && <Footer />}
      <ToastContainer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      <AppFrame />
    </BrowserRouter>
  );
}

export default App;
