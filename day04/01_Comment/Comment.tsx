import CommentDate from "./CommentDate";
import Nickname from "./Nickname";
import ProfileImage from "./ProfileImage";
import Reply from "./Reply";

const Comment = () => {
  return (
    <div className="bg-slate-700 w-80 h-20 flex gap-3 p-3">
      <div className="flex-none flex items-center">
        <ProfileImage />
      </div>
      <div className="w-full flex flex-col flex-initial">
        <div className="w-full flex flex-none justify-between">
          <Nickname />
          <CommentDate />
        </div>
        <div className="flex-1">
          <Reply />
        </div>
      </div>
    </div>
  );
};

export default Comment;
