// Import stylesheets
import "./style.css";
import { Router } from "./routes/routes";

// Write Javascript code
var apdiv = document.querySelector("#app");
apdiv.innerHTML = `<div class="main">loading...</div>`;

Router();
document.body.addEventListener("click", e => {
  console.log(e.target);
});
