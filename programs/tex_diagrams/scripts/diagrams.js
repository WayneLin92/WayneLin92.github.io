// created by Weinan Lin

var canvas = document.getElementById("canvas");
canvas.width = 600;
canvas.height = 300;
const NUM_GRID_X = 10;
const NUM_GRID_Y = 5;
const GRID_WIDTH = canvas.width / NUM_GRID_X;
const GRID_HEIGHT = canvas.height / NUM_GRID_Y;
var ARROW_TYPES = ['->', '-->', '=', '=>'];
var use_bullet = false;

function draw_arrow(context, fromx, fromy, tox, toy, atype, ashift, acurve){
    context.setLineDash([]);
	var angle = Math.atan2(toy-fromy,tox-fromx);
	var shiftlen = 4;
    var curvelen = 12;
	fromx += ashift*shiftlen * Math.cos(angle-Math.PI/2);
	tox += ashift*shiftlen * Math.cos(angle-Math.PI/2);
	fromy += ashift*shiftlen * Math.sin(angle-Math.PI/2);
	toy += ashift*shiftlen * Math.sin(angle-Math.PI/2);
	var norm = Math.sqrt((tox-fromx)*(tox-fromx)+(toy-fromy)*(toy-fromy));
    
    var midx = (fromx + tox) / 2;
    var midy = (fromy + toy) / 2;
    var quadtopx = midx + acurve*curvelen * Math.cos(angle-Math.PI/2);
    var quadtopy = midy + acurve*curvelen * Math.sin(angle-Math.PI/2);
	if (atype === '->'){
		context.moveTo(fromx, fromy);
		context.quadraticCurveTo(quadtopx, quadtopy, tox, toy);
	}
	else if (atype === '-->'){
        context.setLineDash([10, 10]);
		context.moveTo(fromx, fromy);
		context.quadraticCurveTo(quadtopx, quadtopy, tox, toy);
	}
	else if (atype === '=' || atype === '=>'){
		var roundoff = 3;
		var shift_dl = 2
		var x1 = fromx + (tox-fromx)/norm * roundoff;
		var y1 = fromy + (toy-fromy)/norm * roundoff;
		var x2 = tox - (tox-fromx)/norm * roundoff;
		var y2 = toy - (toy-fromy)/norm * roundoff;
		context.moveTo(x1-shift_dl*Math.cos(angle-Math.PI/2), y1-shift_dl*Math.sin(angle-Math.PI/2));
		context.lineTo(x2-shift_dl*Math.cos(angle-Math.PI/2), y2-shift_dl*Math.sin(angle-Math.PI/2));
		context.moveTo(x1+shift_dl*Math.cos(angle-Math.PI/2), y1+shift_dl*Math.sin(angle-Math.PI/2));
		context.lineTo(x2+shift_dl*Math.cos(angle-Math.PI/2), y2+shift_dl*Math.sin(angle-Math.PI/2));
	}
	// arrow tip
	if (atype != '='){
		var headlen = 10;   // length of head in pixels
        if (atype === '->' || atype === '-->'){
            angle = Math.atan2(toy-quadtopy,tox-quadtopx);
        }
		context.moveTo(tox, toy);
		context.lineTo(tox-headlen*Math.cos(angle-Math.PI/6),toy-headlen*Math.sin(angle-Math.PI/6));
		context.moveTo(tox, toy);
		context.lineTo(tox-headlen*Math.cos(angle+Math.PI/6),toy-headlen*Math.sin(angle+Math.PI/6));
	}
}

function repeat(str, num){
    result = ''
    for (var i=0; i<num; i+=1){
        result += str;
    }
    return result;
}

var pen = {
    render : function(){
        var ctx = this.context;
        ctx.strokeStyle="#a0a0a0";
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.setLineDash([]);
        var i;
        for (i=1; i<NUM_GRID_Y; i+=1){
            ctx.moveTo(0, GRID_HEIGHT * i);
            ctx.lineTo(canvas.width, GRID_HEIGHT * i);
        }
        for (i=1; i<NUM_GRID_X; i+=1){
            ctx.moveTo(GRID_WIDTH * i, 0);
            ctx.lineTo(GRID_WIDTH * i, canvas.height);
        }
        ctx.stroke();
		
		// Draw arrows
        for (i=0; i<this.arrows.length; i+=1){
			if (i < this.arrows.length - 1){
				ctx.strokeStyle="#000000";
			}
			else{
				ctx.strokeStyle="#F00000";
			}
            x1 = getX(this.arrows[i][0]);
            y1 = getY(this.arrows[i][1]);
            x2 = getX(this.arrows[i][2]);
            y2 = getY(this.arrows[i][3]);
            ctx.beginPath();
            draw_arrow(ctx, x1, y1, x2, y2, this.arrows[i][4], this.arrows[i][5], this.arrows[i][6]);
            ctx.stroke();
        }
        if (this.isMouseDown) {
            ctx.strokeStyle="#000000";
            ctx.beginPath();
            draw_arrow(ctx, this.mouseDownX, this.mouseDownY, this.mouseX, this.mouseY, '->', 0, 0);
            ctx.stroke();
        }
    },
    arrows : [],  //pen.arrows.push([gridX1, gridY1, gridX2, gridY2, '->', 0, 0]);
    isMouseDown : false,
    mouseX : null,
    mouseY : null,
    mouseDownX : null,
    mouseDownY : null,
}

