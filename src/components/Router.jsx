import { PageError } from "./Error/Error";
import { PageHeader } from "./Header/Header";
import { PageAPropos } from "../Pages/APropos/PageAPropos";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

export const Router = createBrowserRouter([
    {
      path: '/',
      element: <Root/>,
      errorElement: <PageError/>,
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

function Root () {
    return <>
        <PageHeader />
        <div className="container">
            <Outlet/>
        </div>
    </>
}