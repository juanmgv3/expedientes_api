import {Table, Model, Column, DataType, BelongsTo} from 'sequelize-typescript';
import {Division} from './division';

@Table({
    tableName: "Departamento",
    timestamps: false
})

export class Departamento extends Model{
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    Divisiones_idDivisiones!:number;

    @Column({
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataType.INTEGER
    })
    idDepartamento!:number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    nombre!:string;

    @BelongsTo(()=>Division,'Divisiones_idDivisiones')
    division!:Division;
}