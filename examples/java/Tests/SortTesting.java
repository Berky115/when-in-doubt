package Tests;

import org.junit.Assert;
import org.junit.Test;
import Src.Sorting.Sort;

public class SortTesting {

    @Test
    public void QuickSortTest() {

        int[] input = {5,6,1,3,9,8,4,2,7};
        int[] expected = {1,2,3,4,5,6,7,8,9};

        Sort.quickSort(input);
        Assert.assertArrayEquals(expected,input);
    }

}
