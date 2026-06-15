// Gallery data for each portfolio category
const galleryData = {
    'real-estate': {
        title: 'Real Estate Showcase',
        images: [
            { src: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjI[...]', alt: 'Real Estate Photo 1' },
            { src: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjI[...]', alt: 'Real Estate Photo 2' },
            { src: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjI[...]', alt: 'Real Estate Photo 3' }
        ]
    },
    'events': {
        title: 'Event Coverage',
        images: [
            { src: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjI[...]', alt: 'Event Photo 1' },
            { src: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjI[...]', alt: 'Event Photo 2' },
            { src: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjI[...]', alt: 'Event Photo 3' }
        ]
    },
    'commercial': {
        title: 'Commercial Projects',
        images: [
            { src: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjI[...]', alt: 'Commercial Photo 1' },
            { src: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjI[...]', alt: 'Commercial Photo 2' },
            { src: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjI[...]', alt: 'Commercial Photo 3' }
        ]
    }
};

let currentGallery = '';
let currentPhotoIndex = 0;

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
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeGallery() {
    const modal = document.getElementById('galleryModal');
    modal.style.display = 'none';
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

// Close modal when clicking outside
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('galleryModal');
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeGallery();
        }
    });
});