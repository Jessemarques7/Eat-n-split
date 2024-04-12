import { useState } from "react";
import { Button } from "../App";

export default function FormSplitBill({ selectedfriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoISPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !paidByUser) return;
    onSplitBill(whoISPaying === "user" ? paidByFriend : -paidByUser);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split the bill with {selectedfriend.name}</h2>

      <label>💰 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>💰 Your expense</label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      />

      <label>💰 {selectedfriend.name}'s expense</label>
      <input type="text" disabled value={paidByFriend} />

      <label>💰 Who is paying the bill?</label>
      <select
        value={whoISPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="you">You</option>
        <option value="friend">{selectedfriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
