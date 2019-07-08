package Src.DataStructures;


import java.util.ArrayList;
import java.util.List;

public class LinkedList {

    public Node head = null;
    public int size = 0;

    public LinkedList() {
        size = 0;
    }

    public LinkedList(Node node) {
        this.head = node;
        size = 1;
    }

    public void append(int data){
        size++;
        if(head == null) {
            head = new Node(data);

            return;
        }
        Node curr = head;
        while (curr.next != null) {
                curr = curr.next;
        }
        curr.next = new Node(data);
    }

    public void prepend (int data) {
        size++;
        if(head == null) {
            head = new Node(data);
            return;
        }

        Node newHead = new Node(data);
        newHead.next = head;
        head = newHead;
    }

    public void printList () {
        if(head == null) {
            return;
        }
        Node curr = head;
        while (curr.next != null) {
            System.out.println(curr.data);
            curr = curr.next;
        }
        System.out.println(curr.data);
    }

    public List<Integer> getValues() {
        List<Integer> values = new ArrayList<>();

        if(head == null) {
            return values;
        }

        Node curr = head;
        while (curr.next != null) {
            values.add(curr.data);
            curr = curr.next;
        }
        values.add(curr.data);
        return values;
    }



    public void deleteValue(int data) {
        if(head == null) {
            return;
        }
        if(head.data == data) {
            size--;
            head = head.next;
            return;
        }
        Node curr = head;
        while (curr.next != null) {
            if(curr.next.data == data){
                curr.next = curr.next.next;
                return;
            }
            curr = curr.next;
        }
        size--;
    }


    public void removeFront() {
        if(head == null) return;
        if (head.next == null) {
            head = null;
            size = 0;
        } else {
            this.head = this.head.next;
            size--;
        }
    }


    public void removeTail() {
        if (this.head.next == null) {
            this.head = null;
            size = 0;
        } else {

            Node currentNode = this.head;
            while (currentNode.next != null) {
                currentNode = currentNode.next;
            }
            currentNode.prev.next = null;
            size--;
        }
    }

    public void conCatList(LinkedList newList) {
        Node current = newList.head;
        while (current.next != null) {
            this.append(current.data);
            current = current.next;
        }

        this.append(current.data);

    }

    public boolean isSorted() {

        Node tmp = this.head;
        boolean sorted = true;

        while (tmp.next != null) {
            if (tmp.data > tmp.next.data) {
                sorted = false;
            }
            tmp = tmp.next;
        }

        return sorted;
    }

    public Node getNodeAt(int pivotIndex) {

        Node current = this.head;
        int index = pivotIndex;
        while (current.next != null && index != 0) {
            current = current.next;
            index--;
        }
        return current;
    }

    public void clear() {
        while (this.head != null) {
            this.removeTail();
        }
    }
}
