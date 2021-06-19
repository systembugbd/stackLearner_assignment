console.log( 'Set using Array' )

const mySet = new Set();

//add Value in my set
mySet.add( 25 );
mySet.add( 10 );
mySet.add( 30 );
mySet.add( 40 );
mySet.add( {
     name: 'Shaheb Ali',
     age: 36,
     edu: 'MBA'
} )
mySet.add('decode')
mySet.add( 'Programmer' )

//Check the value is exists or not
console.log( mySet.has( 10 ) )

//make array from a mySet
const myArr = Array.from( mySet );

console.log(myArr[4].name)

//delete from mySet
mySet.delete( 30 )

mySet.delete({name:'Shaheb Ali'}) // this is not deleting... why?


//loop through mySet
console.log('---Loop Started ---')
for ( let item of mySet ) {

     //can't delete item, Why?
     mySet.delete( item.name );

     if ( item.name ) {
        
         console.log(item.name, item.age, item.edu)
    }
     console.log( item )
    
}
console.log( '---Loop END ---' )


//get size of mySet

console.log('mySet Size is : ', mySet.size )

//print MySet 
console.log(mySet)