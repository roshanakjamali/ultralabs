import { useEffect, useState, useCallback } from "react";
import { useAppDispatch } from "../../store/hooks";
import { Link } from "react-router-dom";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

import Table from "@material-ui/core/Table";

import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableCell, { TableCellProps } from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";

import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";

import Avatar from "@material-ui/core/Avatar";

import {
  IconTrash,
  IconFilter,
  IconFavorit,
  IconSortReset,
  IconFavoritFilled,
} from "../../helpers/icon";
import IconMaker from "../../components/iconMaker";

import Error from "../../components/errorMessage";
import { CustomButton } from "../../components/customButton";
import { SquareIconButton } from "../../components/squareIconButton";

import { ExpertProps } from "../../services/entities";
import { getExperts, deleteExpert, toggleFavExpert } from "../../services";

import { AddExpert } from "./add";
import { open } from "./add/add.dialogSlice";

import { useStyles } from "./list.style";

const header = [
  {
    label: "First name",
    sortable: true,
    align: "left",
  },
  {
    label: "Last name",
    sortable: true,
    align: "left",
  },
  {
    label: "Job title",
    sortable: true,
    align: "left",
  },
  {
    label: "Location",
    sortable: true,
    align: "left",
  },
  {
    label: "Employment type",
    sortable: true,
    align: "left",
  },
  {
    label: "Hourly rate (USD)",
    sortable: true,
    align: "right",
  },
  {
    label: "Actions",
    sortable: false,
    align: "right",
  },
];

const List = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const [experts, setExperts] = useState<ExpertProps[]>([]);
  const [error, setError] = useState<string>();

  const getExpertList = useCallback(async () => {
    const response = await getExperts();
    if (typeof response === "object") {
      setExperts(response);
    } else {
      setError(`(error: ${response ? response : "Not Found"})`);
    }
  }, []);

  const updateList = useCallback(
    (response: any) => {
      if (typeof response === "object") {
        getExpertList();
      }
    },
    [getExpertList]
  );

  const onDeleteExpert = useCallback(
    async (id: number) => {
      const response = await deleteExpert(id);
      updateList(response);
    },
    [updateList]
  );

  const onToggleFav = useCallback(
    async (expert: ExpertProps) => {
      const response = await toggleFavExpert({
        ...expert,
        isFavorit: !expert.isFavorit,
      });
      updateList(response);
    },
    [updateList]
  );

  useEffect(() => {
    getExpertList();
  }, [getExpertList]);

  if (error) {
    return <Error message={error} />;
  }

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
                  {header.map((head) => (
                    <TableCell align={head.align as TableCellProps["align"]}>
                      {head.label}
                      {head.sortable && (
                        <IconButton
                          color="default"
                          aria-label="filter"
                          size="small"
                        >
                          <IconMaker
                            icon={IconSortReset}
                            viewBox={"0 0 16 16"}
                          />
                        </IconButton>
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {experts.map((expert) => (
                  <TableRow key={expert.id}>
                    <TableCell scope="row">
                      <Box className={classes.box}>
                        <Avatar
                          alt="Courtney"
                          src={expert.avatar}
                          className={classes.avatar}
                          component={Link}
                          to={`/profile/${expert.id}`}
                        />
                        <Typography
                          variant="body1"
                          display="inline"
                          component={Link}
                          to={`/profile/${expert.id}`}
                        >
                          {expert.firstName}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>{expert.lastName}</TableCell>
                    <TableCell>{expert.jobTitle}</TableCell>
                    <TableCell>{expert.location}</TableCell>
                    <TableCell>{expert.employmentType}</TableCell>
                    <TableCell align="right">{expert.hourlyRate}</TableCell>
                    <TableCell align="right">
                      <IconButton
                        color="default"
                        aria-label="favorite"
                        onClick={() => onToggleFav(expert)}
                      >
                        <IconMaker
                          icon={
                            expert.isFavorit ? IconFavoritFilled : IconFavorit
                          }
                          viewBox={"0 0 18 17"}
                        />
                      </IconButton>

                      <IconButton
                        color="default"
                        aria-label="trash"
                        onClick={() => onDeleteExpert(expert.id)}
                      >
                        <IconMaker icon={IconTrash} viewBox={"0 0 18 19"} />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomButton
            variant="contained"
            color="primary"
            startIcon={<AddCircleRoundedIcon />}
            onClick={() => dispatch(open())}
          >
            Add a new item
          </CustomButton>
          <AddExpert updateList={(response) => updateList(response)} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1" align="right">
            Items per page: 10
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default List;
