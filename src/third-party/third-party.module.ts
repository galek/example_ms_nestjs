import {Module} from '@nestjs/common';
import {HttpModule} from "@nestjs/axios";
import {EventEmitterModule} from "@nestjs/event-emitter";

@Module({
    imports: [
        HttpModule,
        EventEmitterModule.forRoot()],
    controllers: [],
    providers: [],
})
export class ThirdPartyModule {
}
