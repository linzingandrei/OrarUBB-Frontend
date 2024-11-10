import Layout from "../../components/layout/Layout";
import "./LandingPage.scss";
import Button from "../../components/button/Button";

const LandingPage = () => {
  return (
    <Layout>
      <div className="main-content">
        <h2 className="title">Orar Facultatea de Matematica si Informatica</h2>
        <p className="subtitle">Anul 2024-2025, Semestrul I</p>
        <div className="buttons-container">
          <Button
            color="primary"
            label="Orarul Studentilor"
            className="medium rounded"
          />
          <Button
            color="primary"
            label="Orarul Cadrelor Didactice"
            className="medium rounded"
          />
          <Button
            color="primary"
            label="Orarul Disciplinelor"
            className="medium rounded"
          />
          <Button
            color="primary"
            label="Informatii sali"
            className="medium rounded"
          />
        </div>
        <div className="footer">
          <p>
            Orar curs facultativ transversal Fundamente de educatie umanista.
            Teoria argumentarii - MIERCURI 18-20, online, MSTeams.
          </p>
          <p>Mai multe informatii gasiti aici.</p>
          <p>
            Orarul de Limba spaniola si Limba italiana din cadrul
            Departamentului de Limbi Străine Specializate.
          </p>
          <p>Orar Educatie Fizica, sem. 1, an univ. 2024-2025.</p>
        </div>
      </div>
    </Layout>
  );
};

export default LandingPage;
