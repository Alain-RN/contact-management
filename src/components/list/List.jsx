import React from "react";
import ThreePts from "../../assets/three.png"

function List(props) {
  return (
    <div className="list-contact">
      <table className="container mt-3">
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
            <td className="d-flex three-p ">
                <img src={ThreePts} className="three-p-icon" alt="" />
            </td>
          </tr>
          <tr className="element-list">
            <td className="ps-4"> Alain</td>
            <td>Alain@gmail.com</td>
            <td>244414</td>
            <td className="d-flex three-p">
              <img src={ThreePts} className="three-p-icon" alt="" />  
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default List;
