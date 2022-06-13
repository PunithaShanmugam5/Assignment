import React from "react";
import './ReadOnlyRow.css'

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <div className="box" >
      <p>{contact.ProductName}</p>
      <p>{contact.modal}</p>
      <p>{contact.Price}</p>
      <p>{contact.Review}</p>
      <p>
      <button className="delete-btn" type="button" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
      </p>
      </div>
  );
};

export default ReadOnlyRow;
