
const btn = document.getElementById("btn");
const menu = document.querySelector(".menu");

btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");

})


const openWhatsApp = () => {
    const phoneNumber = "+254794748719"; // Replace with the desired phone number
    const message = "Hello! I have a question."; // Replace with your inquiry message

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    window.location.href = whatsappUrl;
};

