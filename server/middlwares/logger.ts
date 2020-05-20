export default async (ctx: any, next: any) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`- ${ctx.request.method} ${ctx.request.url} - ${ms}ms`);
};
