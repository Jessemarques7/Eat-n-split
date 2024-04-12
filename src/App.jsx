import { useState } from "react";
import Friendlist from "./components/FriendList";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [openAddFriend, setOpenAddFriend] = useState(false);
  const [friends, Setfriends] = useState(initialFriends);
  const [selectedfriend, SetSelectedFriend] = useState(null);

  function handleAddFriends(friend) {
    Setfriends([...friends, friend]);
    setOpenAddFriend(!openAddFriend);
  }

  function handleopenAddFriend() {
    setOpenAddFriend((show) => !show);
  }

  function handleSelection(friend) {
    SetSelectedFriend((selected) => (selected?.id ? null : friend));

    setOpenAddFriend(false);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <Friendlist
          friends={friends}
          onSelection={handleSelection}
          selectedfriend={selectedfriend}
        />

        {openAddFriend && <FormAddFriend addFriends={handleAddFriends} />}

        <Button onOpeAddFriend={handleopenAddFriend}>
          {openAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedfriend && <FormSplitBill selectedfriend={selectedfriend} />}
    </div>
  );
}

export function Button({ children, onOpeAddFriend }) {
  return (
    <button className="button" onClick={onOpeAddFriend}>
      {children}
    </button>
  );
}
