/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { ContactContext } from '../../context/ContactContext';
import ThreePts from "../../assets/three.png";


function List(props) {

  const { contacts } = useContext(ContactContext);
  console.log(contacts)
  
  return (
    <div>
      <table className="container list-table mt-3">
        <thead>
          <tr className="list-head">
            <td className="ps-4">Nom</td>
            <td>Email</td>
            <td>Contacte</td>
          </tr>
        </thead>

        <tbody className="list-contact">
          { contacts.length != 0 ? (
            contacts.map((contact) => (
              // eslint-disable-next-line react/jsx-key
              <tr className="element-list">
                <td className="ps-4">{contact.nom}</td>
                <td>{contact.email}</td>
                <td>{contact.telephone}</td>
                <td className="d-flex three-p">
                  <img
                    src={ThreePts}
                    className="three-p-icon"
                    alt=""
                    onClick={() => {
                      props.setValue(contact._id);
                      props.setDrop(true);
                    }
                  }
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr className="element-list text-center">
               <td colSpan="3">vide</td>
            </tr>
          )}

          {/* <tr className="element-list">
            <td className="ps-4"> Alain</td>
            <td>Alain@gmail.com</td>
            <td>244414</td>
            <td className="d-flex three-p">
              <img src={ThreePts} className="three-p-icon" alt="" />
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
}

export default List;
