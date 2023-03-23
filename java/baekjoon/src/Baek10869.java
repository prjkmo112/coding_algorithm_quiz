import java.io.IOException;
import java.util.Scanner;

public class Baek10869 {
	public static void main(String[] args) throws IOException {
		Scanner sc = new Scanner(System.in);
		String[] inputs = sc.nextLine().split(" ");
		sc.close();
		
		int a = Integer.parseInt(inputs[0]);
		int b = Integer.parseInt(inputs[1]);
		
		System.out.println(String.format("%d\n%d\n%d\n%d\n%d", a+b, a-b, a*b, a/b, a%b));
	}
}
