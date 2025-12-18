const {test,request} = require('@playwright/test');
const { APIUtils } = require('../utils/APIUtils');
const payload = {userEmail: "playwright.test@yopmail.com", userPassword: "Learning2025"};
const orderPayload = {orders: [{country: "India", productOrderedId: "68a961459320a140fe1ca57a"}]};
let token;
let orderId;
let apiUtils;

test.beforeAll('Get login token', async () => {
    const apiContext = await request.newContext();
    apiUtils = new APIUtils (apiContext);
    token = await apiUtils.getLoginToken (payload);
});

test('Create order', async() => {
    orderId = await apiUtils.createOrder (orderPayload, token);
    console.log("Order id is: " +orderId);

});

