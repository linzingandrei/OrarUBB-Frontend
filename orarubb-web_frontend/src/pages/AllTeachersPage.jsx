import { useState } from 'react';
import Card from '../components/Card';
import './CardsPage.scss';
import './AllTeachersPage.scss';
import { getAllTeachers } from '../services/teachersService';
import searchIcon from '../assets/search_icon.svg';
import orderIcon from '../assets/order_alph.svg';

const AllTeachersPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');
    
    const mockTeachers = getAllTeachers();

    const filteredTeachers = mockTeachers
        .filter((teacher) =>
            teacher.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => {
            const nameA = a.name.split(' ')[1];
            const nameB = b.name.split(' ')[1];
            
            if (sortOrder === 'asc') {
                return nameA.localeCompare(nameB);
            } else {
                return nameB.localeCompare(nameA);
            }
        });

    const handleSortToggle = () => {
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="page">
            <div className="header">
                <img 
                    src={orderIcon} 
                    alt="Order Icon" 
                    className="icon order-icon" 
                    onClick={handleSortToggle} 
                    style={{ cursor: 'pointer' }}
                />
                <div className="search-container">
                    <img src={searchIcon} alt="Search Icon" className="icon search-icon" />
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={handleSearchChange} 
                        className="search-input"
                    />
                </div>
            </div>
            
            <div className="cards-list">
                {filteredTeachers.map((teacher) => ( 
                    <Card
                        key={teacher.teacher_id}
                        title={teacher.name}
                        link={`/teacher/${teacher.teacher_id}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default AllTeachersPage;
