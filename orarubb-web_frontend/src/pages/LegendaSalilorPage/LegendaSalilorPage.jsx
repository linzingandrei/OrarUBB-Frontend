import './LegendaSalilorPage.scss';
import Layout from '../../components/layout/Layout';
import RoomsTable from '../../components/rooms/RoomsTable';

const LegendaSalilorPage = () => {
    return (
        <Layout>
            <div className="legenda-salilor">
                <div className='legenda-salilor-table'>
                    <RoomsTable />
                </div>
            </div>
        </Layout>
    )
};

export default LegendaSalilorPage;