// Gallery data for each portfolio category
const galleryData = {
    'real-estate': {
        title: 'Real Estate Showcase',
        images: [
            { src: '../images/Adress.png', alt: 'Real Estate - Address Showcase' },
            { src: '../images/Lake Macquarie.png', alt: 'Real Estate - Lake Macquarie Waterfront' }
        ]
    },
    'commercial': {
        title: 'Commercial Projects',
        images: [
            { src: '../images/2026-04-24-12-54-01-326.JPG', alt: 'Commercial Project - Aerial View' },
            { src: '../images/2026-04-24-12-36-49-029.JPG', alt: 'Commercial Project - Property Coverage' }
        ]
    }
};

let currentGallery = '';
let currentPhotoIndex = 0;

function getRandomImage(category) {
    const images = galleryData[category].images;
    return images[Math.floor(Math.random() * images.length)].src;
}

function openGallery(category) {
    currentGallery = category;
    currentPhotoIndex = 0;
    
    const modal = document.getElementById('galleryModal');
    const gallery = galleryData[category];
    
    if (!gallery) return;
    
    // Set main image
    document.getElementById('galleryImage').src = gallery.images[0].src;
    document.getElementById('galleryImage').alt = gallery.images[0].alt;
    
    // Update counter
    document.getElementById('currentPhoto').textContent = '1';
    document.getElementById('totalPhotos').textContent = gallery.images.length;
    
    // Create thumbnails
    const thumbnailsContainer = document.getElementById('galleryThumbnails');
    thumbnailsContainer.innerHTML = '';
    
    gallery.images.forEach((image, index) => {
        const thumb = document.createElement('img');
        thumb.src = image.src;
        thumb.alt = image.alt;
        thumb.className = index === 0 ? 'gallery-thumbnail active' : 'gallery-thumbnail';
        thumb.onclick = () => goToPhoto(index);
        thumbnailsContainer.appendChild(thumb);
    });
    
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    
    // Return focus after modal closes
    const closeBtn = modal.querySelector('.gallery-close');
    closeBtn.focus();
}

function closeGallery() {
    const modal = document.getElementById('galleryModal');
    modal.classList.remove('open');
    document.body.style.overflow = 'auto';
}

function nextPhoto() {
    const gallery = galleryData[currentGallery];
    currentPhotoIndex = (currentPhotoIndex + 1) % gallery.images.length;
    updateGallery();
}

function previousPhoto() {
    const gallery = galleryData[currentGallery];
    currentPhotoIndex = (currentPhotoIndex - 1 + gallery.images.length) % gallery.images.length;
    updateGallery();
}

function goToPhoto(index) {
    currentPhotoIndex = index;
    updateGallery();
}

function updateGallery() {
    const gallery = galleryData[currentGallery];
    const image = gallery.images[currentPhotoIndex];
    
    document.getElementById('galleryImage').src = image.src;
    document.getElementById('galleryImage').alt = image.alt;
    document.getElementById('currentPhoto').textContent = currentPhotoIndex + 1;
    
    // Update active thumbnail
    const thumbnails = document.querySelectorAll('.gallery-thumbnail');
    thumbnails.forEach((thumb, index) => {
        thumb.classList.toggle('active', index === currentPhotoIndex);
    });
}

// Set random cover images on load
document.addEventListener('DOMContentLoaded', function() {
    // Set random cover images for each portfolio item
    const realEstateImg = document.querySelector('[data-gallery="real-estate"] .portfolio-image img');
    const commercialImg = document.querySelector('[data-gallery="commercial"] .portfolio-image img');
    
    if (realEstateImg) realEstateImg.src = getRandomImage('real-estate');
    if (commercialImg) commercialImg.src = getRandomImage('commercial');
    
    // Close modal when clicking outside
    const modal = document.getElementById('galleryModal');
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeGallery();
        }
    });
    
    // Close modal on Escape key
    window.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeGallery();
        }
    });
    
    // Arrow key navigation
    window.addEventListener('keydown', function(event) {
        if (modal.classList.contains('open')) {
            if (event.key === 'ArrowRight') {
                nextPhoto();
            } else if (event.key === 'ArrowLeft') {
                previousPhoto();
            }
        }
    });
});
