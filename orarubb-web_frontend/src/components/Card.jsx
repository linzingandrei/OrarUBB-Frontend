import { Link } from 'react-router-dom';
import './Card.scss';

const Card = ({ title, subtitle, link }) => {
    return (
        <Link to={link} className="card">
            <h3 className="card-title">{title}</h3>
            {subtitle && <p className="card-subtitle">{subtitle}</p>}
        </Link>
    );
};

export default Card;
