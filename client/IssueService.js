const RestClient  = require('./rest-client');

class IssueService {
  constructor() {}

    getIssues() {
    console.log("Retrieving Issues:");
    let options = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    RestClient("http://localhost:3000/v1/issues", options);
  }

   createIssue() {
    console.log('Creating a Issue:');
    let options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            title: 'New Issue', description: 'New Issue Generated'
        }),
      };
    
    RestClient('http://localhost:3000/v1/issues', options);
  }

   deleteIssue(id) {
    console.log('Deleting a Issue:');
    let options = {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
      };
    
    RestClient(`http://localhost:3000/v1/issues/${id}`, options);
  }

  updateIssue(id) {
    console.log('Updating a Issue:');
    let options = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ id, title: `Issue {id}`, description: `New Detail Related to Issue ${id}` })
      };
    
    RestClient(`http://localhost:3000/v1/issues/${id}`, options);
  }
}

module.exports = IssueService;
