import { DataTypes, Model } from "sequelize";
import sequelize from "../database/connection";

class CompasModel extends Model {}
CompasModel.init(
  {
    com_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    com_fecha: {
      type: DataTypes.DATE,
    },
    com_stock_compra: {
      type: DataTypes.INTEGER,
    },
    pro_id: {
      type: DataTypes.INTEGER,
    },
    prov_id: {
      type: DataTypes.INTEGER,
    },
    com_descripcion: {
      type: DataTypes.STRING(200),
    },
    com_total_compra: {
      type: DataTypes.STRING(20),
    },
    com_estado: {
      type: DataTypes.BOOLEAN,
      defaultValue: "1"
    },
  },
  {
    sequelize,
    modelName: "CompasModel",
    tableName: "tbl_compras",
    freezeTableName: true,
    timestamps: false,
  }
);
export default CompasModel;
