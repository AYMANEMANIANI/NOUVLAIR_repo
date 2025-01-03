import React from "react";
import Sidebar from "./Sidebar"; // Import Sidebar
import "./assets/css/ListGroups.css";

const data = {
  "Groupes": [
    {
      "id_Groupe": 1,
      "nom_group": "Développement Digital 101",
      "nombreEtudiants": 20,
      "Filières": [
        {
          "id_Filiere": 1,
          "nom_Filiere": "Développement Digital",
          "description": "Formation en développement digital incluant les concepts front-end et back-end"
        }
      ]
    },
    {
      "id_Groupe": 2,
      "nom_group": "Développement Digital 201",
      "nombreEtudiants": 24,
      "Filières": [
        {
          "id_Filiere": 1,
          "nom_Filiere": "Développement Digital",
          "description": "Formation en développement digital incluant les concepts front-end et back-end"
        }
      ]
    },
    {
      "id_Groupe": 3,
      "nom_group": "Infrastructure Digitale 101",
      "nombreEtudiants": 30,
      "Filières": [
        {
          "id_Filiere": 2,
          "nom_Filiere": "Infrastructure Digitale",
          "description": "Apprentissage des infrastructures digitales et des systèmes d'information"
        }
      ]
    },
    {
      "id_Groupe": 4,
      "nom_group": "Infrastructure Digitale 201",
      "nombreEtudiants": 21,
      "Filières": [
        {
          "id_Filiere": 2,
          "nom_Filiere": "Infrastructure Digitale",
          "description": "Apprentissage des infrastructures digitales et des systèmes d'information"
        }
      ]
    } 
  ]
};

// Grouping by nom_Filiere
const groupedByFiliere = data.Groupes.reduce((acc, group) => {
  group.Filières.forEach((filiere) => {
    if (!acc[filiere.nom_Filiere]) {
      acc[filiere.nom_Filiere] = [];
    }
    acc[filiere.nom_Filiere].push(group);
  });
  return acc;
}, {});

const ListGroups = () => {
  return (
    <div className="containerListGroups" style={{ display: "flex" }}>
      <Sidebar /> {/* Include Sidebar here */}
      
      <div className="main-content" style={{ flex: 1, paddingLeft: '20px' }}>


        <h1>Groupes</h1>

        {Object.keys(groupedByFiliere).map((filiereName, index) => (
          <div key={index} className="filiere">
            <h2 className="filiere-header">
              {filiereName} <span className="filiere-icon"><i className="fa-solid fa-plus"></i></span>
            </h2>
            <div className="group-list">
              <table>
                <thead>
                  <tr>
                    <th>Groupe</th>
                    <th>Nombre des étudiants</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {groupedByFiliere[filiereName].map((group, idx) => (
                    <tr key={idx}>
                      <td>{group.nom_group}</td>
                      <td>{group.nombreEtudiants}</td>
                      <td className="buttons">
                        <button className="edit-btn button-listgroup"><i className="fa-solid fa-pen"></i></button>
                        <button className="delete-btn button-listgroup"><i className="fa-solid fa-trash"></i></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListGroups;
