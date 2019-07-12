import { Time } from '@angular/common';
import { IReadableCardData } from './ireadable-card-data';
import { WeakUUIDGeneratorService } from './weak-uuidgenerator.service';

export class CardData implements IReadableCardData {

    private opName: string;
    private content: string;
    private date: number = null;
    private time: number = null;
    private hashID: string = null;

    constructor(private UUID: WeakUUIDGeneratorService, opName: string, _content: string)
    {
        // tag date upon construction
        this.date = new Date().getDate();
        
        this.time = new Date().getTime();
        this.opName = opName;
        this.content = _content;
        // generate uuid for this instance upon construction
        this.hashID = UUID.GenrateUUID();
    }
    
    GetDate(): number
    {
        return this.date;
    }

    GetTime(): number
    {
        return this.time;
    }

    GetOPName(): string
    {
        if (this.opName != null)
            return this.opName;
        else 
            return '';
    }

    GetContent(): string
    {
        if (this.content != null)
            return this.content;
        else 
            return '';
    }

    GetHashID(): string
    {
        return this.hashID;
    }
}
