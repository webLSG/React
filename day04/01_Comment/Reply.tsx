export type ReplyProps = {
  reply?: string;
};

const Reply = ({ reply = "No Comment" }: ReplyProps) => {
  return <span className="break-words font-normal text-gray-300">{reply}</span>;
};

export default Reply;
