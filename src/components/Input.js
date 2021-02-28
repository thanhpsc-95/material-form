import { useForm } from "react-hook-form";
import { colors, createStyles, makeStyles, TextField } from "@material-ui/core";
import { forwardRef } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1)
  }
}));
export const Input = forwardRef((props, ref) => {
  const classes = useStyles();

  return (
    <TextField
      variant="outlined"
      margin="dense"
      ref={ref}
      fullWidth
      className={classes.root}
      {...props}
    ></TextField>
  );
});
