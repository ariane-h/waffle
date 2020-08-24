class ChatUI {
	constructor(list) {
		this.list = list;
	}
	clear() {
		this.list.innerHTML = "";
	}
	render(data) {
		const when = dateFns.distanceInWordsToNow(data.created_at.toDate(), {
			addSuffix: true,
		});
		const html = `
        <li class="list-group-item container">
        <div class="row">
            <div class="col-11">
                <span class="username"> ${data.username}</span>
                <span class="message"> ${data.message}</span>
            </div>

            <div class="col">
                <span class="delete">x</span>
            </div>
        </div>
        <div class="row">
            <div class="col-11">
                <span class="time">${when}</span>
            </div>
        </div>
    </li>
        `;
		this.list.innerHTML += html;
	}
}
