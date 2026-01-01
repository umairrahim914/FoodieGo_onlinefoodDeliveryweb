// User Dashboard JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Sidebar navigation
    const menuLinks = document.querySelectorAll('.menu-link');
    const contentSections = document.querySelectorAll('.content-section');

    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links and sections
            menuLinks.forEach(l => l.classList.remove('active'));
            contentSections.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Show corresponding section
            const sectionId = this.getAttribute('data-section');
            document.getElementById(sectionId).classList.add('active');
        });
    });

    // Order filters
    const filterBtns = document.querySelectorAll('.filter-btn');
    const orderCards = document.querySelectorAll('.order-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all filter buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            orderCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-status') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Remove from favorites
    const removeFavoriteBtns = document.querySelectorAll('.remove-favorite');
    removeFavoriteBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            if (confirm('Remove this item from favorites?')) {
                this.closest('.favorite-item').remove();
            }
        });
    });

    // Add to cart from favorites
    const addToCartBtns = document.querySelectorAll('.favorites-grid .btn');
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const itemName = this.closest('.favorite-item').querySelector('h4').textContent;
            alert(`${itemName} added to cart!`);
        });
    });

    // Reorder functionality
    const reorderBtns = document.querySelectorAll('.btn-secondary');
    reorderBtns.forEach(btn => {
        if (btn.textContent.trim() === 'Reorder') {
            btn.addEventListener('click', function() {
                const orderCard = this.closest('.order-card');
                const itemName = orderCard.querySelector('.item-details h4').textContent;
                alert(`${itemName} added to cart for reorder!`);
            });
        }
    });

    // Rate order functionality
    const rateBtns = document.querySelectorAll('.btn-primary');
    rateBtns.forEach(btn => {
        if (btn.textContent.trim() === 'Rate Order') {
            btn.addEventListener('click', function() {
                alert('Rating modal would open here');
            });
        }
    });

    // Profile form submission
    const profileForm = document.querySelector('.profile-details');
    if (profileForm) {
        profileForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Profile updated successfully!');
        });
    }

    // Change avatar
    const changeAvatarBtn = document.querySelector('.change-avatar');
    if (changeAvatarBtn) {
        changeAvatarBtn.addEventListener('click', function() {
            alert('Avatar change functionality would be implemented here');
        });
    }

    // Add new address
    const addAddressBtn = document.querySelector('.add-address-btn');
    if (addAddressBtn) {
        addAddressBtn.addEventListener('click', function() {
            alert('Add address modal would open here');
        });
    }

    // Edit/Delete address
    const editAddressBtns = document.querySelectorAll('.edit-btn');
    const deleteAddressBtns = document.querySelectorAll('.delete-btn');

    editAddressBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            alert('Edit address modal would open here');
        });
    });

    deleteAddressBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            if (confirm('Are you sure you want to delete this address?')) {
                this.closest('.address-card').remove();
            }
        });
    });

    // Add payment method
    const addPaymentBtn = document.querySelector('.add-payment-btn');
    if (addPaymentBtn) {
        addPaymentBtn.addEventListener('click', function() {
            alert('Add payment method modal would open here');
        });
    }

    // Edit/Remove payment method
    const editPaymentBtns = document.querySelectorAll('.payment-card .edit-btn');
    const removePaymentBtns = document.querySelectorAll('.payment-card .delete-btn');

    editPaymentBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            alert('Edit payment method modal would open here');
        });
    });

    removePaymentBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            if (confirm('Are you sure you want to remove this payment method?')) {
                this.closest('.payment-card').remove();
            }
        });
    });

    // Settings toggles
    const settingToggles = document.querySelectorAll('.switch input');
    settingToggles.forEach(toggle => {
        toggle.addEventListener('change', function() {
            const settingName = this.closest('.setting-item').querySelector('h4').textContent;
            const status = this.checked ? 'enabled' : 'disabled';
            console.log(`${settingName} ${status}`);
        });
    });

    // Simulate real-time order updates
    function simulateOrderUpdates() {
        const orderStatuses = ['preparing', 'on-the-way', 'delivered'];
        const statusElements = document.querySelectorAll('.status.preparing');
        
        statusElements.forEach((element, index) => {
            setTimeout(() => {
                const randomStatus = orderStatuses[Math.floor(Math.random() * orderStatuses.length)];
                element.textContent = randomStatus.replace('-', ' ');
                element.className = `status ${randomStatus}`;
            }, (index + 1) * 5000); // Update every 5 seconds
        });
    }

    // Start order updates simulation
    simulateOrderUpdates();

    // Add smooth scrolling for better UX
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add loading states for buttons
    function addLoadingState(button, duration = 2000) {
        const originalText = button.textContent;
        button.textContent = 'Loading...';
        button.disabled = true;
        
        setTimeout(() => {
            button.textContent = originalText;
            button.disabled = false;
        }, duration);
    }

    // Apply loading states to action buttons
    document.querySelectorAll('.btn, .btn-primary, .btn-secondary').forEach(btn => {
        btn.addEventListener('click', function() {
            if (!this.classList.contains('menu-link') && !this.classList.contains('filter-btn')) {
                addLoadingState(this, 1000);
            }
        });
    });
});