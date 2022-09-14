import { DataSource } from "typeorm";
import * as dotenv from "dotenv";

dotenv.config();

console.log(process.env.DATABASE_NAME);

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASS,
  database: process.env.DATABASE_NAME,
  entities: ["dist/**/*.entity{.ts,.js}"],
  migrationsTableName: "migrations",
  migrations: ["dist/**/migrations/*{.ts,.js}"],
  migrationsRun: true,
  synchronize: false,
  logging: true,
});

export default AppDataSource;
