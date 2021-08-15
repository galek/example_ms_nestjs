import {Body, Controller, Get, Post, Version} from '@nestjs/common';
import {AppService} from './app.service';
import {CreateCatDto} from "./dto/exampleDTO.service";

@Controller({
    version: '1',
    path: "devInfo"
})
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Version('1')
    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    @Version('2')
    @Post('example')
    async example(@Body() createCatDto: CreateCatDto): Promise<boolean> {
        return true;
    }

    @Get('configuration')
    async test(): Promise<string> {
        return process.env.NODE_ENV as string
    }
}
