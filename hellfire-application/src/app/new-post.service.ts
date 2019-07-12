import { Injectable } from '@angular/core';
import { CardData } from './card-data';
import { WeakUUIDGeneratorService } from './weak-uuidgenerator.service';

@Injectable({
  providedIn: 'root'
})
export class NewPostService {

  private newPostCache: CardData = null;
  constructor(private uuidGen: WeakUUIDGeneratorService) { 
    this.newPostCache = new CardData(uuidGen, "", ""); 
  }

  public GetNewPostCacheObject(): CardData
  {
    return this.newPostCache;
  }
}
