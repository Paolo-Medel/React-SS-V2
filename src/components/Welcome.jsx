import { getHaulers } from "../services/haulerService";
import { getDocks } from "../services/dockService";
import { getShips } from "../services/shipService";
import { useEffect, useState } from "react";

export const WelcomePage = () => {
  const [ships, setShips] = useState([]);
  const [docks, setDocks] = useState([]);
  const [haulers, setHaulers] = useState([]);

  useEffect(() => {
    getHaulers().then((obj) => {
      setHaulers(obj);
    });
    getShips().then((obj) => {
      setShips(obj);
    });
    getDocks().then((obj) => {
      setDocks(obj);
    });
  }, []);

  return (
    <>
      <div className="mt-64">
        <div className="grid grid-cols-3 gap-80">
          <div className=" border-2 border-white rounded">
            <h2 className="text-2xl underline">Ships</h2>
            {ships.map((obj) => {
              return <div key={obj.id}>{obj.name}</div>;
            })}
          </div>
          <div className=" border-2 border-white rounded">
            <h2 className="text-2xl underline">Docks</h2>
            {docks.map((obj) => {
              return <div key={obj.id}>{obj.location}</div>;
            })}
          </div>
          <div className=" border-2 border-white rounded">
            <h2 className="text-2xl underline">Haulers</h2>
            {haulers.map((obj) => {
              return <div key={obj.id}>{obj.name}</div>;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
