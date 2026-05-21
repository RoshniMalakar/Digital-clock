import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // cleanup
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.time}>{time.toLocaleTimeString()}</h1>
      <p style={styles.date}>{time.toLocaleDateString()}</p>
    </div>
  );
};
const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px",
    fontFamily: "Arial",
  },
  time: {
    fontSize: "50px",
    color: "#333",
  },
  date: {
    fontSize: "20px",
    color: "#777",
  },
};

export default Clock;
