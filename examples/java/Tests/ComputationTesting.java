package Tests;

import org.junit.Assert;
import org.junit.Test;
import Src.Calculation.Computation;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.junit.Assert.assertArrayEquals;
import static org.junit.Assert.assertEquals;

public class ComputationTesting {

    @Test
    public void StuckInLine() {

        /**
         *
         * There is a ticket salesman that will grant each customer a ticket.  If a customer wants
         * an additional ticket, they must return to the end of the line and wait!
         *
         * Given a line of people in need of tickets and a position for a specific ticket holder
         * write an algorithm that will return the amount of tickets processes in order to fullfill
         * said ticket holders ticketing needs!
         *
         */

        int[] line = {2,5,3,4,5};
        int position = 2;
        Assert.assertEquals(12,Computation.getNeededTickets(line,position));

        int[] line2 = {5,5,2,3};
        position = 3;
        Assert.assertEquals(11,Computation.getNeededTickets(line2,position));

        int[] line3 = {1,1,1,1};
        position = 0;
        Assert.assertEquals(1,Computation.getNeededTickets(line3,position));


    }


    @Test
    public void findOverlap() {

        /**
         *  Given two arrays that are sorted and distinct, find the number of elements in common.
         */

        int[] A = new int[] {1,3,5,7,10};
        int[] B = new int[] {-2,2,5,6,7,11};

        List<Integer> overlap = new ArrayList<Integer>();
        overlap.add(5);
        overlap.add(7);

        Assert.assertEquals(overlap,Computation.findOverlap(A,B));

    }

    @Test
    public void isAnagram() {

        /**
         *  Given two strings, determine if they are anagrams of each other
         *  ex : read and dear : True
         *  ex : cat and dog : False
         */

        Assert.assertEquals(true,Computation.isAnagram("read","dear"));
        Assert.assertEquals(false,Computation.isAnagram("read","deard"));
        Assert.assertEquals(false,Computation.isAnagram("read","reaaad"));
        Assert.assertEquals(false,Computation.isAnagram("readd","reaad"));
    }

    @Test
    public void removeDuplicatesFromString() {

        /**
         * Given a string, remove duplicated characters
         */

        assertEquals("IAMDREW", Computation.removeDuplicates("IIIAAAAMDREEEWW"));
    }


    @Test
    public void findFibonacci() {

        /**
         * Find Fibonacci number given the index in the fibonacci sequence
         * ex: The first fibonacci number is 0
         * ex: The second Fibonacci number is 1
         * ex: The third Fibonacci number is 1
         * ex: The forth Fibonacci number is 2
         */

        assertEquals(0, Computation.fibFinder(1));
        assertEquals(1, Computation.fibFinder(2));
        assertEquals(1, Computation.fibFinder(3));
        assertEquals(2, Computation.fibFinder(4));
        assertEquals(3, Computation.fibFinder(5));
        assertEquals(5, Computation.fibFinder(6));
    }


    @Test
    public void reverseArray () {

        /**
         *  Reverse contents of an array in N time.
         */

        int[] input = {-2,5,-1,7,-3};
        int[] output = {-3,7,-1,5,-2};
        assertArrayEquals(output, Computation.reversal(input));

    }

    @Test
    public void findFrequency(){

        /**
         * Given a set of numbers, find values that have an odd frequency within the set.
         */

        int[] input = {2,2,4,12,7,2,7,2,7,7};
        List<Integer> expected = new ArrayList<>(Arrays.asList(4,12));
        assertEquals(expected , Computation.findOdd(input));
    }


    /**
     * Imagine you have 2 strings.
     *
     * The first is a series of keypad inputs
     * The second is a collection of inputs that will be assigned to a 9 digit keypad.
     *
     * Accessing adjacent keypads will cost 1 time
     * Accessing any other keypads will cost 2 time
     * Accessing the same input will cost no time
     *
     * Write a program that will calculate the time taken by a series of inputs.
     *
     */

    @Test
    public void Keypad() {
        Assert.assertEquals(11, Computation.keypadTime("91566165","639485712"));
        Assert.assertEquals(1, Computation.keypadTime("5111","752961348"));
    }

    @Test
    public void anc() {
        Assert.assertEquals("true", Computation.twins("cdab", "abcd"));
    }


}




