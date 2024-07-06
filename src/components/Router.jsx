import { PageError } from "../Pages/Error/PageError";
import { PageAcceuil } from "../Pages/Acceuil/PageAcceuil";
import { PageAPropos } from "../Pages/APropos/PageAPropos";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { PageHeader } from "./Header/Header";
import { PageFooter } from "./Footer/Footer";
import { PageFicheLogement } from "./RedirectLogement/RedirectLogement";

export function Router() {
  return (
    <BrowserRouter>
      <PageHeader />
      <Routes>
        <Route path="/" element={<PageAcceuil />} />
        <Route path="/A-Propos" element={<PageAPropos />} />
        <Route path="/:locId" element={<PageFicheLogement />} />

        {/* Pour gérer les erreurs */}
        <Route path="*" element={<Navigate to="/404" />} />
        <Route path="/404" element={<PageError />} />
      </Routes>
      <PageFooter />
    </BrowserRouter>
  );
}

export default Router;
