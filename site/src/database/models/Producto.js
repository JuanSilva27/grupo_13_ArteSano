module.exports = (sequelize, DataTypes) => {
    const Producto = sequelize.define(
    'Producto',
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
        imagen: {
            type: DataTypes.STRING(75),
            allowNull: false,
        },
        descripcion: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        medida_alto: {
            type: DataTypes.DECIMAL(10,2),
            defaultValue: null,
        },
        diametro: {
            type: DataTypes.DECIMAL(10,2),
            defaultValue: null,
        },
        capacidad: {
            type: DataTypes.INTEGER,
            defaulValue: null,
        },
        precio: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false,
        },
        id_categoria: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        id_motivo: {
            type: DataTypes.INTEGER,
            defaulValue: null,
        }
    },
    {
        timestamps: false
    },

    Producto.associate = (models) => {
        Producto.belongTo(models.Categoria, {
            as: 'categorias',
            foreignKey: 'id_categoria'
        })
    },

    Producto.associate = (models) => {
        Producto.hasMany(models.Imagen, {
            as: 'imagenes',
            foreignKey: 'id_producto'
        })
    }

)
return Producto
}