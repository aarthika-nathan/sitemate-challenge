const { v4: uuidv4 } = require('uuid');
const samples = require('../assets/samples.json');

const createIssue = function (issue) {
    console.log(`creating a new issues`);
    if( issue != null) {
        issue.id = uuidv4();
        samples.push(issue);
        return samples;
    }
    throw new Error('error occurred while creating a new issue');
};

const getIssues = function () {
    console.log(`retrieving issues ${samples}`);
    return samples;
};

const deleteIssue = function (issueId) {
    if(issueId) {
        console.log(`deleting issue with id: ${issueId}`);
        return samples.filter(issue => issue.id != issueId);
    }
    throw new Error('error occurred while deleting a new issue');
};

const updateIssue = function (issueId, issue) {
    if(issueId) {
        console.log(`updating issue with id: ${issueId}`);
        const updatedIssues = samples.map(currentIssue => {
            if(currentIssue.id == issueId) {
                currentIssue.title = issue.title;
                currentIssue.description = issue.description;
            }
            return currentIssue;
        });
        console.log(updatedIssues);
        return updatedIssues;
    }
    throw new Error('error occurred while updating a new issue');
};


module.exports = { 
    createIssue,
    getIssues,
    deleteIssue,
    updateIssue
}

