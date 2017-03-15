var Canvas = {
	$element: null,
  context: null,
	maxWidth: null,
	lineHeight: null,
  create: function(id) {
  	this.$element = $(id);
    this.context = this.$element.getContext('2d');
		this.lineHeight = 73;
		this.maxWidth = this.$element.width - 10;
  },
	cnv1.width - 10
	// function to clear the canvas
	clear: function() {
  	this.context.beginPath(); // clear existing drawing paths
  	this.context.save(); // store the current transformation matrix

    // Use the identity matrix while clearing the canvas
  	this.context.setTransform(1, 0, 0, 1, 0, 0);
  	this.context.clearRect(0, 0, cnv.width, cnv.height);

  	this.context.restore(); // restore the transform
  },
	addText(text, align) {
		var x = (this.$element.width - this.maxWidth) / 2;
		var y = null;

		switch (align) {
			case 'top':

		}
	}
	// adds the text in canvas, oon multiple lines
	// text = the text to add
	// x = horizontal position where to start adding the text
	// y = vertical position where to start adding the text
	// maxWidth = the maximum width of the text line
	//  lineHeight = the height of the line
	addTextCanvas(text, x, y) {
		// splits the text in words to can wrap it on new lie if exceds maxWidth
	  var words = text.split(' ');
	  var nr_w = words.length;
	  var addtxt = '';

	  // sets to add the text and rows
	  for (var n = 0; n < nr_w; n++) {
	    var txtLine = addtxt + words[n] + ' ';
	    var metrics = this.context.measureText(txtLine);
	    var txtWidth = metrics.width;
	    if (txtWidth > this.maxWidth && n > 0) {
	      this.context.fillText(addtxt, x, y);
	      addtxt = words[n] + ' ';
	      y = lineHeight;
	    } else addtxt = txtLine;
	  }

	  // adds the text in canvas (sets text color, font type and size)
	  this.context.fillStyle = '#0001be';
	  this.context.font = 'bold 30px sans-serif';
	  this.context.fillText(addtxt, x, y);
	}
}


var canvas = Canvas.create('#canvas')

// sets maximum line width, line height, and x /y coords for text
var x_pos = (cnv1.width - maxWidth) / 2;


var checked = document.querySelector('[name="position"]:checked');
 var rad = document.myRadios;
    var prev = null;
    for(var i = 0; i < rad.length; i++) {
        rad[i].onclick = function() {
            (prev)? console.log(prev.value):null;
            if(this !== prev) {
                prev = this;
            }
            console.log(this.value)
        };
    }
var y_pos = checked.value;


//40 TOP
//250 Middle
//550 Bottom
// register onkeyup event for #text_cnv text field to add the text in canvas as it is typed
document.getElementById('text_cnv').onkeyup = function() {
console.log('asdf')
  clearCanvas(cnv1); // clears the canvas
  addTextCnv(ctx1, this.value, x_pos, y_pos, maxWidth, lineHeight);
}
