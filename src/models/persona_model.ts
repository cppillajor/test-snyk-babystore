import { DataTypes, Model } from "sequelize";
import sequelize from "../database/connection";

class PersonaModel extends Model {}

PersonaModel.init(
  {
    per_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    per_nombre: {
      type: DataTypes.STRING(100),
    },
    per_apellido: {
      type: DataTypes.STRING(100),
    },
    per_correo: {
      type: DataTypes.STRING(100),
    },
    per_clave: {
      type: DataTypes.STRING(200),
    },
    per_sexo: {
      type: DataTypes.STRING(50),
    },
    per_fecha_nacimiento: {
      type: DataTypes.DATE,
    },
    rol_id: {
      type: DataTypes.INTEGER,
    },
    per_estado: {
      type: DataTypes.BOOLEAN,
      defaultValue: "1"
    },
  },
  {
    sequelize,
    modelName: "PersonaModel",
    tableName: "tbl_persona",
    freezeTableName: true,
    timestamps: false,
  }
);

export default PersonaModel;
