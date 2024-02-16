import { Module } from '@nestjs/common';
import { mahasiswa } from './mahasiswa.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MahasiswaController } from './mahasiswa.controller';
import { MahasiswaService } from './mahasiswa.service';

@Module({

    imports: [TypeOrmModule.forFeature([mahasiswa])],

    controllers: [MahasiswaController],

    providers: [MahasiswaService]
})
export class MahasiswaModule {}
