import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
}));
export const MainContainer = ({ children = {}, ...props }) => {
  const classes = useStyles();
  return (
    <Container {...props} className={classes.root} component="main">
      {children}
    </Container>
  );
};
