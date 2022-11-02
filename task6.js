// create an object named location with 5 different tourist locations:
// (a) add 2 new locations in the object and replace any location with new location.
// (b) traverse all the locations with their respective keys.
// (c) delete any two locations from the object and print the object.

location = {
    1 : 'Taj Mahal',
    2 : 'Red Fort',
    3 : 'Golden Temple',
    4 : 'Hawa Mahal',
    5 : 'India Gate'
}

location[6] = 'Qutub Minar';
location[7] = 'Dal Lake';

console.log(location[1]);
console.log(location[2]);
console.log(location[3]);
console.log(location[4]);
console.log(location[5]);
console.log(location[6]);
console.log(location[7]);

console.log('----------------------------------------------------------')

delete location[3];
delete location[6];
console.log(location);