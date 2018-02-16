# Introduktion till webbutveckling, teori

## Del 1: Grunderna

### HTML + CSS
* Omöjligt att prata om webbsidans grunder utan att nämna dess mest grundläggande beståndsdelar.
* Det här måste man kunna båda som webbutvecklare. Det finns inga alternativ till dessa tekniker på klientsidan.
* …men det är relativt lätt att lära sig 😉

### HTML
* Markup, hierarkisk struktur utan logik. Beskriver strukturen hos en webbsida. ”Substantiv” - knapp
* DOM är en objektmodell som är hierarkisk och plattformsoberoende. Dynamisk access gör att vi kan modifiera dokumentmodellen och dess innehåll.
* HTML5 är den nya standarden, det finns ingen anledning att använda något annat.
* Iframe -> html-dokument inbäddat i ett annat htlm-dokument .

### CSS
* Presentation av ett strukturerat element. ”Adjektiv” - En BLÅ knapp
* CSS selectors bestämmer presentation genom att mappa mot html-taggar.
* CSS3 är den nya standarden, det finns ingen anledning att använda något annat.
* Media queries används för att skapa en respons sida som fungerar på olika skärmupplösningar.

### JavaScript
* Klientsidespråket för webben, även server side med nodejs. All logik hanteras med JavaScript. ”Verb” - En blå knapp SOM LOGGAR IN EN ANVÄNDARE.
* Även server side med NodeJS.
* ECMAscript i sig är en standardiserad specifikation för ett scriptingspråk som sedan namngavs JavaScript. JavaScript är baserat på ECMAscript.
* Ofta lite bespottat av utvecklare som inte kodar web. Det dåliga ryktet håller på att tvättas bort i och med senare publicerade versioner.
* Flera publicerade versioner, precis som av Java. 
* ES6 är för JS vad Java 8 var för Java.
* Dynamiskt, svagt typat och singeltrådat.

### Javascript in a nutshell
* Datatyper & objekt
* Funktioner, iterationer, villkor, operationer…
* Eventhantering
* Läsa till/från DOM:en
* Manipulera DOM:en
* API-anrop
* Hanterar format som JSON, XML m.m.
* Sessioner / Cookies - lokalt persistens i browsern

### Typer av JavaScript
* ES6(+)/ES2015(+) - Använd detta! 😀
* TypeScript - Objekorienterad JavaScript 😀
* CofeeScript 😐
* jQuery 😐

### Hur fungerar webben?
1. Anslutning via en Internet Service Provider (ISP) 
2. Vi matar in ett domännamn i browsern
3. Datorn kontaktar ett servernätverk, Domain Name System (DNS)
4. Vi kopplar upp oss mot webservern via IP-adressen vi får från DNS
5. Webservern skickar tillbaka webbsidan som tolkas av browsern.

### Web Browsers
* Hämtar, tolkar och återger HTML-dokument
* Alla browsers har en egen JavaScript-motor
* Alla browsers har en egen renderingsmotor
* …vilket kan leda till kompabilitetsproblem som gör att vi måste använda oss av polyfills och vara noga med att testa av våra applikationer i flera miljöer.
* Det finns specifika Verktyg & Plug-ins för alla browsers
* Dom flesta browsers finns även i utvecklarversioner (Chrome Canary, Firefox developer…)
* Chrome har gått om IE som den populäraste browsern

### User Experience
* Det finns nära beröringspunkter mellan UX och webbutveckling.
* Presentation är viktigt för slutanvändaren! Det finns ett stort affärsperspektiv här. 
* Lite UX måste man kunna som webutvecklare. Sådana frågor kommer att komma från kund och det är bra att kunna delta i sådana diskussioner redan på krav-nivå. Vi kan avgöra hur svårt det är att utveckla även om det nödvändigtvis inte är vi som designar själva gränssnitten.

### Frontend-ramverk
* Bootstrap
* Foundation
* Materialize

#### Vad gör ett fronend-ramverk?
* CSS design out-of-the-box
* Gridbaserade strukturer
* Responsiva gränssnitt
* Tillhandahåller hjälpklasser & widgets

### JavaScript-ramverk
* React
* AngularJS
* Ember
* Vue.js
* Elm
* Meteor

#### Vad gör ett JavaScript-ramverk?
* Templateing
* Databinding
* Routing
* State-hantering
* Vi använder mer eller mindre ALLTID js-ramverk
* React är det ramverk som har vuxit sig starkast under dom senaste åren och blivit väldigt populärt.
* Vi kommer inte gå in mer i detalj på detta under den här kursen, det har vi inte tid med!

### CSS precompressors
* Sass
* Less
* CSS med stöd för t.ex. variabler och export/import

