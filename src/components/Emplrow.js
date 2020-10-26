import React from "react";

function Emplrow(props) {
  return(
    <div>
      <ul className="list-group list-group-horizontal">
        <li className="list-group-item col-2"><span onClick={() => props.removeEmployee(props.id)} className="remove">
        𝘅 
        </span>  {props.first}</li>
        <li className="list-group-item col-2">{props.last}</li>
        <li className="list-group-item col-2">{props.dob}</li>
        <li className="list-group-item col-2">{props.email}</li>
        <li className="list-group-item col-2">{props.phone}</li>
        <li className="list-group-item col-2">{props.address}</li>
      </ul>
    </div>
  );
}

export default Emplrow;