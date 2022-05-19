import { DataType } from "sequelize-typescript"
import { database } from "../database"

export const DeveloperModel = database.define('developers',{
    id: {
        type: DataType.STRING,    
        primaryKey: true
    },
    name: {
        type: DataType.STRING,
        allowNull: false
    },
    sex: { 
        type: DataType.CHAR(1),
        allowNull: false
    },
    age: {
        type: DataType.TINYINT,
        allowNull: false
    },
    hobby: {
        type: DataType.STRING,
        allowNull: false
    },
    birthdate: {
        type: DataType.DATE,
        allowNull: false
    }
})