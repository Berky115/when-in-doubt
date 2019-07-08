package Src.DataStructures;

public class BinaryTree {
    int data;
    BinaryTree left;
    BinaryTree right;

    public BinaryTree(int data) {
        this.data = data;
    }

    public void insert(int newValue) {

        if(newValue <= data){
            if(left == null ){
                left = new BinaryTree(newValue);
            }
            else {
                left.insert(newValue);
            }
        }
        else {
            if( right == null ) {
                right = new BinaryTree(newValue);
            }
            else {
                right.insert(newValue);
            }
        }
    }

    public boolean contains(int value) {
        if(value == data){
            return true;
        }
        else if(value < data){
            if(left== null) {
                return false;
            }
            else {
               return left.contains(value);
            }
        }
        else {
            if(right == null) {
                return  false;
            }
            else {
                return right.contains(value);
            }

        }
    }

    public void printPreOrder() {
        System.out.println(data);
        if(left != null){
            left.printInOrder();
        }
        if (right != null) {
            right.printInOrder();
        }
    }

    public void printInOrder() {
        if(left != null){
            left.printInOrder();
        }
        System.out.println(data);
        if (right != null) {
           right.printInOrder();
        }
    }

    public void printPostOrder() {
        if(left != null){
            left.printInOrder();
        }
        if (right != null) {
            right.printInOrder();
        }
        System.out.println(data);
    }
}