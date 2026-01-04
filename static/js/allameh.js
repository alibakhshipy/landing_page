// اسکریپت اختصاصی صفحه علامه
console.log("📱 صفحه خدمات بیمه دانشگاه علامه طباطبایی بارگذاری شد");

document.addEventListener("DOMContentLoaded", function () {
    // 1. لینک‌های تماس و واتساپ
    const phoneLinks = document.querySelectorAll(".number-value");

    phoneLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            // افکت کلیک
            this.style.transform = "scale(0.95)";
            setTimeout(() => {
                this.style.transform = "";
            }, 200);

            // تشخیص نوع لینک
            const isWhatsApp = this.classList.contains("whatsapp-link");
            const phoneNumber = this.textContent.trim();

            if (isWhatsApp) {
                console.log("💬 در حال باز کردن واتساپ برای:", phoneNumber);
                // لینک واتساپ در تب جدید باز می‌شود (توسط href)
            } else {
                console.log("📞 در حال برقراری تماس با:", phoneNumber);
                // لینک تماس تلفنی به صورت خودکار
            }
        });
    });

    // 2. افکت hover روی کارت‌های خدمات
    const serviceCards = document.querySelectorAll(".service-card");

    serviceCards.forEach((card) => {
        card.addEventListener("mouseenter", function () {
            this.style.transform = "translateY(-8px)";
        });

        card.addEventListener("mouseleave", function () {
            this.style.transform = "translateY(0)";
        });
    });

    // 3. نمایش پیام خوش‌آمدگویی در کنسول
    setTimeout(() => {
        console.log("🎓 به خدمات بیمه اختصاصی دانشگاه علامه طباطبایی خوش آمدید");
        console.log("📞 برای مشاوره: ۰۹۳۶۶۴۶۷۵۱۹");
        console.log("💬 واتساپ: ۰۹۱۲۶۴۶۷۹۱۵");
    }, 1000);

    // 4. ردیابی کلیک روی عناصر (برای آنالیتیکس)
    function trackEvent(category, action, label) {
        console.log("📊 ردیابی رویداد: ${category} - ${action} - ${label}");

        // اگر Google Analytics دارید:
        if (typeof gtag !== "undefined") {
            gtag("event", action, {
                event_category: category,
                event_label: label,
            });
        }
    }

    // ردیابی کلیک روی خدمات
    serviceCards.forEach((card, index) => {
        card.addEventListener("click", function () {
            const serviceTitle = this.querySelector("h3").textContent;
            trackEvent("Services", "service_click", serviceTitle);
        });
    });

    // ردیابی کلیک روی شماره‌ها
    phoneLinks.forEach((link) => {
        link.addEventListener("click", function () {
            const isWhatsApp = this.classList.contains("whatsapp-link");
            const type = isWhatsApp ? "whatsapp" : "phone";
            const number = this.textContent.trim();
            trackEvent("Contact", "${type}_click", number);
        });
    });
});
