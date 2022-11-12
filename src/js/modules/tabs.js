const tabs = (navSelector, tabSelector, contentSelector, activeClass, display = 'flex') => {
    const navTab = document.querySelector(navSelector),
          tabElems = document.querySelectorAll(tabSelector),
          contentTabs = document.querySelectorAll(contentSelector);

    function hideTabContent(){
        contentTabs.forEach(content => {
            content.style.display = 'none';
        });

        tabElems.forEach(tab => {
            tab.classList.remove(activeClass);
        });
    }

    function showTabContent(i = 0) {
        contentTabs[i].style.display = display;
        tabElems[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();


    navTab.addEventListener('click', (e) => {
        let target = e.target;

        if (target &&
            (target.classList.contains(tabSelector.replace(/\./, "")) || 
            target.parentNode.classList.contains(tabSelector.replace(/\./, "")))){
            tabElems.forEach((tab, i) => {
                if (target == tab || target.parentNode == tab){
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });




}

export default tabs;