export const getHaulers = () => {
  return fetch(`http://localhost:8000/haulers`).then((res) => res.json());
};

export const getHaulerById = (id) => {
  return fetch(`http://localhost:8000/haulers/${id}`).then((res) => res.json());
};

export const editHauler = (hauler) => {
  return fetch(`http://localhost:8000/haulers/${hauler.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(hauler),
  });
};
