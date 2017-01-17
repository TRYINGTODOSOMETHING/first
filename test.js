function placeOrder(ordenumber)
{
	console.log("placed order",ordenumber);
	;
	cookanddel(function()
	{
      console.log("order delived",ordenumber)
	})
}
function cookanddel(callback)
{console.log(this)
	//setTimeout(callback,1);
}

placeOrder(1);
placeOrder(2);
placeOrder(3);
placeOrder(4);
placeOrder(5);