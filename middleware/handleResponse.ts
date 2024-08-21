import db from "../config/db";
import { Request, Response } from "express";

export const handleResponse = (
  query: string,
  res: Response,
  message: string
) => {
  db.query(query, (err, result: any[]) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).json({
      status: 0,
      message,
      data: result[0],
    });
  });
};

export const responseInformation = (
  query: string,
  res: Response,
  message: string
) => {
  db.query(query, (err, result: any[]) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).json({
      status: 0,
      message,
      data: result,
    });
  });
};

export const handleResponsePayment = (res: Response, userId: number) => {
  const query = `SELECT * FROM transactions where user_id= ${userId} ORDER BY created_on DESC LIMIT 1`;
  const message = "Transaksi berhasil";
  db.query(query, (err, result: any[]) => {
    if (err) return res.status(500).json({ err });
    return res.status(200).json({
      status: 0,
      message,
      data: result[0],
    });
  });
};
