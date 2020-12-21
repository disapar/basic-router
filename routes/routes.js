import { About } from "../components/about";
import { Home } from "../components/home";
import { Users } from "../components/users";
import { error404 } from "../components/404";

export const Router = () => {
  const body = document.querySelector(".main");
  // todos los botones
  const btnHome = document.querySelector(".home");
  const btnAbout = document.querySelector(".about");
  const btnUser = document.querySelector(".user");
  // titulo de las paginas
  let title;

  const HomeLink = () => {
    title = document.title = "Home";
    body.innerHTML = Home;
    window.history.pushState("", title, "/");
  };
  const aboutLink = () => {
    title = document.title = "About Us";
    body.innerHTML = About;
    window.history.pushState("", title, "/about");
  };
  const usersLink = () => {
    title = document.title = "All users";
    //ejemplo de llamada directa de una funcion o bien un innerHTML

    window.history.pushState(Users(), title, "/users");
  };

  // escuchando los links
  btnHome.addEventListener("click", HomeLink);
  btnAbout.addEventListener("click", aboutLink);
  btnUser.addEventListener("click", usersLink);

  // llamamos a la ruta al actualizar el navegador
  if (window.location.pathname == "/") {
    HomeLink();
  } else if (window.location.pathname == "/about") {
    aboutLink();
  } else if (window.location.pathname == "/users") {
    usersLink();
  } else {
    // em el caso de que la url es erronea llamamos esta funcion
    title = document.title = "Page not found";
    body.innerHTML = error404;
  }
};
