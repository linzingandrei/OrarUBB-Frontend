import "./BachelorsProgramsTable.scss";
import { useNavigate } from "react-router-dom";
import { useGetAcademicSpecializationsBachelorQuery } from "../../api/AcademicSpecializationsApi.js";

const BachelorsProgramsTable = () => {
  const navigate = useNavigate();
  const { data: bachelorSpecializations = [] } =
    useGetAcademicSpecializationsBachelorQuery("ro-RO");

  return (
    <table className="table">
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
              <td>
                {years.map((groupYear) => (
                  <a
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
                  </a>
                ))}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default BachelorsProgramsTable;
