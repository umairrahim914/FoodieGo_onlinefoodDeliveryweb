# FoodieGo React Dashboards

## Overview
This project now includes simplified React-based user and admin dashboards built with modern React components and Tailwind CSS.

## New Dashboard Features

### User Dashboard (`/user-dashboard`)
**Simplified sections:**
- **Overview**: Personal stats, recent orders summary
- **My Orders**: Order history with status tracking and reorder functionality
- **Favorites**: Manage favorite food items
- **Profile**: Update personal information

### Admin Dashboard (`/admin-dashboard`)
**Simplified sections:**
- **Dashboard**: Revenue, orders, users, products overview
- **Orders**: Manage all customer orders with search and status updates
- **Products**: Product catalog management (add, edit, toggle availability)
- **Users**: Customer account management

## Key Features

### Design
- **Clean & Modern**: Simplified UI with focus on essential features
- **Responsive**: Works perfectly on desktop, tablet, and mobile
- **Consistent Branding**: Matches FoodieGo color scheme and styling
- **Tailwind CSS**: Utility-first CSS framework for rapid development

### Functionality
- **React Hooks**: Modern state management with useState
- **Component-based**: Reusable and maintainable code structure
- **Interactive Elements**: Hover effects, status badges, action buttons
- **Search & Filter**: Real-time search functionality
- **Status Management**: Dynamic status updates and color coding

### Navigation
- **React Router**: Seamless navigation between pages
- **Sidebar Navigation**: Easy switching between dashboard sections
- **Breadcrumb Navigation**: Clear indication of current location

## File Structure
```
src/
├── pages/
│   ├── UserDashboard.jsx    # User dashboard component
│   └── AdminDashboard.jsx   # Admin dashboard component
├── components/
│   └── Navigation.jsx       # Updated with dashboard links
└── App.jsx                  # Updated with dashboard routes
```

## Getting Started

### Prerequisites
- Node.js installed
- React app already set up with Vite and Tailwind CSS

### Running the Dashboards
1. Navigate to the React project:
   ```bash
   cd ProjectReact/foodie_react
   ```

2. Install dependencies (if not already done):
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Access the dashboards:
   - User Dashboard: `http://localhost:5173/user-dashboard`
   - Admin Dashboard: `http://localhost:5173/admin-dashboard`

### Navigation
- Dashboard links are added to the main navigation
- Click "User Dashboard" or "Admin Panel" from any page
- Mobile-responsive navigation included

## Dashboard Sections

### User Dashboard Sections
1. **Overview** - Welcome screen with key statistics
2. **My Orders** - Order history and tracking
3. **Favorites** - Saved favorite items
4. **Profile** - Personal information management

### Admin Dashboard Sections
1. **Dashboard** - Business overview and statistics
2. **Orders** - Order management and processing
3. **Products** - Product catalog administration
4. **Users** - Customer account management

## Customization

### Adding New Sections
1. Add new menu item to `menuItems` array
2. Create render function for the section
3. Add case to the switch statement in `renderContent()`

### Styling
- Uses Tailwind CSS classes for styling
- Consistent color scheme with gradient cards
- Responsive design with mobile-first approach

### Data Integration
- Currently uses sample data
- Easy to integrate with real API endpoints
- State management ready for backend integration

## Technologies Used
- **React 18**: Modern React with hooks
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Client-side routing
- **Vite**: Fast build tool and development server
- **Font Awesome**: Icons for UI elements

## Future Enhancements
- Real-time data updates with WebSockets
- Chart integration with Chart.js or Recharts
- Advanced filtering and sorting
- Export functionality for reports
- Push notifications
- Dark mode support

## Browser Support
- Chrome (recommended)
- Firefox
- Safari
- Edge

The dashboards are production-ready and provide a solid foundation for your food delivery platform's React-based user interface!