import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript'; 
import { Departamento } from './departamento';

@Table({
    tableName: 'Divisiones',
    timestamps: false
})

export class Division extends Model{
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    })
    idDivisiones!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    nombre!: string;

    @HasMany(()=>Departamento,'Divisiones_idDivisiones')
    departamentos!:Departamento[]
}