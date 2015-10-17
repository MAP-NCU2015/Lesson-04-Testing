package trytry;

import java.io.*;
import java.net.*;
import java.util.*;
import javax.swing.*;
import javax.swing.border.*;
import java.awt.*;
import java.awt.event.*;

public class MyClient extends JFrame implements ActionListener{
	 String    name,ip="";       
	 BufferedReader  reader;           
	 PrintStream  writer;
	 Socket    sock;
	 
	 JTextArea   incoming = new JTextArea(15,50); 
	 JTextField   outgoing = new JTextField(20);     
	 JLabel    jlmane   = new JLabel("你的名字：");   
	 JLabel    jlip  = new JLabel("輸入ip：");   
	 JTextField   jfmane   = new JTextField("無名",10);
	 JTextField   jfip   = new JTextField("127.0.0.1",10);
	 JLabel    state  = new JLabel("請輸入你的名字及你的名字"); 
	 MenuBar mBar = new MenuBar();      
	 Menu mFile = new Menu("檔案");
	 MenuItem mFileSave=new MenuItem("儲存檔案");     
	 
	 public static void main(String[] args){
		 MyClient client = new MyClient();       //
	 }
	 
	 MyClient (){ 
		 super("多入連線Client端");          
	     JPanel maneipPanel  = new JPanel();   
	     JButton setmaneip = new JButton("連線設定");
	     setmaneip.addActionListener(this);
	     maneipPanel.add(jlmane);
	     maneipPanel.add(jfmane);         
	     maneipPanel.add(jlip);
	     maneipPanel.add(jfip); 
	     maneipPanel.add(setmaneip); 
	     getContentPane().add(BorderLayout.NORTH,maneipPanel);  
	     
	     JButton sendButton = new JButton("送出");
	     sendButton.addActionListener(this);       
	     incoming.setLineWrap(true);         
	     incoming.setWrapStyleWord(true); 
	     incoming.setEditable(false); 
	     JScrollPane qScroller = new JScrollPane(incoming);
	     
	     //垂直滾動  
	     qScroller.setVerticalScrollBarPolicy(
	     ScrollPaneConstants.VERTICAL_SCROLLBAR_ALWAYS); 
	     //水平滾動
	     qScroller.setHorizontalScrollBarPolicy(
	     ScrollPaneConstants.HORIZONTAL_SCROLLBAR_NEVER);
	     
	     JPanel mainPanel = new JPanel();       
	     mainPanel.add(qScroller);
	     mainPanel.add(outgoing);
	     mainPanel.add(sendButton);
	     getContentPane().add(BorderLayout.CENTER,mainPanel);  
	  
	     mFileSave.addActionListener(this); 
		 mFile.add(mFileSave);  
		 mBar.add(mFile);
		 setMenuBar(mBar);
		 getContentPane().add(BorderLayout.SOUTH,state);    
		 setSize(600,450);
		 setVisible(true);
		 addWindowListener(new WindowAdapter()      
		 {
			 public void windowClosing(WindowEvent e){
				 System.out.println("離開聊天室");
				 System.exit(0);
			 }
		 });
	 }
	 
	 //-建立連線
	 private void EstablishConnection(){
		 try{
			 sock = new Socket(ip,8888);      
			 InputStreamReader streamReader = new InputStreamReader(sock.getInputStream());  
			 reader = new BufferedReader(streamReader);    
			 writer = new PrintStream(sock.getOutputStream());
			 state.setText("網路建立-連線成功"); 
			 System.out.println("網路建立-連線成功");    
	     }catch(IOException ex ){
	     System.out.println("建立連線失敗");
	 }
	 }
	 //-接收資料
	 public class IncomingReader implements Runnable{
		 public void run(){
	     String message;
	     try{
	    	 while ((message = reader.readLine()) != null){
	    		 incoming.append(message+'\n');
	    	 }
	     }catch(Exception ex ){ex.printStackTrace();}
		 }
	 } 
	//-5-按下之動作
	 public void actionPerformed(ActionEvent e){
		 String str=e.getActionCommand();   
		 if(str.equals("連線設定")){
			 name = jfmane.getText();
			 ip  = jfip.getText(); 
			 state.setText("設定"+name+":"+ip); 
			 EstablishConnection();          
			 Thread readerThread = new Thread(new IncomingReader());  
			 readerThread.start();
		 }else if(str.equals("送出")){    
		 if((ip!=null)&&(outgoing.getText()!="")) {
			 try{     //送出資料
				 writer.println((name+":"+outgoing.getText())); 
				 writer.flush();         
			 }catch(Exception ex ){
		     System.out.println("送出資料失敗");
	    }
			 outgoing.setText("");        
	   }
	  }else if (str.equals("儲存檔案"))       
	  {               
	   try{             
		   FileWriter f = new FileWriter("log.txt");     
		   f.write(incoming.getText());      
		   f.close();           
		   state.setText("儲存檔案成功");
	   }catch (IOException e2){
		   state.setText("儲存檔案失敗");
	   }              
	  } 
	 }
	}