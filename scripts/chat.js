// adding new chat documents
// setting up a real-time listener to get new chats

// updating the username
//updating the room

class Chatroom {
	constructor(room, username) {
		this.room = room;
		(this.username = username), (this.chats = db.collection("chats"));
	}
	async addChat(message) {
		const now = new Date();
		const chat = {
			message,
			username: this.username,
			room: this.room,
			created_at: firebase.firestore.Timestamp.fromDate(now),
		};

		const response = await this.chats.add(chat);
		return response;
	}
	async deleteChat(id) {
		await db.collection("chats").doc(id).delete();
	}
	getChats(callback) {
		this.chats.onSnapshot((snapshot) => {
			snapshot.docChanges().forEach((change) => {
				if (change.type === "added") {
					callback({ ...change.doc.data(), id: change.doc.id });
				}
			});
		});
	}
	updateName(username) {
		this.username = username;
		localStorage.setItem("username", username);
	}
	updateRoom(room) {
		this.room = room;
		console.log("room updated");
		if (this.unsub) {
			this.unsub();
		}
	}
}
