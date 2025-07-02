function WebSocketTest2()
{
	if ("CHSWebSocket" in window)
	{
		var ws = new CHSWebSocketket("%%WEBSOCKET_URL%%");
		ws.onopen = function()
		{
			// Web Socket is connected
			alert("chswebsocketket is open");
			
			// You can send data now
			ws.send("Hey man, you got the time?");
		};
		ws.onmessage = function(evt) { alert("received: " + evt.data); };
		ws.onclose = function() { alert("chswebsocketket is closed"); };
	}
	else
	{
		alert("Browser doesn't support CHSWebSocketket!");
	}
}