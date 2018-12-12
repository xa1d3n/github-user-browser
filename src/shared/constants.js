// API
export const GITHUP_API = "https://api.github.com";
export const USER_SEARCH = (user) => `https://api.github.com/search/users?q=${user}`;
export const PULLS = (user, repo) => `https://api.github.com/repos/${user}/${repo}/pulls`;

// strings
export const SEARCH = "Search";
export const SEARCH_USER = "Search GitHub User..."
export const OPEN_PRS = "Open Pull Requests"
export const NO_USERS = "No Users Found"
export const NO_REPOS = "No Repositories Found"