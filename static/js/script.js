(() => {
    const insuranceBtn = document.getElementById('insurance-btn');
    const progressBar = document.getElementById('progress');
    const mainText = document.getElementById('main-text');
    const subText = document.getElementById('sub-text');

    let progressValue = 0; // متغیر محلی امن

    function updateProgress() {
        if (progressValue < 100) {
            progressValue++;
            progressBar.style.width = progressValue + '%';
            progressBar.textContent = progressValue + '%';

            if (progressValue === 30) mainText.textContent = "در حال آماده‌سازی اطلاعات بیمه‌ای...";
            if (progressValue === 60) mainText.textContent = "در حال اتصال به سرویس‌ها...";
            if (progressValue === 90) mainText.textContent = "نزدیک به اتمام، لطفا شکیبا باشید...";

            setTimeout(updateProgress, 40);
        } else {
            progressBar.textContent = "بارگذاری کامل شد!";
            mainText.textContent = "خوش آمدید!";
            subText.textContent = "";

            insuranceBtn.classList.remove("disabled-btn");
            insuranceBtn.classList.add("active-btn");
            insuranceBtn.href = "https://landing-page-1-1xox.onrender.com/insurance"; // لینک واقعی خدمات بیمه
        }
    }

    updateProgress();
})();