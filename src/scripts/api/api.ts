import MD5 from "crypto-js/md5.js";
import { APPSTATE } from "../appstate/appstate";

export async function getData() {
    const date = new Date();
    const partMD5 = date.toISOString().slice(0, 10).replaceAll("-", "");
    const md5 = MD5(`${APPSTATE.password}_${partMD5}`).toString();

    const filter = {
        "action": "filter",
        "params": { "price": 17500.0 }
    };

    const result = await fetch(APPSTATE.apiURL, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "X-Auth": md5,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(filter)
    });
    result.json().then((data) => {
        console.log(data)
    })
}