### Linters
* Ett kvalitétsvertyg. Samlar alla utvecklare kring en standard och upptäcker eventuella brister i koden.
* De flesta IDE och editors har stöd för att se till att du följer vald linter.
* ESLint
* CSSLint
* TSLint
* JSHint

### Typcheckning
* Objektorienterad JavaScrip med stöd för t.ex. interface och deklaration av domänobjekt.
* Bra för utvecklare som vidare har haft svårt att ta till sig JavaScript.
* TypeScript
* Flow

### Chrome Dev Tools
* Debugging för webklienter.
* Stöd för loggning, breakpoints m.m.
* Här kan vi även inspektera vår nätverkstrafik och vilka filer som körs av browsern.

### MDN
* Den närmsta en API-dokumentation för HTML, CSS och JS som vi kan komma.

### Bildbehandling
* Bra att kunna hantera för att läsa ut css och presentationsdetaljer.
* Vi behöver inte vara några experter på detta, men det är bra att ha lite basic knowledge
* Photoshop
* Pixelmator
* Sketch 
* Gimp

### NPM
* Ett CLI och en onlinedatabas med publika paket
* Här återfinns enorma mängder tredjepartmoduler.

### NPM som byggverktyg
* `npm init -> package.json`
* `npm install` installerar externa moduler från npm. Beroendet sparas i `package.json`
* `package.json` är för ett webbprojekt vad pom-filen är för ett Maven-projekt.
* `npm run *scriptname*` kör ett npm-scrip.
* Alla npm scripts ligger under `scripts` i `package.json`.
* Yarn är ett alternativ till npm som är lite samma sak fast ändå inte.

## Del 2: Kommunikation över HTTP och JavaScript-moduler
### Livet som klient
* Nätverksmodellen client -> server är applicerbar oavsett vilken klient jag utvecklar.
* Det är upp till klienten att avgöra när, var och hur den ska hämta datan och hur den ska presenteras och behandlas för slutanvändaren.
* Jag behöver nödvändigtvis inte alltid känna till hela arkitekturen som är bakomliggande.
* Kilenter har olika hård/mjuk-vara och olika uppkopplingar, men kommunikationen mot API är liknande.

### Att prata HTTP
#### Protokollet HTTP
* www är ett informationsnätverk och http är ett protokoll på applikationsnivå används för att överföra webbsidor och dess beståndsdelar (HTML-filer, fonter, css, bilder…).
* HTTP bygger på ett förfrågan/svar-förfarande mellan klient och server via TCP (The Transmission Control Protocol) /IP.
* HTTP finns i olika versioner och är baserade på olika specifikationer av RFC.

#### HTTP vs. HTTPS
* HTTPS är krypterad datatransport som är till för att klienten ska kunna lita på webbservern.
* HTTPS ska alltid användas vid känsliga överföringar. Inloggning/Privat information, t.ex. 
* För att anses som betrodd måste tredjeparten tillhandahålla ett digitalt certifikat.

#### XHR
* XMLHttpRequest - ett api för att överföra markup och annat textbaserad information över http. Synkront eller asynkront.
* Fetch API, async/await m.fl. använder detta under ytan.
* Om man öppnar upp Chrome web tools -> Network så kan man filtrera på XHR för att se vilken kommunikation som har skett via XHR.

### API-anrop, request
* Klienten skickar: Request-metod, URI, Protokollversion och ofta ett MIME-meddelande med extra information som API:et vill ha.
* MIME kan innehålla klientinformation, request body.

#### Request Line
* Request-URI: `https://api.com...`
* Protokollinformation: `HTTP...`
* Request-metod: `GET, PUT, POST, DELETE...`

#### Request Headers
* Request modifier, extra information som t.ex. `User-Agent, Host, Accept-Language...`. Även custom fields som kan innehålla konfidentiell information som man kanske inte vill skicka med i bodyn. API-nyckar, t.ex.

#### Request body
* Body är extra data som vi skickar med. Ofta JSON och då är det specat som Content-Type. Ex. data från ett formulär som vi vill stoppa in i en databas.

#### Exempel

```
GET https://api.com HTTP/1.1 
------------------------------------ Request line
Host: www.test.com
Accept: image/gif, html, */*
Accept-Language: en-us
Accept-Encoding: gzip, deflate
User-Agent: Mozilla/4.0
Content-Type: application/json
Content-Length: 35
------------------------------------- Request headers
{
	"userId": "1234",
	"userName": "Ziggy Stardust"
}
------------------------------------- Request body
```

### API-anrop, response

#### Statuskoder
En tresiffrig kod som gör så att klienten kan detektera hur lyckat anropet var.

* `1xx` - Infromational
* `2xx` - Successful
* `3xx` - Redirection
* `4xx` - Cilent error
* `5xx` - Server error

