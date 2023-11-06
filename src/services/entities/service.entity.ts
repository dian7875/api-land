import { InfoGeneral } from "src/info-general/entities/info-general.entity";
import {Column, Entity, ManyToOne, PrimaryGeneratedColumn
}from "typeorm";

@Entity('services')
export class Service {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    icon: string;
    @Column()
    infoGeneralId:number;

    @ManyToOne(() => InfoGeneral, InfoGeneral=> InfoGeneral.services)
    InfoGeneral: InfoGeneral;
}
