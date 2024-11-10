import Layout from "../../components/layout/Layout";
import "../LandingPage/LandingPage.scss";
import Button from "../../components/button/Button";

const InformatiiSaliPage = () => {
  return (
    <Layout>
      <div className="main-content">
        <h2 className="title">Informatii sali</h2>
        <p className="subtitle">Anul 2024-2025, Semestrul I</p>
        <div className="buttons-container">
          <Button
            color="primary"
            label="Orarul Salilor"
            className="medium rounded"
          />
          <Button
            color="primary"
            label="Legenda Salilor"
            className="medium rounded"
          />
          <Button
            color="primary"
            label="Ocuparea Salilor"
            className="medium rounded"
          />
        </div>
      </div>
    </Layout>
  );
};

export default InformatiiSaliPage;
