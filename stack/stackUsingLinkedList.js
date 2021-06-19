class Node{
     constructor ( data, next = null ) {
          this.data = data;
          this.next = next;
     }
}

class stackUsingLinkList{
     constructor () {
          this.head = null;
          this.size = 0;
               
     }

     addStack( data ) {
          this.head = new Node( data, this.head )
          this.size++;
          this.top = null;
     }

     popStack( ) {
        
          const current = this.head;
  
          if (current === null) {
              return this.top;
          }
  
          this.size--;
  
          if (current.next === null) {
               this.top = current;
              
               //Clear stack
               this.head = null;
               this.size=0
          }
  
          if (current !== null) {
              const previous = current.next;
  
              current.next = null;
              this.top = current;
  
              this.head = previous;
          }
  
          console.log( this.top );
          if ( this.head == null ) {
               this.clearStack();
          }
          return this.top;
     }

     clearStack() {
          this.head = null;
          this.size = 0;
          console.log("Stack is Cleard")
          return null;
     }

     printStackNode() {
          let current = this.head;
          let count = 0;

          while ( current ) {
               console.log( current.data)
               current = current.next;
               count++;
          }
     }
}

const sl = new stackUsingLinkList()
sl.addStack( 10 )
sl.addStack( 20 )
sl.addStack( 30 )
sl.addStack( 50 )

sl.popStack()
sl.popStack()
sl.popStack()
sl.popStack()




// sl.printStackNode()
// console.log( sl )