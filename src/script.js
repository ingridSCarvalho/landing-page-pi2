document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".cta-button");
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            alert("O download do app estará disponível em breve!");
        });
    });
});
