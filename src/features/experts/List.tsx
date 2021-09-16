import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

import { IconFilter } from "../../helpers/icon";
import IconMaker from "../../components/iconMaker";

import { useStyles } from "./list.style";

const List = (props: any) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <IconButton color="primary" aria-label="filter">
            <IconMaker icon={IconFilter} viewBox={"0 0 18 12"} />
          </IconButton>
          <Typography variant="h6" display="inline" className={classes.label}>
            Expert list
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" align="right">
            Columns
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1">Data goes here</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default List;
