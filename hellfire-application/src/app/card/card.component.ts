import { Component, OnInit } from '@angular/core';
import { CardData } from '../card-data';
import { GlobalFeedNotifierService } from '../global-feed-notifier.service';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


  mostRecentPostCache: CardData = null;
  feedCache: CardData[] = null;

  constructor(private feedNotifierService: GlobalFeedNotifierService) 
  { 
    // subscribe our OnFeedChanged method to the service's observable subject data
    // Now anytime the service's stack is updated, OnFeedChanged will be called and update the mostRecentPost if need be
    // the cardCache will also be updated and the html renderer will render accordingly
    //feedNotifierService.GetDataObservable().subscribe(this.OnFeedChanged);
    this.feedCache = feedNotifierService.GetDataForCache();

  }

  ngOnInit() {
  }

  // called on delete button click. Sends the uuid of the card that needs to be deleted to the feedNotifierService for deletion.
  DeletePost(_hashID: string): void 
  {
    this.feedNotifierService.DeletePost(_hashID)
  }

  LikePost(_hashID: string): void 
  {
    this.feedNotifierService.ToggleLikePost(_hashID);
  }

}
