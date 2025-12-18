class APIUtils {
    constructor (apiContext) {
        this.apiContext = apiContext;

}

async getLoginToken (loginPayload) {
    const response = await this.apiContext.post('https://rahulshettyacademy.com/api/ecom/auth/login', {data: loginPayload,
        headers: {
          'Content-Type': 'application/json'
        }
        });
       // expect(response.ok()).toBeTruthy();
        const parsedresponse = await response.json();
        return parsedresponse.token;
}

async createOrder (orderPayload, token) {
    const response = await this.apiContext.post('https://rahulshettyacademy.com/api/ecom/order/create-order',
 {
    data: orderPayload,
    headers: {
        'Authorization': token,
        'Content-Type': 'application/json'
    }
 });

 const parsedresponse = await response.json();   
    console.log("Order id is: " +parsedresponse.orders[0]);
    return parsedresponse.orders[0];

}
}

module.exports = { APIUtils };
