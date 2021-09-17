import { useEffect, useCallback, useState } from "react";
import { useHistory, useParams } from "react-router";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import { IconFavorit, IconFavoritFilled } from "../../../helpers/icon";
import IconMaker from "../../../components/iconMaker/IconMaker";
import { LabelValuePair } from "../../../components/labelValuePair";

import { useStyles } from "./profile.style";
import { getExpert, toggleFavExpert } from "../../../services/services";
import { ExpertProps } from "../../../services/entities";
import Error from "../../../components/errorMessage/Error";

const Profile = () => {
  const classes = useStyles();
  const history = useHistory();
  const { id } = useParams<{ id: string }>();

  const [expert, setExpert] = useState<ExpertProps>();
  const [error, setError] = useState<string>();

  const deleteSkill = () => console.log("delete");

  const getExpertUser = useCallback(async () => {
    const response = await getExpert(id);
    if (typeof response === "object") {
      setExpert(response);
    } else {
      setError(`(error: ${response ? response : "Not Found"})`);
    }
  }, [id]);

  const onToggleFav = useCallback(async (expert: ExpertProps) => {
    await toggleFavExpert({
      ...expert,
      isFavorit: !expert.isFavorit,
    });

    setExpert({ ...expert, isFavorit: !expert.isFavorit });
  }, []);

  useEffect(() => {
    getExpertUser();
    return () => setExpert(undefined);
  }, [getExpertUser]);

  if (!expert && !error) {
    return (
      <Typography variant="h6" color="primary" align="center">
        Loading ...
      </Typography>
    );
  }

  if (!expert && error) {
    return <Error message={error} />;
  }

  return (
    <>
      <Box className={classes.banner}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}></Grid>
          <Grid item xs={12} sm={9} container justifyContent="space-between">
            <Button
              className={classes.button}
              startIcon={<ChevronLeftIcon />}
              onClick={() => history.goBack()}
            >
              Back
            </Button>
            <Button className={classes.button} startIcon={<PhotoCameraIcon />}>
              Edit cover photo
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
            <Box className={classes.profile}>
              <Avatar
                alt={expert!.firstName}
                src={expert!.avatar}
                className={classes.avatar}
              />
              <Typography variant="h2" gutterBottom>
                {expert!.firstName} {expert!.lastName}
              </Typography>
              <Typography variant="body1">{expert!.jobTitle}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Paper className={classes.paper}>
              <Box className={classes.cardHeader}>
                <Typography variant="h2" display="inline">
                  Basic info
                </Typography>
                <Button
                  className={classes.button}
                  onClick={() => onToggleFav(expert!)}
                  startIcon={
                    <IconMaker
                      icon={expert?.isFavorit ? IconFavoritFilled : IconFavorit}
                      viewBox={"0 0 18 17"}
                    />
                  }
                >
                  {expert?.isFavorit
                    ? "Remove From favorites"
                    : "Add to favorites"}
                </Button>
              </Box>
              <Box>
                <Grid item container spacing={3}>
                  <Grid item container>
                    <Grid item xs={12} sm={3}>
                      <LabelValuePair
                        label="Location"
                        value={expert!.location}
                      />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <LabelValuePair label="Level" value="Senior" />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <LabelValuePair
                        label="Preferred"
                        value={expert!.employmentType}
                      />
                    </Grid>
                  </Grid>
                  <Grid item container>
                    <Grid item xs={12} sm={3}>
                      <LabelValuePair
                        label="Preferred minimum time"
                        value="e.g. 5 hours"
                      />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <LabelValuePair
                        label="Hourly rate"
                        value={`$ ${expert!.hourlyRate}`}
                      />
                    </Grid>
                  </Grid>
                  <Grid item container>
                    <LabelValuePair
                      label="About"
                      value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    amet lacus posuere odio nec sed non. Eget senectus amet sit
                    sem nec in. Gravida egestas nulla condimentum venenatis
                    massa vitae parturient neque tempor. Hac morbi malesuada
                    aliquet libero sit elit pellentesque tortor libero. Et dis
                    pellentesque turpis amet, dictumst dui mi. At elit sed netus
                    congue cras senectus et congue feugiat. Dignissim semper
                    blandit amet nec integer facilisis. Cursus vulputate tempor,
                    nec bibendum aliquet massa. Ornare lacinia pellentesque
                    ultrices varius ligula. Penatibus faucibus nulla adipiscing
                    ac aliquet fames tortor. Sed pellentesque habitasse morbi
                    feugiat ornare amet. Lectus arcu, velit at egestas ut dui
                    est amet, eget. Vestibulum vivamus morbi viverra rutrum amet
                    nisl non risus. Massa."
                    />
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}></Grid>
          <Grid item xs={12} sm={9} container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h2">Skills</Typography>
            </Grid>
            <Grid item xs={12}>
              {["UI/UX", "Testing", "Teamwork", "Work breakdown"].map(
                (skill, index) => (
                  <Chip
                    key={index}
                    label={skill}
                    color="primary"
                    variant="outlined"
                    onDelete={deleteSkill}
                  />
                )
              )}
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.footer}>
        <Grid container>
          <Grid item xs={12} sm={6} container alignItems="center">
            {Array(4)
              .fill("Lorem Ipsum")
              .map((link, index) => (
                <Button key={index} color={"secondary"}>
                  {link}
                </Button>
              ))}
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h3" display="block" align="right">
              Contact us
            </Typography>
            <Typography variant="body1" color="secondary" align="right">
              © 2020. ProNow. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Profile;
