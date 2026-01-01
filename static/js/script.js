// ===== script.js - نسخه درست و تست شده =====

console.log("🎯 اسکریپت شروع شد");

// منتظر لود DOM بمان
document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ DOM آماده است");

    // عناصر رو بگیر
    const progressFill = document.getElementById("progress-fill");
    const progressPercent = document.getElementById("progress-percent");
    const mainText = document.getElementById("main-text");
    const subText = document.getElementById("sub-text");
    const insuranceBtn = document.getElementById("insurance-btn");

    // چک کن
    if (!progressFill || !progressPercent) {
        console.error("❌ عناصر ضروری پیدا نشدند");
        return;
    }

    console.log("🔍 همه عناصر پیدا شدند");

    // متغیرها
    let currentProgress = 0;
    let isComplete = false;

    // شروع
    console.log("🔄 شروع پیشرفت...");
    startLoading();

    // تابع شروع
    function startLoading() {
        // ریست
        progressFill.style.width = "0%";
        progressPercent.textContent = "0%";
        currentProgress = 0;
        isComplete = false;

        // اینتروال
        const interval = setInterval(function () {
            if (isComplete) {
                clearInterval(interval);
                return;
            }

            // افزایش
            let increment;
            if (currentProgress < 30) {
                increment = 3;
            } else if (currentProgress < 70) {
                increment = 2;
            } else {
                increment = 1;
            }

            currentProgress += increment;

            // اگر تمام شد
            if (currentProgress >= 100) {
                currentProgress = 100;
                isComplete = true;
                clearInterval(interval);
                finishLoading();
            }

            // به‌روزرسانی
            updateUI();
        }, 100);
    }

    // به‌روزرسانی UI
    function updateUI() {
        // نوار
        progressFill.style.width = currentProgress + "%";
        progressPercent.textContent = Math.round(currentProgress) + "%";

        // متن
        if (currentProgress < 25) {
            mainText.textContent = "سامانه بیمه دانشگاهی";
            subText.textContent = "در حال راه‌اندازی...";
        } else if (currentProgress < 50) {
            mainText.textContent = "احراز هویت";
            subText.textContent = "بررسی دسترسی‌ها";
        } else if (currentProgress < 75) {
            mainText.textContent = "بارگذاری داده‌ها";
            subText.textContent = "دریافت اطلاعات";
        } else {
            mainText.textContent = "آماده‌سازی نهایی";
            subText.textContent = "تنظیم سیستم";
        }
    }

    // پایان
    function finishLoading() {
        console.log("✅ لودینگ کامل شد");

        // متن نهایی
        progressPercent.textContent = "✅ 100%";
        progressPercent.style.color = "#4dabf7";
        mainText.textContent = "سیستم آماده است!";
        subText.textContent = "خوش آمدید";

        // فعال کردن دکمه
        if (insuranceBtn) {
            setTimeout(function () {
                insuranceBtn.classList.add("active");
                insuranceBtn.href = "https://landing-page-1-1xox.onrender.com/insurance";
                console.log("🎯 دکمه فعال شد");
            }, 500);
        }

        // پیام موفقیت
        showSuccess();
    }

    // نمایش پیام موفقیت
    function showSuccess() {
        // استایل انیمیشن
        const style = document.createElement("style");
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
                @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        ;
        document.head.appendChild(style);
        
        // ایجاد پیام
        const message = document.createElement('div');
        message.innerHTML = 
            <div style="
                position: fixed;
                top: 20px;
                right: 20px;
                background: #28a745;
                color: white;
                padding: 15px 20px;
                border-radius: 8px;
                z-index: 1000;
                animation: slideIn 0.5s ease-out;
                direction: rtl;
            ">
                <div style="display: flex; align-items: center; gap: 10px;">
                    <span style="font-size: 24px;">🎉</span>
                    <div>
                        <strong>سیستم فعال شد</strong><br>
                        <small>می‌توانید وارد شوید</small>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(message);

        // حذف بعد از 3 ثانیه
        setTimeout(function () {
            message.style.animation = "slideOut 0.5s ease-out forwards";
            setTimeout(function () {
                if (message.parentNode) {
                    message.parentNode.removeChild(message);
                }
            }, 500);
        }, 3000);
    }
});

console.log("🚀 اسکریپت بارگذاری شد");
