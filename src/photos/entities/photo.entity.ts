import { Galery } from 'src/galery/entities/galery.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('photos')
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: String;

  @Column()
  galeryId: number;
 
  @ManyToOne(() => Galery, galery=> galery.photos)
  galery: Galery;
}
