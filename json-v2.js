const parseData = [{
  "Orders": {
    "orderId": 10248,
    "Sales": {
      "id": 5,
      "SalesName": "Buck Sven",
      "orderdate": "2006-07-04T00:00:00",
      "Products": {
        "id": 11,
        "productname": "Product QMVUN",
        "Price": 168.0000
      },
      "Customer": {
        "companyname": "Customer ENQZT",
        "contactname": "McLin, Nkenge"
      }
    }
  }
},

{
  "Orders": {
    "orderId": 10248,
    "Sales": {
      "id": 5,
      "SalesName": "Buck Sven",
      "orderdate": "2006-07-04T00:00:00",
      "Products": {
        "id": 42,
        "productname": "Product RJVNM",
        "Price": 98.0000
      },
      "Customer": {
        "companyname": "Customer ENQZT",
        "contactname": "McLin, Nkenge"
      }
    }
  }
},

{
  "Orders": {
    "orderId": 10248,
    "Sales": {
      "id": 5,
      "SalesName": "Buck Sven",
      "orderdate": "2006-07-04T00:00:00",
      "Products": {
        "id": 72,
        "productname": "Product GEEOO",
        "Price": 174.0000
      },
      "Customer": {
        "companyname": "Customer ENQZT",
        "contactname": "McLin, Nkenge"
      }
    }
  }
},

{
  "Orders": {
    "orderId": 10249,
    "Sales": {
      "id": 6,
      "SalesName": "Suurs Paul",
      "orderdate": "2006-07-05T00:00:00",
      "Products": {
        "id": 14,
        "productname": "Product PWCJB",
        "Price": 167.4000
      },
      "Customer": {
        "companyname": "Customer FAPSM",
        "contactname": "Wickham, Jim"
      }
    }
  }
},

{
  "Orders": {
    "orderId": 10249,
    "Sales": {
      "id": 6,
      "SalesName": "Suurs Paul",
      "orderdate": "2006-07-05T00:00:00",
      "Products": {
        "id": 51,
        "productname": "Product APITJ",
        "Price": 1696.0000
      },
      "Customer": {
        "companyname": "Customer FAPSM",
        "contactname": "Wickham, Jim"
      }
    }
  }
},

{
  "Orders": {
    "orderId": 10250,
    "Sales": {
      "id": 4,
      "SalesName": "Peled Yael",
      "orderdate": "2006-07-08T00:00:00",
      "Products": {
        "id": 41,
        "productname": "Product TTEEX",
        "Price": 77.0000
      },
      "Customer": {
        "companyname": "Customer IBVRG",
        "contactname": "Cohen, Shy"
      }
    }
  }
},

{
  "Orders": {
    "orderId": 10250,
    "Sales": {
      "id": 4,
      "SalesName": "Peled Yael",
      "orderdate": "2006-07-08T00:00:00",
      "Products": {
        "id": 51,
        "productname": "Product APITJ",
        "Price": 1484.0000
      },
      "Customer": {
        "companyname": "Customer IBVRG",
        "contactname": "Cohen, Shy"
      }
    }
  }
},

{
  "Orders": {
    "orderId": 10250,
    "Sales": {
      "id": 4,
      "SalesName": "Peled Yael",
      "orderdate": "2006-07-08T00:00:00",
      "Products": {
        "id": 65,
        "productname": "Product XYWBZ",
        "Price": 252.0000
      },
      "Customer": {
        "companyname": "Customer IBVRG",
        "contactname": "Cohen, Shy"
      }
    }
  }
},

{
  "Orders": {
    "orderId": 10251,
    "Sales": {
      "id": 3,
      "SalesName": "Lew Judy",
      "orderdate": "2006-07-08T00:00:00",
      "Products": {
        "id": 22,
        "productname": "Product CPHFY",
        "Price": 100.8000
      },
      "Customer": {
        "companyname": "Customer NRCSK",
        "contactname": "Tuntisangaroon, Sittichai"
      }
    }
  }
},

{
  "Orders": {
    "orderId": 10251,
    "Sales": {
      "id": 3,
      "SalesName": "Lew Judy",
      "orderdate": "2006-07-08T00:00:00",
      "Products": {
        "id": 57,
        "productname": "Product OVLQI",
        "Price": 234.0000
      },
      "Customer": {
        "companyname": "Customer NRCSK",
        "contactname": "Tuntisangaroon, Sittichai"
      }
    }
  }
}]

function dataTemplate(rec) {
  return `
  <tr class="border-1">
        <td>${rec.Orders.orderId}</td>
        <td>${rec.Orders.Sales.id}</td>
        <td>${rec.Orders.Sales.SalesName}</td>
        <td>${rec.Orders.Sales.orderdate}</td>
        <td>${rec.Orders.Sales.Products.id}</td>
        <td>${rec.Orders.Sales.Products.productname}</td>
        <td>${rec.Orders.Sales.Products.Price}</td>
        <td>${rec.Orders.Sales.Customer.companyname}</td>
        <td>${rec.Orders.Sales.Customer.contactname}</td>
      </tr>
  `;
}

document.getElementById("showData").innerHTML = `
  ${parseData.map(dataTemplate).join("")}
`;

