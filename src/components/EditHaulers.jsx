import { useEffect, useState } from "react";
import { editHauler, getHaulerById } from "../services/haulerService";
import { useNavigate, useParams } from "react-router-dom";
import { getDocks } from "../services/dockService";

export const EditHaulers = () => {
  // first, I'll need to create a function that retrieves the specific hauler. Put that in a use effect and set state with the data
  const [hauler, setHauler] = useState({});
  const [docks, setDocks] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getHaulerById(parseInt(id)).then((obj) => {
      setHauler(obj);
    });

    getDocks().then((obj) => {
      setDocks(obj);
    });
  }, [id]);

  // Third, create the function that actually updates with a put request
  const navigate = useNavigate();

  const handleSave = () => {
    let editedHauler = {
      id: parseInt(id),
      name: hauler.name,
      dock_id: hauler.dock_id,
    };

    editHauler(editedHauler).then(() => {
      navigate(`/Haulers/`);
    });
  };
  // Second, create the html with forms and pre populate the values.
  return (
    <>
      <div>
        <div>
          <label>Name: </label>
          <input
            type="text"
            required
            value={hauler.name ? hauler.name : ""}
            onChange={(event) => {
              const copy = { ...hauler };
              copy.name = event.target.value;
              setHauler(copy);
            }}
          ></input>
        </div>
        <div>
          <label>Dock: </label>
          <select
            onChange={(event) => {
              const copy = { ...hauler };
              copy.dock_id = parseInt(event.target.value);
              setHauler(copy);
            }}
            defaultValue={0}
          >
            <option value={0} disabled>
              Select an Option
            </option>
            {docks.map((obj) => {
              return (
                <option key={obj.id} value={obj.id}>
                  {obj.location}
                </option>
              );
            })}
          </select>
        </div>
        <button
          onClick={() => {
            handleSave();
          }}
        >
          Save Changes
        </button>
      </div>
    </>
  );
};
