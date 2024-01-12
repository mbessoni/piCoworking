import { config, dialect } from "../config/db.config";
import "reflect-metadata"
import { DataSource } from "typeorm"
import { StatusCliente } from "../models/statusCliente";



export const AppDataSource = new DataSource({
    type: dialect,
    host: config.HOST,
    port: config.PORT,
    username: config.USER,
    password: config.PASSWORD,
    database: config.DB,
    entities: [StatusCliente],
    synchronize: true,
    logging: false,
    
})