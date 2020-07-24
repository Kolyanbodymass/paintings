const checkTextInputs = (selector) => {

    const txtInputs = document.querySelectorAll(selector);

    txtInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key.match(/[^а-яё 0-9]/ig)) {
                e.preventDefault();
            }
        });
        input.addEventListener('change', function() {
            console.log('отловил');
            if (this.value.match(/[^а-яё 0-9]/ig)) {
                this.value = '';
                this.focus();
            }
        });
    });
};

export default checkTextInputs;