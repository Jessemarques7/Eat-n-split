import { Button } from "../App";

export default function FormSplitBill({ selectedfriend }) {
  return (
    <form className="form-split-bill">
      <h2>Split the bill with {selectedfriend.name}</h2>

      <label>💰 Bill value</label>
      <input type="text" />

      <label>💰 Your expense</label>
      <input type="text" />

      <label>💰 {selectedfriend.name}'s expense</label>
      <input type="text" disabled />

      <label>💰 Who is paying the bill?</label>
      <select name="" id="">
        <option value="you">You</option>
        <option value="friend">{selectedfriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
