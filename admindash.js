// Admin Dashboard JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Sidebar navigation
    const menuLinks = document.querySelectorAll('.admin-menu .menu-link');
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

    // Date range filter
    const dateRangeSelect = document.getElementById('dateRange');
    if (dateRangeSelect) {
        dateRangeSelect.addEventListener('change', function() {
            console.log('Date range changed to:', this.value);
            // Here you would typically update the dashboard data
            updateDashboardStats(this.value);
        });
    }

    // Order status filter
    const statusFilter = document.querySelector('.status-filter');
    if (statusFilter) {
        statusFilter.addEventListener('change', function() {
            filterOrdersByStatus(this.value);
        });
    }

    // Search functionality
    const searchInputs = document.querySelectorAll('.search-input');
    searchInputs.forEach(input => {
        input.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const table = this.closest('.section-header').nextElementSibling;
            
            if (table && table.querySelector('tbody')) {
                const rows = table.querySelectorAll('tbody tr');
                rows.forEach(row => {
                    const text = row.textContent.toLowerCase();
                    row.style.display = text.includes(searchTerm) ? '' : 'none';
                });
            }
        });
    });

    // Action buttons functionality
    document.addEventListener('click', function(e) {
        if (e.target.closest('.action-btn')) {
            const btn = e.target.closest('.action-btn');
            const action = btn.classList.contains('view') ? 'view' :
                          btn.classList.contains('edit') ? 'edit' :
                          btn.classList.contains('delete') ? 'delete' :
                          btn.classList.contains('toggle') ? 'toggle' :
                          btn.classList.contains('approve') ? 'approve' : 'unknown';
            
            handleActionButton(action, btn);
        }
    });

    function handleActionButton(action, button) {
        const row = button.closest('tr') || button.closest('.product-admin-card') || button.closest('.review-card');
        
        switch(action) {
            case 'view':
                alert('View details modal would open here');
                break;
            case 'edit':
                alert('Edit modal would open here');
                break;
            case 'delete':
                if (confirm('Are you sure you want to delete this item?')) {
                    row.remove();
                }
                break;
            case 'toggle':
                toggleProductAvailability(button);
                break;
            case 'approve':
                approveReview(button);
                break;
        }
    }

    function toggleProductAvailability(button) {
        const statusElement = button.closest('.product-admin-card').querySelector('.product-status');
        const icon = button.querySelector('i');
        
        if (statusElement.textContent === 'Available') {
            statusElement.textContent = 'Unavailable';
            statusElement.className = 'product-status unavailable';
            icon.className = 'fa-solid fa-toggle-off';
        } else {
            statusElement.textContent = 'Available';
            statusElement.className = 'product-status available';
            icon.className = 'fa-solid fa-toggle-on';
        }
    }

    function approveReview(button) {
        const reviewCard = button.closest('.review-card');
        reviewCard.style.opacity = '0.6';
        button.textContent = 'Approved';
        button.disabled = true;
        button.style.background = '#28a745';
    }

    function filterOrdersByStatus(status) {
        const orderRows = document.querySelectorAll('.orders-table tbody tr');
        orderRows.forEach(row => {
            const orderStatus = row.querySelector('.status').textContent.toLowerCase();
            if (status === 'all' || orderStatus === status) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    }

    // Add new product
    const addProductBtn = document.querySelector('.add-product-btn');
    if (addProductBtn) {
        addProductBtn.addEventListener('click', function() {
            alert('Add new product modal would open here');
        });
    }

    // Export report
    const exportBtn = document.querySelector('.export-btn');
    if (exportBtn) {
        exportBtn.addEventListener('click', function() {
            alert('Export functionality would be implemented here');
        });
    }

    // Settings tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all tabs
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Show corresponding content
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Settings form submission
    const settingsForms = document.querySelectorAll('.settings-form');
    settingsForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Settings saved successfully!');
        });
    });

    // Rating filter for reviews
    const ratingFilter = document.querySelector('.rating-filter');
    if (ratingFilter) {
        ratingFilter.addEventListener('change', function() {
            filterReviewsByRating(this.value);
        });
    }

    function filterReviewsByRating(rating) {
        const reviewCards = document.querySelectorAll('.review-card');
        reviewCards.forEach(card => {
            const stars = card.querySelectorAll('.rating .fa-star').length;
            if (rating === 'all' || stars.toString() === rating) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Simulate real-time updates
    function updateDashboardStats(period) {
        const stats = {
            today: { revenue: '$1,245', orders: 23, users: 1248, products: 89 },
            week: { revenue: '$8,750', orders: 156, users: 1248, products: 89 },
            month: { revenue: '$12,450', orders: 342, users: 1248, products: 89 },
            year: { revenue: '$89,340', orders: 2156, users: 1248, products: 89 }
        };

        const currentStats = stats[period] || stats.month;
        
        // Update stat cards
        const statCards = document.querySelectorAll('.admin-stat-card');
        statCards[0].querySelector('h3').textContent = currentStats.revenue;
        statCards[1].querySelector('h3').textContent = currentStats.orders;
        statCards[2].querySelector('h3').textContent = currentStats.users;
        statCards[3].querySelector('h3').textContent = currentStats.products;
    }

    // Notification click handler
    const notifications = document.querySelector('.notifications');
    if (notifications) {
        notifications.addEventListener('click', function() {
            alert('Notifications panel would open here');
        });
    }

    // Auto-refresh dashboard data every 30 seconds
    setInterval(() => {
        console.log('Refreshing dashboard data...');
        // Here you would typically fetch new data from the server
    }, 30000);

    // Initialize charts (placeholder)
    function initializeCharts() {
        const chartElements = document.querySelectorAll('.chart-placeholder canvas');
        chartElements.forEach(canvas => {
            const ctx = canvas.getContext('2d');
            ctx.fillStyle = '#f0f0f0';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#666';
            ctx.font = '16px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('Chart would be rendered here', canvas.width/2, canvas.height/2);
        });
    }

    // Initialize charts on load
    initializeCharts();

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

    // Apply loading states to main action buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function() {
            if (!this.classList.contains('menu-link') && !this.classList.contains('tab-btn')) {
                addLoadingState(this, 1000);
            }
        });
    });

    // Animate stat cards on load
    function animateStatCards() {
        const statCards = document.querySelectorAll('.admin-stat-card');
        statCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.transform = 'translateY(0)';
                card.style.opacity = '1';
            }, index * 200);
        });
    }

    // Set initial state for animation
    document.querySelectorAll('.admin-stat-card').forEach(card => {
        card.style.transform = 'translateY(20px)';
        card.style.opacity = '0';
        card.style.transition = 'all 0.5s ease';
    });

    // Start animations
    setTimeout(animateStatCards, 100);

    // Add hover effects to tables
    const tableRows = document.querySelectorAll('tbody tr');
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.01)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        row.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});