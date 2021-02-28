import { Wrapper } from "@material-ui/pickers/wrappers/Wrapper";
import { useTitle } from "../hooks/useTitle"

export const Page = ({ Component, title = document.title }) => {
    useTitle(title);
    return (
        <Component></Component>
    )
}