const {PageUtils} = require('../utils/PageUtils');
class ClientAppOrderConfirmationPage{
    constructor(page){
        this.page = page;
        this.clientAppOrderConfirmationPage = new PageUtils(page);
    }

     getOrderIdLocator(){
        return this.page.locator('.em-spacer-1 .ng-star-inserted');
    }

    async waitForOrderId(){
        const orderIdLocator = await this.getOrderIdLocator();
        await orderIdLocator.waitFor();
    }

    async getOrderId(){
      //  const orderIdLocator = await this.getOrderIdLocator();
        const orderId = await this.getOrderIdLocator().textContent();
        return orderId;
    }

}

module.exports = { ClientAppOrderConfirmationPage };