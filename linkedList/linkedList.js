class Node {
     constructor ( data, next = null ) {
          this.data = data;
          this.next = next;
     }
}

class LinkedList {
     constructor () {
          this.head = null;
          this.size = 0;
     }

     addNodeInFirst( data ) {
          this.head = new Node( data, this.head );
          this.size++;
     }

     addNodeInLast( data ) {
          let node = new Node( data );

          let current;

          if ( !this.head ) {
               this.head = node;

          } else {
               current = this.head;

               while ( current.next ) {
                    current = current.next;
               }

               current.next = node;

          }
          this.size++;
     }

     addAt( data, index ) {

          if ( index === 0 ) {
               this.addNodeInFirst( data, this.head )
               return
          }
          if ( index > 0 && index > this.size ) {
               console.log( "out of range" )
               return;
          }

          let node = new Node( data )
          let current, previous, count = 0;
          current = this.head;

          while ( count < index ) {

               previous = current
               count++;
               current = current.next

          }
          node.next = current;
          previous.next = node;
          console.log( previous )
          this.size++
     }

     printList() {
          let current = this.head;
          while ( current ) {
               console.log( current.data );
               current = current.next;
          }
     }
}

let ll = new LinkedList();
ll.addNodeInFirst( 300 );
ll.addNodeInFirst( 200 );
ll.addNodeInFirst( 100 );
ll.addNodeInFirst( 50 );

ll.addNodeInLast( 500 );

ll.addAt( 600, 0 )
ll.addAt( 700, 3 )

ll.printList();

