import React from "react";

const Gallery = () => {
  const images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"]; // Replace with your images
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Our Beautiful Memories</h2>
      <div style={styles.gallery}>
        {images.map((img, index) => (
          <img
            key={index}
            // Use the correct absolute path for images in the public folder
            src={`/assets/${img}`}
            alt={`Memory ${index + 1}`}
            style={styles.image}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: { textAlign: "center", padding: "20px", background: "#f9f5f1" },
  title: { fontSize: "24px", marginBottom: "20px" },
  gallery: { display: "flex", justifyContent: "center", gap: "10px" },
  image: { width: "130px", height: "160px", borderRadius: "10px" },
};

export default Gallery;
