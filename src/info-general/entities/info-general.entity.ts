import { Galery } from "src/galery/entities/galery.entity";
import { Service } from "src/services/entities/service.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('infogeneral')
export class InfoGeneral {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    logo: string;

    @Column()
    companyName: string;

    @Column()
    description: string;

    @Column()
    imgDescription: string;

    @Column()
    correo:string

    @Column()
    tel: string;

    @Column()
    tel2: string;

    @Column()
    direction: string;
    
    @Column()
    history: string;

    @OneToMany(() => Service, services=> services.InfoGeneral)
    services: Service[];
    
    //@OneToOne(() => Galery)
   // @JoinColumn()
    //galery: Galery
    
    @OneToMany(() => Galery, Galery => Galery.InfoGeneral)
    Galery: Galery[];
}