/*
Autoscrolls the news panel/ news feed to scroll through onload
*/

// Creates a autoscroller
(function() {
  window.AutoScroll = function(el, options) {
	  if (!(this instanceof AutoScroll)) {
		  return new AutoScroll(el, options);
	  }

//Calls the followiing functions and its options
    this.el = el;
    this.speed = null;
    this.isBeingThrown = false;
    this.isMouseOver = false;
    this.isRunning = false;
    this.thrownInterval = null;
	 this.timeout = null;
    this.previousScrollTop = null;

//Defines the speed of the scroll
    let defaults = {
      speed: 10,
      pauseBottom: 500,
      pauseStart: 500,
		requestAnimationFrame: true,
		timeoutRate: 30
    };

//Apllies all the default option
    if (options && typeof options === 'object') {
      this.options = extendDefaults(defaults, options);
    } else {
      this.options = defaults;
    }

    _init.call(this);
  }

//Extended options which allows you to pause when mouse hovers above it and
//resume when not.
  AutoScroll.prototype.autoScroll = function() {
    if (this.isRunning && !this.isBeingThrown && !this.isMouseOver) {
      if (this.el.scrollTop < this.el.scrollHeight - this.el.offsetHeight) {
			if(this.options.requestAnimationFrame) {
				this.el.scrollTop += this.speed;
				window.requestAnimationFrame(this.autoScroll.bind(this));
			} else {
				this.el.scrollTop += this.speed;
				if (this.timeout) clearTimeout(this.timeout);
				this.timeout = setTimeout(this.autoScroll.bind(this), this.options.timeoutRate)
			}
      } else {
        this.isRunning = false;
        setTimeout(this.resetScroll.bind(this), this.options.pauseBottom);
      }
    } else {
      return;
    }
  }

//Initiates the scrolling functions
  AutoScroll.prototype.startScroll = function() {
    this.isRunning = true;
    this.autoScroll.call(this);
  }

  AutoScroll.prototype.pauseScroll = function() {
    this.isRunning = false;
  }

  AutoScroll.prototype.resetScroll = function() {
    this.el.scrollTop = 0;
    setTimeout(this.startScroll.bind(this), this.options.pauseStart);
  }

  AutoScroll.prototype.mouseEnter = function(e) {
    this.isMouseOver = true;
    this.isRunning = false;
  }

  AutoScroll.prototype.mouseLeave = function(e) {
    this.isMouseOver = false;
    this.isRunning = true;
    this.startScroll.call(this);
  }

  AutoScroll.prototype.mobileTouchStart = function(e) {
    this.isBeingThrown = true;
  }

  AutoScroll.prototype.mobileTouchEnd = function(e) {
    this.thrownInterval = setInterval(this.wasThrown.bind(this), 10);
  }

  AutoScroll.prototype.wasThrown = function() {
    if (this.previousScrollTop !== this.el.scrollTop) this.previousScrollTop = this.el.scrollTop;
    else this.thrownEnd.call(this);
  }

  AutoScroll.prototype.thrownEnd = function() {
    clearInterval(this.thrownInterval);
    this.isBeingThrown = false;
    this.startScroll.call(this);
  }

  // Private Methods to initate speed and scroll and sets timeout
  function _init() {
    this.speed = _setSpeed(this.options.speed);
    _initEvents.call(this);
    setTimeout(this.startScroll.bind(this), this.options.pauseStart);
  }

  function _initEvents() {
    this.el.addEventListener('mouseenter', this.mouseEnter.bind(this));
    this.el.addEventListener('mouseleave', this.mouseLeave.bind(this));
    this.el.addEventListener('touchstart', this.mobileTouchStart.bind(this));
    this.el.addEventListener('touchend', this.mobileTouchEnd.bind(this));
  }

  function _setSpeed(scrollDistance) {
    return Math.ceil(scrollDistance / 60);
  }

  // Utility Methods defines the property having its own element in properties
  // which returns the source
  function extendDefaults(source, properties) {
    let property;
    for (property in properties) {
      if (properties.hasOwnProperty(property)) {
        source[property] = properties[property];
      }
    }
    return source;
  }

})();

//takes element newscontainer and sets autoscroll on news panel/feed
let element1 = document.getElementById('newscontainer');

//sets scroll speed and animation of scrolling.
let Scroller1 = AutoScroll(element1, {
  speed: 5,
	requestAnimationFrame: true
});
