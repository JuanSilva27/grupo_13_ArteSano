module.exports = (sequelize, DataTypes) => {
    const Favorito = sequelize.define(
    'Favorito',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },
        id_usuario: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        id_producto: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        timestamps: false
    },

    /*Favorito.associate = (models) => {
        Favorito.belongTo(models.Producto, {
            as: 'productos',
            foreignKey: 'id_producto'
        })
    },
    
    Favorito.associate = (models) => {
        Favorito.belongTo(models.Usuario, {
            as: 'usuarios',
            foreignKey: 'id_usuario'
        })
    },*/

)
return Favorito
}