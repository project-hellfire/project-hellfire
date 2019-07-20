import { Injectable } from '@angular/core';
import { CompileStylesheetMetadata } from '@angular/compiler';
import { CardData } from './card-data';
import { WeakUUIDGeneratorService } from './weak-uuidgenerator.service';
import { Observable, observable, Subject } from 'rxjs';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class GlobalFeedNotifierService {

  // for real and new data
  private globalPostStack: CardData[];

  // subject relaying stack updates and allows updates to be listened to
  public globalMessageSubject = new Subject<CardData[]>();

  // this service will listen to its own subject and notify
  public StackMofifiedState = new Subject<boolean>();

  // The PopupModalComponent creates a card data instance and exposes its properties to be set by the ui
  // then ships ot the the feed notifier service which is shipped back to the cardcomponent to be rendered on the feed
  private sessionCardData: CardData = null;
  
  constructor(private uuidService: WeakUUIDGeneratorService) 
  { 
    this.sessionCardData = new CardData(uuidService, "", "");
    this.globalPostStack = 
    [
      new CardData(new WeakUUIDGeneratorService, "Bon Jovie", "Lorem ipsum dolor amet stumptown adaptogen intelligentsia scenester kitsch 90's four loko schlitz. Artisan kale chips normcore, master cleanse godard marfa waistcoat green juice. Edison bulb four dollar toast taxidermy pabst pug cardigan selfies aesthetic vinyl lyft. Prism enamel pin flexitarian crucifix, kombucha dreamcatcher hammock listicle marfa jianbing next level lo-fi sustainable tumblr. Mlkshk normcore swag blog cold-pressed vexillologist fam cred artisan. Jianbing sriracha ramps photo booth."),
      new CardData(new WeakUUIDGeneratorService, "Aloe Blac", "Lorem ipsum dolor amet actually austin vegan cold-pressed, beard +1 edison bulb vice squid. Messenger bag irony ennui chicharrones put a bird on it sriracha. Neutra yr distillery disrupt, church-key farm-to-table food truck williamsburg air plant next level organic sustainable. Forage meditation pok pok ugh. Fashion axe taiyaki palo santo four dollar toast tote bag williamsburg. Enamel pin craft beer tote bag, poke listicle tumblr mustache taxidermy fixie four loko. Cornhole pinterest iPhone chia fashion axe."),
      new CardData(new WeakUUIDGeneratorService,"Phoenix", "Lorem ipsum dolor amet glossier crucifix chartreuse disrupt iceland bushwick vice squid franzen lyft meditation. Listicle ugh pop-up godard put a bird on it succulents vaporware VHS tbh taiyaki wayfarers cronut keffiyeh vape leggings. Artisan photo booth tbh cliche hashtag fanny pack beard post-ironic sriracha. Letterpress organic meh wayfarers la croix."),
      new CardData(new WeakUUIDGeneratorService,"Novo Amor", "Lorem ipsum dolor amet cold-pressed marfa shabby chic 3 wolf moon gastropub small batch, jean shorts selfies plaid. Enamel pin pour-over YOLO, cloud bread pork belly XOXO unicorn readymade raw denim green juice artisan. Umami intelligentsia roof party 3 wolf moon iPhone kickstarter kombucha. Fixie cornhole trust fund poke cray snackwave pok pok. Cornhole meh you probably haven't heard of them tumeric bitters raw denim asymmetrical cred venmo man braid gluten-free synth."),
      new CardData(new WeakUUIDGeneratorService,"Skrillex", "Sriracha +1 readymade man braid, vegan photo booth ethical asymmetrical raw denim keytar narwhal jianbing whatever. Cred church-key vaporware cray whatever. Taxidermy VHS microdosing bicycle rights freegan banh mi, waistcoat meh. Tacos meditation tattooed migas literally knausgaard viral."),
      new CardData(new WeakUUIDGeneratorService,"Katy Perry", "Microdosing butcher tilde pok pok copper mug meh taiyaki retro synth YOLO. Affogato venmo next level, pop-up fashion axe iPhone craft beer pitchfork squid hot chicken. Trust fund kinfolk fashion axe, keytar locavore VHS gluten-free tousled vice. Poutine lomo raw denim ugh aesthetic skateboard."),
      new CardData(new WeakUUIDGeneratorService,"The National", "Cliche bitters craft beer hashtag. IPhone mumblecore adaptogen, everyday carry succulents hammock hell of gentrify literally messenger bag la croix. Cold-pressed thundercats 90's mlkshk fam tbh, waistcoat pickled echo park. Lumbersexual selfies roof party snackwave, authentic letterpress leggings godard hella blog waistcoat mustache keffiyeh pour-over hell of. Swag whatever poutine coloring book, DIY jianbing sartorial disrupt readymade vegan."),
      new CardData(new WeakUUIDGeneratorService,"The Libertines", "La croix prism iceland godard taiyaki tattooed tacos four dollar toast pug vinyl blog hoodie. Hoodie la croix gluten-free, portland keytar readymade direct trade williamsburg slow-carb quinoa woke man braid. Normcore shoreditch asymmetrical semiotics woke. Ugh mumblecore organic humblebrag seitan art party pitchfork kale chips. Kogi raclette hell of fixie shoreditch locavore bicycle rights church-key mustache echo park before they sold out."),
      new CardData(new WeakUUIDGeneratorService,"Tiesto", "DIY organic skateboard man braid, YOLO chillwave thundercats snackwave truffaut hella literally hoodie ramps iceland fashion axe. Pok pok tilde next level hoodie 3 wolf moon celiac. Helvetica pop-up wayfarers ramps, seitan echo park meggings locavore bitters blue bottle. Vice green juice cardigan stumptown ugh cloud bread kitsch, bespoke church-key food truck hoodie authentic. Hexagon coloring book slow-carb chillwave poke pabst mumblecore live-edge gluten-free microdosing tumblr hella. Distillery +1 disrupt wayfarers taiyaki glossier you probably haven't heard of them shoreditch literally freegan fashion axe vape."),
      new CardData(new WeakUUIDGeneratorService,"Eminem", "Kogi drinking vinegar cray, pork belly distillery poke health goth. Shabby chic tbh succulents cronut shoreditch sriracha 8-bit pop-up keytar polaroid hot chicken snackwave. 3 wolf moon sriracha prism mlkshk, master cleanse 90's tacos. Thundercats slow-carb snackwave fingerstache etsy messenger bag raclette biodiesel forage copper mug dreamcatcher man bun. Typewriter listicle helvetica four loko, succulents you probably haven't heard of them iceland biodiesel raclette. Vice yr man bun roof party live-edge. Semiotics air plant pop-up hammock kale chips cardigan letterpress actually mumblecore skateboard cold-pressed."),
      new CardData(new WeakUUIDGeneratorService,"Ra Ra Riot", "Franzen air plant offal XOXO, aesthetic shoreditch synth tote bag plaid bespoke thundercats health goth. Af kale chips portland, skateboard poutine synth meditation. Scenester selvage swag PBR&B, tousled poutine waistcoat lomo bitters coloring book post-ironic authentic wayfarers tilde. Lyft affogato pok pok hot chicken kinfolk photo booth taxidermy banh mi, bicycle rights seitan meh fixie. Hot chicken locavore humblebrag copper mug taiyaki, truffaut pug messenger bag bushwick. Church-key iceland slow-carb chicharrones."),
      new CardData(new WeakUUIDGeneratorService,"Clairo", "Tousled cred truffaut bushwick. Shoreditch direct trade polaroid, franzen whatever venmo tote bag kombucha. Man bun irony synth food truck, umami succulents skateboard jean shorts YOLO copper mug williamsburg. Activated charcoal scenester four loko unicorn."),
      new CardData(new WeakUUIDGeneratorService,"Bonobo", "Post-ironic cornhole kinfolk XOXO try-hard, man bun pickled literally polaroid occupy skateboard. Narwhal neutra next level venmo hella XOXO vexillologist. Kickstarter tacos mlkshk tousled, mustache 3 wolf moon twee pop-up cliche portland bicycle rights plaid palo santo. Normcore affogato gochujang, pitchfork 90's locavore listicle helvetica blue bottle trust fund marfa tousled keytar woke."),
      new CardData(new WeakUUIDGeneratorService,"Jon Hopkins", "Literally food truck mixtape enamel pin pug. Bicycle rights bushwick franzen photo booth drinking vinegar typewriter. Four loko quinoa pork belly kale chips swag. Enamel pin cronut bespoke health goth art party waistcoat keffiyeh poke marfa XOXO roof party cardigan glossier. Coloring book knausgaard palo santo, small batch man braid vaporware vegan. Poutine subway tile stumptown post-ironic 90's."),
      new CardData(new WeakUUIDGeneratorService,"Half Alive", "Palo santo cliche salvia yr biodiesel. Activated charcoal butcher chia affogato yuccie chicharrones fashion axe gastropub. Unicorn ethical keffiyeh food truck cray fashion axe taxidermy. XOXO PBR&B meggings, chartreuse umami gluten-free knausgaard meh flexitarian fashion axe vice."),
      new CardData(new WeakUUIDGeneratorService,"Slow Dive", "Single-origin coffee bespoke slow-carb succulents flexitarian neutra yr. Vexillologist health goth succulents tofu cronut. Woke austin man bun subway tile drinking vinegar, gastropub raw denim before they sold out taiyaki butcher church-key. Pok pok ethical YOLO williamsburg wolf. Craft beer coloring book chartreuse vegan, schlitz blue bottle salvia paleo cold-pressed chambray selvage la croix."),
      new CardData(new WeakUUIDGeneratorService,"FLETCHER", "Cardigan literally vice photo booth, lo-fi flexitarian jean shorts organic lomo hella celiac trust fund beard. Locavore retro enamel pin lo-fi flannel selvage. Hashtag blog thundercats tbh, kogi banh mi intelligentsia church-key hexagon deep v. Heirloom freegan bitters prism, chartreuse copper mug poutine la croix umami tilde pickled pok pok cold-pressed artisan next level. Try-hard banh mi ramps prism, asymmetrical mumblecore pitchfork butcher umami mlkshk poutine wolf tote bag kombucha. Tbh gastropub kinfolk, unicorn pickled blue bottle af tote bag tumeric."),
      new CardData(new WeakUUIDGeneratorService,"Lucius", "Selvage chartreuse taiyaki ennui tumblr subway tile etsy roof party. Mustache tattooed vexillologist cray selvage veniam. Forage chartreuse mlkshk laboris selvage fingerstache pabst YOLO bespoke snackwave ullamco cornhole twee chambray offal. Tbh live-edge chillwave taiyaki nostrud neutra meditation knausgaard raw denim excepteur. Church-key heirloom try-hard, master cleanse ut listicle raw denim cray VHS chia ad plaid PBR&B gochujang mixtape. Photo booth microdosing leggings, ullamco glossier cred PBR&B keytar actually in disrupt letterpress vape. Cardigan aute VHS aliqua kitsch, velit skateboard air plant narwhal et listicle."),
      new CardData(new WeakUUIDGeneratorService,"Black Pistol Fire", "Hoodie gentrify raw denim, photo booth wolf prism chambray shaman selvage raclette. Fingerstache fam knausgaard ennui post-ironic cliche. Ramps slow-carb waistcoat blue bottle before they sold out woke cardigan retro semiotics. Glossier flexitarian tbh gastropub sartorial."),
      new CardData(new WeakUUIDGeneratorService,"The Boxer Rebellion", "Asymmetrical mustache jianbing kogi pinterest salvia paleo next level bushwick meditation man braid tote bag PBR&B plaid. Freegan succulents cloud bread, four dollar toast blue bottle glossier truffaut cliche. Stumptown knausgaard pok pok meditation you probably haven't heard of them wolf health goth man bun succulents wayfarers hashtag enamel pin man braid quinoa. Hell of intelligentsia wolf lo-fi salvia chambray. Vegan next level edison bulb ugh. Coloring book hell of plaid, blue bottle etsy you probably haven't heard of them cornhole fashion axe. Humblebrag viral adaptogen vaporware keffiyeh four loko ugh intelligentsia cray tacos. "),
      new CardData(new WeakUUIDGeneratorService,"Beat Radio", "Bespoke butcher man bun chicharrones pok pok PBR&B hella vegan kogi. Wayfarers keytar blue bottle, cronut you probably haven't heard of them freegan vexillologist cred air plant pabst health goth put a bird on it. Raclette tattooed craft beer gluten-free, pug cray you probably haven't heard of them cliche portland celiac neutra biodiesel microdosing cronut kale chips. Affogato four dollar toast poke wayfarers banjo. Flannel yuccie sriracha, butcher austin mixtape tousled. Put a bird on it roof party synth VHS deep v, helvetica stumptown. Dreamcatcher selvage ethical, health goth meh tote bag iceland irony af paleo shabby chic tacos."),
      new CardData(new WeakUUIDGeneratorService,"Aukai", "Hot chicken ramps literally hammock viral, edison bulb XOXO. Adaptogen etsy hoodie, thundercats affogato jianbing put a bird on it biodiesel palo santo pour-over pug truffaut. Flexitarian DIY roof party vinyl irony. Jean shorts street art pork belly fixie, activated charcoal retro tacos disrupt adaptogen snackwave health goth."),
      new CardData(new WeakUUIDGeneratorService,"Mute Math", "Plaid thundercats schlitz chartreuse cardigan. Put a bird on it slow-carb subway tile heirloom air plant shabby chic ethical gochujang. IPhone brunch chicharrones narwhal chillwave. Put a bird on it affogato vaporware, fanny pack la croix mumblecore small batch listicle scenester taxidermy. Williamsburg disrupt art party tattooed vice intelligentsia flexitarian cold-pressed VHS woke cronut unicorn vexillologist iPhone. Deep v quinoa yuccie, bespoke beard plaid unicorn sriracha slow-carb tattooed schlitz scenester."),
      new CardData(new WeakUUIDGeneratorService,"Muse", "Beard meggings copper mug kale chips, narwhal taiyaki before they sold out farm-to-table slow-carb. Freegan enamel pin flannel, four loko direct trade vaporware single-origin coffee vexillologist semiotics copper mug air plant tofu quinoa. Wayfarers before they sold out disrupt pop-up la croix wolf asymmetrical messenger bag iceland kinfolk cornhole +1. Man bun narwhal kitsch, trust fund mumblecore af mixtape poke craft beer whatever succulents bitters occupy tousled portland. Swag affogato chia letterpress photo booth wayfarers. Yuccie art party hoodie, chicharrones fanny pack wolf fam af lyft chillwave austin sriracha. Man braid taxidermy you probably haven't heard of them trust fund, ramps mustache organic activated charcoal four loko chicharrones squid cliche palo santo butcher asymmetrical."),
      new CardData(new WeakUUIDGeneratorService,"Young The Giant", "Air plant paleo trust fund pour-over, cray portland pinterest chia. Fingerstache food truck jean shorts pinterest, tilde tote bag air plant celiac etsy hella helvetica art party. Heirloom banjo vaporware post-ironic vegan tote bag next level subway tile marfa umami cloud bread chambray letterpress tacos banh mi. Distillery tofu hot chicken iPhone fixie XOXO, poke venmo intelligentsia dreamcatcher. Lumbersexual +1 adaptogen, roof party jean shorts direct trade schlitz. Normcore celiac 8-bit retro succulents copper mug shaman church-key austin squid iPhone farm-to-table selfies. "),
      new CardData(new WeakUUIDGeneratorService,"Twenty One Pilots", "Godard quinoa williamsburg, cray cornhole you probably haven't heard of them trust fund fingerstache shoreditch prism iPhone synth ramps copper mug. Franzen seitan polaroid blue bottle lyft freegan, brunch master cleanse yuccie. Biodiesel whatever keytar try-hard squid, vice jean shorts shoreditch salvia meggings YOLO yr kitsch swag. Cray copper mug listicle hashtag chartreuse shoreditch swag. Tumeric microdosing food truck pug activated charcoal fashion axe hammock. Pabst vinyl live-edge distillery seitan etsy enamel pin knausgaard twee blog yr pug."),
      new CardData(new WeakUUIDGeneratorService,"Vance Joy", "Taiyaki brunch 3 wolf moon tbh humblebrag whatever. Ennui migas scenester, street art shaman organic church-key. Green juice deep v tbh enamel pin gluten-free. Gochujang kickstarter small batch fingerstache pug ennui air plant hoodie iceland etsy. Roof party YOLO drinking vinegar, bespoke tacos knausgaard 3 wolf moon air plant wayfarers coloring book. Kogi messenger bag vexillologist, wayfarers narwhal kitsch enamel pin bicycle rights godard tousled thundercats flexitarian. Heirloom lomo messenger bag, blog taxidermy retro pok pok tbh."),
      new CardData(new WeakUUIDGeneratorService,"Bon Iver", "Locavore prism tumeric austin master cleanse truffaut hammock synth celiac hashtag hexagon iPhone mumblecore food truck literally. Blog tbh chicharrones sartorial neutra williamsburg portland wolf tilde migas 8-bit activated charcoal street art organic drinking vinegar. Kogi selvage deep v hot chicken schlitz 3 wolf moon poke iceland four dollar toast paleo jean shorts normcore retro XOXO fixie. Ethical mlkshk skateboard, mixtape squid banh mi cray portland la croix. Hexagon forage celiac 3 wolf moon, gastropub shaman gochujang photo booth pop-up paleo succulents pitchfork."),
      new CardData(new WeakUUIDGeneratorService,"Katy Perry", "Food truck raw denim paleo meditation crucifix tbh hell of leggings. Iceland kitsch poutine bitters gastropub letterpress. Wayfarers portland authentic venmo dreamcatcher four loko single-origin coffee tumeric. Gentrify biodiesel shabby chic enamel pin hexagon flexitarian hot chicken XOXO vinyl selvage drinking vinegar keffiyeh typewriter blog. Banjo heirloom crucifix, offal dreamcatcher green juice put a bird on it mlkshk post-ironic butcher hexagon disrupt."),
      new CardData(new WeakUUIDGeneratorService,"Katy Perry", "Forage health goth flexitarian copper mug post-ironic polaroid. Activated charcoal street art health goth waistcoat, shabby chic iceland shaman raw denim. Hammock farm-to-table shoreditch, mustache disrupt sartorial 3 wolf moon meditation XOXO. Quinoa coloring book gochujang pinterest chillwave bespoke tote bag meditation. Sartorial crucifix truffaut ramps DIY, prism master cleanse leggings occupy glossier lumbersexual. Try-hard godard thundercats poke brunch. Enamel pin succulents fixie, mixtape viral VHS cornhole post-ironic master cleanse."),
      new CardData(new WeakUUIDGeneratorService,"Ra Ra Riot", "Chia gentrify dreamcatcher disrupt tilde direct trade. Hexagon woke ugh affogato next level semiotics. Drinking vinegar schlitz seitan, distillery lo-fi stumptown meditation brooklyn yuccie austin. Ethical irony snackwave butcher hella palo santo cold-pressed affogato wolf kitsch hammock brunch. Enamel pin sriracha flannel, fixie mustache humblebrag ennui pour-over sustainable ethical twee +1 tilde vape."),
      new CardData(new WeakUUIDGeneratorService,"Nove Amor", "Single-origin coffee pork belly chicharrones lo-fi etsy tousled photo booth palo santo marfa. Banh mi meditation offal banjo pickled craft beer. Neutra cloud bread echo park, vaporware tacos roof party disrupt humblebrag. Shoreditch kale chips whatever ramps hashtag chia. Post-ironic pok pok biodiesel jianbing distillery vegan."),
      new CardData(new WeakUUIDGeneratorService,"Tiesto", "Locavore la croix bespoke man bun, vice whatever pug semiotics bitters mumblecore next level post-ironic. La croix paleo iPhone seitan cray actually direct trade ethical banjo flannel ramps. Franzen iceland mumblecore lumbersexual tote bag, meggings gastropub stumptown irony hammock swag. Adaptogen fashion axe echo park retro banjo sustainable. Hashtag kitsch cardigan live-edge, truffaut fingerstache flannel cred raw denim dreamcatcher waistcoat meditation crucifix. Photo booth af microdosing occupy art party. Cliche sartorial mixtape PBR&B twee listicle thundercats iceland scenester la croix."),
      new CardData(new WeakUUIDGeneratorService,"The National", "Irony cred quinoa, echo park jean shorts mixtape dreamcatcher mlkshk meh blue bottle roof party four dollar toast skateboard. Cardigan actually flannel sustainable austin brooklyn artisan subway tile art party schlitz 90's distillery fashion axe next level. Truffaut hammock stumptown twee man bun. Street art quinoa live-edge, forage pinterest squid 90's photo booth vegan fixie yr enamel pin asymmetrical literally butcher. Franzen snackwave taxidermy mustache af. Ugh letterpress everyday carry portland taxidermy authentic disrupt normcore, +1 meh irony marfa adaptogen. Intelligentsia pug forage live-edge, polaroid fam everyday carry shabby chic viral ethical la croix street art organic activated charcoal."),
      new CardData(new WeakUUIDGeneratorService,"Clairo", "Offal hoodie deep v distillery, blog irony live-edge truffaut YOLO. Sriracha vegan biodiesel waistcoat beard shaman. Synth ethical photo booth freegan actually intelligentsia. Kickstarter artisan hell of pork belly franzen celiac marfa flannel."),
      new CardData(new WeakUUIDGeneratorService,"Half Alive", "Trust fund thundercats pok pok ethical affogato chambray kinfolk shabby chic chartreuse hot chicken readymade iPhone brunch tbh tumeric. Literally hella coloring book pug, gochujang gastropub meh small batch williamsburg post-ironic retro craft beer vaporware. Palo santo truffaut drinking vinegar, tousled viral vexillologist flannel marfa. La croix green juice literally tumblr raclette, food truck beard.")
    ];

  }

  public GetSessionCardData(): CardData
  {
    return this.sessionCardData;
  }

  public ClearSessionCardData(): void
  {
    this.sessionCardData = new CardData(this.uuidService, "", "");
  }

  // sends CardData out to the associated component asking for it and who want's it to be rendered
  GetDataObservable(): Observable<CardData[]>
  {
    return this.globalMessageSubject.asObservable();
  }

  // Simply get data for a cache but doesn't watch
  GetDataForCache(): CardData[]
  {
    return this.globalPostStack;
  }

  private ClearPostQueue()
  {
    this.globalPostStack = CardData[0];
  }

  // ----------------------------- All method below should be added to a separate class ---------------------------

  // add new post to the stack and set the new subsject stream head to point to the updated list
  AddNewPost(_cardData: CardData): void
  {
    this.globalPostStack.splice(0, 0, _cardData);
    // set the new stream to be the updated global post stack
    this.globalMessageSubject.next(this.globalPostStack);

    // we need to notify listeners that the stack has been modified and then wait for them to respond 
    this.StackMofifiedState.next(false);
  }

  public SubscribeToStackModificationNotifications(any): void
  {
    // wait for response from 
  } 

  // Delete posts on the globalPostStack via hashID
  public DeletePost(hashID: string): void
  {
    // try to delete, but catch if return is null
    if (this.IDExists(hashID))
      try 
      {
        this.globalPostStack.splice(this.GetCardDataIndexByUUID(hashID), 1)
      }
      catch (e)
      {
        console.log("ERROR: " + e);
      }
  }
  
  public ToggleLikePost(hashId: string): void
  {
    if (this.IDExists(hashId))
      try 
      {
        this.globalPostStack[this.GetCardDataIndexByUUID(hashId)].ToggleLike();
      }
      catch(error)
      {
        console.log(error);
      }
  }

  // checks against the globalPostQueue to see if a hash exists for the hashID in question
  private IDExists(hashID: string): boolean
  {
    for (let k = 0; k < this.globalPostStack.length; k++) 
      if (this.globalPostStack[k].GetHashID() == hashID)
        return true;
    return false;
  }

  // returs index of CardData in globalPostQueue associated with UUID of hashID 
  // returns index if the hash exists, otherwise returns null
  private GetCardDataIndexByUUID(hashID: string): any
  {
    for (let i = 0; i < this.globalPostStack.length; i++) {    
      if (this.globalPostStack[i].GetHashID() == hashID)
        return i;
    }
    return null;
  }

}
