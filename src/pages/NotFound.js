import { MainContainer } from "../components/MainContainer";
import { Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";

export const NotFound = ({ ...props }) => {
    return (
        <MainContainer {...props}>
            <Grid
                container
                spacing={1}
                direction="row"
                justify="center"
                alignItems="center"
                alignContent="center"
                wrap="nowrap"

            >
                Trang không tìm thấy
       </Grid>
        </MainContainer>
    );
};
