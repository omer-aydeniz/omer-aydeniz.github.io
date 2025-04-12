function filter(category) {
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
document.querySelector('a[href="#hakkimizda"]').addEventListener('click', () => {
    document.getElementById('hakkimizda').scrollIntoView({ behavior: 'smooth' });
});

