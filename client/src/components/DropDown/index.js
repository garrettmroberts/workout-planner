import React from "react";

function DropDown({ display, type, keys, name, func }) {
  return <div>
    <button type="button" className={`btn btn-${type} dropdown-toggle btn-lg btn-block`} data-toggle="dropdown">
      {display.charAt(0).toUpperCase() + display.slice(1)}
    </button>
    <div className="dropdown-menu">
      {keys.map(key => {
        return <button className="dropdown-item" type="button" key={key} data-name={name} data-key={key} onClick={e => {
          func(e)
        }}>
          {key.charAt(0).toUpperCase() + key.slice(1)}
        </button>
      })}

    </div>
  </div>
};

export default DropDown;