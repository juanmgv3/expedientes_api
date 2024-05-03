import {Table, Model, Column, DataType, BelongsTo, BelongsToMany} from 'sequelize-typescript';
import {Departamento} from './departamento';
import { Profesor } from './profesor';
import { ProfeCentroInvestigacion } from './profe_centro_inv';

@Table({
    tableName: "CentrosInvestigacion",
    timestamps: false
})

export class CentroInvestigacion extends Model{
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
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

    //Departamento - Centros de Investigacion
    @BelongsTo(()=>Departamento, 'Departamento_idDepartamento')
    departamento!:Departamento;

    //Profesores - Centro de Investigación
    @BelongsToMany(()=>Profesor,()=>ProfeCentroInvestigacion)
    Profesores!:Profesor[];
}
