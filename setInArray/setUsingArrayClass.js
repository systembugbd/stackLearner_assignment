class MySet{
     constructor () {
          this.set = []
     }

     add( data ) {
          if ( data == "number") {
               throw new Error("Invalid Input, please give valid input;")
          }

          if ( !this.set.includes( data ) ) {
               this.set.push(data)
          }
     }


     print() {
          console.log(this.set)
     }
}

const set = new MySet()
set.add(1)
set.add(2)
set.add(3)
set.add(3)
set.add(4)
set.add(4)
set.add(4)
set.add(4)
set.add( 5 )

set.print()