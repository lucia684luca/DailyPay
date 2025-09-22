import React from "react";
import "./ExpenseList.css";

export default function ExpenseList({ expenses = [], onDelete }) {
  if (!expenses.length) {
    return <div className="expense-list"><div className="empty">No entries yet — add your first transaction.</div></div>;
  }

  return (
    <div className="expense-list">
      {expenses.map((exp) => (
        <div className="expense-item" key={exp.id}>
          <div className="expense-left">
            <div>{exp.description}</div>
            <div style={{ fontSize: 12, color: "#666" }}>
              {new Date(exp.date).toLocaleString()} • {exp.category}
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div className="expense-amount">{exp.amount.toFixed(2)}</div>
            <button
              className="delete-btn"
              onClick={() => onDelete(exp.id)}
              aria-label={`Delete ${exp.description}`}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
