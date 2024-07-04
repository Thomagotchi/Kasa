import { PageError } from "../Pages/Error/PageError";
import { PageAcceuil } from "../Pages/Acceuil/PageAcceuil";
import { PageAPropos } from "../Pages/APropos/PageAPropos";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { PageHeader } from "./Header/Header";
import { PageFooter } from "./Footer/Footer";

export const Router = () => {
    return <BrowserRouter>
      <PageHeader/>
      <Routes>
        <Route path='/' element={<PageAcceuil/>}/>
        <Route path='/A-Propos' element={<PageAPropos/>}/>

        {/* Pour gérer les erreurs */}
        <Route path='*' element={<Navigate to="/404"/>}/>
        <Route path='/404' element={<PageError/>}/>

      </Routes>
      <PageFooter/>
    </BrowserRouter>
}

// export const Router = createBrowserRouter([
//     {
//       path: '/',
//       element: <><PageHeader/><Outlet/><PageFooter/></>,
//       errorElement: <Error/>,
//       children: [
//         {
//           path: '/A-Propos',
//           element: <PageAPropos/>
//         },
//         {
//           path: '/{id}',
//           element: <div>A finir</div>
//         }
//       ]
//     } 
//   ])
