import { ERROR } from "../../constants/errorMessage";

type TitleProps = {
  contents?: string;
};

// PureLable로 이름변경
const Title = ({ contents = ERROR.NOCONTENT }: TitleProps) => {
  return <div>{contents}</div>;
};

export default Title;
