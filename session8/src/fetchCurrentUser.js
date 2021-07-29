
let parseJSON = user => {
    return {
      fullName: `${user.firstName} ${user.lastName}`,
      loggedIn: true,
    };
  }
  
  let fetchCurrentUser = callback => {
    return  fetch("http://example.com/currentUser")
            .then(response => response.json())
            .then(data => callback(parseJSON(data)));
  }
  
  module.exports = fetchCurrentUser;