module.exports = (sequelize, DataTypes) => {
    const Imagen = sequelize.define(
    'Imagen',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },
        id_producto: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        nombre: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
    },
    {
        timestamps: false
    },
    
    Imagen.associate = (models) => {
        Imagen.belongTo(models.Producto, {
            as: 'productos',
            foreignKey: 'id_producto'
        })
    }
)
return Imagen
}