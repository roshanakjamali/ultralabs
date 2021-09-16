export interface DialogTitleProps {
  title: string;
  subTitle?: string;
  onClose: () => void;
}

export interface DialogProps {
  open: boolean;
  title: string;
  description: string;
  children: React.ReactNode;
  handleClose: () => void;
}
