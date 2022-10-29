import { DataSource } from "typeorm";
import { envs } from "./common/env-values";

console.log(envs.DATABASE_HOST, envs.DATABASE_USER, envs.DATABASE_PASSWORD, envs.DATABASE_NAME);

const AppDataSource = new DataSource({
  type: "postgres",
  host: envs.DATABASE_HOST,
  username: envs.DATABASE_USER,
  password: envs.DATABASE_PASSWORD,
  database: envs.DATABASE_NAME,
  entities: ["dist/**/*.entity{.ts,.js}"],
  migrationsTableName: "migrations",
  migrations: ["dist/**/migrations/*{.ts,.js}"],
  migrationsRun: true,
  synchronize: false,
  logging: true,
  ssl: true,
});

export default AppDataSource;
