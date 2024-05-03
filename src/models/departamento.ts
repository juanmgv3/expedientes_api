import {Table, Model, Column, DataType, BelongsTo, HasMany} from 'sequelize-typescript';
import {Division} from './division';
import {CentroInvestigacion} from './centro_investigacion';

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

    //Divisiones - Departamentos
    @BelongsTo(()=>Division,'Divisiones_idDivisiones')
    division!:Division;

    //Departamento - Centro de Investigacion
    @HasMany(() => CentroInvestigacion,'Departamento_idDepartamento') 
    centrosdeinvestigacion!: CentroInvestigacion[];
}