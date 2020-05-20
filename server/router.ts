import { Router } from "https://deno.land/x/oak@v4.0.0/mod.ts";
import {
  getDefault,
  getCountries,
  getReportsByCountry,
} from "./controllers/index.ts";
const router = new Router();

router
  //   .get("/", getDefault)
  .get("/countries", getCountries)
  .get("/reports", getReportsByCountry)
  .get("/reports/:date", getReportsByCountry)
  .get("/reports/:date/:country", getReportsByCountry);

export default router;
