import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import Header from "../components/layout/Header";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
