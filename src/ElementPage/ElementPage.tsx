import React, { ChangeEvent, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { createItem, getItem, updateItem } from "../Common/ApiService";

const ElementPage = () => {
  const { id } = useParams();

  const [input, setInput] = useState("");

  useEffect(() => {
    if (id) {
      getItem(id).then((data) => setInput(data["value"]));
    }
  }, [id]);

  const onSave = (): void => {
    if (id) {
      updateItem(id, input);
    } else {
      createItem(input);
    }
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <input type="text" value={input} onChange={onChange} />
      <button onClick={onSave}>
        <Link to="/">Save</Link>
      </button>
      <button>
        <Link to="/">Cancel</Link>
      </button>
    </div>
  );
};

export default ElementPage;
