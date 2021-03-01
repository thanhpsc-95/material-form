import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginLeft: theme.spacing(-2)
  }
}));
export const CustomForm = ({ children, ...props }) => {
  const classes = useStyles();
  return (
    <form noValidate {...props} className={classes.root}>
      {children}
    </form>
  );
};
