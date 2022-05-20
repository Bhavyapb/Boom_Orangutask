import "./scss/app.scss";
import Application from "./js/Application";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  const app = new Application();
  // Used to access the app instance by the automated tests
  app.setEmojis(["🐒", "🦍", "🦧"]);
  let modarr=app.addBananas(app.setEmojis.map(emoji => {
    return emoji + "🍌";
  }));
  window.__JS_APP = app;
  
  let emojipara = document.getElementById("emojis");
  let para = document.createElement("p");
  para.textContent = modarr;
  emojipara.append(para);
});
