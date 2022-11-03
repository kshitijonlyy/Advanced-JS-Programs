// create an array named songs which have common object keys: 'song_name', 'singer', 'language':
// (a) add 5 different songs using the push method.
// (b) print all song names with their singers and language.
// (c) print song_name at location 3 of the array.
// (d) details for any one song.

songs = [];

songs.push({song_name : 'all up in your mind', singer : 'beyonce', language : 'english'});
songs.push({song_name : 'say my name', singer : 'david guetta', language : 'spanish'});
songs.push({song_name : 'love to hate me', singer : 'blackpink', language : 'korean'});
songs.push({song_name : 'never really over', singer : 'katy perry', language : 'english'});
songs.push({song_name : 'chitta kurta', singer : 'karan aujhla', language : 'punjabi'});

for (i=0; i<songs.length; i++){
    console.log(songs[i]);
}

console.log('----------------------------------------------------------')

console.log(songs[3]['song_name']);

console.log('----------------------------------------------------------')

console.log(songs[1]['song_name']);
console.log(songs[1]['singer']);
console.log(songs[1]['language']);