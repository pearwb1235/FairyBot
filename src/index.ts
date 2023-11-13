import express from "express";
import next from "next";
import { InternalServerError } from "~/util/response";
import usePromise from "~/util/router";

const port = Number.parseInt(process.env.PORT) || 3000;
const app = express();
const nextApp = next({
  dev: process.env.NODE_ENV !== "production",
  hostname: "localhost",
  port: port,
});
const nextHandler = nextApp.getRequestHandler();

nextApp.prepare().then(async () => {
  app.use(usePromise((req, res) => nextHandler(req, res)));

  app.use(function (
    err: Error,
    req: import("express").Request,
    res: import("express").Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _: import("express").NextFunction
  ) {
    console.error(err);
    return InternalServerError(res, err.stack);
  });

  app.listen(port, () => {
    console.log(`🚀Server running at http://localhost:${port}/`);
  });
});
