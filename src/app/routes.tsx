import { Route, Routes } from "react-router-dom";
import { FormPage } from "../features/form";
import { ListPage } from "../features/list";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<FormPage />} />
      <Route path="/employee-list" element={<ListPage />} />
    </Routes>
  );
};

export default AppRoutes;
