import React, { useState, useEffect } from "react";
import Axios from 'axios';

export default function Solicitar() {
  const [list, setList] = useState([]);
  useEffect(() => {
    Axios({
      url: "http://localhost:4000/users/:id",
    })
      .then((response) => {
        setList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setList]);

  return (
    <div>
      {list.map((item) => (
        <div key={item.id}>
          <p>{item.lastNames}</p>
          <p>{item.email}</p>
          <p>{item.nameUser}</p>
        </div>
      ))}
    </div>
  );
}