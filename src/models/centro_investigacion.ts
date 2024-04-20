import {Table, Model, Column, DataType, BelongsTo} from 'sequelize-typescript';
import {Departamento} from './departamento';

@Table({
    tableName: "CentrosInvestigacion",
    timestamps: false
})

export class CentroInvestigacion extends Model{
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
    })
    idCentrosInvestigacion!:number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    Departamento_idDepartamento!:number;
    

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    nombre!:string;

    @BelongsTo(()=>Departamento, 'Departamento_idDepartamento')
    departamento!:Departamento;

}