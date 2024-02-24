import React from "react";
import "./AddNewExpens.css";
const AddNewExpense = () => {
  return (
    <div className="new-expense">
      <form>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input required type="text" />
          </div>
          <div className="new-expense__control">
            <label>Price</label>
            <input required type="number" min="0" step="0.25" />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input required type="date" min="2022-01-01" max="2026-12-31" />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit ">Cancel</button>
          <button>Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default AddNewExpense;
