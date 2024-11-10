import React from 'react';
import './MastersProgramsTable.scss';

const masterSpecializations = [
  { academic_specialization_id: "21abdfa4-7770-4e76-92ba-ff655d0d02f3", level: "Master", name: "Metode moderne in predarea matematicii", name_abbreviated: "Metode moderne in predarea matematicii", years: "1;2;" },
  { academic_specialization_id: "31fbdfa4-8870-4e76-92ba-ff655d0d03f4", level: "Master", name: "Matematici Avansate - in limba engleza", name_abbreviated: "Matematici Avansate", years: "1;2;" },
  { academic_specialization_id: "41cbdfa4-9970-4e76-92ba-ff655d0d04f5", level: "Master", name: "Metode moderne in predarea matematicii - in limba maghiara", name_abbreviated: "Metode moderne in predarea matematicii - maghiara", years: "1;2;" },
  { academic_specialization_id: "51dbdfa4-1110-4e76-92ba-ff655d0d05f6", level: "Master", name: "Baze de date", name_abbreviated: "Baze de date", years: "1;2;" },
  { academic_specialization_id: "61ebdfa4-2220-4e76-92ba-ff655d0d06f7", level: "Master", name: "Sisteme distribuite in Internet", name_abbreviated: "Sisteme distribuite", years: "1;2;" },
  { academic_specialization_id: "71fbdfa4-3330-4e76-92ba-ff655d0d07f8", level: "Master", name: "Inginerie software - in limba engleza", name_abbreviated: "Inginerie software", years: "1;2;" },
  { academic_specialization_id: "81gbdfa4-4440-4e76-92ba-ff655d0d08f9", level: "Master", name: "Inteligenta Computationala Aplicata - in limba engleza", name_abbreviated: "Inteligenta Computationala", years: "1;2;" },
  { academic_specialization_id: "91hbdfa4-5550-4e76-92ba-ff655d0d09g1", level: "Master", name: "Calcul de inalta performanta - in limba engleza", name_abbreviated: "Calcul performanta", years: "1;2;" },
  { academic_specialization_id: "101cbdfa4-6660-4e76-92ba-ff655d0d10g2", level: "Master", name: "Sisteme informatice avansate: modelare, proiectare, dezvoltare - germana si engleza", name_abbreviated: "Sisteme informatice avansate", years: "1;2;" },
  { academic_specialization_id: "111dbdfa4-7770-4e76-92ba-ff655d0d11h3", level: "Master", name: "Stiinta datelor in industrie si societate", name_abbreviated: "Stiinta datelor", years: "1;2;" },
  { academic_specialization_id: "121ebdfa4-8880-4e76-92ba-ff655d0d12i4", level: "Master", name: "Securitate cibernetica", name_abbreviated: "Securitate cibernetica", years: "1;2;" },
  { academic_specialization_id: "131fbdfa4-9990-4e76-92ba-ff655d0d13j5", level: "Master", name: "Analiza datelor si modelare - in limba maghiara", name_abbreviated: "Analiza datelor", years: "1;2;" },
  { academic_specialization_id: "141cbdfa4-0001-4e76-92ba-ff655d0d14k6", level: "Master", name: "Proiectarea si dezvoltarea aplicatiilor Enterprise", name_abbreviated: "Proiectare aplicatii", years: "1;2;" },
  { academic_specialization_id: "151dbdfa4-1111-4e76-92ba-ff655d0d15l7", level: "Master", name: "Masterat didactic in Informatica - in limba romana", name_abbreviated: "Masterat didactic Informatica - romana", years: "1;2;" },
  { academic_specialization_id: "161ebdfa4-2222-4e76-92ba-ff655d0d16m8", level: "Master", name: "Masterat didactic in Matematica - in limba maghiara", name_abbreviated: "Masterat didactic Matematica - maghiara", years: "1;2;" },
  { academic_specialization_id: "171fbdfa4-3333-4e76-92ba-ff655d0d17n9", level: "Master", name: "Masterat didactic in Informatica - in limba maghiara", name_abbreviated: "Masterat didactic Informatica - maghiara", years: "1;2;" },
];

const mastersData = {
  "Masterate in domeniul Matematica": masterSpecializations
    .filter((item) => ["Metode moderne in predarea matematicii", "Matematici Avansate - in limba engleza", "Metode moderne in predarea matematicii - in limba maghiara"].includes(item.name))
    .map((item) => ({
      program: item.name,
      years: item.years.split(";").filter(Boolean).map(year => `Anul ${year}`),
    })),
  "Masterate in domeniul Informatica": masterSpecializations
    .filter((item) => ["Inginerie software - in limba engleza", "Baze de date", "Sisteme distribuite in Internet", "Inteligenta Computationala Aplicata - in limba engleza", "Calcul de inalta performanta - in limba engleza", "Sisteme informatice avansate: modelare, proiectare, dezvoltare - germana si engleza"].includes(item.name))
    .map((item) => ({
      program: item.name,
      years: item.years.split(";").filter(Boolean).map(year => `Anul ${year}`),
    })),
  "Masterate in domeniul Stiintele Educatiei": masterSpecializations
    .filter((item) => ["Masterat didactic in Informatica - in limba romana", "Masterat didactic in Matematica - in limba maghiara", "Masterat didactic in Informatica - in limba maghiara"].includes(item.name))
    .map((item) => ({
      program: item.name,
      years: item.years.split(";").filter(Boolean).map(year => `Anul ${year}`),
    })),
};

const MastersProgramsTable = () => (
  <table className="table">
    <thead>
      <tr>
        <th>Studii Master</th>
        <th>Anul</th>
      </tr>
    </thead>
    <tbody>
      {Object.keys(mastersData).map((category) => (
        <React.Fragment key={category}>
          <tr className="highlight-background">
            <td colSpan={2}>{category}</td>
          </tr>
          {(mastersData[category] || []).map((row, subIndex) => (
            <tr key={`${category}-${subIndex}`}>
              <td>{row.program}</td>
              <td>
                {row.years.map((year, i) => (
                  <a key={i} href="#">{year}</a>
                ))}
              </td>
            </tr>
          ))}
        </React.Fragment>
      ))}
    </tbody>
  </table>
);

export default MastersProgramsTable;
