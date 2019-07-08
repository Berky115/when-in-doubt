package Src.Calculation;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Computation {

    public static long getNeededTickets(int[] ticketLine, int position) {

        long time = 0;
        final int neededTickets = ticketLine[position];
        for(int i = 0 ; i < ticketLine.length; i++) {
            if((ticketLine[i] < neededTickets)) {
                time += ticketLine[i];
            }
            else {
                if(i <= position) {
                    time += neededTickets;
                }
                else {
                    time += neededTickets - 1;
                }
            }
        }
        return time;
    }

    private static int calcPopulation(int currentYear, HashMap<Integer, Integer> years) {

        int population = 0;

        for(Map.Entry<Integer, Integer> entry : years.entrySet()) {
            if (entry.getKey() <= currentYear) {
                population += entry.getValue();
            }
        }
        return population;
    }

    public static List<Integer> findOverlap(int[] a, int[] b) {

        List<Integer> overLap = new ArrayList<>();
        List<Integer> aList = new ArrayList<>();
        for(int i = 0 ; i < a.length; i++) {
            aList.add(a[i]);
        }
        for(int i = 0 ; i < b.length ; i++){
            if(aList.contains(b[i])){
               overLap.add(b[i]);
            }
        }
        return overLap;

    }





    //

    // The Random Level Problem
//
// We're making a new game, and levels are created randomly. But randomly
// is not always good. We need to assess the levels. One way to do that
// is to measure how "walkable" is a level. We can do this in our levels
// because they are a very simple grid where a "1" represents a wall and
// a "0" represents a walkable cell. The idea is to come up with a
// function that can measure the size of all walkable pockets in a level.
//
// For the purpose of this problem, a level can be thought of a 2D matrix
// with ones and zeroes as explained before. Also, the player can only
// move horizontally or vertically. For instance:
//
// ```
// 0 1 0
// 0 1 1
// 1 0 0
// ```
//
// That level has three walkable pockets, of sizes 2, 2 and 1. So your
// function should return the array `[1, 2, 2]` (can be in any order).
//
// Another example:
//
// ```
// 1 1 1
// 1 1 1
// 1 1 1 region - 8
// ```
//

    public class Solution {
        public  List<Integer> find_regions(int[][] input) {

            List<Integer> regionsFound = new ArrayList<Integer>();
            for(int i = 0; i < input.length;i++) {
                for(int j = 0; j < input.length;j++){
                    if(input[i][j] == 0){
                        input[i][j] = 1;
                        regionsFound.add(checkValid(i,j,input,1));
                    }
                }
            }
            return regionsFound;
        }

        public  int checkValid(int i, int j, int[][] input, int size) {

            if( i+1 < input.length && input[i+1][j]== 0) {
                input[i+1][j] = 1;
                size++;
                size = checkValid(i+1,j,input,size);
            }

            if( i-1 >= 0 && input[i-1][j]==0) {
                input[i-1][j] = 1;
                size++;
                size = checkValid(i-1,j,input,size);
            }

            if( j+1 < input.length && input[i][j+1] == 0) {
                input[i][j+1] = 1;
                size++;
                size = checkValid(i,j+1,input,size);
            }

            if( j-1 >= 0 && input[i][j-1]==0) {
                input[i][j-1] = 1;
                size++;
                size = checkValid(i,j-1,input,size);
            }

            return size;
        }


        public  void find_and_print_regions(int[][] input) {
            List<Integer> regions = find_regions(input);
            Collections.sort(regions);
            System.out.println(regions);
        }

        public  void main(String[] args) {
            int[][] input1 = new int[][] {
                    {0, 1, 0},
                    {0, 1, 1},
                    {1, 0, 0}
            };
            // should print [1, 2, 2]
            find_and_print_regions(input1);

            int[][] input2 = new int[][] {
                    {0, 0, 0},
                    {1, 1, 0},
                    {0, 0, 1}
            };
            // should print [2, 4]
            find_and_print_regions(input2);

            int[][] input3 = new int[][] {
                    {1, 0, 1, 1, 1, 1, 1, 0, 1, 1},
                    {1, 1, 1, 0, 0, 1, 0, 0, 1, 1},
                    {0, 1, 0, 0, 1, 1, 0, 0, 0, 0},
                    {0, 1, 1, 0, 1, 0, 0, 0, 0, 0},
                    {1, 0, 1, 0, 1, 1, 1, 0, 0, 0},
                    {1, 0, 1, 1, 1, 0, 1, 0, 0, 0},
                    {1, 0, 0, 0, 0, 0, 1, 0, 0, 0},
                    {1, 1, 1, 1, 1, 1, 1, 0, 0, 0},
                    {0, 0, 0, 1, 0, 1, 1, 0, 0, 0},
                    {0, 0, 0, 0, 1, 0, 1, 0, 0, 0}
            };
            // should print [1, 1, 1, 2, 6, 7, 8, 30]
            find_and_print_regions(input3);
        }
    }

    public static boolean isAnagram(String A , String B ) {

        if (A.length() != B.length()) return false;

        A.toLowerCase();
        B.toLowerCase();

        int[] frequencies = new int[26];

        for (int i = 0; i < A.length(); i++) {
            frequencies[A.charAt(i) - 'a']++;
        }

        for (int i = 0; i < B.length(); i++) {
            if (frequencies[B.charAt(i) - 'a'] == 0) return false;
            frequencies[B.charAt(i) - 'a']--;
        }

        return true;

        }

    public static String removeDuplicates(String input) {
        StringBuilder uniqueCharacters = new StringBuilder();
        boolean[] alphabet = new boolean[52];

        for(int i = 0; i < input.length(); i++){
            if(alphabet[input.charAt(i) - 'A']  == false ){
                uniqueCharacters.append(input.charAt(i));
                alphabet[input.charAt(i) - 'A'] = true;
            }
        }

        return uniqueCharacters.toString();
























//        boolean[] foundChars = new boolean[52];
//        StringBuilder uniqueCharacters = new StringBuilder();
//
//        for(int i = 0; i < input.length(); i++) {
//            if(foundChars[input.charAt(i) - 'A'] == false) {
//                uniqueCharacters.append(input.charAt(i));
//                foundChars[input.charAt(i) - 'A'] = true;
//            }
//        }
//
//        return uniqueCharacters.toString();

//        boolean[] foundChars = new boolean[52];
//        StringBuilder uniqueCharacters = new StringBuilder();
//
//
//        for(int i = 0; i < input.length(); i++) {
//            if(foundChars[input.charAt(i) - 'A'] == false) {
//                uniqueCharacters.append(input.charAt(i));
//                foundChars[input.charAt(i) - 'A'] = true;
//            }
//        }
//
//        return uniqueCharacters.toString();

//        HashSet<Character> foundCharacters = new HashSet<>();
//        StringBuilder uniqueCharacters = new StringBuilder();
//
//        for( Character i : input.toCharArray()) {
//            if(!foundCharacters.contains(i)){
//                uniqueCharacters.append(i);
//                foundCharacters.add(i);
//            }
//        }
//        return uniqueCharacters.toString();
    }


    public static int fibFinder(int input){

        if(input == 1) {
            return 0;
        }
        if(input == 2) {
            return 1;
        }

        return fibCalculation(0,1,input);
    }

    public static int fibCalculation(int previous , int current, int remaining) {
        int fibValue = current+previous;
        remaining--;
        if(remaining > 2) {
            fibValue = fibCalculation(current,fibValue, remaining);
        }
        return fibValue;
    }


    public static int[] reversal (int[] arr) {

        int front = 0;
        int back = arr.length-1;

        while (front != back) {
            int tmp = arr[front];
            arr[front] = arr[back];
            arr[back] = tmp;
            front++;
            back--;
        }

        return arr;
    }


    public static List<Integer> findOdd(int[] input) {

        HashMap<Integer,Integer> valuesCounted = new HashMap<Integer, Integer>();
        List<Integer> oddValues = new ArrayList<>();
        for(int i : input) {
            if(valuesCounted.containsKey(i)){
                valuesCounted.put(i,valuesCounted.get(i) + 1);
            }
            else {
                valuesCounted.put(i,1);
            }
        }

        for(Map.Entry<Integer,Integer> entry : valuesCounted.entrySet()) {
            if(entry.getValue() % 2 != 0){
                oddValues.add(entry.getKey());
            }
        }
        return oddValues;
    }

    public int binarySearch(int[] input, int low, int high, int target) {

        if(input.length - 1 == 0) return -1;
        int middle = (low+high) / 2;
        if(target == input[middle]) return input[middle];
        else if(target < input[middle] -1) return binarySearch(input,0, middle-1, target);
        else return binarySearch (input,middle, input.length, target);

    }



    public static int keypadTime (String s, String k) {

        int time = 0;

        HashMap<Character,List<Character>> adjMap = new HashMap<>();
        adjMap.put(k.charAt(0), new ArrayList<>(Arrays.asList(k.charAt(1),k.charAt(3),k.charAt(4))));
        adjMap.put(k.charAt(1), new ArrayList<>(Arrays.asList(k.charAt(0),k.charAt(2),k.charAt(3),k.charAt(4),k.charAt(5))));
        adjMap.put(k.charAt(2), new ArrayList<>(Arrays.asList(k.charAt(1),k.charAt(4),k.charAt(5))));
        adjMap.put(k.charAt(3), new ArrayList<>(Arrays.asList(k.charAt(0),k.charAt(1),k.charAt(4),k.charAt(6),k.charAt(7) )));
        adjMap.put(k.charAt(4), new ArrayList<>(Arrays.asList(k.charAt(0),k.charAt(1),k.charAt(2),k.charAt(3),k.charAt(5),k.charAt(6),k.charAt(7),k.charAt(8))));
        adjMap.put(k.charAt(5), new ArrayList<>(Arrays.asList(k.charAt(1),k.charAt(2),k.charAt(4),k.charAt(7),k.charAt(8))));
        adjMap.put(k.charAt(6), new ArrayList<>(Arrays.asList(k.charAt(3),k.charAt(4),k.charAt(7))));
        adjMap.put(k.charAt(7), new ArrayList<>(Arrays.asList(k.charAt(3),k.charAt(4),k.charAt(5),k.charAt(6),k.charAt(8))));
        adjMap.put(k.charAt(8), new ArrayList<>(Arrays.asList(k.charAt(4),k.charAt(5),k.charAt(7))));

        for(int i = 0 ; i < s.length()-1; ++i) {
            if(s.charAt(i) == s.charAt(i+1)) {
                //System.out.println("duplicate hit!, time is " + time);
                continue;
            }
            else if (adjMap.get(s.charAt(i)).contains(s.charAt(i+1))) {
                // System.out.println("adj hit time is : " + time);
                time++;
            }
            else {
               // System.out.println("not adj, time is : " + time);
                time = time + 2;
            }

        }
        return time;
    }

    public static String twins(String a, String b) {
         String result = "false";

        if(a.length() != b.length() ) {
            result = "false";
        }
        else {
            for (int i = 0; i < a.length(); i++) {
                String tmp = Character.toString(a.charAt(i));
                if ((i + 1) % 2 == 0) {
                    if (b.contains(tmp) && (b.indexOf(tmp) + 1) % 2 == 0) {
                        result = "true";
                    }
                    else {
                        result = "false";
                        break;
                    }
                } else {
                    if (b.contains(tmp) && (b.indexOf(tmp) + 1) % 2 != 0) {
                        result = "true";
                    }
                    else {
                        result = "false";
                        break;
                    }
                }
            }
        }
        return result;
    }

}