#### Respons headers
* Extra information som servern skickar med som vi på klientsidan kan vara intresserade av att veta.

#### Responsformat på response body
* JSON, HTTP, HTML, text…
* Det här är datan som vi sedan behandlar på klientsidan.


### Exempel
* Öppna upp terminal/kommandotolk och kör följande kommando: `curl -i https://api.github.com/users/octocat`. Här gör vi ett API-anrop mot GitHub och kan tydligt se hur responset ser ut.
* Postman är ett bra verktyg för att testa att göra API-anrop 👍

### Synkrona/asynkrona anrop
* Synkrona anrop inväntar respons innan fortsatt exekvering.
* Asynkrona anrop fortsätter exekveringen och använder sig ofta av en callback då responset är mottagit. 
* JavaScript körs på en tråd vilket skapar ett behov att skriva non-blocking code. Vi vill inte blockera runtime i normalfallet.
* Ex. på tekniker vi använder för att göra anrop: AJAX, Promises, async/await, FetchAPI.

### Exempel, Promises

```javascript
function wazzupInTheHood() {
	const promise = new Promise((resolve, reject) => {
		const allGoodInTheHood = getGoodInTheHoodStatus();
		
		if (allGoodInTheHood) {
			const walletContent = {
				creditCards: ['VISA', 'AMEX', 'MastahCard'],
				money: Infinity
			};
			resolve(walletContent);
		} else {
			reject(new Error('You outta here, fool'));
		}
	});

	return promise;

	//Client
	wazzupInTheHood()
		.then(wallet => buyBabyClothes(wallet))
		.else(error => {
			robBank();
			console.error(`Error in the hood: ${error}`);
		});
}
```  

Promises har 3 states:
1. Promise pending (Du vet inte om det är good in the hood än)
2. Promise resolved (GoodInTheHood - vi har fått ett svar tillbaka)
3. Promise rejected (NoGoodInTheHood - vi får ett error tillbaka)

### Exempel, Fetch

```javascript
function getStarWarsCharactersById(id) {
	return fetch(`https://swapi.co/api/people/${id}`)
		.then(response => response.json())
		.then(jsonResponse => {
			// Behandla data... 
		})
		.catch(error => {
			// Behanda error...
		});
}
```

`fetch` kommer att returnera ett Promise.

### Content Security Policy (CSP)
* Förhindrar XSS, Code Injection m.m.
* En säkerhetsstandard från serverns sida, klienten har brutit mot en regel som säger att du inte är en klient som vi litar på.

#### Hantera CSP
* CORS: Cross-Origin Resource Sharing, sätter upp regler för hur klinter utanför webserverns egen domän ska kunna nå innehållet. Klienten försöker hämta data som ligger utanför dess egen domän. Servern kan här vitlista inkommande hosts.
* Proxy: mappar klienten mot en annan address
* JSONP. Wrappar anropet med en callback. Detta är en säkerhetsbrist, så använd inte detta! ☠️

### Moduler
* En modul är en fil med en eller flera funktioner inuti sig som man kan göra tillgänglig i andra filer eller applikationer. Detta leder till lösare koppling. 
* En viktig del i den moderna JavaScripten.
* Gör det lättare att sätta upp systemkartor och kodarkitektur även på JavaScript-nivå.
* Tidigare behövde man ha koll på ordningen i vilken koden exekveras om man vill dela upp projektet.

#### Moduldefinitioner
* CommonJS(2)
* AMD
* ES5 - moduler
* ES6 - moduler (ES6 har stöd för inbyggda moduler)

### Exportera
Moduler exporteras via named export eller default exports.
```javascript
	/*
		NAMED EXPORTS
	*/
	// exportera en tidigare deklarerad funktion
	export { myFunction };
	// exportera en konstant
	export const foo = "bar";
	// exportera en funktion
	export const add = (num1, num2) => {
		return num1+num2;
	}

	/*
		DEFAULT EXPORTS
	*/
	// Export default av en function
	export default () => {/*...*/}
	// Export default av en klass
	export default class {/*...*/}
```

### Importera
```javascript
	/*
		IMPORTERA DEFAULT EXPORTS
	*/
	import defaultExport from "module-name";
	import * as name from "module-name";
	/*
		IMPORTERA NAMED EXPORTS
	*/
	import {foo} from "module-name";
	import {add} from "module-name";
	/*
		...eller båda två
	*/
	import defaultExport, {foo} from "module-name";
