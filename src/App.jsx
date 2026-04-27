import Routes from "./Routes/Routes";
import Scroll from "./ScrollToTop/Scroll";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./header-footer/Header";
import Footer from "./header-footer/Footer";
import ASCIICursorWave from "./components/Animation_code/ASCIICursorWave";

function App() {
  return (
    <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      <div className="app-shell">
        <Scroll />
        <ASCIICursorWave />

        <Header />
        <Routes />
        <Footer />
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
