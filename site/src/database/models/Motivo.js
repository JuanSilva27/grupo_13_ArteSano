module.exports = (sequelize, DataTypes) => {
    const Motivo = sequelize.define(
    'Motivo',
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

    /*Motivo.associate = (models) => {
        Motivo.hasMany(models.Producto, {
            as: 'productos',
            foreignKey: 'id_motivo'
        })
    }*/
)
return Motivo
}