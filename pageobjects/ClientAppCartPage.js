const{PageUtils} = require('../utils/PageUtils');

class ClientAppCartPage{
    constructor(page){
        this.page = page;
        this.clientAppCartPage = new PageUtils(page);
    }   

 getProductInCartFieldLocator(){
    return  this.page.locator('div li');
   }     
   
async verifyProductInCart(productName){    
     await this.getProductInCartFieldLocator().first().waitFor();
       const productsInCart =  await this.getProductInCartFieldLocator();
       const count = await productsInCart.count();  
         for(let i=0; i<count; ++i){
                if(await productsInCart.nth(i).locator('h3').textContent() === productName){
                    return true;
                }
            }
        return false;
        

        }


getCheckoutButtonLocator(){
    return this.page.locator('text=Checkout');
   }

async clickOnCheckoutButton(){       
    await this.clientAppCartPage.clickElement(this.getCheckoutButtonLocator());
   }

}

module.exports = { ClientAppCartPage };