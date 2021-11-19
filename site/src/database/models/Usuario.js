module.exports = (sequelize, DataTypes) => {
    let Usuarios = sequelize.define(
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
)
 Usuarios.associate = (models) => {
        Usuarios.belongsTo(models.Rol, {
            as: 'roles',
            foreignKey: 'id_rol'
        })
    }
return Usuarios
}