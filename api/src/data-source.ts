import { DataSource } from "typeorm";

export default new DataSource({
  type: "sqlite",
  database: "./src/database/database.sqlite",
  entities: ["./src/models/*.ts"],
  migrations: ["./src/database/migrations/*.ts"],
});
