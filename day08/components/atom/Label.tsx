import { ERROR } from "../../constants/errorMessage";
import { TEXTSTYLE } from "../../styles/textStyle";

type LabelProps = {
  isChecked?: boolean;
  contents?: string;
};

// checkedLabel 이름변경
const Label = ({
  isChecked = false,
  contents = ERROR.NOCONTENT,
}: LabelProps) => {
  return (
    <div className={isChecked ? TEXTSTYLE.DONE : TEXTSTYLE.TODO}>
      {contents}
    </div>
  );
};

export default Label;
