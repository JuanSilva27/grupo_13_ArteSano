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
    }
)
return Imagen
}