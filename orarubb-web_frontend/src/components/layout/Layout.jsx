import Navbar from '../header/Navbar';
import './Layout.scss';

const Layout = ({ children }) => {
    return (
        <div className="layout-container">
            <Navbar />
            <div className="content-wrapper">
                {children}
            </div>
        </div>
    );
};

export default Layout;
