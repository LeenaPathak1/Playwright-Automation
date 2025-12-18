const {PageUtils} = require('../utils/PageUtils');
class ClientAppDashboardPage{

    constructor(page){
        this.page = page;
        this.clientAppDashboardPage = new PageUtils(page);
    }   

     getProductFieldLocator(){
        return this.page.locator('.card-body');   
    }

     getAllProductNames(){
        return  this.page.locator('.card-body b').allTextContents();
    }
     getCartButtonLocator(){
        return this.page.locator('[routerlink*="cart"]');
    }

    async addProductToCart(productName){    
        await this.getProductFieldLocator().first().waitFor();
        const products =  await this.getProductFieldLocator();
        const count = await products.count();       
        for(let i=0; i<count; ++i){
            if(await products.nth(i).locator('b').textContent() === productName){
                await products.nth(i).locator('text= Add To Cart').click();
                break;
            }
        }
    }

    async clickOnCartButton(){
        await this.clientAppDashboardPage.clickElement(this.getCartButtonLocator());
    }


}

module.exports = { ClientAppDashboardPage };