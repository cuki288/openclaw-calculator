import { useState } from "react";
import "./Calculator.css";

export default function Calculator() {
  const [display, setDisplay] = useState("0");
  const [firstValue, setFirstValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

  const inputDigit = (digit) => {
    if (waitingForSecondOperand) {
      setDisplay(String(digit));
      setWaitingForSecondOperand(false);
    } else {
      setDisplay(display === "0" ? String(digit) : display + digit);
    }
  };

  const inputDot = () => {
    if (waitingForSecondOperand) {
      setDisplay("0.");
      setWaitingForSecondOperand(false);
    } else if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  };

  const clear = () => {
    setDisplay("0");
    setFirstValue(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  const toggleSign = () => {
    setDisplay(String(-Number(display)));
  };

  const inputPercent = () => {
    setDisplay(String(Number(display) / 100));
  };

  const performOperation = (nextOperator) => {
    const currentValue = Number(display);
    if (firstValue === null) {
      setFirstValue(currentValue);
    } else if (operator) {
      const newValue = compute(firstValue, currentValue, operator);
      setFirstValue(newValue);
      setDisplay(String(newValue));
    }

    setWaitingForSecondOperand(true);
    setOperator(nextOperator);
  };

  const compute = (first, second, op) => {
    switch (op) {
      case "+":
        return first + second;
      case "-":
        return first - second;
      case "*":
        return first * second;
      case "/":
        return second !== 0 ? first / second : NaN;
      default:
        return second;
    }
  };

  const operations = [
    { key: "AC", label: "AC", action: clear },
    { key: "+/-", label: "+/-", action: toggleSign },
    { key: "%", label: "%", action: inputPercent },
    { key: "÷", label: "÷", action: (val) => performOperation("/") },
    { key: "7", label: 7, action: (v) => inputDigit(v) },
    { key: "8", label: 8, action: (v) => inputDigit(v) },
    { key: "9", label: 9, action: (v) => inputDigit(v) },
    { key: "×", label: "×", action: (val) => performOperation("*") },
    { key: "4", label: 4, action: (v) => inputDigit(v) },
    { key: "5", label: 5, action: (v) => inputDigit(v) },
    { key: "6", label: 6, action: (v) => inputDigit(v) },
    { key: "-", label: "-", action: (val) => performOperation("-") },
    { key: "1", label: 1, action: (v) => inputDigit(v) },
    { key: "2", label: 2, action: (v) => inputDigit(v) },
    { key: "3", label: 3, action: (v) => inputDigit(v) },
    { key: "+", label: "+", action: (val) => performOperation("+") },
    { key: "0", label: 0, action: (v) => inputDigit(v) },
    { key: ".", label: ".", action: inputDot },
    { key: "=", label: "=", action: () => {} },
  ];

  return (
    <div className="calculator">
      <form className="calculator-grid" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          inputMode="numeric"
          value={display}
          className="calculator-display"
          readOnly
        />
        {operations.map((op, idx) => (
          <button
            key={idx}
            type="button"
            className={`calculator-btn ${
              op.key === "=" ? "equals-btn" : ""
            }${["÷", "×", "-", "+"].includes(op.key) ? "operator-btn" : ""}`}
            onClick={() => op.action(op.key !== "=" && !isNaN(op.label) ? op.label : op.key)}
          >
            {op.label}
          </button>
        ))}
      </form>
    </div>
  );
}
