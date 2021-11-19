module.exports = (sequelize, DataTypes) => {
    const Orden = sequelize.define(
    'Orden',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },
        estado: {
            type: DataTypes.STRING(45),
            defaultValue: null
        },
        id_usuario: {
            type: DataTypes.INTEGER,
            allowNull: false,
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
        tableName: "ordenes",
        timestamps: false
    },

    /*Orden.associate = (models) => {
        Orden.belongTo(models.Usuario, {
            as: 'usuarios',
            foreignKey: 'id_usuario'
        })
    },

    Orden.associate = (models) => {
        Orden.hasMany(models.Carrito, {
            as: 'carritos',
            foreignKey: 'id_orden'
        })
    },*/
)
return Orden
}