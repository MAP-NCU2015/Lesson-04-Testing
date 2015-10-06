package ChatroomClient;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.Socket;

public class ClientThread extends Thread {
	ClientUI ui;
	Socket client;
	BufferedReader reader;
	PrintWriter writer;

	public ClientThread(ClientUI ui) {
		this.ui = ui;
		try {
			client = new Socket("127.0.0.1", 1228); // 這裡設置連接服務器端的IP的端口
			println("連接服務器成功：端口1228");
			reader = new BufferedReader(new InputStreamReader(
					client.getInputStream()));
			writer = new PrintWriter(client.getOutputStream(), true);
			// 如果為true，則println、printf或format方法將刷新輸出緩衝區
		} catch (IOException e) {
			println("連接服務器失敗：端口1228");
			println(e.toString());
			e.printStackTrace();
		}
		this.start();
	}

	public void run() {
		String msg = "";
		while (true) {
			try {
				msg = reader.readLine();
			} catch (IOException e) {
				println("服務器斷開連接");
				break;
			}
			if (msg != null && msg.trim() != "") {
				println(">>" + msg);
			}
		}
	}

	public void sendMsg(String msg) {
		try {
			writer.println(msg);
		} catch (Exception e) {
			println(e.toString());
		}
	}

	public void println(String s) {
		if (s != null) {
			this.ui.taShow.setText(this.ui.taShow.getText() + s + "\n");
			System.out.println(s + "\n");
		}
	}

}