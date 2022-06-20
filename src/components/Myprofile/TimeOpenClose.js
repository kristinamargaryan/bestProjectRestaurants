import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function TimeOpenClose(props) {
  const classes = useStyles();

  return (
    <form style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} className={classes.container} noValidate>
      <TextField
      disabled={props.time24?true:false}
        onChange={props.openTimeFunc}
        id="OpenTime"
        label="Open Time"
        type="time"
        value={props.openTime}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
      <TextField
       disabled={props.time24?true:false}
        onChange={props.closeTimeFunc}
        id="CloseTime"
        label="Close Time"
        type="time"
        value={props.closeTime}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
      
      <label style={{
          fontSize:'22px'
      }}>
        24 hours
        <input onChange={props.changeTime24} checked={props.time24} type="checkbox" />
      </label>
    </form>
  );
}
