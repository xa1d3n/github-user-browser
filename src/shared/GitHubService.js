import { USER_SEARCH, PULLS } from "./constants";

export async function getUser(user) {
    return await (await fetch(USER_SEARCH(user))).json();
};

export async function getRepos(repoUrl) {
    return await (await fetch(repoUrl)).json();
}

export async function getPullRequests(user, repo) {
    return await (await fetch(PULLS(user, repo))).json();
}
