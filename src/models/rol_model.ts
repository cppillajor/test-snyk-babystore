import { DataTypes, Model } from "sequelize";
import sequelize from "../database/connection";

class RolModel extends Model {}
RolModel.init(
  {
    rol_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    rol_nombre: {
      type: DataTypes.STRING,
    },
    rol_estado: {
      type: DataTypes.BOOLEAN,
      defaultValue: "1"
    },
  },
  {
    sequelize,
    modelName: "RolModel",
    tableName: "tbl_rol",
    freezeTableName: true,
    timestamps: false,
  }
);

export default RolModel;
