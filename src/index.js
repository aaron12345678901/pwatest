import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// const DATA = [
//   { id: "todo-0", name: "Eat", completed: true },
//   { id: "todo-1", name: "Sleep", completed: false },
//   { id: "todo-2", name: "Repeat", completed: false },
// ];

if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker
            .register("/sw.js")
            .then((registration) => {
                console.log(
                    "Service Worker registered! Scope: ",
                    registration.scope
                );
            })
            .catch((err) => {
                console.log("Service Worker registration failed: ", err);
            });
    });
}

const DATA = JSON.parse(localStorage.getItem("tasks")) || [];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App tasks={DATA} />
    </React.StrictMode>
);

reportWebVitals();
