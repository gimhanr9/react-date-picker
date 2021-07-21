import DatePicker from "./Components/Date/DatePicker";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFA500",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },

  form: {
    "& > *": {
      margin: theme.spacing(1),

      width: "50ch",
    },
  },
}));

function App() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [dateRange, setDateRange] = useState("MM/DD/YYYY");
  function handleOpen() {
    setOpen(true);
  }

  function handleDateChange(dateObj) {
    const start = dateObj.startDate;
    const end = dateObj.endDate;

    setDateRange(start + " - " + end);
    setOpen(false);
  }
  return (
    <div className={classes.root}>
      <Container maxWidth="lg" className={classes.Container}>
        <form className={classes.form} noValidate autoComplete="off">
          <ThemeProvider theme={theme}>
            <TextField
              id="outlined-basic"
              className={classes.textField}
              label="Date"
              color="primary"
              size="small"
              variant="outlined"
              value={dateRange}
              onClick={handleOpen}
            />
          </ThemeProvider>
        </form>
        {open ? (
          <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={9}>
              <DatePicker handleChange={handleDateChange} />
            </Grid>
          </Grid>
        ) : null}
      </Container>
    </div>
  );
}

export default App;
