import { useState } from "react";

function FirstQuiz() {
  const [buttonColor, setButtonColor] = useState("red");
  const [disabled, setDisabled] = useState(false);
  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  return (
    <div>
      <button
        style={{ backgroundColor: buttonColor }}
        disabled={disabled}
        onClick={() => setButtonColor(newButtonColor)}
      >
        Change to {newButtonColor}
      </button>
      <input type="checkbox" onChange={(e) => setDisabled(e.target.checked)} />
    </div>
  );
}

export default FirstQuiz;
