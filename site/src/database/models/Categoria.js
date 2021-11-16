module.exports = (sequelize, DataTypes) => {
    const Categoria = sequelize.define(
    'Categoria',
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
        href: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        titulo: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        alt: {
            type: DataTypes.STRING(45),
            defaultValue: null
        },
        img: {
            type: DataTypes.STRING(45),
            defaultValue: null
        },
    },
    {
        timestamps: false
    }
)
return Categoria
}