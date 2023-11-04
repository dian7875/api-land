import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}