package Src.Sorting;

public class Sort {

    public static void quickSort(int[] array){
         quickSort(array,0,array.length-1);
    }
    public static void quickSort(int[] input, int left, int right){
        if(left >= right) { return;}
        int pivot = input[(left + right)/2];
        int index = partition(input,left,right,pivot);
        quickSort(input,left,index-1);
        quickSort(input,index,right);
    }
    public  static int partition(int[] input, int left, int right, int pivot) {
        while( left <= right) {
            while (input[left] < pivot) left++;
            while(input[right] > pivot) right--;
            if(left <= right) {
                swap(input, left,right);
                left++;
                right--;
            }
        }
        return left;
    }
    public static void swap(int[] array, int left, int right){
        int tmp = array[left];
        array[left] = array[right];
        array[right] = tmp;
    }

}