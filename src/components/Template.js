import React, {useContext} from "react";

const Template = (props) => {

  return (
    <div className="page">
        <div className="page-container">
          {props.children}
        </div>
    </div>
  );
};

export default Template;



