const { describe } = require("node:test");
const {
  createIssue,
  getIssues,
  deleteIssue,
  updateIssue,
} = require("../../issue/issue");

describe("deleteIssues tests", () => {
  test("deleteIssues should return error when id is empty", () => {
    expect(() => {
      deleteIssue();
    }).toThrow(new Error("error occurred while deleting a new issue"));
  });
});

describe("updateIssue tests", () => {
  test("updateIssue should return error when id is empty", () => {
    expect(() => {
      updateIssue();
    }).toThrow(new Error("error occurred while updating a new issue"));
  });
});

describe("createIssue tests", () => {
  test("createIssue should return error when input is null", () => {
    expect(() => {
      createIssue();
    }).toThrow(new Error("error occurred while creating a new issue"));
  });
});

describe("getIssues tests", () => {
  test("getIssues should return all issues", () => {
    expect(getIssues().length).toBe(4);
  });
});
