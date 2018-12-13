import * as GitHubService from "../shared/GitHubService";
import { USER_SEARCH, PULLS } from "../shared/constants";

import fetchMock from "fetch-mock";

describe("getUser", () => {
  beforeEach(() => {
    fetchMock.restore();
  });

  it("GitHubService should return a user", () => {
    const mockResponseEvents = { items: [ { login: 'test', avatar_url: 'test.jpg' }]};

    fetchMock.mock(USER_SEARCH('xa1d3n'), mockResponseEvents);

    return GitHubService.getUser('xa1d3n').then(value => {
      expect(value).toEqual(mockResponseEvents);
    });
  });
});

describe("getRepos", () => {
    beforeEach(() => {
      fetchMock.restore();
    });
  
    it("GitHubService should return a repo", () => {
      const mockResponseEvents = { items: [ { name: 'test', owner: { login: 'test.jpg' } }]};
  
      fetchMock.mock('test.html', mockResponseEvents);
  
      return GitHubService.getRepos('test.html').then(value => {
        expect(value).toEqual(mockResponseEvents);
      });
    });
  });

  describe("getPullRequests", () => {
    beforeEach(() => {
      fetchMock.restore();
    });
  
    it("GitHubService should return a pull request", () => {
      const mockResponseEvents = { items: [ { count: '7'}]};
  
      fetchMock.mock(PULLS('testUser', 'testRepo'), mockResponseEvents);
  
      return GitHubService.getPullRequests('testUser', 'testRepo').then(value => {
        expect(value).toEqual(mockResponseEvents);
      });
    });
  });
