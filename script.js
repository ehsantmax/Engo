function changeLanguage(language) {
    // تغییر پیام خوشامدگویی با توجه به زبان انتخاب شده
    let welcomeMessage = document.getElementById('welcome-message');

    // تغییر متن‌ها برای زبان‌های مختلف
    switch (language) {
        case 'en':
            welcomeMessage.textContent = "Welcome, please choose your language:";
            break;
        case 'de':
            welcomeMessage.textContent = "Willkommen, bitte wählen Sie Ihre Sprache:";
            break;
        case 'zh':
            welcomeMessage.textContent = "欢迎，请选择您的语言:";
            break;
        case 'ko':
            welcomeMessage.textContent = "환영합니다. 언어를 선택하세요:";
            break;
        case 'ru':
            welcomeMessage.textContent = "Добро пожаловать, выберите язык:";
            break;
        case 'it':
            welcomeMessage.textContent = "Benvenuto, scegli la tua lingua:";
            break;
        case 'fr':
            welcomeMessage.textContent = "Bienvenue, veuillez choisir votre langue:";
            break;
        case 'uk':
            welcomeMessage.textContent = "Ласкаво просимо, виберіть свою мову:";
            break;
        default:
            welcomeMessage.textContent = "Welcome, please choose your language:";
            break;
    }

    // تغییر زبان برنامه به زبان انتخاب شده (ممکن است نیاز به بارگذاری مجدد باشد)
    // این بخش برای تغییر زبان اپلیکیشن به طور کامل مورد نیاز است، اگر دیتابیس یا سیستم ترجمه داشته باشی
    // مثلاً با API ترجمه، باید API رو صدا بزنی تا تمام متن‌ها تغییر کنه.
}
