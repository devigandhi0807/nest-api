import "reflect-metadata";
import { ConfigService } from '@nestjs/config';
export declare const dbProviders: {
    provide: string;
    inject: (typeof ConfigService)[];
    useFactory: (configService: ConfigService) => Promise<void>;
}[];
