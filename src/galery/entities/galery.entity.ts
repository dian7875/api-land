
import { InfoGeneral } from "src/info-general/entities/info-general.entity";
import { Column, Entity,ManyToOne,OneToMany, PrimaryGeneratedColumn
}from "typeorm";

@Entity('galery')
export class Galery {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    url: string;
    
    @Column()
    infoGeneralId:number;
    
    @ManyToOne(() => InfoGeneral, InfoGeneral=> InfoGeneral.Galery)
    InfoGeneral: InfoGeneral;
  

}
