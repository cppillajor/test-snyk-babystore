import { DataTypes, Model } from "sequelize";
import sequelize from "../database/connection";

class ProveedorModel extends Model {}
ProveedorModel.init(
  {
    prov_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    prov_nombre: {
      type: DataTypes.STRING(100),
    },
    prov_ubicacion: {
      type: DataTypes.STRING(200),
    },
    prov_estado: {
      type: DataTypes.BOOLEAN,
      defaultValue: "1",
    },
  },
  {
    sequelize,
    modelName: "ProveedorModel",
    tableName: "tbl_proveedor",
    freezeTableName: true,
    timestamps: false,
  }
);

export default ProveedorModel;
