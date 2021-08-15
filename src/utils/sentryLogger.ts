import {INestApplication, LoggerService} from '@nestjs/common';
import * as Sentry from "@sentry/node";
import * as Tracing from "@sentry/tracing"
import {HttpServer} from "@nestjs/common/interfaces/http/http-server.interface";

export class SentryLogger implements LoggerService {
    static InitSentry(dsn: string, app: INestApplication) {
      /*  console.assert(dsn?.length <= 0, "Invalid dsn has been provided");
        console.assert(app, "Invalid app pointer has been provided");

        if (dsn?.length <= 0) return;

        Sentry.init({
            dsn,
            integrations: [
                // enable HTTP calls tracing
                new Sentry.Integrations.Http({ tracing: true }),
                // enable Express.js middleware tracing
                new Tracing.Integrations.Express({
                    // to trace all requests to the default router
                    app,
                    // alternatively, you can specify the routes you want to trace:
                    // router: someRouter,
                }),
            ],

            // We recommend adjusting this value in production, or using tracesSampler
            // for finer control
            tracesSampleRate: 1.0,
        });

        // The request handler must be the first middleware on the app
        app.use(Sentry.Handlers.requestHandler());
        app.use(Sentry.Handlers.errorHandler());
        // Optional fallthrough error handler
        app.use(function onError(err, req, res, next) {
            // The error id is attached to `res.sentry` to be returned
            // and optionally displayed to the user for support.
            res.statusCode = 500;
            res.end(res.sentry + "\n");
        });*/
    }

    /**
     * Write a 'log' level log.
     */
    log(message: any, ...optionalParams: any[]) {
    }

    /**
     * Write an 'error' level log.
     */
    error(message: any, ...optionalParams: any[]) {
    }

    /**
     * Write a 'warn' level log.
     */
    warn(message: any, ...optionalParams: any[]) {
    }

    /**
     * Write a 'debug' level log.
     */
    debug?(message: any, ...optionalParams: any[]) {
    }

    /**
     * Write a 'verbose' level log.
     */
    verbose?(message: any, ...optionalParams: any[]) {
    }
}
