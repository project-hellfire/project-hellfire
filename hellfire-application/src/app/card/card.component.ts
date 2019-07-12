import { Component, OnInit } from '@angular/core';
import { CardData } from '../card-data';
import { GlobalFeedNotifierService } from '../global-feed-notifier.service';
import { IFeedServiceNotifiable } from '../ifeed-service-notifiable';
import { Subject, Subscription } from 'rxjs';
import { NewPostService } from '../new-post.service';

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
    console.log("Current Feed Cache legnth: " + this.feedCache.length);
  }

  DeletePost(_hashID: string): void 
  {
    this.feedNotifierService.DeletePost(_hashID)
    // get card data's uuid pass it here to delete post
  }

}
