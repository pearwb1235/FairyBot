/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, RequestHandler, Response } from "express";

export default function usePromise<
  P = import("express-serve-static-core").ParamsDictionary,
  ResBody = any,
  ReqBody = any,
  ReqQuery = import("express-serve-static-core").Query,
  Locals extends Record<string, any> = Record<string, any>
>(
  router: (
    req: Request<P, ResBody, ReqBody, ReqQuery, Locals>,
    res: Response<ResBody, Locals>,
    next: NextFunction
  ) => unknown
): RequestHandler<P, ResBody, ReqBody, ReqQuery, Locals> {
  return (req, res, next) =>
    Promise.resolve(router(req, res, next)).catch(next);
}
