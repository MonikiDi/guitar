class Header {

    render(count) {
        const html = `
            <div class="header-container">
                <div class="header-count">
                🗑️ ${count}
                </div>
            </div>
        `

        ROOT_HEADER.innerHTML = html;
    }
}

const headerPage = new Header();

const productsStore = localStorageUtil.getProducts();
console.log(productsStore);
headerPage.render(productsStore.length);