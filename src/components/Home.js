import React from "react";

const Home = () => {
  return (
    <div style={styles.container}>
      {/* Banner with Background Image */}
      <div style={styles.banner}>
        <h1 style={styles.title}>Happy Birthday, VAISHUUU!!!</h1>
        <p style={styles.subtitle}>You make life brighter and more beautiful every day!</p>
      </div>

      {/* Quote Section */}
      <div style={styles.quoteSection}>
        <p style={styles.quote}>
          "Sending you smiles for every moment of your special day…Have a wonderful time and a very veryyyy Happyyy Birthdayyy!"  
        </p>
        <p style={styles.author}>– John Lennon</p>
      </div>

      {/* Animated Balloons */}
      <div style={styles.balloons}>
        🎈 🎉 🎁 🎂 🎈
      </div>

      {/* Call-to-Action Buttons */}
      <div style={styles.buttons}>
        <a href="/gallery" style={styles.button}>
          View Memories
        </a>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
    background: "#f8f9fa",
    minHeight: "100vh",
  },
  banner: {
    backgroundImage: "url(../assets/banner.jpg)", // Replace with your image
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
    padding: "50px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  title: {
    fontSize: "48px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "20px",
    marginBottom: "20px",
  },
  quoteSection: {
    margin: "40px 0",
    fontStyle: "italic",
    color: "#6c757d",
  },
  quote: {
    fontSize: "18px",
  },
  author: {
    marginTop: "10px",
    fontSize: "16px",
  },
  balloons: {
    fontSize: "40px",
    margin: "20px 0",
  },
  buttons: {
    marginTop: "30px",
  },
  button: {
    display: "inline-block",
    margin: "10px",
    padding: "10px 20px",
    background: "#ffc107",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: "bold",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
};

export default Home;
