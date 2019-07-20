import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GlobalFeedNotifierService } from '../global-feed-notifier.service';
import { Label } from '../label';
import { NewLabelService } from '../new-label.service';
import { NotificationAltertService } from '../notification-altert.service';
import { Observer } from 'rxjs';


@Component({
  selector: 'app-popup-modal',
  templateUrl: './popup-modal.component.html',
  styleUrls: ['./popup-modal.component.css']
})
export class PopupModalComponent implements OnInit  {

  constructor(private alertService: NotificationAltertService,  private labelService: NewLabelService, private feedNotifierService: GlobalFeedNotifierService) {

  }

  // make writable to by popupocontroller component
  @Input() 
  visibleState: boolean = false;

  // make readable by popupcontroller component
  @Output()
  needsToClose: EventEmitter<boolean> = new EventEmitter<boolean>();


  ngOnInit() { 
    // this.alertService.RaisePostNotification.subscribe(this.test);
  }

  // public test(x) 
  // {
  //   console.log(x);
  // }

  // tells the parent popup controller this event wants the popup to be closed
  public OnNeedToClose(): void
  {
    // clear out the session label writable for to ready up for a new session
    this.labelService.ClearSessionLabel();  

    // clear out the session labels for a new session
    this.labelService.ClearSessionLabels();    

    // send out an event which can be handled by the popup-controller telling it we need to close
    this.needsToClose.emit();
  }

  // called on add post button. Adds new post to the postService's feed data to be rendered by the card component
  public AddNewPost(): void
  {
    // send our card data to the feedNotifier services global posts array for rendering
    this.feedNotifierService.AddNewPost(this.feedNotifierService.GetSessionCardData()); 
    
    this.feedNotifierService.ClearSessionCardData();

    this.alertService.RaisePostNotification.subscribe();
    // now automatically close the post modal
    this.OnNeedToClose();
  }

  // called on add label button click. Adds newly created label to the ui on the modal and to the new post's card data to be rendered on the feed.
  public AddNewLabel(): void
  {

    this.labelService.AddNewLabelToCard(this.feedNotifierService.GetSessionCardData(), this.labelService.GetSessionLabel());
    
    // send this new label to the session labels global array which we used the *ngFor directive to display them on the modal
    
    this.labelService.AddLabelToSessionLabels(this.labelService.GetSessionLabel());
    
    // we want a fresh state when we edit the next label, so we wipe the session label here. It's already been cached to the 
    // cardData's labels array and the sessionLabels array for rendering.
    this.labelService.ClearSessionLabel();
  }

  // called from label dropdown selection
  public AddNewLabelFromLabel(_label: Label): void
  {
    this.labelService.SetSessionLabel(_label); 

    this.labelService.AddNewLabelToCard(this.feedNotifierService.GetSessionCardData(), this.labelService.GetSessionLabel());

    // send this new label to the session labels global array which we used the *ngFor directive to display them on the modal
    this.labelService.AddLabelToSessionLabels(this.labelService.GetSessionLabel()); 

    // we want a fresh state when we edit the next label, so we wipe the session label here. It's already been cached to the 
    // cardData's labels array and the sessionLabels array for rendering.
    this.labelService.ClearSessionLabel();
  }

}
