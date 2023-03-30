import java.io.IOException;
import java.util.Scanner;

public class Baek1002 {
	public static void main(String[] args) throws IOException {
		Scanner sc = new Scanner(System.in);
		int T = Integer.parseInt(sc.nextLine());

		int[] result = new int[T];
		for (int i=0; i<T; i++) {
			String[] _input = sc.nextLine().split(" ");
			int x1 = Integer.parseInt(_input[0]);
			int y1 = Integer.parseInt(_input[1]);
			int r1 = Integer.parseInt(_input[2]);
			int x2 = Integer.parseInt(_input[3]);
			int y2 = Integer.parseInt(_input[4]);
			int r2 = Integer.parseInt(_input[5]);
			
			double distance12 = Math.sqrt(Math.pow(x1-x2, 2) + Math.pow(y1-y2, 2));
			
			if (distance12 > r1 && distance12 > r2) {
				if (distance12 < r1 + r2)
					result[i] = 2;
				else if (distance12 > r1 + r2)
					result[i] = 0;
				else if (distance12 == r1 + r2)
					result[i] = 1;
			} else {
				if (distance12 == Math.abs(r1 - r2)) {
					if (distance12 == 0)
						result[i] = -1;
					else
						result[i] = 1;
				} else if (distance12 < Math.abs(r1 - r2)) {
					result[i] = 0;
				} else if (distance12 > Math.abs(r1 - r2)) {
					result[i] = 2;
				}
			}
		}

		sc.close();
		
		for (int i=0; i<result.length; i++)
			System.out.printf("%d\n", result[i]);
	}
}
