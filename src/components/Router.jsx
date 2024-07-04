import { Error } from "../Pages/Error/PageError";
import { PageAcceuil } from "../Pages/Acceuil/PageAcceuil";
import { PageAPropos } from "../Pages/APropos/PageAPropos";
import { createBrowserRouter } from "react-router-dom";

export const Router = createBrowserRouter([
    {
      path: '/',
      element: <PageAcceuil/>,
      errorElement: <Error/>,
      children: [
        {
          path: '/A-Propos',
          element: <PageAPropos/>
        },
        {
          path: '/{id}',
          element: <div>A finir</div>
        }
      ]
    } 
  ])
