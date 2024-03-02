import { md5 } from "../../scripts/utils/utils";
import { APPSTATE } from "../appstate/appstate";

export async function getDataFromApi(command: { action: string, params: {} }) {
    const result = await fetch(APPSTATE.apiURL, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "X-Auth": md5(),
            "Content-Type": "application/json",
        },
        body: JSON.stringify(command)
    });
    return result.json();
}