// basic revision of loops

console.log('This is start')
myFun()
{
    console.log('This is mid')
}
function myFun(){
    console.log('This is function')
}
console.log('This is end')

console.log('-------------------------------------')

for(j=200; j>=0; j-=10){
    console.log(j);
}

console.log('-------------------------------------')

j+=10;
for(; j<=10;){
    console.log(j);
    j++
}

console.log('-------------------------------------')

temp = 0;
for(i=1; i<=5; i++){
    temp = temp+i;
    console.log(temp);
}