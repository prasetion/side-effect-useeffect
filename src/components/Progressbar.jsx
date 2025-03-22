import { useEffect, useState } from "react";

const Progressbar = ({ timer }) => {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return <progress value={remainingTime} max={timer} />;
};

export default Progressbar;
