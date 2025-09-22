import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Receipt from "./components/Receipt";

function App() {
  const [expenses, setExpenses] = useState(() => {
    try {
      const raw = localStorage.getItem("dailyPayExpenses");
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("dailyPayExpenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses((prev) => [expense, ...prev]);
  };

  const deleteExpense = (id) => {
    setExpenses((prev) => prev.filter((e) => e.id !== id));
  };

  return (
    <div className="app">
      <Header title="DailyPay" subtitle="Track daily income & expenses" />
      <div className="container">
        <div className="controls">
          <ExpenseForm onAddExpense={addExpense} />
          <Receipt expenses={expenses} />
        </div>
        <ExpenseList expenses={expenses} onDelete={deleteExpense} />
        <div className="footer">
          Built with ❤️ — Local data stored in your browser. Contributions welcome!
        </div>
      </div>
    </div>
  );
}

export default App;
