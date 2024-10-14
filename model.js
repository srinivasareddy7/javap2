// Get modal element
const modal = document.getElementById('modal');

// Get open modal button
const openModal = document.getElementById('open-modal');

// Get close button
const closeModal = document.getElementById('close-modal');

// Get close button in modal content
const closeBtn = document.getElementById('close-btn');

// Listen for open click
openModal.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Listen for close click
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Listen for close button in modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Listen for outside click to close modal
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
