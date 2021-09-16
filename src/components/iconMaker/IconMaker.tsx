import SvgIcon from "@material-ui/core/SvgIcon";
import {
  SVGProps,
  FunctionComponent,
} from "react-transition-group/node_modules/@types/react";

interface IconMakerProps {
  icon: FunctionComponent<
    SVGProps<SVGSVGElement> & { title?: string | undefined }
  >;
  viewBox?: string;
}

const IconMaker = ({ icon: Icon, viewBox }: IconMakerProps) => {
  return (
    <SvgIcon viewBox={viewBox}>
      <Icon />
    </SvgIcon>
  );
};

export default IconMaker;
