import React, { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm({ onAddExpense }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("general");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description.trim() || !amount) return;
    const newExpense = {
      id: Date.now().toString(),
      description: description.trim(),
      amount: parseFloat(amount),
      category,
      date: new Date().toISOString()
    };
    onAddExpense(newExpense);
    setDescription("");
    setAmount("");
    setCategory("general");
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        placeholder="Amount (e.g. 12.50)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        inputMode="decimal"
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="general">General</option>
        <option value="food">Food</option>
        <option value="transport">Transport</option>
        <option value="services">Services</option>
        <option value="income">Income</option>
      </select>
      <button type="submit" disabled={!description || !amount}>
        Add
      </button>
    </form>
  );
}