function array_in_array(array, ele){
	var result = false;
	for (var i=0; i<array.length; i++){
		if (JSON.stringify(array[i]) === JSON.stringify(ele)){
			result = true;
			break;
		}
	}
	return result;
}

var output = {
    render : function(){
        let xymatrix = document.getElementById("xymatrix");
		
		let x_min = NUM_GRID_X;
		let y_min = NUM_GRID_Y;
		let x_max = 0;
		let y_max = 0;
		let i;
		let entries = [];
		for (i=0; i<pen.arrows.length; i+=1){
			entries.push([pen.arrows[i][0], pen.arrows[i][1]]);
			entries.push([pen.arrows[i][2], pen.arrows[i][3]]);
		}
		for (i=0; i<entries.length; i+=1){
			if (entries[i][0] < x_min){
				x_min = entries[i][0];
			}
			if (entries[i][0] > x_max){
				x_max = entries[i][0];
			}
			if (entries[i][1] < y_min){
				y_min = entries[i][1];
			}
			if (entries[i][1] > y_max){
				y_max = entries[i][1];
			}
		}
		var w = x_max - x_min;
        var h = y_max - y_min;
		var dict = {}; // dict[[x,y]] is the set of arrows from [x,y]
		for (i=0; i<pen.arrows.length; i+=1){
			x = pen.arrows[i][0] - x_min;
			y = pen.arrows[i][1] - y_min;
			dx = pen.arrows[i][2] - pen.arrows[i][0];
			dy = pen.arrows[i][3] - pen.arrows[i][1];
			if (dict[[x,y].toString()] !== undefined){
				dict[[x,y].toString()].push([dx, dy, pen.arrows[i][4], pen.arrows[i][5], pen.arrows[i][6]]);
			}
			else{
				dict[[x,y].toString()] = [[dx,dy, pen.arrows[i][4], pen.arrows[i][5], pen.arrows[i][6]]];
			}
		}
		tex_string = "\\xymatrix{<br>";
		var num = 1;
		var j,k;
		
		for (j=0; j<h+1; j+=1){
			for (i=0; i<w+1; i+=1){
				if (array_in_array(entries, [x_min+i, y_min+j])){
                    if (use_bullet){
                        tex_string += '\\bullet';
                    }
                    else{
                        tex_string += num.toString();
                    }
					num += 1;
				}
				if (dict[[i,j].toString()] !== undefined){
					for (k=0; k<dict[[i,j].toString()].length; k+=1){
						var atype = dict[[i,j].toString()][k][2];
						var ashift = dict[[i,j].toString()][k][3];
						var acurve = dict[[i,j].toString()][k][4];
						tex_string += " \\ar";
						if (atype !== '->'){
							tex_string += "@{" + atype + "}";
						}
						if (ashift !== 0){
							tex_string += "@<" + (ashift*0.5).toString() + "ex>";
						}
						if (acurve !== 0){
							tex_string += "@/^" + (acurve*5).toString() + "pt/";
						}
						tex_string += "[";
						if (dict[[i,j].toString()][k][0]>0){
							tex_string += repeat('r', dict[[i,j].toString()][k][0]);
						}
						else{
							tex_string += repeat('l', -dict[[i,j].toString()][k][0]);
						}
						if (dict[[i,j].toString()][k][1]>0){
							tex_string += repeat('d', dict[[i,j].toString()][k][1]);
						}
						else{
							tex_string += repeat('u', -dict[[i,j].toString()][k][1]);
						}
						tex_string += "]";
					}
				}
				if (i<w){
					tex_string += " & ";
				}
			}
			tex_string += "\\\\<br>";
		}
		tex_string += "}";
		xymatrix.innerHTML = tex_string;
    }
}

