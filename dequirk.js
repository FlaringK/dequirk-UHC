let logger,store

const logLineRegex = /<span style="color: #([A-Fa-f0-9]+)">([A-Z]+:)(.*?)<\/span>/g

let vriskaWords = [
  ["8ite","8oy","f8ed","8lind","8oys","iiiiiiiim8eciles","h8","8ut","8ugging","8oring","8elieve","8lue","Un8elievable","a8out","8efuddled","we8","8e","suita8ly","dum8","8ring","8ecause","no8ody","8rainstorm","unstoppa8le","re8ound","de8acle","8uddy","8eefgrub","8l8tant","8ed","a8scond","a8sconding","8est","8n","8lazing","cluck8east","8eat","cheapsk8","8onuses","8reak","8etter","8rave","8et","mallea8le","8rain","8ad","Toreadum8ass","8acksta88ing","p8ste","descri8ing","8ecoming","8ranch","8ovine","8ehind","any8ody","impressssssssiona8le","unpalata8le","8rowse","8roken","8lades","8ack","thum8","8utton","o8noxious","pl8y","g8mes","w8s","ch8nge","su8ject","8ig","th8t","terri8le","sno8","8rief","8ye","assh8le","sa8otage","consol8tion","gru8","8road","8esides","idi8t","8lows","m8y8e","l8fe","h8gh","8nd","might8","an8","th8nk","gr8at","m8y88","c8uld","d8n","kn8w","ST8P","DO8NG","B8D","U88888888h","gr8","QU8TE","FIN8","d8dn","th8","w8rd","qu8ck","usu8lly","sne8k","stink8n","littl8","th8r8","m8d","st8pid","godd8mn","fri8nd","8eing","w8ting","8usiness","perpetr8","adora8le","powergra8","8oth","8y","8loods","Gr8","dou8lecrossings","8acksta88ery","8ullshit","Pro8a8ly","muscle8east","g8d","D8n","d8re","every8ody","8argain","Remem8er","mist8kes","r8gret","reserv8tions","ch8nging","d8y","l8ttle","n8thin","8ump","f8ce","ag8in","t8rri8le","some8ody","t8ke","c8n","tr8","dum8ass","ro8ots","fre8king","8all","aw8y","f8ck","May8e","Wh8t","8uddies","Los8r","8eginning","delusion8l","path8tic","8uys","8S","dum8est","8eating","8oyfriend","L8er","A8out","horri8le","8anging","8ang","8it","congratul8","jo8","8luffing","g8me","tog8ther","le8ders","m8ke","wo8ldn","m8de","f8r","8ody","everyth8ng","8arf","8aloney","ri88it","8astard","8oss","8een","8lame","infuri8ing","8othered","S8METHING","sh8uld","he8rt","8loody","sup8r","ro8ot","8lood","op8n","floodg8s","p8nt","envia8le","em8tions","misera8le","h88888888","H8","8ORING","w8","convers8tion","dou8ledealing","s8ving","8ug","8etrayed","a8andonded","decapit8","cra88y","dict8","o8viously","8igshot","a8looded","h8s","Dum8fuck","O8viously","8leeding","sta8happy","dou8le","em8ark","8uilt","8eatiful","8uilding","cre8tive","clim8ing","8ACK","remem8er","8ecome","8rooding","8itch","pro8a8ly","8r8k","Clim8","Cliiiiiiiiim8","8ull","inconsider8","8RAVE","8OTTOM","8asic","fudge8looded","8oor","wo88ly","plum8ing","8uild","8uried","sla8","indent8tion","indent8tions","impressiona8le","manipul8ed","8ossing","8rains","8ending","8other","may8e","ultim8","8igger","8end","8ail","sta88y","h8friend","8elieves","gulli8le","g8","W8ke","8ight","possi8ly","manipul8ting","8eneath","J8de","goo8er","teamm8","8attlefield","exhi8its","civiliz8tion","W8","8efore","ta8le","w8ted","nu8","8ringing","cre8te","o8jectives","cre8ted","incredi8le","un8ecoming","Gru8tu8e","8ookmark","la8el","duplic8","8lock","8ucket","8lushing","8rown","8unch","w8stey","w8stes","8urn","dou8t","str8","outr8geous","8","8ooooooooring","faaaaaaaa8ulous","H8RRY","8P","overa8sconding","fl8ling","num8er","o8session","8urden","8egins","8usy","a8surd","p8y","descri8e","snu88ed","ungr8ful","W8ting","gr8tness","o8vious","responsi8le","fa8ulous","o8sessed","a8le","cre8ting","8itter","appreci8ted","8ecame","No8ody","untoucha8le","8r8ks","incredi8ly","8ored","possi8ility","misera8ly","8yyyyyyyye","8reathe","A8solutely","em8arrassing","em8arrassed","em8arrassment","o8scene","strangul8te","gru8s","insuffera8le","Ro8o","ro8o","nause8ting","trou8le","h8tes","a8ility","a8ilities","8oon8ucks","l8","8eneficial","manipul8","8razenly","laugha8le","tur8o","excruci8tingly","a8solutes","la8","w8ing","f8","8888","8etween","incapacit8ed","frustr8ing","L8ey","L88888888","Horri8le","8lack","vindic8ed","fudge8lood","8asically","8rutal","pro8lems","domin8","repopul8ing","8ackwards","8reezed","8eaten","8lew","8izarre","deterior8ed","8loodthirsty","justifia8le","8elieved","8r8very","rel8","sym8iotic","responsi8ility","alpha8et","Gam8lignants","l8er","ecto8iology","stu88orn","admira8le","8ackup","st8ke","possi8le","facilit8ing","8eeping","deli8er8ly","imagin8tion","vers8tile","8attle","8lackout","8orrow","x8","x8x8x8x8x8x8x8","sta88ed","8reath","indestructi8le","despica8le","8etting","motiv8tion","82THE8TH","8ashful","l8ke","wo8ld","cr8ss","M8n","ev8n","t8lking","th8s","motiv8ting","d8","persu8ed","mutil8ed","tolera8le","L8r","vegeta8le","8ox","8leed","8rilliant","inevita8le","conceiva8le","via8le","good8ye","8locked","8eyond","8lank","8right","8elieeeeeeeeve","8egin","temper8ture","clo88ered","8ook","8a8ies","dou8ting","a8solutely","8ent","8u88le","fore8oding","ostent8ious","8lue8lood","Ro8ots","8locks","inclin8ions","8arely","compara8le","respite8lock","Un8elieva8le","mem8er","for8id","remem8ered","com8ined","devast8ing","8a88ling","neigh8or","NEIGH8or","stum8le","8ury","candid8","unfortun8ly","8ugs","8acksta88ings","8tw","disa8ility","high8loods","8onding","8aggage","dou8tful","8egan","8illions","ha8it","mem8ers","unthinka8le","unknowa8le","trou8lemaker","possi8ilities","Possi8ility","resem8le","su8tle","capa8le","tri8utaries","8ranching","unavoida8le","ar8itrary","honora8le","8anishment","8ioexistential","o8livion","contri8ute","understanda8ly","a8solution","8elieving","cele8rated","trou8led","inexplica8ly","8enefits","su8stitute","8elonged","8ozo","particip8","inexplica8le","humili8ted","unspeaka8le","8rought","altern8te","d8ted","complic8ted","8riefly","8andit","8onked","invaria8ly","escal8tion","insurmounta8le","MAY8E","8lowing","exterimin8ting","8oat","invinci8le","activ8te","8urial","tom8s","squa88ling","explan8tion","frustr8ting","8ULLSHIT","coordin8tes","pir8s","navig8","Constell8tions","destin8tions","situ8tion","hu8ris","88","motiv8tes","indiscrimin8tely","8ogus","cheru8","manipul8tion","presuma8ly","rain8ow","gr8ter","concentr8tions","8lush","descri8ed","calcul8ted","em8arrassingly","8onehead","mum8le","honk8ird","found8tions","Swa88y","pir8tes","negotia8le","8ygones","pro8lematic","duplic8tes","8illion","8efriend","8oats","remem8ering","num8ers","gr8teful","8ravery","no8le","mo8","a8sor8ed","8owing","demonstr8te","8old","8EST","GR8","l8ter","8acks","8ehaving","argument8tive","ASSH8LE","T8LL","S8LF","8SS","G8T","AL8NE","G8ING","Y8U","P8THETIC","PI8CE","WH8SPERING","D8WN","F8R","8RAINS","f8cking","H8W","ME8NINGFUL","RIDD8NCE","8ACKSTA88ING","INGR8TES","E8TS","8LL","WH8T","8ond","appreci8","Pooplord","8ankrupt","pir8","jam8oree","wind8agged","IMPECCA8LE","Amphi8ious","trem8le","o8scure","8orrowed","luxuri8ting","8atch","ins8tia8le","8oon","CH8ST","N8W","HE8R","F8CK","D8DN","W8Y","RELEV8NCE","F8CKING","TH8NK","8Y","C8N","WH8N","8ULLFUCKERY","YO8R","G8MES","W8TH","M8RE","D8Y","EX8CTLY","PRO8A8LY","M8KE","POSSI8LE","8UT","G8NNA","TH8RE","W8W","TH8T","FUCK8NG","K8ND","H8LY","C8MING","H8RSES","A8OUT","G8ES","8ECAME","INTANGI8LE","8ROUGHT","LEVIT8","8RING","ACTIV8","8ECAUSE","intangi8le","8adass","clu8","am8iguous","upd8","horri8ly","associ8tion","8ajillion","noo8","pir8tey","8ookish","dwee8","8ehaviors","8lanket","8oots","implic8tions","8itching","rest8tement","sensi8le","8aller","reson8","lim8o","colla8oration","Possi8ly","implausi8le","re8elling","desper8te","8uy","8eliefs","unrel8ted","repopul8ted","n8ture","8reeze","ostent8tious","rot8ting","8rand","pir8te","dedic8tion","infin8te","determin8tion","enjoya8le","8ird","initi8tive","Presuma8ly","8ecomes","8ear","Grim8ark","consider8te","8ottom","ungr8teful","moder8te","8odies","8eef","8reathers","calcul8ting","8IT","du8ious","comforta8le","st8","imper8tive","resor8tive","capa8ilities","to8acco","8uzzing","nutjo8s","reserv8tion","8u88les","impecca8le","ar8iter","ANY8ODY","consider8tions","8icker","st8ted","8rother","8eautiful","limit8tions","8aton","passion8","la8els","8onus","8eatings","impecca8ly","gar8age","8iggest","contri8utor","vindic8tes","stipul8tion","PROHI8ITS","8alance","incum8ent","de88","8linded","Em8arrassed","A8SOLUTELY","8ullet","goof8alls","Gra8","com8os","8rainless","congratul8tions","8uzz","discerni8le","characteriz8tion","8asis","PRIV8","rel8tionships","a8sor8ing","rel8tionship","8lither","fascin8ting","si8lings","reasona8le","INFEST8TION","comprehensi8le","priv8","8roader","8ar8","appreci8te","ar8itrarily","resitu8ted","convers8tions","accur8tely","com8ination","8lender","8anished","8attleplans","concentr8tion","de8riefing","8OTH","8looded","disa8le","8rings","differenti8","capa8ility","flexi8ility","inexhausti8le","com8atant","n8tive","TROU8LE","origin8ting","cy8ernetic","8oggles","affili8tions","scru8","8argained","ensem8le","8attles","st8tion","mo8ile","communic8tion","8usywork","com8at","mar8les","8EFORE","8anking","immedi8te","design8","di8s","8ought","de8rief","8ozos","num8skulls","clo88ering","8asket","equ8tion","Inform8tion","8ushes","a8sence","gar8led","8one","8reeding","interrel8ted","propag8tion","8lessing","unfathoma8le","8elly","grum8ling","hi8ern8ting","cre8","dict8tor","Ultim8","liva8le","8UY","8earer","glo8e","8asics","Sgru8","8ears","8lindly","incomprehensi8le","disintegr8ted","accommod8ting","8order","pro8lem","dedic8ted","transform8tion","distur8ing","renunci8tion","contri8uting","p8tronizing","a8sorption","NO8ODY","8ITCH","em8odiment","8ar8s","gra8","ji8","managea8le","suggesti8le","appreci8ting","acclim8","8earing","am8itious","respecta8le","go88lefiend","8uffer","vulnera8le","pro8a8ility","activ8","inform8tion","Some8ody","assem8led","motiv8ted","feasi8le"],
  ["bite","boy","fated","blind","boys","iiiiiiiimbeciles","hate","but","bugging","boring","believe","blue","Unbelievable","about","befuddled","web","be","suitably","dumb","bring","because","nobody","brainstorm","unstoppable","rebound","debacle","buddy","beefgrub","blatant","bed","abscond","absconding","best","an","blazing","cluckbeast","beat","cheapskate","bonuses","break","better","brave","bet","malleable","brain","bad","Toreadumbass","backstabbing","paste","describing","becoming","branch","bovine","behind","anybody","impressssssssionable","unpalatable","browse","broken","blades","back","thumb","button","obnoxious","play","games","was","change","subject","big","that","terrible","snob","brief","bye","asshole","sabotage","consolation","grub","broad","besides","idibt","blows","maybe","life","high","and","mighty","and","thank","great","maybe","could","don","knbw","STOP","DOING","BAD","Uuuuuuuh","great","QUITE","FINE","didn","the","word","quick","usually","sneak","stinkin","little","there","mad","stupid","goddamn","friend","being","waiting","business","perpetrate","adorable","powergrab","both","by","bloods","Great","doublecrossings","backstabbery","bullshit","Probably","musclebeast","god","Don","dare","everybody","bargain","Remember","mistakes","regret","reservations","changing","day","little","nothin","bump","face","again","terrible","somebody","take","can","try","dumbass","robots","freaking","ball","away","fuck","Maybe","What","buddies","Loser","beginning","delusional","pathetic","buys","BS","dumbest","beating","boyfriend","Later","About","horrible","banging","bang","bit","congratulate","job","bluffing","game","together","leaders","make","wouldn","made","for","body","everything","barf","baloney","ribbit","bastard","boss","been","blame","infuribing","bothered","SOMETHING","should","heart","bloody","super","robot","blood","open","floodgates","paint","enviable","emotions","miserable","haaaaaaaate","HATE","BORING","wait","conversation","doubledealing","saving","bug","betrayed","abandonded","decapitate","crabby","dictate","obviously","bigshot","ablooded","has","Dumbfuck","Obviously","bleeding","stabhappy","double","embark","built","beatiful","building","creative","climbing","BACK","remember","become","brooding","bitch","probably","break","Climb","Cliiiiiiiiimb","bull","inconsiderate","BRAVE","BOTTOM","basic","fudgeblooded","poor","wobbly","plumbing","build","buried","slab","indentbtion","indentbtions","impressionable","manipulated","bossing","brains","bending","bother","maybe","ultimate","bigger","bend","bail","stabby","hatefriend","believes","gullible","gate","Woke","bight","possibly","manipulbting","beneath","Jade","goober","teammate","battlefield","exhibits","civilizbtion","WAIT","before","table","waited","nub","bringing","create","objectives","credited","incredible","unbecoming","Grubtube","bookmark","label","duplicate","block","bucket","blushing","brown","bunch","wastey","wastes","burn","doubt","straight","outrageous","8","booooooooring","faaaaaaaabulous","HURRY","UP","overabsconding","flailing","number","obsession","burden","begins","busy","absurd","pay","describe","snubbed","ungreatful","Waiting","greatness","obvious","responsible","fabulous","obsessed","able","creating","bitter","appreciated","became","Nobody","untouchable","breaks","incredibly","bored","possibility","miserably","byyyyyyyye","breathe","Absolutely","embarrassing","embarrassed","embarrassment","obscene","strangulate","grubs","insufferable","Robo","robo","nausebting","trouble","hates","ability","abilities","boonbucks","late","beneficial","manipulate","brazenly","laughable","turbo","excrucibtingly","absolutes","lab","waiting","fate","8888","between","incapacitaed","frustrating","Latey","Laaaaaaaate","Horrible","black","vindicated","fudgeblood","basically","brutal","problems","dominate","repopulating","backwards","breezed","beaten","blew","bizarre","deteriorated","bloodthirsty","justifiable","believed","bravery","relate","symbiotic","responsibility","alphabet","Gamblignants","later","ectobiology","stubborn","admirable","backup","stake","possible","facilitating","beeping","deliberbly","imagination","versatile","battle","blackout","borrow","x8","x8x8x8x8x8x8x8","stabbed","breath","indestructible","despicable","betting","motivation","82THE8TH","bashful","like","would","cross","Man","even","talking","this","motivating","date","persuaded","mutilated","tolerable","Later","vegetable","box","bleed","brilliant","inevitable","conceivable","viable","goodbye","blocked","beyond","blank","bright","belieeeeeeeeve","begin","temperature","clobbered","book","babies","doubting","absolutely","bent","bubble","foreboding","ostentbious","blueblood","Robots","blocks","inclinations","barely","comparable","respiteblock","Unbelievable","member","forbid","remembered","combined","devastbing","babbling","neighbor","NEIGHbor","stumble","bury","candidate","unfortunately","bugs","backstabbings","btw","disability","highbloods","bonding","baggage","doubtful","began","billions","habit","members","unthinkable","unknowable","troublemaker","possibilities","Possibility","resemble","subtle","capable","tributaries","branching","unavoidable","arbitrary","honorable","banishment","bioexistential","oblivion","contribute","understandably","absolution","believing","celebrated","troubled","inexplicably","benefits","substitute","belonged","bozo","participate","inexplicable","humiliated","unspeakable","brought","alternate","dated","complicated","briefly","bandit","bonked","invariably","escalation","insurmountable","MAYBE","blowing","exteriminating","boat","invincible","activate","burial","tombs","squabbling","explanation","frustrating","BULLSHIT","coordinates","pirates","navigate","Constellations","destinations","situation","hubris","bait","motivbtes","indiscriminbtely","bogus","cherub","manipulation","presumably","rainbow","greater","concentrations","blush","described","calculated","embarrassingly","bonehead","mumble","honkbird","foundations","Swabby","pirates","negotiable","bygones","problematic","duplicates","billion","befriend","boats","remembering","numbers","grateful","bravery","noble","mob","absorbed","bowing","demonstrate","bold","BEST","GREAT","later","backs","behaving","argumentative","ASSHOLE","TELL","SELF","ASS","GET","ALONE","GOING","YOU","PATHETIC","PIECE","WHISPERING","DOWN","FAR","BRAINS","fucking","HOW","MEANINGFUL","RIDDANCE","BACKSTABBING","INGRATES","EATS","ALL","WHAT","bond","appreciate","John","bankrupt","pirate","jamboree","windbagged","IMPECCABLE","Amphibious","tremble","obscure","borrowed","luxuribting","batch","insbtiable","boon","CHEST","NOW","HEAR","FUCK","DIDN","WHY","RELEVENCE","FUCKING","THANK","BY","CAN","WHEN","BULLFUCKERY","YOUR","GAMES","WITH","MORE","DAY","EXACTLY","PROBABLY","MAKE","POSSIBLE","BUT","GONNA","THERE","WOW","THAT","FUCKUNG","KIND","HOLY","COMING","HORSES","ABOUT","GOES","BECAME","INTANGIBLE","BROUGHT","LEVITATE","BRING","ACTIVATE","BECAUSE","intangible","badass","club","ambiguous","update","horribly","associbtion","bajillion","noob","piratey","bookish","dweeb","behaviors","blanket","boots","implications","bitching","restatement","sensible","baller","resonate","limbo","collaboration","Possibly","implausible","rebelling","desperbte","buy","beliefs","unrelated","repopulated","nature","breeze","ostentatious","rotating","brand","pirate","dedication","infinite","determination","enjoyable","bird","initiative","Presumably","becomes","bear","Grimbark","considerate","bottom","ungrateful","moderate","bodies","beef","breathers","calculating","BIT","dubious","comfortable","state","imperative","resorative","capabilities","tobacco","buzzing","nutjobs","reservation","bubbles","impeccable","arbiter","ANYBODY","considerations","bicker","stated","brother","beautiful","limitations","baton","passionate","labels","bonus","beatings","impeccably","garbage","biggest","contributor","vindicbtes","stipulation","PROHIBITS","balance","incumbent","debate","blinded","Embarrassed","ABSOLUTELY","bullet","goofballs","Grab","combos","brainless","congratulations","buzz","discernible","characterization","basis","PRIVATE","relationships","absorbing","relationship","blither","fascinbting","siblings","reasonable","INFESTATION","comprehensible","private","broader","barate","appreciate","arbitrarily","resituated","conversations","accurately","combination","blender","banished","battleplans","concentration","debriefing","BOTH","blooded","disable","brings","differentiate","capability","flexibility","inexhaustible","combatant","native","TROUBLE","originating","cybernetic","boggles","affilibtions","scrub","bargained","ensemble","battles","station","mobile","communication","busywork","combat","marbles","BEFORE","banking","immediate","designate","dibs","bought","debrief","bozos","numbskulls","clobbering","basket","equation","Information","bushes","absence","garbled","bone","breeding","interrelated","propagation","blessing","unfathomable","belly","grumbling","hibernbting","creb","dictator","Ultimate","livable","BUY","bearer","globe","basics","Sgrub","bears","blindly","incomprehensible","disintegrbted","accommodbting","border","problem","dedicated","transformation","disturbing","renunciation","contributing","patronizing","absorption","NOBODY","BITCH","embodiment","barbs","grab","jib","manageable","suggestible","appreciating","acclimate","bearing","ambitious","respectable","gobblefiend","buffer","vulnerable","probability","activate","information","Somebody","assembled","motivated","feasible"]
]
let araneaWords = [
  ["8e","8eing","8ut","8lue","a8out","8lood","a8ilities","terri8ly","a8used","a8ility","considera8ly","8ecause","8lew","8rain","8efore","8egin","8it","8rief","8u88le","8elieve","8eginning","8ridge","8etween","8oth","re8oots","8ring","sta8ility","8y","8asics","8oring","8ack","may8e","em8arrassed","explica8le","8een","o8ject","lika8ility","Pro8a8ly","dou8t","possi8ly","descri8e","a8le","8eyond","8ad","8est","over8earing","a8use","responsi8ilities","pream8le","8loods","jo8","8elow","responsi8ility","8ig","indestructi8ility","8ecome","com8at","8riefly","pro8a8ly","Remem8er","incredi8le","pro8lems","o8ligation","a8dicated","8ecame","o8sessed","Every8ody","8et","num8er","8uilt","su8tle","sta8s","8lack","8illion","8oonies","May8e","comprehensi8le","inevita8le","8EEN","8ed","8arely","8ackstory","responsi8le","8UILDING","ela8oration","m8sprit","8uddy","ro8otic","high8lood","8anished","8eat","No8ody","una8le","terri8le","re8ellion","8linding","8r8ks","su8ject","pir8te","pir8","gr8","8oss","8ystanders","a8ridged","em8raced","indestructi8le","a8solute","8ehest","8ored","8atterwitch","W8","ST8P","com8ined","8etter","capa8ilities","8ehind","8eforus","reasona8ly","8elong","unpalata8le","8eings","8ehavior","8rought","8oarded","cheru8s","cheru8","m8","num8ers","near8y","matur8tion","predomin8tion","w8","reserv8tions","8egins","8eginnings","8egan","inexplica8ly","8ody","irresisti8le","pup8","vacill8ting","descri8ed","isol8tion","o8sessive","insuffera8le","8rat","a8andon","oper8ting","conspir8tors","exasper8tion","colla8or8tive","assassin8ted","8rother","cooper8tive","com8in8tion","cre8tive","8ecomes","insurmounta8le","8oon","impossi8le","8ears","unrecogniza8le","8lotted","w8ting","em8ark","excruci8tingly","em8oldened","num8ing","W8ting","Yalda8aoth","inhospita8le","tempt8tion","am8ition","8enefit","unfathoma8le","8estowed","im8ued","transform8tion","8ecoming","gener8","8r8k","8last","or8it","de8ris","st8","gravit8tional","ultim8tely","8om8","deton8","design8ted","loc8tion","8attle","Fortun8tely","accumul8ted","fascin8ting","8reed","8lame","captiv8ting","scintill8ting","pro8lem","8roached","o8essive","ingrati8ting","admir8tion","imagina8le","complic8ted","implic8tions","sym8ols","8ets","su8tly","esta8lished","com8in8tions","sta8le","procre8tion","8lessed","ela8orate","culmin8ting","m8ting","8isexual","questiona8le","8ehaving","gr8ter","o8scure","fa8les","8elonged","releg8ting","o8scurity","f8","o8served","fa8le","8ard","possi8le","appreci8","l8tely","initi8tive","no8ody","assem8ling","altern8","8oat","cre8ted","invinci8le","8r8king","8eget","8esides","a8undantly","Good8ye","manipul8","remem8er","where8y","o8stacles","8","8oundaries","inappropri8te","altern8tive","impenetra8le","su8due","8orrowing","mem8er","8EG","situ8tion","solicit8tion","Unfortun8tely","reciproc8","compati8le","8othersome","em8ellish","invisi8le","intangi8le","trou8lemaker","8n","convers8tion","resem8lance","8enevolent","reput8tion","explan8tions","inevita8ly","honora8le","8lather","underestim8ted"],
  ["be","being","but","blue","about","blood","abilities","terribly","abused","ability","considerably","because","blew","brain","before","begin","bit","brief","bubble","believe","beginning","bridge","between","both","reboots","bring","stability","by","basics","boring","back","maybe","embarrassed","explicable","been","object","likability","Probably","doubt","possibly","describe","able","beyond","bad","best","overbearing","abuse","responsibilities","preamble","bloods","job","below","responsibility","big","indestructibility","become","combat","briefly","probably","Remember","incredible","problems","obligation","abdicated","became","obsessed","Everybody","bet","number","built","subtle","stabs","black","billion","boonies","Maybe","comprehensible","inevitable","BEEN","bed","barely","backstory","responsible","BUILDING","elaboration","matesprit","buddy","robotic","highblood","banished","beat","Nobody","unable","terrible","rebellion","blinding","breaks","subject","pirate","pirate","great","boss","bystanders","abridged","embraced","indestructible","absolute","behest","bored","batterwitch","WAIT","STOP","combined","better","capabilities","behind","beforus","reasonably","belong","unpalatable","beings","behavior","brought","boarded","cherubs","cherub","mate","numbers","nearby","maturbtion","predominbtion","wait","reservbtions","begins","beginnings","began","inexplicably","body","irresistible","pupate","vacillbting","described","isolbtion","obsessive","insufferable","brat","abandon","operbting","conspirbtors","exasperbtion","collaborbtive","assassinbted","brother","cooperbtive","combinbtion","crebtive","becomes","insurmountable","boon","impossible","bears","unrecognizable","blotted","waiting","embark","excrucibtingly","emboldened","numbing","Waiting","Yaldabaoth","inhospitable","temptbtion","ambition","benefit","unfathomable","bestowed","imbued","transformbtion","becoming","generb","break","blast","orbit","debris","state","gravitational","ultimately","bomb","detonate","designated","location","battle","Fortunately","accumulated","fascinating","breed","blame","captivating","scintillating","problem","broached","obessive","ingratiating","admiration","imaginable","complicbted","implicbtions","symbols","bets","subtly","established","combinbtions","stable","procrebtion","blessed","elaborate","culminbting","mating","bisexual","questionable","behaving","greater","obscure","fables","belonged","relegbting","obscurity","fate","observed","fable","bard","possible","appreciate","lately","initiative","nobody","assembling","alternate","boat","credited","invincible","breaking","reget","besides","abundantly","Goodbye","manipulate","remember","whereby","obstacles","8","boundaries","inappropriate","alternative","impenetrable","subdue","borrowing","member","BEG","situation","solicitation","Unfortunately","reciprocate","compatible","bothersome","embellish","invisible","intangible","troublemaker","ain","conversbtion","resemblance","benevolent","reputbtion","explanbtions","inevitably","honorable","blather","underestimbted"]
]

