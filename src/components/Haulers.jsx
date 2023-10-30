import { useEffect, useState } from "react";
import { getHaulers } from "../services/haulerService";
import { Link } from "react-router-dom";

export const Haulers = () => {
  const [haulers, setHaulers] = useState([]);

  useEffect(() => {
    getHaulers().then((obj) => {
      setHaulers(obj);
    });
  }, []);

  return (
    <>
      <div>
        {haulers.map((obj) => {
          return (
            <div key={obj.id}>
              <div>{obj.name}</div>
              <Link to={`/haulers/${obj.id}`}>Edit</Link>
            </div>
          );
        })}
      </div>
    </>
  );
};
