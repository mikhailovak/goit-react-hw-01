import Profile from "./components/Profile/Profile";
import userData from "./userData.json";
import friends from "./friends.json";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactions from "./transactions.json";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList
        friends={friends}
        avatar={friends.avatar}
        name={friends.name}
        isOnline={friends.isOnline}
      />
      <TransactionHistory
        transactions={transactions}
        id={transactions.id}
        type={transactions.type}
        amount={transactions.amount}
        currency={transactions.currency}
      />
    </>
  );
};

export default App;
