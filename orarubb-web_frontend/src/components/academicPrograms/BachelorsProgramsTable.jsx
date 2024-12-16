import "./AcademicProgramsTable.scss";
import { useNavigate } from "react-router-dom";
import { useGetAcademicSpecializationsBachelorQuery } from "../../api/AcademicSpecializationsApi.js";

const BachelorsProgramsTable = () => {
  const navigate = useNavigate();
  const { data: bachelorSpecializations = [] } =
    useGetAcademicSpecializationsBachelorQuery("ro-RO");

  return (
    <div className="programs-table-container">
    <table className="programs-table">
      <thead>
        <tr>
          <th>Studii Licenta</th>
          <th className="anul-head">Anul</th>
        </tr>
      </thead>
      <tbody>
        {bachelorSpecializations.map((specialization) => {
          const years = specialization.years.split(";").filter((year) => year);
          return (
            <tr key={specialization.academic_specialization_id}>
              <td>{specialization.name}</td>
              <td>
                {years.map((groupYear) => (
                  <button className="btn-studyprograms"
                    key={`${specialization.academic_specialization_id}-${groupYear}`}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(
                        `/group/${specialization.nameAbbreviated}/${groupYear}`
                      );
                    }}
                  >
                    {`Anul ${groupYear}`}
                  </button>
                ))}
              </td>
            </tr>
          );
        })}
      </tbody>
      </table>
    </div>
  );
};

export default BachelorsProgramsTable;
