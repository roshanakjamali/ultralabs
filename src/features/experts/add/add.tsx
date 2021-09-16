import { useState, ChangeEvent, SyntheticEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";

import { Dialog } from "../../../components/dialog";
import { CustomButton } from "../../../components/customButton";

import { useStyles } from "./add.style";
import { close, dialogState } from "./add.dialogSlice";
import { ExpertProps } from "../../../services/entities";
import { Typography } from "@material-ui/core";

import { AddProps } from "./add.interface";
import { addExpert } from "../../../services";

const AddExpert = ({ updateList }: AddProps) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const open = useAppSelector(dialogState);
  const [expert, setExpert] = useState<Partial<ExpertProps>>({});
  const [error, setError] = useState(false);

  const onChanageHandler =
    (name: keyof ExpertProps) =>
    (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setError(false);
      setExpert({ ...expert, [name]: event.target.value });
    };

  const submitForm = async (event: SyntheticEvent) => {
    event.preventDefault();

    if (Object.keys(expert).length !== 6) {
      setError(true);
      return;
    }

    for (let val in expert) {
      if (!expert[val as keyof ExpertProps]!) {
        setError(true);
        return;
      }
    }

    const response = await addExpert(expert as ExpertProps);
    updateList(response);
    dispatch(close());
  };

  return (
    <Dialog
      open={open}
      title="Add a new item"
      description="Complete your profile below."
      handleClose={() => dispatch(close())}
    >
      <Box>
        <form onSubmit={submitForm}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <InputLabel htmlFor="firstName">First Name</InputLabel>
              <TextField
                fullWidth
                id="firstName"
                variant="outlined"
                placeholder="e.g. Street Address, City, State"
                onChange={onChanageHandler("firstName")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel htmlFor="lastName">Last Name</InputLabel>
              <TextField
                fullWidth
                id="lastName"
                placeholder="e.g.5+ years"
                variant="outlined"
                onChange={onChanageHandler("lastName")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel htmlFor="jobTitle">Job Title</InputLabel>
              <TextField
                fullWidth
                id="jobTitle"
                placeholder="Select"
                variant="outlined"
                onChange={onChanageHandler("jobTitle")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel htmlFor="location">Location</InputLabel>
              <TextField
                fullWidth
                id="location"
                placeholder="e.g.5+ years"
                variant="outlined"
                onChange={onChanageHandler("location")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel htmlFor="employmentType">Employment type</InputLabel>
              <TextField
                fullWidth
                id="employmentType"
                placeholder="Select"
                variant="outlined"
                onChange={onChanageHandler("employmentType")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel htmlFor="hourlyRate">Hourly rate</InputLabel>
              <TextField
                fullWidth
                id="hourlyRate"
                placeholder="e.g.5+ years"
                variant="outlined"
                onChange={onChanageHandler("hourlyRate")}
              />
            </Grid>
            {error && (
              <Grid xs={12}>
                <Box ml={1}>
                  <Typography variant="body2" color="error" display="block">
                    Please Fill All Fields!
                  </Typography>
                </Box>
              </Grid>
            )}
            <Grid>
              <CustomButton
                variant="contained"
                color="primary"
                className={classes.actionButton}
                type="submit"
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
        </form>
      </Box>
    </Dialog>
  );
};

export { AddExpert };
