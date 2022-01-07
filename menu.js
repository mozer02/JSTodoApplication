

const logOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('email');
    window.location.href = 'login.html'; // logine yönlendir.
}


(function InitMenu() {


    // js de bir değere 2 farklı yerden atama yapılyorsa bu durumda araya || ifadesi koyarak ilk değer null ise ikinci değer bak kontrolü yapılır
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    let authenticated = false;
    const email = localStorage.getItem('email') || sessionStorage.getItem('email');
    let logOutMenu = '';
    let signInMenu = '<a class="item" href="login.html">Sign-in</a>';

    if (token != null && token != undefined) {
        authenticated = true;
        logOutMenu = `<a style='cursor:pointer;padding:2px;' onclick='logOut()'>Log out<a>`
        signInMenu = ''
    }

    const menuHtml = `
        <div class="ui top menu">
        <div class="item">
            <a href="index.html">
                <img height="30" width="30" src="assets/images/js.png">
            </a>
        </div>
        <a href="todos.html" class="item">Todos Promise</a>
        <a href="todos-async.html" class="item">Todos async/await</a>
        <a class="item">Testimonials</a>
        ${signInMenu}
        <div class="item right floated content">
            ${authenticated ? email : ''}
            ${authenticated ? logOutMenu : ''}
        </div>
      
        </div>
        `
    // dökümanın bodysine menuHtml append et
    const menuDiv = document.getElementById('menu');
    menuDiv.innerHTML = menuHtml;



})(); // self Invoked functions








