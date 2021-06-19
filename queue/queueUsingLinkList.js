class Node {
     constructor ( data, next = null ) {
          this.data = data;
          this.next = next;
     }


}

class queueUsingLinkList {
     constructor () {
          this.head = null;
          this.tail = null
          this.size = 0;


     }

     enQueueStack( data ) {
          const node = new Node( data );
          this.size++;

          if ( this.head === null ) {
               this.tail = node;
          }

          node.next = this.head;

          this.head = node;

     }

     dQueueStack() {
          const tailNode = this.tail;
          let current = this.head;

          if ( current === null ) {
               return null;
          }

          this.szie--;

          if ( current.next === null ) {
               this.clearStack();

               return tailNode;
          }

          while ( current.next.next !== null ) {
               current = current.next;
          }

          current.next = null;
          this.tail = current;

          return tailNode;

     }

     clearStack() {
          this.head = null;
          this.size = 0;
          console.log( "Stack is Cleard" )
          return null;
     }

     printStackNode() {
          let current = this.head;
          let count = 0;

          while ( current ) {
               console.log( current.data )
               current = current.next;
               count++;
          }
     }
}

const ql = new queueUsingLinkList()

ql.enQueueStack( 'Shaheb' )
ql.enQueueStack( 'Ali' )
ql.enQueueStack( 'duplicate' )
ql.enQueueStack( "programmer" )

ql.dQueueStack()
ql.dQueueStack()
ql.dQueueStack()
ql.dQueueStack()

ql.printStackNode()



// ql.printStackNode()
// console.log( ql )