let progress = 0;
const progressBar = document.getElementById('progress');
const mainText = document.getElementById('main-text');
const subText = document.getElementById('sub-text');

function updateProgress() {
    if(progress < 100) {
        progress++;
        progressBar.style.width = progress + '%';
        progressBar.textContent = progress + '%';

        if(progress === 30) mainText.textContent = "در حال آماده‌سازی اطلاعات بیمه‌ای...";
        if(progress === 60) mainText.textContent = "در حال اتصال به سرویس‌ها...";
        if(progress === 90) mainText.textContent = "نزدیک به اتمام، لطفا شکیبا باشید...";

        setTimeout(updateProgress, 40);
    } else {
        progressBar.textContent = "بارگذاری کامل شد!";
        mainText.textContent = "خوش آمدید!";
        subText.textContent = "این نسخه مستقل است.";
    }
}

updateProgress();