const dequirks = {
  aradia: string => string.replace(/0_0/g, "%%%").replace(/0/g, "o").replace(/%%%/g, "0_0"),
  tavros: string => string,
  sollux: string => string.replace(/2/gi, "s").replace(/ii/gi, "i").replace(/two/gi, "to"),
  karkat: string => string,
  nepeta: string => string.replace(/ee/gi, "33"),
  kanaya: string => string,
  terezi: string => string.replace(/4/gi, "A").replace(/1/gi, "I").replace(/3/gi, "E"),
  vriska: string => {
    const wordlist = string.split(/[^A-Za-z0-9]/g)
    for (let i = 0; i < wordlist.length; i++) {
      const word = wordlist[i]
      if (vriskaWords[0].includes(word)) string = string.replace(word, vriskaWords[1][vriskaWords[0].indexOf(word)])
    }
    return string
  },
  equius: string => string.replace(/100/gi, "loo").replace(/001/gi, "oo1").replace(/%/gi, "x"),
  gamzee: string => string,
  eridan: string => string.replace(/ww/gi, "w").replace(/vv/gi, "v"),
  feferi: string => string.replace(/\)\(/gi, "h").replace(/-.+?E/gi, "E"),
  aranea: string => {
    const wordlist = string.split(/[^A-Za-z0-9]/g)
    for (let i = 0; i < wordlist.length; i++) {
      const word = wordlist[i]
      if (vriskaWords[0].includes(word)) string = string.replace(word, vriskaWords[1][vriskaWords[0].indexOf(word)])
    }
    return string
  },
  meenah: string => string.replace(/\)\(/gi, "H").replace(/-.+?E/gi, "E"),
}

