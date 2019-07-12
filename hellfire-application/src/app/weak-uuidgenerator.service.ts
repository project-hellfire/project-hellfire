import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// A semi-realistic UUID generator based on RFC 4122
export class WeakUUIDGeneratorService {

  private tokens: string[ ] = ["!","?",".","~","*","[","]","|","#","%","&","=", 
    "a", "b", "c","d","e","f","g","h","i","j","k",
    "l","n","n","o","p","q","r","s","t","u","v",
    "w","x","y","z", "1", "2", "3", "4", "5", "6", "7", "8", "9"
  ];

  // xxxxxxx-xxxx-Mxxx-Nxxx-xxxxxxxxxxxx;
  constructor() { }

  public GenrateUUID(): string
  {
    // generate random token keys
    var firstCache = this.GetRandomsIteratively(7);
    var secondCache = this.GetRandomsIteratively(4);
    var M = this.GetMN();
    var thirdCache = this.GetRandomsIteratively(3);
    var N = this.GetMN();
    var fourthCache = this.GetRandomsIteratively(3);
    var fifthcache = this.GetRandomsIteratively(12);

    var randomkey: string = 
      this.GenerateHashedArrayFromKeyArray(firstCache) + "-" +
      this.GenerateHashedArrayFromKeyArray(secondCache) + "-" +
      M.toString() + this.GenerateHashedArrayFromKeyArray(thirdCache) +
      "-" + N.toString() + this.GenerateHashedArrayFromKeyArray(fourthCache) + 
      this.GenerateHashedArrayFromKeyArray(fifthcache);  
      
      console.log("Hash is: " + randomkey );
      return randomkey;
  }

  // return an array the size of iterations with random number entires between 0 and 10
  private GetRandomsIteratively(iterations: number): number[]
  {
    var cache = [];
    for (let i = 0; i < iterations; i++) {
      cache[i] = Math.floor(Math.random() * this.tokens.length-1);
    }
    return cache;
  }

  // mn acceptables is 1 to 5
  private GetMN(): number
  {
    return Math.floor(Math.random() * 6)+1;
  }

  // Generates string of hashes from random keys arrays
  private GenerateHashedArrayFromKeyArray(randomKeys: number[]): string
  {
    var hashedArray = [];
    for (let i = 0; i < randomKeys.length; i++) 
    {
      hashedArray.push(this.tokens[randomKeys[i]])
    }
    return hashedArray.join("").toString();
  }
}
