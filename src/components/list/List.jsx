import React from "react";

function List(props) {
  return (
    <div className="list-contact">
      <table className="container mt-4">
        <thead >
          <tr className="list-head">
            <td className="ps-4">Name</td>
            <td>Email</td>
            <td>Contacte</td>
          </tr>
        </thead>
        <tbody>
          <tr className="element-list">
            <td className="ps-4"> Alain</td>
            <td>Alain@gmail.com</td>
            <td>244414</td>
          </tr>
          <tr className="element-list">
            <td className="ps-4"> Alain</td>
            <td>Alain@gmail.com</td>
            <td>244414</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default List;
