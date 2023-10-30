import { useEffect, useState } from "react";
import { deleteShip, getShips } from "../services/shipService";

export const Ships = () => {
  const [Ships, SetShips] = useState([]);
  const [updatedShips, SetUpdatedShips] = useState([]);

  useEffect(() => {
    getShips().then((obj) => {
      SetShips(obj);
    });
  }, [updatedShips]);

  const deleteShipBtn = (id) => {
    deleteShip(id);

    getShips().then((obj) => {
      SetUpdatedShips(obj);
    });
  };

  return (
    <>
      <div>
        <div>
          {Ships.map((obj) => {
            return (
              <div key={obj.id}>
                <div>{obj.name}</div>
                <button
                  onClick={() => {
                    deleteShipBtn(obj.id);
                  }}
                >
                  DELETE
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
