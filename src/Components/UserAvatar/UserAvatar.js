import { Avatar } from "@mui/material";
import "./UserAvatar.css";

function UserAvatar({ user }) {
  const userName = user?.name ? user.name : "";
  const userImg = user?.img ? user.img : "";

  return (
    <div className="UserAvatar">
      <Avatar alt={userName} src={userImg} />
    </div>
  );
}

export default UserAvatar;
