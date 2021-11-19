module.exports = (sequelize, DataTypes) => {
    let Productos = sequelize.define(
    'Productos',
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
    )

    Productos.associate = (models) => {
        Productos.belongsTo(models.Categorias, {
            as: 'categorias',
            foreignKey: 'id_categoria'
        })
    }
return Productos
}


/*Producto.associate = (models) => {
        Producto.belongsTo(models.Motivo, {
            as: 'motivos',
            foreignKey: 'id_motivo'
        })
    },

    Producto.associate = (models) => {
        Producto.hasMany(models.Imagen, {
            as: 'imagenes',
            foreignKey: 'id_producto'
        })
    },
    
    Producto.associate = (models) => {
        Producto.hasMany(models.Favorito, {
            as: 'favoritos',
            foreignKey: 'id_producto'
        })
    },

    Producto.associate = (models) => {
        Producto.hasMany(models.Carrito, {
            as: 'carritos',
            foreignKey: 'id_producto'
        })
    },*/