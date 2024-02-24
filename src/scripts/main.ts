import { getDataFromApi } from "./api/api";
import { APICOMMANDS } from "./api/api_commands";

window.addEventListener('load', async () => {
    const responseIDs = await getDataFromApi(APICOMMANDS.getIDs({ offset: 0, limit: 10 }));
    console.log("IDs ---------------------");
    console.log(responseIDs.result);

    const products = await getDataFromApi(APICOMMANDS.getItems({ ids: [...responseIDs.result] }));
    console.log("Products ---------------------");
    console.log(products.result);

    const fields = await getDataFromApi(APICOMMANDS.getFields({ field: "brand", offset: 0, limit: 100 }));
    console.log("Fields ---------------------");
    console.log(fields.result);

    const filter = await getDataFromApi(APICOMMANDS.filter({ "price": 17500.00 }));
    console.log("Filter Price 17500.00 ---------------------");
    console.log(filter.result);
});