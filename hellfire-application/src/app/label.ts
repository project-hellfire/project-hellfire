import { __core_private_testing_placeholder__ } from '@angular/core/testing';
import { WeakUUIDGeneratorService } from './weak-uuidgenerator.service';

export class Label {
    
    public labelContent: string = "";
    private uuid: string = null;

    constructor( _labelContent?: string ) 
    {
        this.labelContent = (_labelContent != null) ? _labelContent : "";
    }

    public GetLabelContent(): string
    {
        return this.labelContent;
    }

    public SetLabelContent(_newContent?: string, _copiedContent?: Label): void
    {
        this.labelContent = (_newContent != null) ? (_newContent) : ( (_copiedContent  != null) ? (_copiedContent.GetLabelContent()) : "");
    }

    public GetUUID(): string
    {
        return this.uuid;
    }

    public SetUUID(_uuid: string): void 
    {
        this.uuid = _uuid;
    }

    public SetUUIDFromGenerator(_uuidGen: WeakUUIDGeneratorService)
    {
        this.uuid = _uuidGen.GenrateUUID();
    }
}
