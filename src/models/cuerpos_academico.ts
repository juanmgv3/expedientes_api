import {Table, Model, Column, DataType, BelongsTo} from 'sequelize-typescript';
import {Departamento} from './departamento';

@Table({
    tableName: "CuerposAcademicos",
    timestamps: false
})

export class CuerpoAcademico extends Model{
    
    @Column({
        type: DataType.STRING,
        allowNull: false,

    })
    nombre!:string;

    @Column({
        primaryKey: true,
        type: DataType.INTEGER,
        allowNull: false,
    })
    idCuerposAcademicos!:number;

    
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    Departamento_idDepartamento!:number;
    @BelongsTo(()=>Departamento,'Departamento_idDepartamento')
    departamento!:Departamento;
}
