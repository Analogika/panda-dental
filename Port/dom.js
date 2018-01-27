app.ports.getAreaLocations.subscribe(function(idArr) {
	var locations = [];
	for (var i = 0; i < idArr.length; i++) {
		var id = idArr[i];
		var elem = document.getElementById(id);
		var boundingRect = elem.getBoundingClientRect();
		locations.push([id, window.scrollY + boundingRect.top]);
	}
	app.ports.locations.send(locations);
});

app.ports.getScroll.subscribe(function() {
	app.ports.pageScroll.send(window.scrollY);
});

app.ports.scrollTo.subscribe(function(target) {
	const e = document.getElementById(target);
	const bounds = e.getBoundingClientRect();
	clientY = bounds.top;
	const p = window.scrollY + clientY;
	scrollTo(0, p);
});
