import { HashRouter } from "react-router-dom";
import AppRoutes from "./routes";
import Header from "../components/layout/Header";

function App() {
  return (
    <div className="app">
      <HashRouter>
        <Header />
        <AppRoutes />
      </HashRouter>
    </div>
  );
}

export default App;
