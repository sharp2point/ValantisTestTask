import { md5 } from "../../scripts/utils/utils";
import { APPSTATE } from "../appstate/appstate";

export async function getDataFromApi(command: { action: string, params: {} }) {
    const request = new Request(APPSTATE.apiURL, {
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
    //---------------------------------------------
    let count = 10;
    while (count) {
        return getData(request).then((result) => {
            return result.json();
        }).catch(() => {
            count -= 1; 
            if (count > 0) {
                console.log(`Кол-во повторов запроса: ${10 - count}`);
                 
            }
        });        
    }
}

async function getData(request: Request) {
    const result = await fetch(request.clone());
    if (result.status >= 200 && result.status < 400) {
        return Promise.resolve(result);
    } else {
        console.log(`Error: ${result.statusText} -> ${result.status}`);
        return Promise.reject(false);
    }
}