// Создать функцию, обрабатывающую сырые данные

const transactions = [
  { id: 1, category: 'electronics', amount: 100, currency: 'USD', status: 'completed' },
  { id: 2, category: 'books', amount: 20, currency: 'USD', status: 'completed' },
  { id: 3, category: 'electronics', amount: 150, currency: 'USD', status: 'completed' },
  { id: 1, category: 'electronics', amount: 100, currency: 'USD', status: 'completed' },
  { id: 4, category: 'grocery', amount: 50, currency: 'USD', status: 'refunded' },
  { id: 5, category: 'electronics', amount: 80, currency: 'EUR', status: 'completed' },
  { id: 6, category: 'books', amount: 30, currency: 'USD', status: 'completed' },
];

const EXCHANGE_RATE = 1.1; // 1 EUR = 1.1 USD

function getAnalytics(data) {
    let result = {}

    let dataLocal = [...new Map(transactions
                    .map(item => [item.id, item]))
                    .values()]
                    .filter((item) => item.status === 'completed')

    dataLocal.forEach((item) => {
        if(item.currency === 'EUR') item.amount = item.amount / 1.1
    })

    dataLocal.forEach((item) => {
        if(!result[item.category]) {
            result[item.category] = {totalRevenue: 0, averageCheck: 0, itemsCount: 0}
        }
    })

    dataLocal.forEach((item) => {
        if (result[item.category]) {
            result[item.category].totalRevenue += item.amount
            result[item.category].itemsCount += 1
            result[item.category].averageCheck = Math.ceil(result[item.category].totalRevenue / result[item.category].itemsCount *100) /100

        }
    })
    
    return result
}

console.log(getAnalytics(transactions))
// {
//   electronics: {
//     totalRevenue: 322.72727272727275,
//     averageCheck: 107.58,
//     itemsCount: 3
//   },
//   books: {
//      totalRevenue: 50,
//      averageCheck: 25,
//      itemsCount: 2 }
// }