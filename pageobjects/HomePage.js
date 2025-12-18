class HomePage{

constructor(page){
    this.page = page;
    this.loginLink = page.getByRole('link', {name: 'Signup / Login'});

}

verifyLoggedInMessage(message){
    return this.page.getByText(message).isVisible();
}

}

module.exports = { HomePage };