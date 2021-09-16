import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import Avatar from "@material-ui/core/Avatar";

import {
  IconFavorit,
  IconFilter,
  IconSortReset,
  IconTrash,
} from "../../helpers/icon";
import IconMaker from "../../components/iconMaker";

import { useStyles } from "./list.style";
import { SquareIconButton } from "../../components/squareIconButton";
import { SampleAvatar } from "../../helpers/image";
import { Box } from "@material-ui/core";

const List = (props: any) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <SquareIconButton color="primary" aria-label="filter">
            <IconMaker icon={IconFilter} viewBox={"0 0 18 12"} />
          </SquareIconButton>
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
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    First name{" "}
                    <IconButton
                      color="default"
                      aria-label="filter"
                      size="small"
                    >
                      <IconMaker icon={IconSortReset} viewBox={"0 0 16 16"} />
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    Last name
                    <IconButton
                      color="default"
                      aria-label="filter"
                      size="small"
                    >
                      <IconMaker icon={IconSortReset} viewBox={"0 0 16 16"} />
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    Job title
                    <IconButton
                      color="default"
                      aria-label="filter"
                      size="small"
                    >
                      <IconMaker icon={IconSortReset} viewBox={"0 0 16 16"} />
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    Location
                    <IconButton
                      color="default"
                      aria-label="filter"
                      size="small"
                    >
                      <IconMaker icon={IconSortReset} viewBox={"0 0 16 16"} />
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    Employment type
                    <IconButton
                      color="default"
                      aria-label="filter"
                      size="small"
                    >
                      <IconMaker icon={IconSortReset} viewBox={"0 0 16 16"} />
                    </IconButton>
                  </TableCell>
                  <TableCell align="right">
                    Hourly rate (USD)
                    <IconButton
                      color="default"
                      aria-label="filter"
                      size="small"
                    >
                      <IconMaker icon={IconSortReset} viewBox={"0 0 16 16"} />
                    </IconButton>
                  </TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <Box className={classes.box}>
                      <Avatar
                        alt="Courtney"
                        src={SampleAvatar}
                        className={classes.avatar}
                      />
                      <Typography
                        variant="body1"
                        display="inline"
                        component="span"
                      >
                        Courtney
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>Wehner</TableCell>
                  <TableCell>Product Group Developer</TableCell>
                  <TableCell>Kent, Utah</TableCell>
                  <TableCell>Project based</TableCell>
                  <TableCell align="right">199</TableCell>
                  <TableCell align="right">
                    <IconButton color="default" aria-label="favorite">
                      <IconMaker icon={IconFavorit} viewBox={"0 0 18 17"} />
                    </IconButton>

                    <IconButton color="default" aria-label="trash">
                      <IconMaker icon={IconTrash} viewBox={"0 0 18 19"} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
};

export default List;
