export default async (res: any, next: any) => {
  try {
    await next();
  } catch (err) {
    console.error("ERROR:  ", err);
    res.response.status = 500;
    res.response.body = { error: 500, message: err.message };
  }
};
