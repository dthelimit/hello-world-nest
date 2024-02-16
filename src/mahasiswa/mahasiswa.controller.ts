import { Body, Controller, Delete, Get, Param, Post, Put, Res, UseInterceptors } from '@nestjs/common';
import { MahasiswaService } from './mahasiswa.service'
import { MahasiswaDTO } from './mahasiswa.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Response } from 'express';
import * as path from 'path'

interface FileParams {
    fileName : string;
    }

@Controller('mahasiswa')
export class MahasiswaController {
    constructor(private MahasiswaService: MahasiswaService) { }

    @Get()
    lihatOutput() {
        return this.MahasiswaService.showAll();
    }

    //Mengirim Data dengan id baru menggunakan Post
    @Post()
    membuatRecord(@Body() data: MahasiswaDTO){
        return this.MahasiswaService.create(data)
    }

    //Mengambil Satu Baris Data menggunakan Get
    // @Get(':id')
    // lihatDetail(@Param('id') id: number) {
    // //return 'ini controller detail mahasiswa ' + id;
    // return this.MahasiswaService.lihatPerRecord(id)
    // }

    //Memperbaharui data (update) menggunakan Put
    @Put(':id')
    updateDetail(@Param('id') id: number, @Body() data: Partial<MahasiswaDTO>) {
        return this.MahasiswaService.update(id, data);
    }

    //Menghapus data menggunakan Delete
    @Delete(':id')
    menghapusRecord(@Param('id') id: number) {
    return this.MahasiswaService.hapusData(id)
    }

    @Post("/dataMahasiswa")
    @UseInterceptors(FileInterceptor('file' , {
        storage : diskStorage({
            destination : "./uploadMahasiswa",
            filename : (req, file, cb) => {
                cb(null , `${file.originalname}`)
            }
        })
    }))
    async uploadFile() {
        return "File Data Mahasiswa Berhasil di Upload"
    }

    // Untuk menampilkan data
    @Get("/getfile")
    getFile(@Res() res : Response , @Body() file : FileParams)
    {
    res.sendFile(path.join(__dirname , "../uploadMahasiswa/" + file.fileName));
    }

    /*
    @Get('service')
    lihatSemua() {
        return this.MahasiswaService.lihatSemua();
    }
    */

}
