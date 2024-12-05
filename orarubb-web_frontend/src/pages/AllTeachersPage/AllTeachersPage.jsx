import { useEffect, useState } from "react";
import Card from "../../components/Card";
import "../AllCoursesPage/CardsPage.scss";
import "./AllTeachersPage.scss";
import searchIcon from "../../assets/search_icon.svg";
import orderIcon from "../../assets/order_alph.svg";
import Layout from "../../components/layout/Layout";
import { useGetTeachersByLanguageQuery } from "../../api/TeachersApi";

const AllTeachersPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  //const [mockTeachers, setMockTeachers] = useState([]);
  const { data: teachers = [], isLoading } =
    useGetTeachersByLanguageQuery("ro-RO");

  const filteredTeachers = teachers
    ?.filter((teacher) =>
      teacher.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      const nameA = a.name.split(" ")[1];
      const nameB = b.name.split(" ")[1];

      if (sortOrder === "asc") {
        return nameA.localeCompare(nameB);
      } else {
        return nameB.localeCompare(nameA);
      }
    });

  const handleSortToggle = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Layout>
      <div className="page">
        <div className="header">
          <img
            src={orderIcon}
            alt="Order Icon"
            className="icon order-icon"
            onClick={handleSortToggle}
            style={{ cursor: "pointer" }}
          />
          <div className="search-container">
            <img
              src={searchIcon}
              alt="Search Icon"
              className="icon search-icon"
            />
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearchChange}
              className="search-input"
            />
          </div>
        </div>

        {isLoading && <div className="loading">Loading...</div>}

        {!isLoading && (
          <div className="cards-list">
            {filteredTeachers.map((teacher) => (
              <Card
                key={teacher.teacherId}
                title={teacher.name}
                link={`/teacher/${teacher.codeName}`}
              />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default AllTeachersPage;
