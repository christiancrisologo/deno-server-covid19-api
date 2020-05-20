import { Application } from "https://deno.land/x/oak@v4.0.0/mod.ts";
import router from "./router.ts";
import notFound from "./middlwares/notFound.ts";
import logger from "./middlwares/logger.ts";
import errorHandler from "./middlwares/errorHandler.ts";
import client from "./middlwares/client.ts";

const app: any = new Application();

app.use(logger);
app.use(client);
app.use(errorHandler);
app.use(router.routes());
app.use(router.allowedMethods());
app.use(notFound);

console.log("app listening to port 8000");

await app.listen({ port: 8000 });
