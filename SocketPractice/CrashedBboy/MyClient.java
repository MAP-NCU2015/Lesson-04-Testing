import java.io.*;
import java.net.*;
import java.util.*;

public class MyClient {  
	static String IP = "127.0.0.1";       
	static int PORT = 8888;
	BufferedReader reader;           
	PrintStream writer;
	Socket sock;

	public static void main(String[] args){
		MyClient client = new MyClient();
	}

	public MyClient (){ 
		/* Create connection */
		try{
			sock = new Socket(IP, PORT);      
			InputStreamReader streamReader = new InputStreamReader(sock.getInputStream());  
			reader = new BufferedReader(streamReader);    
			writer = new PrintStream(sock.getOutputStream());
		}catch(IOException e){
			e.printStackTrace(System.out);
		}

		/* Create new thread to handle incoming message */
		Thread readerThread = new Thread(new IncomingReader());  
		readerThread.start();

		/* Send messgae */
		Scanner scanner = new Scanner(System.in);
		System.out.println("Type anything below:");
		while(true) {
			try {
				writer.println(scanner.nextLine());
				writer.flush();
			}catch (Exception e) {
				e.printStackTrace();
			}
		}
	}

	public class IncomingReader implements Runnable{
		public void run(){
			String message;
			try{
				while ((message = reader.readLine()) != null){
					System.out.println("Someone:"+message);
				}
			}catch(Exception e){
				e.printStackTrace();
			}
		}
	} 
}
