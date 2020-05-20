export default (res: any) => {
  res.response.status = 404;
  res.response.body = { error: 404, details: "No api found" };
};
