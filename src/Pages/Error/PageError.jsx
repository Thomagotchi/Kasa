import { PageError } from "../../components/Error/Error";
import { PageFooter } from "../../components/Footer/Footer";
import { PageHeader } from "../../components/Header/Header";

export function Error () {
    return <>
    <PageHeader/>
    <PageError/>
    <PageFooter/>
    </>
}