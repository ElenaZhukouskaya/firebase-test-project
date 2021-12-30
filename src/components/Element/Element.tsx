import React from "react";
import { Link } from "react-router-dom";
import { ElementItem } from "../../Common/ElementItem";
import { ApiBasePath } from "../../Common/Api";

const Element = ({ id, value }: ElementItem) => {
  const removeElement = () => {
    fetch(`${ApiBasePath}/test/${id}.json`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {});
  };

  return (
    <div>
      <div>{value}</div>
      <button onClick={removeElement}>Del</button>
      <button>
        <Link to={`/new/${id}`}>Edit</Link>
      </button>
      <button>
        <Link to={`/view/${id}`}>View</Link>
      </button>
    </div>
  );
};

export default Element;
