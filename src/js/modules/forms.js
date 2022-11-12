import checkNumInputs from "./checkNumInputs";

const forms = (state) => {
    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input');

    checkNumInputs('input[name="user_phone"]');

    const message = {
        loading: 'Загрузка...',
        success: 'Данные отправлены успешно. Спасибо, мы с вами свяжемся!',
        failure: 'Ошибка... Попробуйте снова!'
    };

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url, {
            method: "POST",
            body: data, 
        });

        return await res.text();
    }

    const clearInputs = () => {
        inputs.forEach(input => {
            input.value = '';
        });
    }

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            const messageForm = document.createElement('div');
            messageForm.classList.add('status');
            item.appendChild(messageForm);

            const formData = new FormData(item);
            if (item.getAttribute('data-calc') === 'end'){
                for (let key in state){
                    formData.append(key, state[key]);
                }

                setTimeout(() => {               
                    const modal = document.querySelector('.popup_calc_end');
                    modal.style.display = 'none';
                    document.body.style.marginRight = `0px`;
                    document.body.style.overflow = '';
                    modal.classList.add('animated', 'fadeIn');
                }, 5000);
            }

            postData('assets/server.php', formData)
                .then(res => {
                    console.log(res);
                    messageForm.textContent = message.success;
                })
                .catch(() => {
                    messageForm.textContent = message.failure;
                })
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        messageForm.remove();
                    }, 5000);
                });
        });
    });
}

export default forms;   





