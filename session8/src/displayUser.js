// displayUser.js
"use strict";
/**
 * Unit on the Testing the DOM
 * We are pretending that we have a web page, on which we have a button and span tags.
 * The button has id="button" the span has id="username"
 * We want went the button is clicked the fetchCurrentUser function to be invoked. So that it returns the details of the current user.
 * If the details are returned we display in the span element.
 */

const fetchCurrentUser = require("./fetchCurrentUser.js");

document.querySelector("#button").addEventListener('click',() => {
  fetchCurrentUser( user => {
    const loggedText = `Logged ${(user.loggedIn ? "In" : "Out")}`;
    document.querySelector("#username").innerText = `${user.fullName} - ${loggedText}`;
  });
});