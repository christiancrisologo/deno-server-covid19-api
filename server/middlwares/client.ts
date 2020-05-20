import { send } from "https://deno.land/x/oak@v4.0.0/mod.ts";

export default async (context: any, next: any) => {
  if (context.request.url.pathname === "/") {
    await send(context, context.request.url.pathname, {
      root: `${Deno.cwd()}/client`,
      index: "index.html",
    });
    return;
  }

  await next();
};