const standardOption = [
  {
    value: "none",
    label: "Keep quirk"
  },
  {
    value: "dequirk",
    label: "Remove subsitutions in quirk"
  },
  {
    value: "dequirk_case",
    label: "Remove subsitutions and apply normal letter casing"
  }
]

const listOfTrolls = ["aradia", "tavros", "sollux", "karkat", "nepeta", "kanaya", "terezi", "vriska", "equius", "gamzee", "eridan", "feferi", "aranea", "meenah"]
const listOfHandles = ["AA", "AT", "TA", "CG", "AC", "GA", "GC", "AG", "CT", "TC", "CA", "CC", "FK", "FC"]

let trollKeys = {}
let modSettings = []
listOfTrolls.forEach((troll, index) => {
  if (dequirks[troll]) {
    modSettings.push({
      model: troll,
      label: troll.toUpperCase(),
      options: standardOption
    })
    trollKeys[troll.toUpperCase()] = troll
    trollKeys[listOfHandles[index]] = troll
  }
})

let selectedOptions = {}

// === Functions

const toPageString = pageNumber => pageNumber < 10000 ? `00${pageNumber}` : `0${pageNumber}`
const toProperCase = string => " " + string.charAt(1).toUpperCase() + string.slice(2).toLowerCase().replace(/\. [a-z]/g, s => s.toUpperCase() )
const quirikProcess = (match, p1, p2, p3) => {
  const troll = trollKeys[p2.slice(0, -1)]
  const userOptions = selectedOptions[troll] ? selectedOptions[troll].split("_") : []

  let text = p3

  for (let i = 0; i < userOptions.length; i++) {
    const option = userOptions[i]

    switch (option) {
      case "dequirk":
        text = dequirks[troll] ? dequirks[troll](text) : text
        break;
      case "case":
        text = toProperCase(text)
        break;
    }
    
  }

  return `<span style="color: #${p1}">${p2 + text}<\/span>`
}

