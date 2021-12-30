import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAll } from "../Common/ApiService";
import { ElementItem } from "../Common/ElementItem";
import Element from "../components/Element";

const HomePage = () => {
  const [elements, setElements] = useState<ElementItem[]>([]);

  useEffect(() => {
    let mounted = true;

    getAll().then((items) => {
      if (mounted) {
        setElements(items);
      }
    });

    return () => {
      mounted = false;
    };
  });

  return (
    <div>
      <button className="button">
        <Link to="/element/new">Create new</Link>
      </button>

      {elements.map((element: ElementItem, index: number) => {
        return (
          <div key={index}>
            <Element id={element.id} value={element.value} />
          </div>
        );
      })}
    </div>
  );
};

export default HomePage;
