import { makeStyles, Toolbar, Typography } from "@material-ui/core"



const useStyles = makeStyles((theme) => ({
    footer: {
        bottom: 0,
        backgroundColor: theme.palette.primary.main,
        position: "fixed",
        width: "100%",
        padding: theme.spacing(2),
        color: "white"
    }
}))
export const AppFooter = () => {
    const classes = useStyles();
    return (
        <Toolbar className={classes.footer} disableGutters>
            <Typography variant={"caption"}>Footer</Typography>
        </Toolbar>
    )
}