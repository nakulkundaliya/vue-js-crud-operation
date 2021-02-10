const Values = require('../resources/values');

module.exports = (app) => {
  // Log in a user with a username and password
  app.post('/api/value/create', (request, response) => {
    Values.addValue(request.body)
      .then((user) => {
        response.json(user);
      })
      .catch((error) => {
        response.status(401).json({ message: error.message });
      });
  });
};
