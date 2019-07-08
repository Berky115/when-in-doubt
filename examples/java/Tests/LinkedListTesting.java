package Tests;

import org.junit.Test;
import Src.DataStructures.LinkedList;
import Src.DataStructures.Node;

import static org.junit.Assert.assertEquals;

public class LinkedListTesting {


    @Test
    public void addNodesToList() {
        LinkedList linkedList = new LinkedList();
        linkedList.append(2);
        linkedList.append(3);
        assertEquals(2, linkedList.size);
    }

    @Test
    public void removeBasedOnData() {
        LinkedList linkedList = new LinkedList();
        linkedList.append(2);
        linkedList.append(3);

        linkedList.deleteValue(2);

        assertEquals(1, linkedList.size);

    }

    @Test
    public void removeFromHead() {
        LinkedList linkedList = new LinkedList();
        linkedList.append(2);
        linkedList.append(3);

        linkedList.removeFront();
        assertEquals(3, linkedList.head.data);

    }

    @Test
    public void removeHead() {
        LinkedList linkedList = new LinkedList();
        linkedList.removeFront();

        assertEquals(0, linkedList.size);

    }

    @Test
    public void removeTail() {

        LinkedList linkedList = new LinkedList();
        linkedList.append(2);
        linkedList.removeTail();

        linkedList.printList();
        assertEquals(0, linkedList.size);
    }



    @Test
    public void canGetIndex() {
        LinkedList linkedList = new LinkedList();
        linkedList.removeFront();
        linkedList.append(5);
        linkedList.append(7);
        linkedList.append(2);
        linkedList.append(6);
        linkedList.append(9);
        linkedList.append(1);

        assertEquals(5, linkedList.getNodeAt(0).data);
        assertEquals(7, linkedList.getNodeAt(1).data);
        assertEquals(2, linkedList.getNodeAt(2).data);
        assertEquals(6, linkedList.getNodeAt(3).data);
        assertEquals(9, linkedList.getNodeAt(4).data);
        assertEquals(1, linkedList.getNodeAt(5).data);

    }

    @Test
    public void isSorted() {

        LinkedList linkedList = new LinkedList();
        linkedList.removeFront();
        linkedList.append(5);
        linkedList.append(7);
        linkedList.append(2);
        linkedList.append(6);
        linkedList.append(9);
        linkedList.append(1);

        assertEquals(false , linkedList.isSorted());

        LinkedList sortedList = new LinkedList(new Node(1));

        sortedList.append(2);
        sortedList.append(4);
        sortedList.append(5);
        sortedList.append(7);

        assertEquals(true, sortedList.isSorted());
    }

    @Test
    public void merged() {

        LinkedList linkedList = new LinkedList();
        linkedList.removeFront();
        linkedList.append(1);

        LinkedList secondList = new LinkedList(new Node(2));

        secondList.append(3);
        secondList.append(4);

        linkedList.conCatList(secondList);
        assertEquals(4, linkedList.size);
    }
}