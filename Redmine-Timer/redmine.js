//<script type="text/javascript">

//pads left
String.prototype.lpad = function(padString, length) {
	var str = this;
	while (str.length < length)
		str = padString + str;
	return str;
}

var s = 0;
var input;
var on = false;

function _init()
{
	var input = $('#time_entry_hours');
	
	if (input)
	{
		input.parent().append('<div id="timer_container"><span id="timer_clock">00:00:00</span><a href="javascript:void(0);" id="timer_play_button" class="btn play">Play</a><a href="javascript:void(0);" id="timer_pause_button" class="btn pause">Pause</a></div>');
		
		$('#timer_play_button').click(timer_play);
		$('#timer_pause_button').click(timer_pause);
	}
}

function timer_tic()
{
	if (on)
	{
		var t = setTimeout("timer_tac()", 1000);
	}
}

function timer_tac()
{
	if (on)
	{
		s += 1;

		//decimal
		$('#time_entry_hours').val(to_hours(s));

		//clock
		var t = s;

		var h = Math.floor(t / 3600).toString();
		t -= (h * 3600);

		var m = Math.floor(t / 60).toString();
		t -= (m * 60);

		var ss = t.toString();

		$('#timer_clock').html(h.lpad('0', 2)+":"+m.lpad('0', 2)+":"+ss.lpad('0', 2));

		timer_tic();
	}
}

function timer_play()
{
	if ( ! on)
	{
		on = true;
		timer_tic();
	}
}

function timer_pause()
{
	on = false;
}

function to_hours(t)
{
	return (t / 3600);
}


_init();