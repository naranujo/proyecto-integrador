window.addEventListener('load', function () {
    console.log('la página cargó correctamente');

    //función menu mobile
    let navBotonOpen = document.querySelector('header button');
    let navBotonClose = document.querySelector('#mobileNav button');
    let mobileNav = document.querySelector('#mobileNav');

    navBotonOpen.addEventListener('click', function () {
        mobileNav.style.display = 'block';
        navBotonOpen.style.display = 'none';
        navBotonClose.addEventListener('click', function () {
            mobileNav.style.display = 'none';
            navBotonOpen.style.display = 'block';
        })
    })
})