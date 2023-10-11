function render() {
    const productsStore = localStorageUtil.getProducts();

    headerPage.render(productsStore.length);
    productsPage.render();
}

let CATALOG = [];


//https://api.jsonserve.com/BWJna9
fetch('server/catalog.json')
.then(res => res.json())
.then(body => {
    CATALOG = body;
    
    render();
    })
    .catch(error => {
        console.log(error);
    })
