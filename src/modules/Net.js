import { GameObject } from "./Main";

const allNetFunctions = {
  loginUser(userName) {
    fetch("/addUser", options)
      .then((response) => response.json())
      .then((data) => {
        // przykład startu gry dla danego usera

        GameObject.setPlayer();
      })
      .catch((error) => console.log(error));
  },
  resetUsers() {
    fetch("/resetUsers", options)
      .then((response) => response.json())
      .then((data) => {
        // działania po resecie
      })
      .catch((error) => console.log(error));
  },
};

export { allNetFunctions };
