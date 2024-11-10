import React from 'react';
import './BachelorsProgramsTable.scss';

const bachelorSpecializations = [
  {
    academic_specialization_id: "20bcada4-7770-4e76-92ba-ff655d0d0b43",
    level: "Licenta",
    name: "Informatica - in limba engleza",
    name_abbreviated: "Inf. engl.",
    years: "1;2;3;",
  },
  {
    academic_specialization_id: "f62e7b68-8cf2-4cdb-bf6d-ccbe4f34fbb5",
    level: "Licenta",
    name: "Matematica - linia de studiu romana",
    name_abbreviated: "Mat. romana",
    years: "1;2;3;",
  },
  {
    academic_specialization_id: "db6b7a28-5409-46d0-8830-52a7ea87663d",
    level: "Licenta",
    name: "Informatica - linia de studiu romana",
    name_abbreviated: "Inf. romana",
    years: "1;2;3;",
  },
  {
    academic_specialization_id: "a1bcada4-7770-4e76-92ba-ff655d0d0c44",
    level: "Licenta",
    name: "Matematica informatica - linia de studiu romana",
    name_abbreviated: "Mat. inf. romana",
    years: "1;2;3;",
  },
  {
    academic_specialization_id: "b2bcada4-7770-4e76-92ba-ff655d0d0d55",
    level: "Licenta",
    name: "Matematica informatica - linia de studiu engleza",
    name_abbreviated: "Mat. inf. engleza",
    years: "1;2;3;",
  },
  {
    academic_specialization_id: "c3bcada4-7770-4e76-92ba-ff655d0d0e66",
    level: "Licenta",
    name: "Matematica - linia de studiu maghiara",
    name_abbreviated: "Mat. maghiara",
    years: "1;2;3;",
  },
  {
    academic_specialization_id: "d4bcada4-7770-4e76-92ba-ff655d0d0f77",
    level: "Licenta",
    name: "Informatica - linia de studiu maghiara",
    name_abbreviated: "Inf. maghiara",
    years: "1;2;3;",
  },
  {
    academic_specialization_id: "e5bcada4-7770-4e76-92ba-ff655d0d10a8",
    level: "Licenta",
    name: "Matematica informatica - linia de studiu maghiara",
    name_abbreviated: "Mat. inf. maghiara",
    years: "1;2;3;",
  },
  {
    academic_specialization_id: "f6bcada4-7770-4e76-92ba-ff655d0d11b9",
    level: "Licenta",
    name: "Ingineria Informatiei in limba maghiara",
    name_abbreviated: "Ing. Info maghiara",
    years: "1;",
  },
  {
    academic_specialization_id: "g7bcada4-7770-4e76-92ba-ff655d0d12c0",
    level: "Licenta",
    name: "Informatica - in limba germana",
    name_abbreviated: "Inf. germana",
    years: "1;2;3;",
  },
  {
    academic_specialization_id: "h8bcada4-7770-4e76-92ba-ff655d0d13d1",
    level: "Licenta",
    name: "Informatica - in limba engleza",
    name_abbreviated: "Inf. engleza",
    years: "1;2;3;",
  },
  {
    academic_specialization_id: "i9bcada4-7770-4e76-92ba-ff655d0d14e2",
    level: "Licenta",
    name: "Inteligenta Artificiala in limba engleza",
    name_abbreviated: "IA engleza",
    years: "1;",
  },
  {
    academic_specialization_id: "j10bcada4-7770-4e76-92ba-ff655d0d15f3",
    level: "Licenta",
    name: "Ingineria Informatiei in limba engleza",
    name_abbreviated: "Ing. Info engleza",
    years: "1;",
  },
  {
    academic_specialization_id: "k11bcada4-7770-4e76-92ba-ff655d0d16g4",
    level: "Licenta",
    name: "Psihologie",
    name_abbreviated: "Psihologie",
    years: "1;",
  }
];

const BachelorsProgramsTable = () => (
  <table className="table">
    <thead>
      <tr>
        <th>Studii Licenta</th>
        <th>Anul</th>
      </tr>
    </thead>
    <tbody>
      {bachelorSpecializations.map((specialization) => {
        const years = specialization.years.split(";").filter(year => year);
        return (
          <tr key={specialization.academic_specialization_id}>
            <td>{specialization.name}</td>
            <td>
              {years.map((year, i) => (
                <a key={i} href="#">{`Anul ${year}`}</a>
              ))}
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

export default BachelorsProgramsTable;
