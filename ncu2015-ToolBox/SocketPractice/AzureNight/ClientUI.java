package ChatroomClient;

import java.awt.BorderLayout;
import java.awt.FlowLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTextArea;
import javax.swing.JTextField;

public class ClientUI extends JFrame {
	public static void main(String[] args) {
		ClientUI client = new ClientUI();
	}

	public ClientUI() {
		super("客戶端");
		btStart = new JButton("啟動連接");
		btSend = new JButton("發送信息");
		tfSend = new JTextField(10);
		tfIP = new JTextField(10);
		tfPost = new JTextField(5);
		taShow = new JTextArea();

		btStart.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				server = new ClientThread(ClientUI.this);
			}
		});
		btSend.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				server.sendMsg(tfSend.getText());
				tfSend.setText("");
			}
		});
		this.addWindowListener(new WindowAdapter() {
			public void windowClosing(WindowEvent e) {
				int a = JOptionPane.showConfirmDialog(null, "確定關閉嗎？", "溫馨提示",
						JOptionPane.YES_NO_OPTION);
				if (a == 1) {
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
		this.setLocation(600, 200);
		this.setVisible(true);
	}

	public JButton btStart;
	public JButton btSend;
	public JTextField tfSend;
	public JTextField tfIP;
	public JTextField tfPost;

	public JTextArea taShow;
	public ClientThread server;

}
