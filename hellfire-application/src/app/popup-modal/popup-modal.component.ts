import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NewPostService } from '../new-post.service';
import { IFeedServiceNotifiable } from '../ifeed-service-notifiable';
import { GlobalFeedNotifierService } from '../global-feed-notifier.service';
import { CardData } from '../card-data';


@Component({
  selector: 'app-popup-modal',
  templateUrl: './popup-modal.component.html',
  styleUrls: ['./popup-modal.component.css']
})
export class PopupModalComponent implements OnInit  {

  public cardData: CardData = null;

  constructor(private postService: NewPostService, private feedNotifierService: GlobalFeedNotifierService) {
    this.cardData = postService.GetNewPostCacheObject();
  }

  @Input() 
  visibleState: boolean = false;

  @Output()
  needsToClose: EventEmitter<boolean> = new EventEmitter<boolean>();


  ngOnInit() {
  }

  // tells the parent popup controller this event wants the popup to be closed
  OnNeedToClose()
  {
    this.needsToClose.emit();
  }

  AddNewPost()
  {
    console.log("Trying to create a new post");
    console.log(this.cardData.GetContent());
    this.feedNotifierService.AddNewPost(this.cardData);
    this.cardData = this.postService.GetNewPostCacheObject();

    // now automatically close the post modal
    this.OnNeedToClose();
  }


}
