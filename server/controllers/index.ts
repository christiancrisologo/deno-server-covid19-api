import errorHandler from "../middlwares/errorHandler.ts";
import notFound from "../middlwares/notFound.ts";
import ICountry from "../models/country.ts";

const getDefault = (context: any) => {
  context.response.body = "MABUHAY!!!";
};

const getCountries = async (context: any) => {
  const res = await fetch("https://covid-api.com/api/regions");
  const data = await res.json();
  const mappedArray: Array<ICountry> = data.data;
  context.response.body = mappedArray;
};

const getReportsByCountry = async (context: any) => {
  const date: Date = context.params.date
    ? new Date(context.params.date)
    : ((d) => new Date(d.setDate(d.getDate() - 2)))(new Date()); // get yesterday date
  const country: string = context.params.country || "";
  const formattedDate: string = new Date(
    date.getTime() - date.getTimezoneOffset() * 60000
  )
    .toISOString()
    .split("T")[0];
  const url: string = country
    ? `https://covid-api.com/api/reports?date=${formattedDate}&iso=${country}`
    : `https://covid-api.com/api/reports/total?date=${formattedDate}`;

  const res = await fetch(url);
  const data = await res.json();

  context.response.body = data.data;
};

export {
  getDefault,
  getCountries,
  getReportsByCountry,
  errorHandler,
  notFound,
};
