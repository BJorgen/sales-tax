var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];


function calculateSalesTax(salesData, taxRates) {
  let salesSummary = {}
  for (let i = 0; i < salesData.length; i++) {
    let companyName = salesData[i].name;
    let sumOfSales = salesData[i].sales.reduce((sum, a) => sum + a, 0);
    let taxRate = salesTaxRates[salesData[i].province];
    if (!salesSummary[companyName]) {
      salesSummary[companyName] = {
        totalSales: sumOfSales,
        totalTaxes: sumOfSales * taxRate
      };
    } else {
      salesSummary[companyName] = {
        totalSales: salesSummary[companyName].totalSales + sumOfSales,
        totalTaxes: salesSummary[companyName].totalTaxes + sumOfSales * taxRate
      };
    }
  }
  return salesSummary;
}


var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/