package ChatroomServer;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.Socket;

/* 這個類是服務器端的等待客戶端發送信息*/
public class ListenerClient extends Thread {
	BufferedReader reader;
	PrintWriter writer;
	ServerUI ui;
	Socket client;

	public ListenerClient(ServerUI ui, Socket client) {
		this.ui = ui;
		this.client = client;
		this.start();
	}

	// 為每一個客戶端創建線程等待接收信息，然後把信息廣播出去
	public void run() {
		String msg = "";
		while (true) {
			try {
				reader = new BufferedReader(new InputStreamReader(
						client.getInputStream()));
				writer = new PrintWriter(client.getOutputStream(), true);
				msg = reader.readLine();
				sendMsg(msg);

			} catch (IOException e) {
				println(e.toString());
				// e.printStackTrace();
				break;
			}
			if (msg != null && msg.trim() != "") {
				println(">>" + msg);
			}
		}
	}

	// 把信息廣播到所有用戶
	public synchronized void sendMsg(String msg) {
		try {
			for (int i = 0; i < ui.clients.size(); i++) {
				Socket client = ui.clients.get(i);
				writer = new PrintWriter(client.getOutputStream(), true);
				writer.println(msg);
			}

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