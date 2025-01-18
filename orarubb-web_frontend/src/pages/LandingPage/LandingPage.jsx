import Layout from "../../components/layout/Layout";
import "./LandingPage.scss";
import Button from "../../components/button/Button";
    const handleOldVersionClick = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth() + 1; // getMonth() returns 0-11, so we add 1

        const semester = (month >= 9 || month <= 2) ? 1 : 2;

        window.open('https://www.cs.ubbcluj.ro/files/orar/' + year + '-' + semester, '_blank', 'noopener,noreferrer');
    };
const LandingPage = () => {
  return (
    <Layout>
        <div className="background-wrapper">
            <div className="main-content">
                <h2 className="title">Orar Facultatea de Matematica si Informatica</h2>
                <p className="subtitle">Anul 2023-2024, Semestrul II</p>
                <div className="buttons-container">
                    <Button
                        color="primary"
                        label="Orarul Studentilor"
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
                        label="Informatii sali"
                        className="medium rounded"
                        to="/informatii-sali"
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
                    <p onClick={handleOldVersionClick}>Pentru a vizita vechiul site al orarului faceti click pe acest paragraf</p>
                </div>
            </div>
        </div>

    </Layout>
  );
};

export default LandingPage;
