const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Ijc1YjRlZWE3LTU5OWEtNDc5OS1iYmY2LTMyY2Y0OThjMWRlNC0xNzIyOTQ4OTgyOTg4IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiNzJkNWNiNTktNzFhMy00ZDdlLWFjNTItMGE0MDQxNmVkYmNkIiwidHlwZSI6InQifQ.92rgmg1NYK4MKU8FKnn1aFMDQ3A1HbRFbMQI5xNMH50'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
