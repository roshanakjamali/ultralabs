import { useAppDispatch, useAppSelector } from "../../../store/hooks";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";

import { Dialog } from "../../../components/dialog";
import { CustomButton } from "../../../components/customButton";

import { useStyles } from "./add.style";
import { close, dialogState } from "./add.dialogSlice";

const AddExpert = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const open = useAppSelector(dialogState);

  return (
    <Dialog
      open={open}
      title="Add a new item"
      description="Complete your profile below."
      handleClose={() => dispatch(close())}
    >
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <InputLabel htmlFor="firstName">First Name</InputLabel>
            <TextField
              fullWidth
              id="firstName"
              placeholder="e.g. Street Address, City, State"
              variant="outlined"
              color="secondary"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel htmlFor="lastName">Last Name</InputLabel>
            <TextField
              fullWidth
              id="lastName"
              placeholder="e.g.5+ years"
              variant="outlined"
              color="secondary"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel htmlFor="jobTitle">Job Title</InputLabel>
            <TextField
              fullWidth
              id="jobTitle"
              placeholder="Select"
              variant="outlined"
              color="secondary"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel htmlFor="location">Location</InputLabel>
            <TextField
              fullWidth
              id="location"
              placeholder="e.g.5+ years"
              variant="outlined"
              color="secondary"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel htmlFor="employmentType">Employment type</InputLabel>
            <TextField
              fullWidth
              id="employmentType"
              placeholder="Select"
              variant="outlined"
              color="secondary"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel htmlFor="hourlyRate">Hourly rate</InputLabel>
            <TextField
              fullWidth
              id="hourlyRate"
              placeholder="e.g.5+ years"
              variant="outlined"
              color="secondary"
            />
          </Grid>
          <Grid>
            <CustomButton
              onClick={() => dispatch(close())}
              variant="contained"
              color="primary"
              className={classes.actionButton}
            >
              Save
            </CustomButton>
            <CustomButton
              onClick={() => dispatch(close())}
              variant="text"
              className={classes.actionButton}
            >
              Cancel
            </CustomButton>
          </Grid>
        </Grid>
      </Box>
    </Dialog>
  );
};

export { AddExpert };
