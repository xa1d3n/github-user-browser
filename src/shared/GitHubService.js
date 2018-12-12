import { USER_SEARCH } from "./constants";

export async function getUser(user) {
    return await (await fetch(USER_SEARCH(user))).json();
};

export async function getRepos(repoUrl) {
    return await (await fetch(repoUrl)).json();
}