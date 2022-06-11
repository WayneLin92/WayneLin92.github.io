// Global vars to cache event state
var pointerCache = new Array();
var prevPtsDist = null;
var prevPt = null;

function Translate(deltaSvg) {
    camera.translate(deltaSvg);
    g_plot.setAttribute("transform", camera.getTransform());
    plotAxisLabels();
}

function getDistPts() {
	let p1Screen = new Vector(pointerCache[0].offsetX, pointerCache[0].offsetY);
	let p2Screen = new Vector(pointerCache[1].offsetX, pointerCache[1].offsetY);
	return p1Screen.dist(p2Screen);
}

function on_pointerdown(event) {
	// This event is cached to support 2-finger gestures
	pointerCache.push(event);

	if (pointerCache.length == 1) {
		prevPt = new Vector(event.offsetX, event.offsetY);
	}
	else if (pointerCache.length == 2) {
		prevPtsDist = getDistPts();
	}
}

// This function implements a 2-pointer horizontal pinch/zoom gesture.
function on_pointermove(event) {
	// Check if this event is in the cache and update it
	let index = 0;
	for (; index < pointerCache.length; index++) {
		if (event.pointerId === pointerCache[index].pointerId) {
			pointerCache[index] = event;
			break;
		}
	}

	// Move only when the only one down pointer moves
	if (pointerCache.length == 1 && index < pointerCache.length) {
		let curPt = new Vector(event.offsetX, event.offsetY);
		let deltaScreen = curPt.sub(prevPt);
		Translate(new Vector(deltaScreen.x, -deltaScreen.y));
		prevPt = curPt;
	}

	// If two pointers are down, check for pinch gestures
	if (pointerCache.length == 2 && index < pointerCache.length) {
		let p1Svg = camera.flip(new Vector(pointerCache[0].offsetX, pointerCache[0].offsetY));
		let p2Svg = camera.flip(new Vector(pointerCache[1].offsetX, pointerCache[1].offsetY));
		let curDist = p1Svg.dist(p2Svg);
		camera.zoom(index === 0 ? p2Svg : p1Svg, curDist / prevPtsDist);
		g_plot.setAttribute("transform", camera.getTransform());
		plotAxisLabels();
		prevPtsDist = curDist;
	}
}

/**
 * Return if at least one event is removed
 */
function removeEvent(event) {
	// Remove this event from the target's cache
	for (var i = 0; i < pointerCache.length; i++) {
		if (pointerCache[i].pointerId == event.pointerId) {
			pointerCache.splice(i, 1);
			return true;
		}
	}
	return false;
}

function on_pointerup(event) {
	// Remove this pointer from the cache
	if (removeEvent(event)) {
		if (pointerCache.length == 0) {
			prevPt = null;
		}
		else if (pointerCache.length == 1) {
			prevPt = new Vector(pointerCache[0].offsetX, pointerCache[0].offsetY);
		}
		else if (pointerCache.length == 2) {
			prevPtsDist = getDistPts();
		}
	}
}

function onMouseWheel(event) {
    if (event.deltaY < 0) {
        let pivotScreen = new Vector(event.offsetX, event.offsetY);
        let pivotSvg = camera.flip(pivotScreen);
        camera.zoom(pivotSvg, config.camera_zoom_rate);
        g_plot.setAttribute("transform", camera.getTransform());
    } else {
        let pivotScreen = new Vector(event.offsetX, event.offsetY);
        let pivotSvg = camera.flip(pivotScreen);
        camera.zoom(pivotSvg, 1 / config.camera_zoom_rate);
        g_plot.setAttribute("transform", camera.getTransform());
    }
    plotAxisLabels();
}

function initHandlers() {
	// Install event handlers for the pointer target
    svg_ss.setAttribute('onwheel', "onMouseWheel(event);");
	svg_ss.onpointerdown = on_pointerdown;
	svg_ss.onpointermove = on_pointermove;

	// Use same handler for pointer{up,cancel,out,leave} events since
	// the semantics for these events - in this app - are the same.
	svg_ss.onpointerup = on_pointerup;
	//svg_ss.onpointercancel = on_pointerup;
	//svg_ss.onpointerout = on_pointerup;
	svg_ss.onpointerleave = on_pointerup;
}
