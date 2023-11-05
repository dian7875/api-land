import {Column, Entity, PrimaryGeneratedColumn
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
}
