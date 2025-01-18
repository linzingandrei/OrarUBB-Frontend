import noDataImage from "../assets/image.png";

export const NoDataComponent = () => {
  return (
    <div style={styles.container}>
      <img src={noDataImage} alt="No data available" style={styles.image} />
      <p style={styles.text}>No data available</p>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start", // Align items to the top
    alignItems: "center",
    height: "100vh",
    width: "100%",
    textAlign: "center",
    paddingTop: "15%", // Adjust this value to move it higher or lower
  },
  image: {
    width: "15%", // Set a smaller image width
    height: "auto", // Maintain aspect ratio
    marginBottom: "20px",
  },
  text: {
    fontSize: "18px",
    color: "#1A4977",
  },
};
