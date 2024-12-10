import FriendListItem from "./FriendListItem";
import friends from "/src/friends.json";

const FriendList = ({ friends }) => {
  return (
    <ul>
      <li>
        <FriendListItem />
      </li>
    </ul>
  );
};

export default FriendList;