// Coordinates converters
function getCanvasX(event){
    var rect = canvas.getBoundingClientRect();
    var x = Math.round(event.clientX - rect.left);
    if (x<0) {x=0;}
    if (x>canvas.width) {x=canvas.width;}
    return x;
}

function getCanvasY(event){
    var rect = canvas.getBoundingClientRect();
    var y = Math.round(event.clientY - rect.top);
    if (y<0) {y=0;}
    if (y>canvas.height) {y=canvas.height;}
    return y;
}

function getGridX(x){return Math.round(x/GRID_WIDTH);}
function getGridY(y){return Math.round(y/GRID_HEIGHT);}
function getX(gridX){return gridX * GRID_WIDTH;}
function getY(gridY){return gridY * GRID_HEIGHT;}

// Event handlers
function startDiagram(){
    // initializing the main object
    pen.context = canvas.getContext("2d");
    pen.render();
}

function canvas_onmousemove(event){
    if (pen.isMouseDown){
        pen.mouseX = getCanvasX(event);
        pen.mouseY = getCanvasY(event);
        pen.render();
    }
}

function canvas_onmousedown(event){
    pen.isMouseDown = true;
    pen.mouseDownX = getX(getGridX(getCanvasX(event)));
    pen.mouseDownY = getY(getGridY(getCanvasY(event)));
	pen.mouseX = getCanvasX(event);
	pen.mouseY = getCanvasY(event);
	pen.render();
}

function canvas_onmouseup(event){
	if (pen.isMouseDown){
		pen.isMouseDown = false;
		gridX1 = getGridX(pen.mouseDownX);
		gridY1 = getGridY(pen.mouseDownY);
		gridX2 = getGridX(pen.mouseX);
		gridY2 = getGridY(pen.mouseY);
		if (gridX1 !== gridX2 || gridY1 !== gridY2){
			pen.arrows.push([gridX1, gridY1, gridX2, gridY2, '->', 0, 0]);
		}
		pen.render();
		output.render();
	}
}

function button_undo_onclick(){
	pen.arrows.pop();
	pen.render();
	output.render();
}

function button_clear_onclick(){
	pen.arrows.length = 0;
	pen.render();
	output.render();
}

function button_arrowtype_onclick(){
    if (pen.arrows.length > 0){
        var t = pen.arrows[pen.arrows.length-1][4];
        var types = ['->', '-->', '=', '=>'];
        pen.arrows[pen.arrows.length-1][4] = types[(types.indexOf(t)+1)%4];
        pen.render();
        output.render();
    }
}

function button_shiftup_onclick(){
    if (pen.arrows.length > 0){
        pen.arrows[pen.arrows.length-1][5] += 1;
        pen.render();
        output.render();
    }
}

function button_shiftdown_onclick(){
    if (pen.arrows.length > 0){
        pen.arrows[pen.arrows.length-1][5] -= 1;
        pen.render();
        output.render();
    }
}

function button_curveup_onclick(){
    if (pen.arrows.length > 0){
        pen.arrows[pen.arrows.length-1][6] += 1;
        pen.render();
        output.render();
    }
}

function button_curvedown_onclick(){
    if (pen.arrows.length > 0){
        pen.arrows[pen.arrows.length-1][6] -= 1;
        pen.render();
        output.render();
    }
}

function button_bullet_onclick(){
    button_bullet = document.getElementById("bullet");
    if (use_bullet){
        use_bullet = false;
        button_bullet.textContent = "Use bullets";
    }
    else{
        use_bullet = true;
        button_bullet.textContent = "Use numbers";
    }
    output.render();
}

function button_clipboard_onclick(){
    var xymatrix = document.getElementById("xymatrix");
    const el = document.createElement('textarea');
    el.value = xymatrix.innerText;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert('Copied the text: ' + el.value);
}


html = document.documentElement;
canvas.addEventListener( 'touchstart', canvas_onmousedown);
html.addEventListener( 'touchmove', canvas_onmousemove);
html.addEventListener( 'touchend', canvas_onmouseup);

canvas.setAttribute('onmousedown', "canvas_onmousedown(event);");
html.setAttribute('onmousemove', "canvas_onmousemove(event);");
html.setAttribute('onmouseup', "canvas_onmouseup(event);");

// canvas.addEventListener( 'onmousedown', canvas_onmousedown);
// html.addEventListener( 'onmousemove', canvas_onmousemove);
// html.addEventListener( 'onmouseup', canvas_onmouseup);





