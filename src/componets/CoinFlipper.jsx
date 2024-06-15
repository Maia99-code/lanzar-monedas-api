import { useEffect } from "react";

function tossCoin() {
  return Math.random() > 0.5 ? "heads" : "tails";
}

const CoinFlipper = ({ onResult }) => {
  useEffect(() => {
    let isActive = true;

    const fiveHeads = () => {
      return new Promise((resolve, reject) => {
        let headsCount = 0;
        let attempts = 0;
        while (headsCount < 5) {
          if (!isActive) return; // Detener si no está activo
          attempts++;
          let result = tossCoin();
          console.log(`${result} was flipped`);
          if (result === "heads") {
            headsCount++;
          } else {
            headsCount = 0;
          }
          if (attempts > 100) {
            reject("Too many attempts, more than 100.");
            return;
          }
        }
        resolve(`It took ${attempts} tries to flip five "heads"`);
      });
    };

    fiveHeads()
      .then((result) => isActive && onResult({ result }))
      .catch((error) => isActive && onResult({ error }));

    return () => {
      isActive = false; // Cleanup para detener el proceso
    };
  }, [onResult]);

  return null; // No renderiza nada
};

export default CoinFlipper;
