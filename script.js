const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.service_item, .slide-left, .slide-right, .client_card').forEach(el => {
    observer.observe(el);
});
