import Layout from "../../components/layout/Layout";
import "../LandingPage/LandingPage.scss";
import Button from "../../components/button/Button";

const InformatiiSaliPage = () => {
    return (
        <Layout>
            <div className="background-wrapper">
                <div className="main-content">
                    <h2 className="title">Informatii Sali</h2>
                    <p className="subtitle">Anul 2024-2025, Semestrul I</p>
                    <div className="buttons-container">
                        <Button
                            color="primary"
                            label="Orarul Salilor"
                            className="medium rounded"
                            to="/rooms"
                        />
                        <Button
                            color="primary"
                            label="Legenda Salilor"
                            className="medium rounded"
                            to="/informatii-sali/legenda"
                        />
                        <Button
                            color="primary"
                            label="Ocuparea Salilor"
                            className="medium rounded"
                            to="/rooms/rooms-schedule"
                        />
                        <Button
                            color="primary"
                            label="Inapoi"
                            className="small rounded"
                            to="/"
                        />
                    </div>
                </div>
            </div>
        </Layout>
    )
        ;
};

export default InformatiiSaliPage;
