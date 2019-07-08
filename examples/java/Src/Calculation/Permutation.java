package Src.Calculation;

    public class Permutation
    {
        public static void main(String[] args)
        {
            String str = "ABC";
            int n = str.length();
            Permutation permutation = new Permutation();
            permutation.permute(str, 0, n-1);
        }

        public void permute(String str, int L, int R) {

            if(L == R){
                System.out.println(str);
            }
            else {
                for(int i = L; i <= R ; i++) {
                    str = swap(str, L, i);
                    permute(str, L+1 ,R);
                    str = swap(str,i,L);
                }
            }
        }

        public String swap(String array, int L, int R)
        {
            char[] charArray = array.toCharArray();
            char tmp = array.charAt(L);
            charArray[L] = charArray[R];
            charArray[R] = tmp;
            return String.valueOf(charArray);
        }

    }