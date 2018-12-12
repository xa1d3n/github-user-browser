import { USER_SEARCH } from "./constants";

export async function getUser(user) {
    return await (await fetch(USER_SEARCH(user))).json();
};