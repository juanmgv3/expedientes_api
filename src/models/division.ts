import { Table, Model, Column, DataType } from 'sequelize-typescript'; 

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
}