// تم تیره/روشن -
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = themeToggle.querySelector('.theme-icon');
  const themeText = themeToggle.querySelector('.theme-text');
  
  // بررسی وضعیت ذخیره شده در localStorage
  const savedTheme = localStorage.getItem('theme');
  
  // تشخیص تم سیستم کاربر
  const systemTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  
  let currentTheme = savedTheme || systemTheme;
  
  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      themeIcon.textContent = '☀️';
      themeText.textContent = 'تم روشن';
      console.log('🌙 تم تیره فعال شد');
    } else {
      document.documentElement.removeAttribute('data-theme');
      themeIcon.textContent = '🌙';
      themeText.textContent = 'تم تیره';
      console.log('☀️ تم روشن فعال شد');
    }
    localStorage.setItem('theme', theme);
    currentTheme = theme;
  }
  
  applyTheme(currentTheme);
  
  // رویداد کلیک روی دکمه تغییر تم
  themeToggle.addEventListener('click', function() {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
    
    // افکت کلیک
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
      this.style.transform = '';
    }, 200);
  });
  
  // گوش دادن به تغییر تم سیستم (اگر کاربر تغییر بدهد)
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!savedTheme) { // فقط اگر کاربر قبلاً تنظیم نکرده
      const newSystemTheme = e.matches ? 'dark' : 'light';
      applyTheme(newSystemTheme);
    }
  });
  
  // برای دیباگ: نمایش وضعیت تم
  console.log(`🎨 وضعیت تم: ${currentTheme} (ذخیره شده: ${savedTheme ? 'بله' : 'خیر'}, سیستم: ${systemTheme})`);
});