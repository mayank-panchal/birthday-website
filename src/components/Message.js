import React from "react";

const Message = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>A Special Note for You</h2>
      <p style={styles.message}>
        Dear Vaishuu, The light to my darkness. My lovely sunshine. Me khuppp khushh aahe yaarrr ki Devane tula create kelaa ekdamm perfectly,
        ani mala bola ki he ghe tuzhi queen ani kdhi nirash noko karus hila. Kahi Kahi divas tough hote pn tu te overcome kelas. Like true warrior.
        Tuzhyasobat bhale he changlya goshti nahi ghadlya pn tu kdhi vait marga nahi vaparlas jasaki tuzha kindness kdhi kami hou nahi dilas. Tu daarveli kindness chya path varch rahtes. 
        He ability tuzhi vaishu tula saglyanpasna vegla karte, tula standout karavta. Bgh vaishu, tu swatasathi che hopes down kdhich noko karus.
        You will someday surpass the Greats of cricket. Ani jyat tula avad aahe te honar. Sagla honar nit vaishu. Happiest Birthdayy among all the difficulties you faced.
        I am proud of you my dear. I will always be there for you. My little girl😚. I love you😚.
      </p>
      <p style={styles.signature}>Love, Mayuuu</p>
    </div>
  );
};

const styles = {
  container: { padding: "20px", textAlign: "center", background: "#f9f5f1" },
  title: { fontSize: "24px", marginBottom: "20px" },
  message: { fontSize: "18px", lineHeight: "1.6", marginBottom: "20px" },
  signature: { fontSize: "18px", fontStyle: "italic" },
};

export default Message;
