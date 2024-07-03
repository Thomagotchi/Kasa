import { PageFooter } from "../../components/Footer/Footer"
import { PageHeader } from "../../components/Header/Header"
import { Outlet } from "react-router-dom"

export function PageAcceuil () {
    return <>
        <PageHeader/>
        <div className="container">
            <Outlet/>
        </div>
        <PageFooter/>
    </>
}