// === Mod

// let vriskawords = []
// const vriskaLines = /<span style="color: #005682">(ARANEA:)(.*?)<\/span>/g
// let getVriskaWords = (match, p1, p2) => {
//   const wordlist = p2.split(/[^A-Za-z0-9]/g)
//   for (let i = 0; i < wordlist.length; i++) {
//     const word = wordlist[i]
//     if (word.includes("8") && !vriskawords.includes(word)) vriskawords.push(word)
//   }
// }

module.exports = {
  title: "DeQuirk", 
  author: "FlaringK (<a href='https://flaringk.github.io/Portfolio/'>Here's my uber cool site</a>)",
  modVersion: 0.1,

  summary: "Removes quirks from trolls on a troll by troll basis (See options)",
  description: `<p>Pretty simple mod, removes quirks on a troll by troll basis. Currently this does not work within flash games. Most trolls (and humans) will still have incorrect casing and missing puncuation due to how they type.</p>
  <h3>Changing the below options will require a full reload [ctrl + r]</h3>`,

  settings: {
    radio: modSettings
  },

  computed(api) { 
    logger = api.logger
    store = api.store

    for (let i = 0; i < listOfTrolls.length; i++) {
      const troll = listOfTrolls[i];
      selectedOptions[troll] = store.get(troll)
    }

    logger.info(selectedOptions)
  },
  
  edit(archive) {
    // For every page
    for (let i = 1901; i < 9999; i++) {
      const pageString = toPageString(i);
      // if the page exists (prevents certain errors)
      if (archive.mspa.story[pageString]) {

        archive.mspa.story[pageString].content = archive.mspa.story[pageString].content.replace(logLineRegex, quirikProcess)

        // archive.mspa.story[pageString].content.replace(vriskaLines, getVriskaWords)

      }
    }

    // archive.mspa.story["001901"].content += "<br><br>" + JSON.stringify(vriskawords)

  }

}
