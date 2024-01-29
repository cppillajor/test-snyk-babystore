import { DataTypes, Model } from "sequelize";
import sequelize from "../database/connection";

class CategoriaModel extends Model {}
CategoriaModel.init(
  {
    cat_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cat_nombre: {
      type: DataTypes.STRING(50),
    },
    cat_estado: {
      type: DataTypes.BOOLEAN,
      defaultValue: "1",
    },
  },
  {
    sequelize,
    modelName: "CategoriaModel",
    tableName: "tbl_categoria",
    freezeTableName: true,
    timestamps: false,
  }
);
export default CategoriaModel;
