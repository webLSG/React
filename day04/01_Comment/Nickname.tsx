export type NicknameProps = {
  name?: string;
};

const Nickname = ({ name = "슬픔이" }: NicknameProps) => {
  return <span className="font-extrabold text-white">{name}</span>;
};

export default Nickname;
