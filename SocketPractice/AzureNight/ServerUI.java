package ChatroomServer;

import java.awt.BorderLayout;
import java.awt.FlowLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;
import java.net.Socket;
import java.util.List;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTextArea;
import javax.swing.JTextField;

/* 這個類是服務器端的UI */
public class ServerUI extends JFrame {
	public static void main(String[] args) {
		ServerUI serverUI = new ServerUI();
	}

	public JButton btStart; // 啟動服務器
	public JButton btSend; // 發送信息按鈕
	public JTextField tfSend; // 需要發送的文本信息
	public JTextArea taShow; // 信息展示
	public Server server; // 用來監聽客戶端連接
	static List<Socket> clients; // 保存連接到服務器的客戶端

	public ServerUI() {
		super("服務器端");
		btStart = new JButton("啟動服務");
		btSend = new JButton("發送信息");
		tfSend = new JTextField(10);
		taShow = new JTextArea();

		btStart.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				server = new Server(ServerUI.this);
			}
		});
		btSend.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				String s = tfSend.getText();
				server.sendMsg(s);
				server.ui.taShow.setText(server.ui.taShow.getText() + ">>"
						+ tfSend.getText() + "\n");
				System.out.println(">>" + s + "\n");
				tfSend.setText("");
			}
		});
		this.addWindowListener(new WindowAdapter() {
			public void windowClosing(WindowEvent e) {
				int a = JOptionPane.showConfirmDialog(null, "確定關閉嗎？", "溫馨提示",
						JOptionPane.YES_NO_OPTION);
				if (a == 1) {
					server.closeServer();
					System.exit(0); // 關閉
				}
			}
		});
		JPanel top = new JPanel(new FlowLayout());
		top.add(tfSend);
		top.add(btSend);
		top.add(btStart);
		this.add(top, BorderLayout.SOUTH);
		final JScrollPane sp = new JScrollPane();
		sp.setVerticalScrollBarPolicy(JScrollPane.VERTICAL_SCROLLBAR_ALWAYS);
		sp.setViewportView(this.taShow);
		this.taShow.setEditable(false);
		this.add(sp, BorderLayout.CENTER);
		this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		this.setSize(400, 300);
		this.setLocation(100, 200);
		this.setVisible(true);
	}
}
