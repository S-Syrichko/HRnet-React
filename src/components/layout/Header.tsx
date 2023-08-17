import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPage = location.pathname;
  
  if (currentPage === "/employee-list") {
    return (
      <header>
        <h1>HRnet</h1>
        <button onClick={() => navigate("/")}>Home</button>
      </header>
    );
  }

  return (
    <header className={styles.header}>
      <h1>HRnet</h1>
      <button onClick={() => navigate("/employee-list")}>
        View Current Employees
      </button>
    </header>
  );
};

export default Header;
