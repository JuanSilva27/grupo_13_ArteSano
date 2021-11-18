module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define(
    'Usuarios',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },
        nombre: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        apellido: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        telefono: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        provincia: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        localidad: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        imagen: {
            type: DataTypes.STRING(100),
            defaultValue: null
        },
        id_rol:{
            type: DataTypes.INTEGER,
            allowNull: false
        }, 
    },
    {
        timestamps: false
    },

    /*Usuario.associate = (models) => {
        Usuario.belongTo(models.Rol, {
            as: 'roles',
            foreignKey: 'id_rol'
        })
    },

    Usuario.associate = (models) => {
        Usuario.hasMany(models.Favorito, {
            as: 'favoritos',
            foreignKey: 'id_usuario'
        })
    },

    Usuario.associate = (models) => {
        Usuario.hasMany(models.Carrito, {
            as: 'carritos',
            foreignKey: 'id_usuario'
        })
    },

    Usuario.associate = (models) => {
        Usuario.hasMany(models.Orden, {
            as: 'ordenes',
            foreignKey: 'id_usuario'
        })
    },*/
)
return Usuario
}