function checkThemePreference()
{
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.toggle('dark-theme', savedTheme === 'dark');
    } else if (prefersDark) {
        document.body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    }
    
    updateButtonText();
}

function toggleTheme() 
{
    document.body.classList.toggle('dark-theme');
                    
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            
            updateButtonText();
}

function updateButtonText() {
    const button = document.querySelector('.theme-toggle');
    const isDark = document.body.classList.contains('dark-theme');
    button.textContent = isDark ? 'Toggle Light Mode' : 'Toggle Dark Mode';
}

document.addEventListener('DOMContentLoaded', checkThemePreference);