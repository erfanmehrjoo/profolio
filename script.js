const sections = {
    about: document.getElementById('about'),
    skills: document.getElementById('skills'),
    projects: document.getElementById('projects'),
    contact: document.getElementById('contact')
};

function handleCommand(command) {
    // مخفی کردن همه بخش‌ها
    Object.values(sections).forEach(section => {
        if (section) section.classList.add('hidden');
    });

    // نمایش بخش مربوطه
    if (sections[command]) {
        sections[command].classList.remove('hidden');
        // فعال کردن `input` در بخش مربوطه
        const input = sections[command].querySelector('.input');
        if (input) {
            input.focus();
        }
    } else {
        alert(`دستور "${command}" شناخته نشد!`);
    }
}

// اضافه کردن رویداد `keydown` به همه `input` ها
document.querySelectorAll('.input').forEach(input => {
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const command = input.innerText.trim();
            handleCommand(command);
            input.innerText = '';
        }
    });
});