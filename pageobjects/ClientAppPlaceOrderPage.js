const {PageUtils} = require('../utils/PageUtils');
class ClientAppPlaceOrderPage{
    constructor(page){
        this.page = page;
        this.clientAppPlaceOrderPage = new PageUtils(page);
    }  
    
  getCountryInputLocator(){
    return this.page.locator('[placeholder="Select Country"]');
   }    

  getCountryOptionResultsLocator(){
    return this.page.locator('.ta-results button');    
}

  getPlaceOrderButtonLocator(){
    return this.page.locator('a:has-text("Place Order")'); 
 }


 async enterCountry(countryName){    
    const countryInput = await this.getCountryInputLocator();
    await countryInput.pressSequentially(countryName,{delay:100});
    const countryOptions = await this.getCountryOptionResultsLocator();
    await countryOptions.first().waitFor();
    const optionsCount = await countryOptions.count();  
    for(let i=0; i<optionsCount; ++i){
        const text = await countryOptions.nth(i).textContent();
        if(text.trim() === countryName){
            await countryOptions.nth(i).click();
            break;
        }
    }
    }

    async placeOrder(){       
        return await this.clientAppPlaceOrderPage.clickElement(this.getPlaceOrderButtonLocator());
    }


}
module.exports = { ClientAppPlaceOrderPage };