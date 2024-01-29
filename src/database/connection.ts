
import { Sequelize } from "sequelize";
import { BD_database, BD_user, BD_pass, BD_host, BD_port } from '../config/environment_config';

const sequelize = new Sequelize(
  BD_database,
  BD_user,
  BD_pass,
  {
    host: BD_host,
    port: BD_port,
    dialect: "mysql",
    logging:false
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log(`conectado a la base de datos`);
  })
  .catch((e) => {    
    console.log(`el error es:  ${e}`);
  });

export default sequelize;
