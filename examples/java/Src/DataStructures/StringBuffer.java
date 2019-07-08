package Src.DataStructures;

public class StringBuffer {

    char[] data;

    public StringBuffer() {
    }

    public StringBuffer(String data) {
        this.data = data.trim().toCharArray();
    }

    public void append(String s) {
        String tmp = new String(data.toString());
        tmp+=s;
        data = tmp.toCharArray();
    }

    public String toString(){
        return data.toString();
    }

    public void insert(int index, String input) {

        if(data.length - 1 < index) {
            System.out.println("string does not have index");
            return;
        }

        String front = new String(data, 0, index-1);
        String back = new String(data, index, data.length-1);
        front += input;
        front += back;
        data = front.toCharArray();
    }
}
