var sideShowing = false

function toggleSidenavbar() {
    if (sideShowing) {
        document.getElementById("sidenavbar").style.display = "none";
    }
    else {
        document.getElementById("sidenavbar").style.display = "inherit";
    }
    sideShowing = !sideShowing
}


const mediaQuery = window.matchMedia('(min-width: 851px)');

function handleTabletChange(e) {
    // Check if the media query is true
    if (e.matches) {
        // Then log the following message to the console
        document.getElementById("sidenavbar").style.display = "inherit";
        sideShowing = true;
        document.getElementsById("sidenavtoggle").forEach(item => {
            item.style.display = "none";
        });
    }
}
mediaQuery.addListener(handleTabletChange);
handleTabletChange(mediaQuery);






const mediaQuery2 = window.matchMedia('(max-width: 850px)');

function handleTabletChange2(e) {
    // Check if the media query is true
    if (e.matches) {
        // Then log the following message to the console
        document.getElementById("sidenavbar").style.display = "none";
        sideShowing = false;
        document.getElementsById("sidenavtoggle").forEach(item => {
            item.style.display = "inherit";
        });
    }
}
mediaQuery2.addListener(handleTabletChange2);
handleTabletChange2(mediaQuery2);