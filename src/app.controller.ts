import {Body, Controller, Get, Post} from '@nestjs/common';
import { AppService } from './app.service';
import {CreateCatDto} from "./dto/exampleDTO.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('example')
  async example(@Body() createCatDto: CreateCatDto): Promise<boolean> {
    return true;
  }
}
