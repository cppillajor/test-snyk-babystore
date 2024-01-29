import { DataTypes, Model } from "sequelize";
import sequelize from "../database/connection";

class MenuModel extends Model {}
MenuModel.init(
  {
    men_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    men_nombre: {
      type: DataTypes.STRING(50),
    },
    men_link: {
      type: DataTypes.STRING(200),
    },
    men_icono: {
      type: DataTypes.STRING(50),
    },
    rol_id: {
      type: DataTypes.INTEGER,
    },
    men_id_sub_men: {
      type: DataTypes.INTEGER,
    },
    men_estado: {
      type: DataTypes.BOOLEAN,
      defaultValue: "1",
    },
  },
  {
    sequelize,
    modelName: "MenuModel",
    tableName: "tbl_menu",
    freezeTableName: true,
    timestamps: false,
  }
);

export default MenuModel;
