/*    _           _    _                     _ 
     | |         | |  | |                   | |
  ___| | ___  ___| | _| |     ___   __ _  __| |
 / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
 \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
 |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
*/

/*URL for the server logo
Leave it blank to use text instead*/
var l_serverImage = "images/logo.png";

/*Custom server name configuration
Leave it blank for automatic server name*/
var l_serverName = "";

/*Use a video for the background?
Otherwise it will just use images*/
var l_bgVideo = false;

/*Video background
Avaiable options:
"backgrounds/videos/aurora.webm"
"backgrounds/videos/bluefall.webm"
"backgrounds/videos/bluetilefloor.webm"
"backgrounds/videos/bluewhitecircles.webm"
"backgrounds/videos/bokehlens.webm"
"backgrounds/videos/cleanbokeh.webm"
"backgrounds/videos/coldnight.webm"
"backgrounds/videos/colorfulburst.webm"
"backgrounds/videos/dancingstars.webm"
"backgrounds/videos/dropsflares.webm"
"backgrounds/videos/focusorangebokeh.webm"
"backgrounds/videos/glimmering.webm"
"backgrounds/videos/glowingrings.webm"
"backgrounds/videos/greencircles.webm"
"backgrounds/videos/hues.webm"
"backgrounds/videos/inthedeep.webm"
"backgrounds/videos/modernflourish.webm"
"backgrounds/videos/orangeaura.webm"
"backgrounds/videos/warminside.webm"
"backgrounds/videos/yellowgreen.webm"

You can add custom backgrounds
Just make sure it is at webm VP8 format */
var l_background = "backgrounds/videos/glimmering.webm";

/*(Image-background only)
Place one or more images
Multiple images will automatically shuffle between them*/
var l_bgImages = [
	"20180209200606-1_1_orig.jpg",
	"20180211191242-1_orig.jpg",
	"20180211201733-1_orig.jpg",
	"20180217203058-1_orig.jpg",
	"20180215181215-1_orig.jpg",
	"gm-bigcity0013_orig.jpg",
	"gm-bigcity0018-2_orig.jpg",
	"gm-bigcity0039_orig.jpg",
	"gm-bigcity0041_1_orig.jpg",
	"gm-bigcity0141_orig.jpg",
	"gm-bigcity0148_orig.jpg",
	"gm-redrock0005_orig.jpg",
	"gm-redrock0152_orig.jpg",
	"gm-redrock0153_orig.jpg",
	"gm-redrock0154_orig.jpg",
	"gm-spoon0000_orig.jpg"
];

/*Random background images order?*/
var l_bgImagesRandom = true;

/*(Image-background only)
Delay between background images changes
in milliseconds*/
var l_bgImageDuration = 5000;

/*(Image-background only)
Image background fade velocity
in milliseconds*/
var l_bgImageFadeVelocity = 2000;

/*Background darkening amount
0 for none (0%), 100 for pitch black (100%)*/
var l_bgDarkening = 10;

/*Music player
'true' or 'false' to enable music in the background*/
var l_music = true;

/*Display actual song's name?*/
var l_musicDisplay = true;

/*Music playlist
Place how much Youtube IDs/.ogg you want*/
var l_musicPlaylist = [
	{youtube: "YXYYCFaUUHQ", name: "Noisestorm - Heist"},
	{youtube: "YnwsMEabmSo", name: "Marshmello - Alone"},
	{youtube: "QMokMQ8Bu7Y", name: "Pegboard Nerds & Tristam - Razor Sharp"},
	{youtube: "YnopHCL1Jk8", name: "O-Zone - Dragostea Din Tei"},
	{youtube: "JS7S2dVPjXU", name: "Mattafix - Big City Life"},
	{youtube: "KlujizeNNQM", name: "Snoop Dogg - Smoke Weed Everyday"},
	{youtube: "JU9TouRnO84", name: "Rick Ross - Hustlin'"},
	{youtube: "UbQgXeY_zi4", name: "Caravan Palace - Lone Digger"},
	{youtube: "r_9Kf0D5BTs", name: "Twenty One Pilots - Heavydirtysoul"},
	{youtube: "SNE2oCZH_4k", name: "M.O.O.N. - Hydrogen"},
	{youtube: "AVblOqZBlJw", name: "M.O.O.N. - Crystals"},
	{youtube: "8wXRvvGr8Ug", name: "M.O.O.N - Paris"},
	{youtube: "WwoCsaJ5w4A", name: "DJ Striden – Level One"}
];

/*Random music order?*/
var l_musicRandom = true;

/*Music volume
Choose a value between 0 and 100*/
var l_musicVolume = 15;

/*Enable custom messages?*/
var l_messagesEnabled = true;

/*Enter your custom messages below*/
var l_messages = [
"Идет загрузка аддонов..."
];

/*Random message order?*/
var l_messagesRandom = false;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 5000000000000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 10000000000000;
