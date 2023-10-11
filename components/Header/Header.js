class Header {

    render() {
        const html = `
            <div class="header-container">
                <div class="header-count">
                🗑️ 77
                </div>
            </div>
        `

        ROOT_HEADER.innerHTML = html;
    }
}

const headerPage = new Header();
headerPage.render();