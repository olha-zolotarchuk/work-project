import React from "react";
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

  return <div className="ui celled list">{renderContactList}</div>;
};

export default ContactList;
