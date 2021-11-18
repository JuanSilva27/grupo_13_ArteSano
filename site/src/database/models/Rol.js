module.exports = (sequelize, DataTypes) => {
    const Rol = sequelize.define(
    'Rol',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },
        nombre: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
    },
    {
        timestamps: false
    },


    /*Rol.associate = (models) => {
        Rol.hasMany(models.Usuario, {
            as: 'usuarios',
            foreignKey: 'id_rol'
        })
    }*/
)
return Rol
}