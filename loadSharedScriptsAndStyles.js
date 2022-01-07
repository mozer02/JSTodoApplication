// bütün sayfalarda kullandığımız stil ve script dosyalarını bu js dosyası ile yğkleme işlemi yapalım


    var semanticCSS = document.createElement('link');
    semanticCSS.rel = 'stylesheet';
    semanticCSS.href = '/assets/semantic-ui/semantic.min.css';
    document.getElementsByTagName("head")[0].appendChild(semanticCSS);

    // getElementsByTagName git html içerisindeki head elementini yakala. fakat bu fonksiyon HTMLCollection döndürdüğü için ve sayfada sadece 1 tane head olabileceği için 0 sından head değerine erişip. içine bu etiketi ekledik. // bir html elementi içerisine başka bir element eklemek için appendChild donkisyonu kullanılır. 

    var jqueryJS = document.createElement('script');
    jqueryJS.rel = 'javascript';
    jqueryJS.src = '/assets/semantic-ui/jquery.min.js';
    document.getElementsByTagName("body")[0].appendChild(jqueryJS);

    var semanticJS = document.createElement('script');
    semanticJS.rel = 'javascript';
    semanticJS.src = '/assets/semantic-ui/semantic.min.js';
    document.getElementsByTagName("body")[0].appendChild(semanticJS);

    var menuJS = document.createElement('script');
    menuJS.rel = 'javascript';
    menuJS.src = '/menu.js'
    document.getElementsByTagName("body")[0].appendChild(menuJS);
   


