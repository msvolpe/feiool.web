import React, { Component, useState } from "react";
import PropTypes from "prop-types";

interface User {
  uid: string;
  name: string;
}

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [user, setUser] = useState<User>({
    uid: "123456",
    name: "Mauro Volpe",
  });

  const incrementar = (numero: number = 1): void => {
    setCounter(counter + numero);
  };

  return (
    <div>
      <button onClick={() => incrementar()}>+1</button>
    </div>
  );
};
