import { useEffect, useState } from "react";
import { getDocks } from "../services/dockService";
import { getExpandedHauler } from "../services/haulerService";

export const Docks = () => {
  const [docks, setDocks] = useState([]);
  const [haulers, setHaulers] = useState([]);

  useEffect(() => {
    getDocks().then((obj) => {
      setDocks(obj);
    });

    getExpandedHauler().then((obj) => {
      setHaulers(obj);
    });
  }, []);

  return (
    <>
      <div>
        <div>
          {docks.map((obj) => {
            return (
              <div key={obj.id} className="m-[20px]">
                <div>{obj.location}</div>
                <div>Capacity: {obj.capacity}</div>
                <ul>
                  List of Haulers at Dock:
                  {haulers.map((hauler) => {
                    if (hauler.dock_id === obj.id) {
                      return <li key={hauler.id}>{hauler.name}</li>;
                    }
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
