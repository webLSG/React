import { TEXTSTYLE } from "../../styles/textStyle";

export type LabelProps = {
  isChecked?: boolean;
  contents?: string;
};

const Label = ({ isChecked = false, contents = "내용없음" }: LabelProps) => {
  return (
    <span className={isChecked ? TEXTSTYLE.DONE : TEXTSTYLE.TODO}>
      {contents}
    </span>
  );
};

export default Label;
