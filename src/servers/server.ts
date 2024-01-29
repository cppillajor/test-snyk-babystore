import express from "express";
import cors from "cors";
import hpp from "hpp";
import helmet from "helmet";
import compression from "compression";
import multer from "multer";
import { AppPort } from "../config/environment_config";
import { helmetConf } from "../config/helmet_config";
import router from "../routes";
import bodyParser from "body-parser";
const app: express.Application = express();

const initMiddlewares = () => {
  //app.use(morgan("dev", { stream }));
  //app.use(cors({ origin: true, credentials: true }));
  //app.use(hpp());
  //app.use(helmet(helmetConf));
  //app.use(compression());
  //app.use(multer().any());
  //app.use(express.json());
  //app.use(express.urlencoded({ extended: true }));
  ///app.use("/api-docs", serve, setup(specificationsSwagger));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
};
const routes = () => {
  app.use("/", router);
};

const listen = () => {
  app.listen(AppPort, () => {
    /*logger.info(`***********************`)
      logger.info(`Backend Server Up: ${port}`)
      logger.info(`***********************`)*/
    console.log(`Backend Server Up: ${AppPort}`);
  });
};

const AppServer = () => {
  initMiddlewares();
  routes();
  listen();
};



export default AppServer;
