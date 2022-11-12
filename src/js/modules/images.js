const images = () => {
    const imgPopup = document.createElement('div'),
          workSection = document.querySelector('.works'),
          bigImg = document.createElement('img');

    imgPopup.classList.add('popup');
    workSection.appendChild(imgPopup);

    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';

    imgPopup.appendChild(bigImg);

    workSection.addEventListener('click', (e) => {
        e.preventDefault();
        let target = e.target;
        const scroll = calcScroll();

        if (target && target.classList.contains('preview')){
            imgPopup.style.display = 'flex';

            const path = target.parentNode.getAttribute('href');
            bigImg.setAttribute('src', path);

            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scroll}px`;
            bigImg.style.height = '80%';
            bigImg.style.width = '50%';
            bigImg.style.borderRadius = '5px';
        }

        if (target && target.matches('div.popup')){
            imgPopup.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;
        }

                
        function calcScroll() {
            let div = document.createElement('div');
            div.style.width = '50px';
            div.style.height = '50px';
            div.style.overflowY = 'scroll';
            div.style.visibility = 'hidden';
    
            document.body.appendChild(div);
    
            let scrollWidth = div.offsetWidth - div.clientWidth;
            div.remove();
    
            return scrollWidth;
        }
    });



}

export default images;