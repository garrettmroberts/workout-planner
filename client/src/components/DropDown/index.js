import React from "react";

function DropDown({ name, type, keys, func }) {
  return <div>
    <button type="button" className={`btn btn-${type} dropdown-toggle btn-lg btn-block`} data-toggle="dropdown">
      {name.charAt(0).toUpperCase() + name.slice(1)}
    </button>
    <div className="dropdown-menu">
      {keys.map(key => {
        return <button className="dropdown-item" type="button" key={key} data-key={key} onClick={e => {
          func()
        }}>
          {key.charAt(0).toUpperCase() + key.slice(1)}
        </button>
      })}

    </div>
  </div>
};

export default DropDown;