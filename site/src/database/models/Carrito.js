module.exports = (sequelize, DataTypes) => {
    const Carrito = sequelize.define(
    'Carrito',
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
        id_orden: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        cantidad: {
            type: DataTypes.INTEGER,
            defaultValue: null
        },
        total: {
            type: DataTypes.INTEGER,
            defaultValue: null
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: null
        },
        updateAt:{
            type: DataTypes.DATE,
            defaultValue: null
        }, 
    },
    {
        timestamps: false
    },

    Carrito.associate = (models) => {
        Carrito.belongTo(models.Producto, {
            as: 'productos',
            foreignKey: 'id_producto'
        })
    },

    Carrito.associate = (models) => {
        Carrito.belongTo(models.Usuario, {
            as: 'usuarios',
            foreignKey: 'id_usuario'
        })
    },

    Carrito.associate = (models) => {
        Carrito.belongTo(models.Orden, {
            as: 'ordenes',
            foreignKey: 'id_orden'
        })
    },
)
return Carrito
}