let tg = window.Telegram.WebApp;
tg.expand(); // گسترش فضای برنامه در WebView

document.getElementById("sendButton").addEventListener("click", function() {
    tg.sendData("Hello from Mini App!"); // ارسال پیام به بات
    alert("Message sent to the bot!"); // نمایش پیام به کاربر
});

// نمایش اطلاعات کاربر در کنسول
console.log("User Data:", tg.initDataUnsafe);
