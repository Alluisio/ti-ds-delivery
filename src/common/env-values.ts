import * as dotenv from "dotenv";
dotenv.config();

export const envs = {
  JWT_SECRET: process.env.JWT_SECRET || "secret",
  APP_PORT: +process.env.APP_PORT || 3333,
  DATABASE_PORT: +process.env.DATABASE_PORT || 5432,
  DATABASE_HOST: process.env.DATABASE_HOST || "localhost",
  DATABASE_USER: process.env.DATABASE_USER || "postgres",
  DATABASE_PASSWORD: `${process.env.DATABASE_PASSWORD || "postgres"}`,
  DATABASE_NAME: process.env.DATABASE_NAME || "delivery",
};
