import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'mahasiswa'})
export class mahasiswa {
    
    @PrimaryGeneratedColumn()
    id : number;

    @Column({ length : 250 })
    nama : string;

    @Column({ length : 20 })
    nim : string;

    @Column({ length : 100 })
    alamat : string;

    @Column({ length : 100 })
    fakultas : string;
}