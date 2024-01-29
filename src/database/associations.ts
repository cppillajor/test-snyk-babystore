import CategoriaModel from '../models/categoria_model';
import CompasModel from '../models/compras_model';
import MenuModel from '../models/menu_model';
import PersonaModel from '../models/persona_model'
import ProductoModel from '../models/producto_model';
import ProveedorModel from '../models/proveedor';
import RolModel from '../models/rol_model';


export const AssociationsModelDataBase = () => {
    //Una Persona tiene un Rol
    PersonaModel.hasOne(RolModel, { foreignKey: 'rol_id' });
	RolModel.belongsTo(PersonaModel, { foreignKey: 'rol_id' });
    
    //Un producto tiene una categoria

    ProductoModel.hasOne(CategoriaModel, { foreignKey: 'cat_id' });
	CategoriaModel.belongsTo(ProductoModel, { foreignKey: 'cat_id' });
    //Un Producto tiene un proveedor
    ProductoModel.hasOne(ProveedorModel, { foreignKey: 'prov_id' });
	ProveedorModel.belongsTo(ProductoModel, { foreignKey: 'prov_id' });

    //Una compra tiene un producto
    CompasModel.hasOne(ProductoModel, { foreignKey: 'pro_id' });
	ProductoModel.belongsTo(CompasModel, { foreignKey: 'pro_id' });
    //Una compra tiene un proveedor
    CompasModel.hasOne(ProveedorModel, { foreignKey: 'prov_id' });
	ProveedorModel.belongsTo(CompasModel, { foreignKey: 'prov_id' });
    
}