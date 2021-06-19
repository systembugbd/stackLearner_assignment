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
          // console.log( previous )
          this.size++
     }
     
     getAt( index ) {
          let current = this.head
          let count = 0;

          while ( current ) {
               if ( count == index ) {
                    console.log(current.data)
               }
               count++;
               current = current.next;
          }
          return null;
     }

     removeAt( index ) {
          if ( index > 0 && index > this.size ) {
               return;
          }
          let current = this.head;
          let previous;
          let count = 0;
          
          if(index === 0 )
          {
               this.head = current.next
               console.log('I am here...')
          } else {
               console.log('Data', current.next.data, 'is removed from index', index)
               while ( count < index ) {
                    count++;
                    previous = current
                    current = current.next
               }

               previous.next = current.next;
              
          }
         this.size--;
     }

     setEmptyLinkedList() {
          this.head = null
          this.size = 0;
          console.log('LinkedList are cleared, this size is ', this.size, 'and this head is', this.head)
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
//add in first
ll.addNodeInFirst( 300 );
ll.addNodeInFirst( 200 );
ll.addNodeInFirst( 100 );
ll.addNodeInFirst( 50 );
//add in last
ll.addNodeInLast( 500 );

//add in at position
ll.addAt( 600, 0 )
ll.addAt( 700, 3 )

//get at position
ll.getAt( 3 )

//remove from at postion
ll.removeAt(1)

//print all list data
ll.printList();

//clear all linked list
ll.setEmptyLinkedList()

