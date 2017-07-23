let frame = document.getElementById('frame');

let xhr = new XMLHttpRequest();
xhr.onload = function () {
	if (xhr.status === 200) {
		let response = xhr.responseXML;
		let events = response.getElementsByTagName('post');
	}

	let response = xhr.responseXML;
	var posts = response.getElementsByTagName('post');

	for (let i = 0; i < posts.length; i++) {
		let container, date, title, text;
		container = document.createElement('div');
		container.className = 'post';

		date = document.createElement('h3');
		date.appendChild(document.createTextNode(getNodeValue(posts[i], 'date')));
		container.appendChild(date);

		title = document.createElement('h2');
		title.appendChild(document.createTextNode(getNodeValue(posts[i], 'title')));
		container.appendChild(title);

		text = document.createElement('p');
		text.appendChild(document.createTextNode(getNodeValue(posts[i], 'text')));
		container.appendChild(text);

		frame.appendChild(container);

	}

	function getNodeValue(obj, tag) {
		return obj.getElementsByTagName(tag)[0].firstChild.nodeValue;
	}
};

xhr.open('GET', 'data.xml', true);
xhr.send(null);