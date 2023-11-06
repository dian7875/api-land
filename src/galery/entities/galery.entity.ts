
import { Photo } from "src/photos/entities/photo.entity";
import {Column, Entity,OneToMany, PrimaryGeneratedColumn
}from "typeorm";

@Entity('galery')
export class Galery {
    @PrimaryGeneratedColumn()
    id:number;
    
  

    @OneToMany(() => Photo, photos => photos.galery)
    photos: Photo[];
    
   
  

}
