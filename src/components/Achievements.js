import React from "react";

const Achievements = () => {
  const achievements = [
    "🏏 Best Chinaman Bowler In the MCA",
    "🏆 Bestesttt Female Playerrrr",
    "🌟 Team kaaa sitaraaaaa",
    "🦋 The Prettiest",
    "😎 Boldest and The one with a swaagggg",
    "😁 The Championnnn",
    "🔮 The Future Of Women's Cricketing worldddd"
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Your Incredible Achievements</h2>
      <ul style={styles.list}>
        {achievements.map((item, index) => (
          <li key={index} style={styles.item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: { padding: "20px", background: "#f9f5f1", textAlign: "center" },
  title: { fontSize: "24px", marginBottom: "20px" },
  list: { listStyle: "none", padding: "0" },
  item: { fontSize: "18px", margin: "10px 0" },
};

export default Achievements;
