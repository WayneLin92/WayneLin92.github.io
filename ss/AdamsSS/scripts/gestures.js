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
		let sp0 = new Vector(pointerCache[0].offsetX, windows.innerHeight - pointerCache[0].offsetY);
		let sp1 = new Vector(pointerCache[1].offsetX, windows.innerHeight - pointerCache[1].offsetY);
		let curDiff = sp0.dist(sp1);

		if (prevPtsDiff > 0) {
			camera.zoom(index === 0 ? sp1 : sp0, curDiff / prevPtsDiff);
			g_plot.setAttribute("transform", camera.getTransform());
			plotAxisLabels();
		}

		// Cache the distance for the next move event
		prevPtsDiff = curDiff;
	}
}

function removeEvent(event) {
	// Remove this event from the target's cache
	for (var i = 0; i < pointerCache.length; i++) {
		if (pointerCache[i].pointerId == event.pointerId) {
			pointerCache.splice(i, 1);
			break;
		}
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

function init1() {
	// Install event handlers for the pointer target
	svg_ss.onpointerdown = on_pointerdown;
	svg_ss.onpointermove = on_pointermove_move;

	// Use same handler for pointer{up,cancel,out,leave} events since
	// the semantics for these events - in this app - are the same.
	svg_ss.onpointerup = on_pointerup;
	svg_ss.onpointercancel = on_pointerup;
	svg_ss.onpointerout = on_pointerup;
	svg_ss.onpointerleave = on_pointerup;
}
