import Friend from "./Friend";

export default function Friendlist({ friends, onSelection, selectedfriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelection={onSelection}
          selectedfriend={selectedfriend}
        />
      ))}
    </ul>
  );
}
