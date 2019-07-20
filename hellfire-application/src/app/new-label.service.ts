import { Injectable } from '@angular/core';
import { CardData } from './card-data';
import { Label } from './label';

@Injectable({
  providedIn: 'root'
})
export class NewLabelService {

  // cache of all labels created provided through the service. Used by the dropdown button to display all available labels created at somepoint 
  // in the previous posts.
  private globalLabels: Label[] = [];

  // cache of editable local label exposed to ui. Allows us to maintain state of the label input field for data capture
  private sessionLabel: Label = null;

  // cache of editable list of labels exposed to ui. Allows us to maintain state of the labels created for the current
  private sessionLabels: Label[] = [];
  

  constructor() { 
    this.sessionLabel = new Label();
  }


  public GetSessionLabel(): Label
  {
    return this.sessionLabel;
  }

  public SetSessionLabel(_label: Label)
  {
    this.sessionLabel = _label;
  }

  public ClearSessionLabel(): void 
  {
    this.sessionLabel = new Label();
  }

  public GetSessionLabels(): Label[]
  {
    return this.sessionLabels;
  }

  public ClearSessionLabels(): void 
  {
    this.sessionLabels = [];
  }

  public AddLabelToSessionLabels(_label: Label): void
  {
    this.sessionLabels.push(_label);
    return;
  }

  public GetGlobalLabels(): Label[]
  {
    return this.globalLabels;
  }

  // call this when creating label on a new post to add to the card's labels data
  public AddNewLabelToCard(_cardData: CardData,  _label: Label): void
  {
    _cardData.GetLabels().push(_label);
    this.AddLabelToGlobalsCache(_label)
  }

  // this gets called anytime a new label post is created and adds a new label to the globals array only if it doesnt already exist.
  // This will be used to autopopulate the dropdown on the labels field popup
  private AddLabelToGlobalsCache(_label: Label)
  {
    this.globalLabels.push(_label);
  }

  public RemoveLabel(_uuid: string): void
  {
    for (let index = 0; index < this.globalLabels.length; index++) {
      if (_uuid == this.globalLabels[index].GetUUID())
        this.globalLabels.splice(index, 1);
    }
  }
}
