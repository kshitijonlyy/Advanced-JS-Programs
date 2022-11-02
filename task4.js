// create an array with name 'friends' which has 4 values of your friend names and:
// (a) print all array
// (b) print the type of array
// (c) delete the last friend name
// (d) add two new friend names
// (e) replace the friend at position 2 with 'Bill Gates'

friends = ['monica', 'chandler', 'phoebe', 'joey']
console.log('complete array: ' + friends);
console.log('------------------------------------')
console.log('type of array is: ' + typeof(friends));
console.log('------------------------------------')
friends.pop()
console.log("array after deleteing the last friend's name: " + friends);
console.log('------------------------------------')
friends.push('ross');
friends.push('rachel');
console.log("array after adding two more friend's names: " + friends);
console.log('------------------------------------')
friends[2] = 'bill gates';
console.log("array after replacing the friend at position 2 with 'Bill Gates': " + friends);