import { DataTypes, Model } from "sequelize";
import sequelize from "../database/connection";

class ProductoModel extends Model {}
ProductoModel.init(
  {
    pro_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    pro_nombre: {
      type: DataTypes.STRING(200),
    },
    pro_stock: {
      type: DataTypes.INTEGER,
    },
    pro_descripcion: {
      type: DataTypes.STRING(200),
    },
    pro_imagen: {
      type: DataTypes.STRING(200),
    },
    cat_id: {
      type: DataTypes.INTEGER,
    },
    prov_id: {
      type: DataTypes.INTEGER,
    },
    pro_precio: {
      type: DataTypes.STRING(20),
    },
    pro_estado: {
      type: DataTypes.BOOLEAN,
      defaultValue: "1",
    },
  },
  {
    sequelize,
    modelName: "ProductoModel",
    tableName: "tbl_producto",
    freezeTableName: true,
    timestamps: false,
  }
);

export default ProductoModel;
