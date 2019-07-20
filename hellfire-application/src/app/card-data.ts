import { Time } from '@angular/common';
import { WeakUUIDGeneratorService } from './weak-uuidgenerator.service';
import { Label } from './label';

export class CardData {

    private opName: string;
    private content: string;
    private date: number = null;
    private time: number = null;
    private hashID: string = null;
    private labels: Label[] = [];
    private likes: number = 0;

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

    SetContent(_content: string): void 
    {
        this.content = _content;
    }

    GetLikes(): number 
    {
        return this.likes;
    }

    ToggleLike(): void
    {
        this.likes = (this.likes == 0) ? 1 : 0;
    }
    
    GetLabels()
    {
        return this.labels;
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
