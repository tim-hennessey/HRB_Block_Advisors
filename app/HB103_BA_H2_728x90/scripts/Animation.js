var app = app || {};


app.Animation = (function () {

	var banner = document.getElementById('banner');
	var t = TweenMax;

	// --------------------------------------------------------------------------------------
	// set default properties
	function initialize() {
		// DO NOT EDIT: reveals banner once loaded
		t.set(banner, {opacity:1});
		t.set(".path", {drawSVG:"0%"});
		t.set(".pattern", {scale:0.7, x:280, y:-130});
		t.set("#cta-over", {opacity:0});

		banner.addEventListener('mouseover', handleOver, false);
		banner.addEventListener('mouseout', handleOut, false);
	}

	// --------------------------------------------------------------------------------------
	// Starts the animation
	function start() {
		t.to(".path", 4, {drawSVG:"100%", ease:Cubic.easeInOut});
	}

	// --------------------------------------------------------------------------------------
	// Stops the animation
	function stop() {
		console.log("stopping animation");
	}

	// --------------------------------------------------------------------------------------
	function handleOver() {
		TweenLite.to("#cta-over", 0.15, {opacity:1, ease:Cubic.easeInOut});
	}

	// --------------------------------------------------------------------------------------
	function handleOut() {
		TweenLite.to("#cta-over", 0.3, {opacity:0, ease:Cubic.easeInOut});
	}

	// --------------------------------------------------------------------------------------
	// Publicly accessible methods and properties
	return {
		initialize:initialize,
		start:start,
		stop:stop
	}

})();
