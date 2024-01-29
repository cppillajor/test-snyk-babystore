import { DataTypes, Model } from "sequelize";
import sequelize from "../database/connection";

class VentaModel extends Model {}
VentaModel.init(
  {
    ven_id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
	per_id_cliente:{
        type:DataTypes.INTEGER,
    },
	per_id_vendedor:{
        type:DataTypes.INTEGER,
    },
	ven_subtotal:{
        type:DataTypes.STRING(20),
    },
	ven_iva:{
        type:DataTypes.STRING(20),
    },
	ven_total:{
        type:DataTypes.STRING(20),
    },
	ven_descripcion:{
        type:DataTypes.STRING(200),
    },
	ven_detalle_venta:{
        type:DataTypes.TEXT,
    },
	ven_estado:{
        type:DataTypes.BOOLEAN,
        defaultValue: "1",
    },
},
  {
    sequelize,
    modelName: "VentaModel",
    tableName: "tbl_venta",
    freezeTableName: true,
    timestamps: false,
  }
);

export default VentaModel;
