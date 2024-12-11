import "./AcademicProgramsTable.scss";
import { useNavigate } from "react-router-dom";
import {useGetAcademicSpecializationsBachelorQuery} from "../../api/AcademicSpecializationsApi.js";

const BachelorsProgramsTable = () => {
  const navigate = useNavigate();
  const {data: bachelorSpecializations = []} = useGetAcademicSpecializationsBachelorQuery("ro-RO");

  return (
    <table className="programs-table">
      <thead>
        <tr>
          <th>Studii Licenta</th>
          <th>Anul</th>
        </tr>
      </thead>
      <tbody>
        {bachelorSpecializations.map((specialization) => {
          const years = specialization.years.split(";").filter((year) => year);
          return (
            <tr key={specialization.academic_specialization_id}>
              <td>{specialization.name}</td>
              <td
                onClick={() => {
                  navigate("/group/ie3");
                }}
              >
                {years.map((year, i) => (
                  <a key={i} href="#">{`Anul ${year}`}</a>
                ))}
              </td>
              {/* <td>
                {years.map((year, i) => (
                  <a
                    key={i}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(
                        `/group/${specialization.academicSpecializationId}/${year}`
                      );
                    }}
                  >
                    {`Anul ${year}`}
                  </a>
                ))}
              </td> */}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default BachelorsProgramsTable;
