import Layout from "../../components/layout/Layout";
import "./LandingPage.scss";
import Button from "../../components/button/Button";
import {useLocation} from "react-router-dom";
import {useLayoutEffect} from "react";
    const handleOldVersionClick = () => {
        const now = new Date();
        let year = 2024;
        const month = now.getMonth() + 1; // getMonth() returns 0-11, so we add 1

        const semester = 2;


        window.open('https://www.cs.ubbcluj.ro/files/orar/' + year + '-' + semester, '_blank', 'noopener,noreferrer');
    };

const LandingPage = () => {
  return (
    <Layout>

    <div className="background-wrapper">
            <div className="main-content">
                <h1 className="title-heading">Orar</h1>
                <p className="title">Facultatea de Matematică și Informatică</p>
                <p className="subtitle">Anul 2024-2025, Semestrul II</p>
                <div className="buttons-container">
                    <Button
                        color="primary"
                        label="Studenți"
                        className="medium rounded"
                        to="/study-programs"
                    />
                    <Button
                        color="primary"
                        label="Cadre Didactice"
                        className="medium rounded"
                        to="/teachers"
                    />
                    <Button
                        color="primary"
                        label="Discipline"
                        className="medium rounded"
                        to="/courses"
                    />
                    <Button
                        color="primary"
                        label="Informații sali"
                        className="medium rounded"
                        to="/informatii-sali"
                    />
                </div>
                <div className="footer">
                    <p>
	  		Ai intampinat probleme sau ai sugestii pentru site? Lasa un tichet <a href="https://ticket.cs.ubbcluj.ro"> <u>aici</u> </a>
                    </p>
                    <p onClick={handleOldVersionClick}>Pentru a vizita vechiul site al orarului faceti click pe acest paragraf</p>
                </div>
            </div>
        </div>

    </Layout>
  );
};

export default LandingPage;
