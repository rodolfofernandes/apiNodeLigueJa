import { Sequelize } from "sequelize-typescript"
import 'dotenv/config'

export const database = new Sequelize({  
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    port: +process.env.DATABASE_PORT,
    dialect: 'mysql',
    omitNull: true
 })