import Navbar from '../header/Navbar'
import './Layout.scss'

const Layout = ({children}) => {
    return (
        <div className="layout-container">
            <Navbar/>
            {children}
        </div>
    )
}

export default Layout