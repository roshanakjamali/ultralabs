import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DialogTitle from "@material-ui/core/DialogTitle";

import CloseIcon from "@material-ui/icons/Close";

import { DialogTitleProps } from "./dialoge.interface";

import { useStyles } from "./dialog.style";

const CustomDialogTitle = (props: DialogTitleProps) => {
  const { onClose, title, subTitle } = props;
  const classes = useStyles();

  return (
    <DialogTitle disableTypography>
      <Box className={classes.box}>
        <Typography variant="h4" display="inline">
          {title}
        </Typography>
        {onClose ? (
          <IconButton aria-label="close" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </Box>

      <Typography variant="body1">{subTitle}</Typography>
    </DialogTitle>
  );
};

export { CustomDialogTitle as DilogTitle };
