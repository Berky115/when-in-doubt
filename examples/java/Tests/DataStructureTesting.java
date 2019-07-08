package Tests;

import Src.DataStructures.BinaryTree;
import Src.DataStructures.LinkedList;
import Src.DataStructures.Matrix;
import org.junit.Assert;
import org.junit.Test;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class DataStructureTesting {

    @Test
    public void LinkedList() {
        LinkedList nodeList = new LinkedList();
        nodeList.append(1);
        nodeList.append(2);
        nodeList.append(2);
        nodeList.append(3);
        nodeList.prepend(-1);
        nodeList.deleteValue(2);

        List<Integer> expected = new ArrayList<>(Arrays.asList(-1,1,2,3));

        Assert.assertEquals(expected , nodeList.getValues());

    }

    @Test
    public void BinaryTree() {
        BinaryTree binaryTree = new BinaryTree(5);
        binaryTree.insert(6);
        binaryTree.insert(7);
        binaryTree.insert(2);
        binaryTree.insert(11);

        Assert.assertTrue(binaryTree.contains(2));
        Assert.assertTrue(binaryTree.contains(6));
        Assert.assertTrue(binaryTree.contains(7));
        Assert.assertTrue(binaryTree.contains(11));
        Assert.assertFalse(binaryTree.contains(15));
    }

    @Test
    public void MatrixTesting() {
        Matrix matrix = new Matrix();

        int[][] input1 = new int[][]{
                {0, 1, 0},
                {0, 1, 1},
                {1, 0, 0}
        };
        // should return [1, 2, 2]
        List<Integer> expected = new ArrayList<>();
        expected.add(1);
        expected.add(2);
        expected.add(2);

       Assert.assertEquals(expected, matrix.findRegionsList(input1));

        int[][] input2 = new int[][]{
                {0, 0, 0},
                {1, 1, 0},
                {0, 0, 1}
        };
        // should return [2, 4]
        expected = new ArrayList<>();
        expected.add(2);
        expected.add(4);
        Assert.assertEquals(expected, matrix.findRegionsList(input2));

        int[][] input3 = new int[][]{
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
        // should return [1, 1, 1, 2, 6, 7, 8, 30]
        expected = new ArrayList<>();
        expected.add(1);
        expected.add(1);
        expected.add(1);
        expected.add(2);
        expected.add(6);
        expected.add(7);
        expected.add(8);
        expected.add(30);

        Assert.assertEquals(expected, matrix.findRegionsList(input3));
    }

}
