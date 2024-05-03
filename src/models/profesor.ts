import {Table, Model, Column, DataType, BelongsTo, BelongsToMany} from 'sequelize-typescript';
import {Departamento} from './departamento';
import { CentroInvestigacion } from './centro_investigacion';
import { ProfeCentroInvestigacion } from './profe_centro_inv';

@Table({
    tableName: "Profesores",
    timestamps: false
})

export class Profesor extends Model{
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    })
    idProfesores!:number;
    
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    TipoContrato_idTipoContrato!:number;

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

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    apellidos!:string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    rfc!:string;

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    fechaNacimiento!:Date;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    correo!:string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    telefono!:string;

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    fechaIngreso!:Date;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    cedula!:string;

    @BelongsTo(()=>Departamento,'Departamento_idDepartamento')
    departamento!:Departamento;

    //Profesor - Centro de Investigación
    @BelongsToMany(()=>CentroInvestigacion,()=>ProfeCentroInvestigacion)
    centrosInvestigacion!:CentroInvestigacion[];
}

export default Profesor;