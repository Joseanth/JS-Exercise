/** BOTH SCRIPT 1 and SCRIPT has the same result!  */
// SCRIPT 1
$.getJSON("data.json", function(data) {
  $.each(data, function(key, value) {
    $("#showData").append("<tr><td>"+value.Orders.orderId+"</td><td>"+value.Orders.Sales.id+"</td><td>"+value.Orders.Sales.SalesName+"</td><td>"+value.Orders.Sales.orderdate+"</td><td>"+value.Orders.Sales.Products.id+"</td><td>"+value.Orders.Sales.Products.productname+"</td><td>"+value.Orders.Sales.Products.Price+"</td><td>"+value.Orders.Sales.Customer.companyname+"</td><td>"+value.Orders.Sales.Customer.contactname+"</td></tr>"); 
  })
})

/** SCRIPT 2 */
// $.ajax({
//   url: 'json-file.json',
//   dataType: 'json',
//   type: 'get',
//   cache: false,
//   success: function(data) {
//      $(data.Sales).each(function(index, value) { 
//       $("#showData").append("<tr><td>"+value.Orders.orderId+"</td><td>"+value.Orders.Sales.id+"</td><td>"+value.Orders.Sales.SalesName+"</td><td>"+value.Orders.Sales.orderdate+"</td><td>"+value.Orders.Sales.Products.id+"</td><td>"+value.Orders.Sales.Products.productname+"</td><td>"+value.Orders.Sales.Products.Price+"</td><td>"+value.Orders.Sales.Customer.companyname+"</td><td>"+value.Orders.Sales.Customer.contactname+"</td></tr>"); 
//      });
//   }
// });
 
 