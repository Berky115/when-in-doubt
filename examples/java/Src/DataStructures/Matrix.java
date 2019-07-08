package Src.DataStructures;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Matrix {

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
// 0 0 0
// 1 1 0
// 0 0 1
// ```
//
// That's only two walkable pockets, of sizes `[2, 4]`.

        public List<Integer> findRegions(int[][] input) {
            List<Integer> regionsFound = new ArrayList<>();
            for(int i = 0; i < input.length;i++) {
                for(int j = 0; j < input.length;j++){
                    if(input[i][j] == 0){
                        input[i][j] = 1;
                        regionsFound.add(walkPath(i,j,input,1));
                    }
                }
            }
            return regionsFound;
        }

        public int walkPath(int i, int j, int[][] input, int size) {



            if(i+1 < input.length && input[i+1][j] == 0) {
                input[i+1][j] = 1;
                size++;
                size = walkPath(i+1,j,input,size);
            }
            if(i-1 >= 0 && input[i-1][j] == 0) {
                input[i-1][j] = 1;
                size++;
                size = walkPath(i-1,j,input,size);
            }
            if(j+1 < input.length && input[i][j+1] == 0) {
                input[i][j+1] = 1;
                size++;
                size = walkPath(i,j+1,input,size);
            }
            if(j-1 >= 0 && input[i][j-1] == 0) {
                input[i][j-1] = 1;
                size++;
                size = walkPath(i,j-1,input,size);
            }

            return size;
        }

        public  void findAndPrintRegions(int[][] input) {
            List<Integer> regions = findRegions(input);
            Collections.sort(regions);
            System.out.println(regions);
        }

        public List<Integer> findRegionsList(int[][] input) {
            List<Integer> regions = findRegions(input);
            Collections.sort(regions);
            return regions;
        }

    }

