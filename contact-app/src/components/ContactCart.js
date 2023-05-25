import React from "react";
import user from "../img/user.png";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;

  return (
    <div
      className="item"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex" }}>
        <img className="ui avatar image" src={user} alt="user" />
        <div className="content">
          <div className="header">{name}</div>
          <div>{email}</div>
        </div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
        onClick={() => props.clickHandle(id)}
      ></i>
    </div>
  );
};

export default ContactCard;