```
I exempelkoden ovan så är `module-name` den lokala sökvägen till en modul vi vill importera.

### Uncle Bob
_Two classes, components or modules are coupled when at least one of them uses the other. The less these items know about each other, the looser they are coupled_

## Del 3: Den moderna webbutvecklingen
### States
* Vi har i den moderna webben flyttat över mycket av logiken från server side till klient side.
* States innebär att vi håller reda på hur en parameter ter sig för tillfället och kan sedan applicera det på dom-förändringar och javascript runtime.
* Vi prenumererar på förändringar som kan påverka vårt state som vi lyssnar på. Jämför _Observer_ och _State_ pattern från den klassiska boken ”Design Patterns”.

### State Management, tekniker
	* Redux & Flux (speciellt bra om man jobbar med React)
	* RxJS (reactive programming, även applicerbart på Java)
	* VueX (om man jobbar med Vue.js)
	
### Byggverktyg
* Webpack (utan tvekan mest populärt just nu)
* Parcel
* Browserify
* Gulp

### Vad gör ett byggverktyg?
* Gör så att vi paketerar källkoden i ett format som browsern förstår.
* Webbstandarden ligger hästlängder före browserutvecklingen, som inte förstår t.ex. kod skriven i JS-ramverk -> Vi behöver ett stöd för att kunna köra denna kod -> Enter Webpack!
* Alla JavaScript-filer paketeras till **en** bundle-fil, ex. `bundle.js`
* Vi bundlar även css, bilder o.s.v.
* Minifiers och uglyfiers gör så att källkoden blir oläslig. Gör detta då koden trycks ut i en produktionsmiljö!

### Babel
* En transplier som översätter JavaScript skriven i ES6 till ES5, som alla browsers kan förstå.

### Moderna koncept/features
* Server-side-rendering
* Progressive Web Apps (PWA)
* Code Splitting
* Mobile first
 
### Moderna verktyg
* Hot/Live reloading
* Lodash
* Lighthouse (testverktyg för PWA:er)
* Emmet

### IDE vs. Text Editor
Nu för tiden har vi bra stöd för att koda web!
* IntelliJ
* WebStorm
* VSCode
* Atom
* Sublime
* Vim 🤓

### Frontend? Backend? Webb? Vad kan vi?
* Modern webb är ett brett och spännande område!
* Vi som sitter i webteamet sitter på lite blandade kunskaper och uppdrag, men ingen kan allt och ingen behöver kunna allt!
* Det viktigare är att vara nyfiken och kunna adaptera sig till nya tekniker!
* Var inte rädda för alla tekniker vi name:droppat i den här presentationen! Det är inte meningen att du ska vara fullärd nu. 

#### Tekniker för oss webbutvecklare, i urval
* JavaScript
* JavaScript-ramverk
* NodeJS
* Java
* DevOps
* Unix
* Native Mobile
* UX
* Systemarkitektur
* …och så vidare


## Del 4: Test 
### Testramverk för JavaScript
* Mocha 
* Jest 
* Jasmine
* Cucumber

### Varför ska jag testa min JavaScrip?
* Frontend är kvalitativt!
* Det är lika viktigt att testa som resten av kodstacken.
* Lämna inga gråzoner! Om du inte har tester på din client side-kod så kan du aldrig påstå att du arbetar testdrivet och att hela din techstack är säkrad.
* Du kan få ut testrapporter och test coverage för din JavaScript på samma sätt som för andra språk, viket gör att du kan monitorera testanalyser.

### Testa din DOM
* DOM:en kan enhetstestas med shallow rendering eller snapshot testing, vilken jämför markupen och detekterar förändringar.
* Seleniumtester testar användarscenarion i olika browsers och olika miljöer och kan ge ett rent grafiskt testresultat i form av snapshots och inspelade videosnuttar. Detta agerar då också som en form av integrationstester.
* Selenuim drivers: Local_Virtuella Maskiner_Headless (ingen grafisk output)
* Det finns onlinetjänster som persisterar en katalog av selenumtester som gör att man kan gå in och se hur olika scenarion ser ut i olika browsermiljöer. Detta kan vara av stor nytta för t.ex. produktägare och stakeholders. Exempel på sådana tjänster är Browserstack och Saucelabs.

### Användartester
* Se till att utföra användartester regelbundet, och så gärna med en blandad målgrupp. Olika typer av feedback är otroligt viktigt då användare ofta upptäcker saker som vi utvecklare inte har tänkt på.
* Tänk på att testa webklienter på olika typer av enheter (desktop, tablet, mobil). Vi bygger ofta gränssnitt som ska fungera vid olika skärmupplösningar, olika skärmstorlekar och olika uppkopplingar, så därför är det viktigt att man inte alltid testar sin applikation på sin utvecklarmaskin.


## Del 5: Diskussion
### Vart är webben på väg?
### Vad är skillnaden på en webbutvecklare och en webbdesigner?
### Hur lär man sig webbutveckling?
### Tips på bra kunskapskällor!
* egghead.io
* udemy.com
* wesbos.com
* safaribooksonline.com
* medium.com
 


