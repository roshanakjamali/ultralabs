import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

import { DilogTitle } from "./DialogTitle";
import { DialogProps } from "./dialoge.interface";

const CustomDialog = ({
  title,
  children,
  description,
  open: isOpen,
  handleClose,
}: DialogProps) => {
  return (
    <Dialog open={isOpen} onClose={handleClose} scroll="body" fullWidth>
      <DilogTitle title={title} subTitle={description} onClose={handleClose} />
      <DialogContent>
        <DialogContentText>{children}</DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export { CustomDialog as Dialog };
