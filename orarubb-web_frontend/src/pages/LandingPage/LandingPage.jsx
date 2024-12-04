import Layout from "../../components/layout/Layout";
import "./LandingPage.scss";
import Button from "../../components/button/Button";

const LandingPage = () => {
  return (
    <Layout>
        <div className="background-wrapper">
            <div className="main-content">
                <h2 className="title">Orar Facultatea de Matematică și Informatică</h2>
                <p className="subtitle">Anul 2024-2025, Semestrul II</p>
                <div className="buttons-container">
                    <Button
                        color="primary"
                        label="Orarul Studenților"
                        className="medium rounded"
                        to="/study-programs"
                    />
                    <Button
                        color="primary"
                        label="Orarul Cadrelor Didactice"
                        className="medium rounded"
                        to="/teachers"
                    />
                    <Button
                        color="primary"
                        label="Orarul Disciplinelor"
                        className="medium rounded"
                        to="/courses"
                    />
                    <Button
                        color="primary"
                        label="Informații Săli"
                        className="medium rounded"
                        to="/informatii-sali"
                    />

                    {/* Line Separator */}
                    <div className="line-separator"></div>

                    <Button
                        color="primary"
                        label="Orarul de Limba spaniolă și Limba italiană din cadrul
                        Departamentului de Limbi Străine Specializate."
                        className="medium rounded"
                        to="/"
                    />

                    <Button
                        color="primary"
                        label="Orar Educație Fizică, sem. 2, an univ. 2024-2025."
                        className="medium rounded"
                        to="/"
                    />

                    <p className="custom-button-like">
                        Orar curs facultativ transversal Fundamente de educație umanistă.<br/>
                        Teoria argumentării - MIERCURI 18-20, online, MSTeams.
                        <br/>
                        Mai multe informații găsiți{" "}
                        <a href="https://www.cs.ubbcluj.ro/~dana/TArgumentarii/" target="_blank" rel="noopener noreferrer">aici</a>.
                    </p>
                </div>

                <div className="footer">
                <p>Made with 🖤 by.. link-uri github?</p>
                    <p>© Universitatea Babeş-Bolyai, 2024. Toate drepturile rezervate.</p>
                </div>
            </div>
        </div>

    </Layout>
  );
};

export default LandingPage;
