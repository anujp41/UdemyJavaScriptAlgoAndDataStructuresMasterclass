const axios = require('axios');

const stocks = [
  'FB',
  'AMZN',
  'AAPL',
  'BYND',
  'CBS',
  'T',
  'IBM',
  'IP',
  'KSS',
  'TGT',
  'RY'
];

const API = {
  searchStock: function(query) {
    return axios.get(
      `https://sandbox.iexapis.com/stable/stock/${query}/quote/?token=Tpk_fafb4762d86a473cab01b77ebeb97862`
    );
  },

  getDividends5y: function(query) {
    return axios.get(
      `https://sandbox.iexapis.com/stable/stock/${query}/dividends/3m?token=Tpk_fafb4762d86a473cab01b77ebeb97862`
    );
  }
};

const stkPromises = stocks.map(symbl => API.searchStock(symbl));
const divPromises = stocks.map(symbl => API.getDividends5y(symbl));

(async function getData() {
  const stockResults = await Promise.all(stkPromises);
  const divResults = await Promise.all(divPromises);
  const stockData = stockResults.map(item => item.data.companyName);
  const divData = divResults.map((item, index) => {
    const resultData = item.data;
    const eachResult = { CompanyName: stockData[index] };
    if (resultData.length || Object.keys(resultData).length > 0) {
      eachResult['LastDivData'] = resultData[0].paymentDate;
      eachResult['Amount'] = resultData[0].amount;
    } else {
      eachResult['Message'] = 'No info on dividend!';
    }
    return eachResult;
  });
  console.log(divData);
})();
