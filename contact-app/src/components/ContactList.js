import React from "react";
// import {Link} from "react-router-dom"
import ContactCard from "./ContactCart";

const ContactList = (props) => {
  //   console.log(props);

  const deleteConactHandle = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandle={deleteConactHandle}
        key={contact.id}
      />
    );
  });

  return (
    <div className="main">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>Contact List</h2>
        {/* <Link to="/add">  */}
          <button className="ui button blue right">Add Contact </button>{" "}
        {/* </Link> */}
      </div>
      <div className="ui celled list">{renderContactList}</div>;
    </div>
  );
};

export default ContactList;
