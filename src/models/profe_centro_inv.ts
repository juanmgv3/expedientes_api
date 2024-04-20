import {Table, Model, Column, DataType, ForeignKey} from 'sequelize-typescript';
import { Profesor } from './profesor';
import { CentroInvestigacion } from './centro_investigacion';

@Table({
    tableName: "Profesores_has_CentrosInvestigacion",
    timestamps: false

})
export class ProfeCentroInvestigacion extends Model{
    @ForeignKey(()=>Profesor)
    @Column({
        type: DataType.INTEGER,
    })
    Profesores_idProfesores!:number;

    @ForeignKey(()=>CentroInvestigacion)
    @Column({
        type: DataType.INTEGER,
    
    })
    CentrosInvestigacion_idCentrosInvestigacion!:number;
    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    fechaIngreso!:Date;

}