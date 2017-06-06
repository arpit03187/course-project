import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService{
    logToConsole(status : String)
    {
        console.log("Logging");
    }
}