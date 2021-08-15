import {Module} from '@nestjs/common';
import {HttpModule} from "@nestjs/axios";
import {EventEmitterModule} from "@nestjs/event-emitter";
import {ConfigModule} from '@nestjs/config';

@Module({
    imports: [
        HttpModule,
        EventEmitterModule.forRoot(),
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: `.${process.env.NODE_ENV}.env`
        })
    ],
    controllers: [],
    providers: [],
})
export class ThirdPartyModule {
}
