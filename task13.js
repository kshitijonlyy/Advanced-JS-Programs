// use 'for..in' loop to print values from the object 'food' made yesterday (wheat, cheese, chicken kabaab and egg curry).

food =
{
    veg : {
        w : 'wheat',
        c : 'cheese'
    },
    non_veg : {
        ck : 'chicken kabaab',
        ec : 'egg curry'
    }
}

for (x in food){
    for (y in food[x]){
        console.log(food[x][y]);
    }
}