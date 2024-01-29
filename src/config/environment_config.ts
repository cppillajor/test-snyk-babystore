export const AppPort: number = parseInt(process.env.APP_PORT || '6000');

export const BD_database: string = process.env.MYSQL_DATABASE || 'bdd_k_alert';
export const BD_user: string = process.env.MYSQL_USER || 'root';
export const BD_pass: string = process.env.MYSQL_PASS || '';
export const BD_host: string = process.env.MYSQL_HOST || 'localhost';
export const BD_port: number = parseInt(process.env.MYSQL_PORT || '3306');

export const secretKeyJWT: string = process.env.SECRET_KEY_JWT || 'soy-una-palabra-secreta'