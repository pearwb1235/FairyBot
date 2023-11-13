import { Response } from "express";

export function Status(res: Response, status: number, body?: unknown): void {
  if (process.env.NODE_ENV === "production") {
    res.status(status).end();
  } else {
    res.status(status).send(body);
  }
}

export function BadRequest(res: Response, body?: unknown): void {
  return Status(res, 400, body);
}

export function Forbidden(res: Response, body?: unknown): void {
  return Status(res, 403, body);
}

export function InternalServerError(res: Response, body?: unknown): void {
  return Status(res, 500, body);
}
