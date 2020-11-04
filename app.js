function Artist (name,country,genre,lyric){
    this.name = name;
    this.country = country;
    this.genre = genre;
    this.lyric = lyric;
}
let artists = [];

const artist1 = new Artist("Lee Hazlewood","Usa","Country, Folk, Pop",
 "Strawberries, cherries and an angel's kiss in spring. My summer wine is really made from all these things.");

const artist2 = new Artist("Serge Gainsbourg", "France","Jazz, French, pop Rock, Reggae, Electro, Yé-yé",
 "Je t'aime je t'aime, oui je t'aime....");

const artist3 = new Artist("Leonard Cohen","Canada", "Folkmusic, Folkrock, Pop, World Music",
"Well I stepped into an avalanche,it covered up my soul....");

const artist4 = new Artist("Nick Drake", "USA", "Folk Music",
"Time has told me, You're a rare, rare find....");

const artist5 = new Artist("Patti Smith", "USA", "Rock, Protopunk, Punkrock, Artpunk, Bluesrock",
"Jesus died for somebody's sins but not mine....");

artists.push(artist1);
artists.push(artist2);
artists.push(artist3);
artists.push(artist4);
artists.push(artist5);

artists.forEach(createCard);

let randomArtist = _.sample(artists);
document.getElementById("favtitle").innerText = randomArtist.name;
document.getElementById("favtext").innerText = randomArtist.country+"\n"+  " " + randomArtist.genre;

function createCard(item,index){
    document.getElementById("title"+index).innerText = item.name;
    document.getElementById("text"+index).innerText = item.country+"\n"+  " " + item.genre;
}

function perform(id){
   document.getElementById("lyric").innerText = artists[id].lyric;
}