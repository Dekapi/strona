function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const nav = document.querySelector('.nav');
    sidebar.classList.toggle('collapsed');
    nav.classList.toggle('hidden');
}
