import { BrowserRouter } from "react-router-dom";
import MyRoutes from "./MyRoutes";
import Navbar from "./components/basic/Navbar";
import Footer from "./components/basic/Footer";

// проект написан с использованием CONTEXT, CRUD, USECONTEXT, USENAVIGATE, USEPARAMS, UAESEARCHPARAMS, and SEARCH

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <MyRoutes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
