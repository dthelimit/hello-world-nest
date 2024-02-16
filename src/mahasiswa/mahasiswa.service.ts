import { Injectable } from '@nestjs/common';
import { mahasiswa } from './mahasiswa.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { MahasiswaDTO } from './mahasiswa.dto';

@Injectable()
export class MahasiswaService {
    constructor(
        @InjectRepository(mahasiswa)
        private mahasiswaRepository: Repository<mahasiswa>
    ){ }

    async showAll() {
        return await this.mahasiswaRepository.find();
    }

    async create(data: MahasiswaDTO){
        const mahasiswaNew = await this.mahasiswaRepository.create(data);
        await this.mahasiswaRepository.save(mahasiswaNew)
        return mahasiswaNew
    }

    async lihatSemua() {
        return "ini bagian service yah";
    }

    //Mengambil Satu Baris data
    async lihatPerRecord(id: number) {
        return await this.mahasiswaRepository.findOne({where : {id}})
    }

    async update(id : number, data : Partial<MahasiswaDTO>) {
        await this.mahasiswaRepository.update({id }, data);
        return await this.mahasiswaRepository.findOne({where : {id}})
    }

    async hapusData(id: number){
        await this.mahasiswaRepository.delete({id})
        return { deleted: true }
    }
}
