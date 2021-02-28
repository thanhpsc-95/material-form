import { useForm } from "react-hook-form";
import { createStyles, makeStyles, Button } from "@material-ui/core";
import { forwardRef } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    textTransform: "none"
  }
}));
export const CustomButton = ({ children, ...props }) => {
  const classes = useStyles();
  return (
    <Button variant="contained" fullWidth {...props} className={classes.root}>
      {children}
    </Button>
  );
};
