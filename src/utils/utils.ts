import MD5 from "crypto-js/md5.js";
import { APPSTATE } from "src/scripts/appstate/appstate";

export function md5() {
    const date = new Date();
    const partMD5 = date.toISOString().slice(0, 10).replaceAll("-", "");
    return MD5(`${APPSTATE.password}_${partMD5}`).toString();
}