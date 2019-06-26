
fetch("./data.json")
	.then(function(response) {
	return response.json();
}
).then(function(data) {
	document.getElementById("showData").innerHTML = `
	${data.map(function(rec){
		return `<tr class="border-1">
				<td>${rec.Orders.orderId}</td>
				<td>${rec.Orders.Sales.id}</td>
				<td>${rec.Orders.Sales.SalesName}</td>
				<td>${rec.Orders.Sales.orderdate}</td>
				<td>${rec.Orders.Sales.Products.id}</td>
				<td>${rec.Orders.Sales.Products.productname}</td>
				<td>${rec.Orders.Sales.Products.Price}</td>
				<td>${rec.Orders.Sales.Customer.companyname}</td>
				<td>${rec.Orders.Sales.Customer.contactname}</td>
			</tr>`
	}).join('')}`
});

