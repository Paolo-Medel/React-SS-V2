export const getShips = () => {
  return fetch(`http://localhost:8000/ships`).then((res) => res.json());
};

export const deleteShip = (id) => {
  return fetch(`http://localhost:8000/ships/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};
