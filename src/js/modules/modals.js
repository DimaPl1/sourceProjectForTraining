const modals = () => {
    function bindModal(btnTriggers, modalWindow, closeBtn, closeClickOverlay = true) {
        const triggers = document.querySelectorAll(btnTriggers),
              modal = document.querySelector(modalWindow),
              closeModal = document.querySelector(closeBtn),
              allModalWindows = document.querySelectorAll('[data-modal]'),
              scroll = calcScroll();


        const hideModal = () => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;
            modal.classList.add('animated', 'fadeIn');
        }

        const showModal = () => {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scroll}px`;
            modal.classList.add('animated', 'fadeIn');
        }

        triggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                if (e.target){
                    e.preventDefault();
                }

                allModalWindows.forEach(windows => {
                    windows.style.display = 'none';
                });

                showModal();
            });
        });

        closeModal.addEventListener('click', () => {
            allModalWindows.forEach(window => {
                window.style.display = 'none';
            });

            hideModal();
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay){
                hideModal();
            }
        });

        
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

        function showModalByTime(modalSelector, time){
            setTimeout(() => {
                document.querySelector(modalSelector).style.display = 'block';
                document.querySelector(modalSelector).classList.add('animated', 'fadeIn');
                document.body.style.marginRight = `${scroll}px`;
                document.body.style.overflow = 'hidden';
            }, time);
        }

        showModalByTime('.popup[data-modal]', 6000);
    }




    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
}

export default modals;