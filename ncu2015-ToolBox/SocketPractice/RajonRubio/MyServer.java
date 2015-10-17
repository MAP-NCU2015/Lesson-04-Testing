package trytry;
import java.io.*;
import java.net.*;
import java.util.*;

public class MyServer {
	 Vector output;//output

	 public static void main (String args[]){
		 new MyServer().go();     
	 }
	 public void go() {
		 output = new Vector();          
		 try{
			 ServerSocket serverSock = new ServerSocket(8888);  
			 while(true){
			     Socket cSocket = serverSock.accept();    
			     PrintStream writer = new PrintStream(cSocket.getOutputStream());  
			     System.out.println(writer); 
			     output.add(writer);         
			     Thread t = new Thread(new Process(cSocket)); 
			     t.start();           
			     System.out.println(cSocket.getLocalSocketAddress()+ "有"+(t.activeCount()-1)+  "個連接");               
			 } 
	    }catch(Exception ex){System.out.println("連接失敗");}
	 }
	 public class Process implements Runnable{   
		 BufferedReader reader;  
		 Socket sock;            
		 public Process(Socket cSocket){
		 try{
			 sock = cSocket;
		     InputStreamReader isReader = new InputStreamReader(sock.getInputStream());     
		     reader = new BufferedReader(isReader);
		 }catch(Exception ex){
			 System.out.println("連接失敗Process");
		 } 
	  }
	  public void run(){
		  String message;
		  try{
		      while ((message = reader.readLine())!=null){   
		    	  System.out.println("收到"+message);
		    	  tellApiece(message);
		      }
		  }catch(Exception ex){System.out.println("有一個連接離開");}
	  }
	  public void tellApiece(String message){
		  Iterator it = output.iterator(); 
		  while(it.hasNext()){          
			  try{
				  PrintStream writer = (PrintStream) it.next();  
				  writer.println(message); 
				  writer.flush();           
			  }
			  catch(Exception ex){
				  System.out.println("連接失敗Process");
			  }
		  }
	  }
	 } 
	}