
var ws;
var t;

function init()
{
	document.getElementById('updateme').innerHTML = "connecting to chswebsocket";
	OpenWebSocket();
}

function OpenWebSocket()
{ 
    if ("CHSWebSocketket" in window)
	{
		ws = new CHSWebSocketket("%%WEBSOCKET_URL%%");
		ws.onopen = function()
		{
			// Web Socket is connected
			
			document.getElementById('updateme').innerHTML = "chswebsocketket is open";
			
			t=setTimeout("SendMessage()",1000);
		};
		ws.onmessage = function(evt)
		{
			document.getElementById('updateme').innerHTML = evt.data;
		};
		ws.onclose = function()
		{
			document.getElementById('updateme').innerHTML = "chswebsocketket is closed";
			OpenWebSocket();
        };
        ws.onerror = function(evt)
		{
			alert("onerror: " + evt);
		};
	}
	else
	{
		alert("Browser doesn't support CHSWebSocketket!");
	}
}

function SendMessage()
{    
	if ("CHSWebSocketket" in window)
	{
		ws.send("time");
        
		t=setTimeout("SendMessage()",1000);
	}
	else
	{
		alert("Browser doesn't support CHSWebSocketket!");
	}
}