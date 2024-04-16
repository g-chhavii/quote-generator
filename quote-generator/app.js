function generate(){
    var quotes = {
        "― Albert Einstein" : "“Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and it's beauty.”" ,
        "― Madeline Miller The Song of Achilles" : "“Bury us, and mark our names above. Let us be free.”",
        "― Khaled Hosseini, The Kite Runner" : "“For you, a thousand times over”",
        "― Charlotte Brontë, Jane Eyre" : "“I am no bird; and no net ensnares me: I am a free human",
        "― Joe Klaas" : "“The truth will set you free, but first it will piss you off.”",
        " —George Lorimer" : "“You’ve got to get up every morning with determination if you’re going to go to bed with satisfaction.”",
        "—Nelson Mandela" : "“Education is the most powerful weapon which you can use to change the world.”",
        "—Amelia Earhart" : "“The most difficult thing is the decision to act; the rest is merely tenacity.”",
        " —John Graham" : `“You’ll find that education is just about the only thing lying around loose in this world, and it’s about the only thing a fellow can have as much of as he’s willing to haul away.”`,
        "—Augustine Og Mandino" : `“Take the attitude of a student, never be too big to ask questions, never know too much to learn something new.” `


    } 

    var authors = Object.keys(quotes);
    // this method will generate arrays of the keys of 
    // the quotes object
    // console.log(authors);

    var author = authors[Math.floor(Math.random() * authors.length)];
    var quote = quotes[author];
    // here variable quote is accessing values of the key authors

    document.querySelector("#quote").innerHTML = quote;
    document.querySelector("#author").innerHTML = author;


}

 
