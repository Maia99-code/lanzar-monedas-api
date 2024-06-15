import React, { useState } from "react";
import CoinFlipper from "./CoinFlipper";

const FiveHeads = () => {
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleResult = ({ result, error }) => {
    if (result) {
      setResult(result);
    } else if (error) {
      setError(error);
    }
    setCompleted(true);
  };

  return (
    <div>
      <h1>Five Heads Challenge</h1>
      {!completed && <p>Flipping the coin...</p>}
      {completed && result && <p>{result}</p>}
      {completed && error && <p>{error}</p>}
      {!completed && <CoinFlipper onResult={handleResult} />}
    </div>
  );
};

export default FiveHeads;
