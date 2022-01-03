// Global vars to cache event state
var pointerCache = new Array();
var prevPtsDiff = -1;

function on_pointerdown(event) {
	// This event is cached to support 2-finger gestures
	if (pointerCache.length == 0) {
		onMouseDown(event);
	}
	else if (pointerCache.length == 1) {
		onMouseUp(pointerCache[0]);
	}
	pointerCache.push(event);
}

function on_pointermove_move(event) {
	// This function implements a 2-pointer horizontal pinch/zoom gesture.

	// Find this event in the cache and update its record with this event
	let index = 0;
	for (; index < pointerCache.length; index++) {
		if (event.pointerId == pointerCache[index].pointerId) {
			pointerCache[index] = event;
			break;
		}
	}

	if (pointerCache.length == 1) {
		onMouseMove(event);
	}

	// If two pointers are down, check for pinch gestures
	if (pointerCache.length == 2) {
		// Calculate the distance between the two pointers
		let sp0 = getMouseSp(pointerCache[0]);
		let sp1 = getMouseSp(pointerCache[1]);
		let curDiff = sp0.dist(sp1);

		if (prevPtsDiff > 0) {
			camera.zoom(index === 0 ? sp1 : sp0, curDiff / prevPtsDiff);
		}

		// Cache the distance for the next move event
		prevPtsDiff = curDiff;
		pen.render();
	}
}

function on_pointerup(event) {
	// Remove this pointer from the cache
	removeEvent(event);
	if (pointerCache.length == 0) {
		onMouseUp(event);
	}
	else if (pointerCache.length == 1) {
		prevPtsDiff = -1;
		onMouseDown(pointerCache[0]);
	}
}

function removeEvent(ev) {
	// Remove this event from the target's cache
	for (var i = 0; i < pointerCache.length; i++) {
		if (pointerCache[i].pointerId == ev.pointerId) {
			pointerCache.splice(i, 1);
			break;
		}
	}
}

function init1() {
	// Install event handlers for the pointer target
	let html = document.documentElement;
	canvas.onpointerdown = on_pointerdown;
	canvas.onpointermove = on_pointermove_move;

	// Use same handler for pointer{up,cancel,out,leave} events since
	// the semantics for these events - in this app - are the same.
	canvas.onpointerup = on_pointerup;
	canvas.onpointercancel = on_pointerup;
	canvas.onpointerout = on_pointerup;
	canvas.onpointerleave = on_pointerup;
}
