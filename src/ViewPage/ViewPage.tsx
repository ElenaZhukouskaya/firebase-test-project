import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getItem } from "../Common/ApiService";

const ViewPage = () => {
  const { id } = useParams();
  const [input, setInput] = useState("");

  useEffect(() => {
    if (id) {
      getItem(id).then((data) => setInput(data["value"]));
    }
  }, [id]);

  return (
    <div>
      <div>{input}</div>
      <button>
        <Link to="/">Back</Link>
      </button>
    </div>
  );
};

export default ViewPage;
