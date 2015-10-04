import java.io.*;
import java.net.*;
import java.util.*;

public class MyServer{
	private static Vector output;
	final static int PORT = 8888;

	public static void main (String args[]){
		output = new Vector();          
		try {
			ServerSocket serverSock = new ServerSocket(PORT);  
			System.out.println("Listen on " + PORT + " port ...");
			while (true) {
				/* accept() method blocks until a connection is made */
				Socket s = serverSock.accept();    
				PrintStream writer = new PrintStream(s.getOutputStream());  
				System.out.println(writer); 
				output.add(writer);         
				Thread t = new Thread(new MyServer().new Process(s)); 
				t.start();           
				System.out.println(s.getLocalSocketAddress() + " Has " + (t.activeCount()-1) + " connections");               
			} 
		} catch (Exception e) {
			e.printStackTrace(System.out);
		}
	}

	public class Process implements Runnable{   

		/* Reads text from a character-input stream */
		BufferedReader reader;  
		Socket sock;            

		public Process (Socket s){
			try{
				sock = s;
				InputStreamReader isReader = new InputStreamReader(sock.getInputStream()); 
				reader = new BufferedReader(isReader);
			} catch (Exception e) {
				e.printStackTrace(System.out);
			} 
		}

		public void run(){
			String message;
			try {
				while ((message=reader.readLine()) != null){   
					System.out.println("[Receive]" + message);
					broadcast(message);
				}
			} catch (Exception e){
				e.printStackTrace(System.out);
			}
		}

		/* Tell everyone */
		public void broadcast(String message){
			Iterator it = output.iterator(); 
			while(it.hasNext()){          
				try{
					PrintStream writer = (PrintStream) it.next();  
					writer.println(message); 
					writer.flush();           
				}catch(Exception e){
					e.printStackTrace(System.out);
				}
			}
		}
	}
} 
