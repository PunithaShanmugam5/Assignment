import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import data from "./mock-data.json";
import ReadOnlyRow from "./components/ReadOnlyRow";

const App = () => {
  const [showFrom, setShowForm] = useState(false);
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    ProductName: "",
    modal: "",
    Price: "",
    Review: "",
  });

  const [editFormData, setEditFormData] = useState({
    ProductName: "",
    modal: "",
    Price: "",
    Review: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      ProductName: addFormData.ProductName,
      modal: addFormData.modal,
      Price: addFormData.Price,
      Review: addFormData.Review,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      ProductName: editFormData.ProductName,
      modal: editFormData.modal,
      Price: editFormData.Price,
      Review: editFormData.Review,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  const showFormHandler = ()=>{
    setShowForm(!showFrom)
  }

  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <div className="app">
          <div className="card-container">
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  {}                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </div>
        </div>


      </form>

      <h2>Add a Data</h2>
      <form className="user-form" onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="ProductName"
          required="required"
          placeholder="Enter a Product Name..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="modal"
          required="required"
          placeholder="Enter an Modal..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="Price"
          required="required"
          placeholder="Enter a Price..."
          onChange={handleAddFormChange}
        />
        <input
          type="Review"
          name="Review"
          required="required"
          placeholder="Enter an Review..."
          onChange={handleAddFormChange}
        />
         <div className="btn-container">
            <button className="add-btn" onClick={showFormHandler} type="submit">Add</button>
          </div>
      </form>
    </div>
  );
};

export default App;
