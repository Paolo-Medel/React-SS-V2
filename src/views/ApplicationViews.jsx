import { Outlet, Route, Routes } from "react-router-dom";
import { WelcomePage } from "../components/Welcome";
import { NavBar } from "../components/NavBar";

export const ApplicationViews = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route index element={<WelcomePage />} />;
        <Route path="ships" element={<>Ships</>} />;
        <Route path="haulers">
          <Route index element={<>Haulers</>} />
          <Route path="editHaulers" element={<>Edit Haulers</>} />
        </Route>
        ;
        <Route path="Docks" element={<>Docks</>} />;
      </Route>
    </Routes>
  );
};
