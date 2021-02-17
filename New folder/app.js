const triggerButton = (id) => {
    const questionOne = document.getElementById(id);

    setTimeout(() => {
        questionOne.classList.toggle('d-none');
    }, 500);
};