import modals from './modules/modals';
import changeModalState from './modules/changeModalState';
import forms from './modules/forms';
import tabs from './modules/tabs';
import images from './modules/images';
import timer from './modules/timer';

window.addEventListener('DOMContentLoaded', () => {
    let modalState = {};
    let deadline = '2022-12-31';

    modals();
    changeModalState(modalState);
    forms(modalState);
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
    images();
    timer('.container1', deadline);
});