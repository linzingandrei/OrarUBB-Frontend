import { FadeLoader } from "react-spinners";

export const LoadingComponent = () => {
  return (
    <div style={styles.container}>
      <FadeLoader color="#05406a" height={20} margin={15} width={7} />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    height: "100vh",
    width: "100%",
    paddingTop: "6rem",
  },
};
