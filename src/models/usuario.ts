import { Table, Model, Column, DataType, PrimaryKey, AllowNull } from 'sequelize-typescript'; 

@Table({
    tableName: "Usuarios",
    timestamps: false,
})

//correo password nombre
export class Usuario extends Model{
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    })
    idUsuarios!:number;
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    correo!:string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    password!:string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    nombre!:string;

}