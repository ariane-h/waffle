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
		<li class="list-group-item">
				<div class="container">
					<div class="row">
						<div class="col-10 align-self-start">
							<span class="username"> ${data.username}</span>
							<span class="message"> ${data.message}</span>
						</div>
						<div class="col align-self-end text-right">
							<i class="far fa-times-circle text-muted delete " id="${data.id}"></i>
						</div>
					</div>
					<div class="row">
						<div class="time col-12">${when}</div>
					</div>
				</div>
			</li>
        `;
		this.list.innerHTML += html;
	}
}
