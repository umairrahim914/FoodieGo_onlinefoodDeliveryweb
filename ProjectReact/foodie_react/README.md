# FoodieGo React - Online Food Delivery App

A modern React application converted from HTML/CSS/JS, built with Vite and styled with Tailwind CSS.

## 🚀 Features

- **Modern React Architecture**: Built with React 19, using hooks (useState, useEffect, useContext)
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Shopping Cart**: Full cart functionality with add, remove, and quantity management
- **Multi-page Navigation**: React Router for seamless page transitions
- **Component-based**: Reusable components following React best practices
- **State Management**: Context API for global cart state
- **Interactive UI**: Smooth animations and hover effects
- **Modern Styling**: Tailwind CSS with custom color palette

## 🛠️ Technologies Used

- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Swiper.js** - Touch slider for reviews carousel
- **Font Awesome** - Icons
- **Context API** - State management

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Navigation.jsx   # Header navigation with mobile menu
│   ├── ProductCard.jsx  # Individual product display
│   ├── CartSidebar.jsx  # Shopping cart sidebar
│   ├── CartItem.jsx     # Cart item component
│   ├── HeroSection.jsx  # Landing page hero
│   ├── ServiceCards.jsx # Service features display
│   ├── ProductMenu.jsx  # Product grid with data fetching
│   ├── ReviewsCarousel.jsx # Customer reviews slider
│   └── Footer.jsx       # Site footer
├── pages/              # Page components
│   ├── MainPage.jsx    # Home/landing page
│   ├── LoginSignup.jsx # Authentication forms
│   ├── HomePage.jsx    # Alternative home page
│   ├── MenuPage.jsx    # Menu categories page
│   └── CategoriesPage.jsx # Food categories
├── context/            # React Context for state management
│   └── CartContext.jsx # Shopping cart state
├── data/              # Static data
│   └── products.json  # Product catalog
└── App.jsx           # Main app component with routing
```

## 🎯 React Concepts Implemented

### 1. **useState Hook**
- Form state management in LoginSignup component
- Cart item quantities
- Mobile menu toggle states
- Active category selection

### 2. **useEffect Hook**
- Loading product data from JSON
- Component lifecycle management

### 3. **useContext Hook**
- Global cart state management
- Sharing cart data across components

### 4. **Event Handling**
- Form submissions
- Button clicks
- Cart operations (add, remove, update quantity)
- Navigation interactions

### 5. **Props**
- Passing product data to ProductCard
- Cart item data to CartItem
- Component composition and reusability

### 6. **Conditional Rendering**
- Cart empty state
- Mobile menu visibility
- Login vs Register forms
- Cart item quantity display

## 🎨 Design System

### Color Palette
- **Lead**: #212121 (Dark text)
- **Gold Finger**: #F2BD12 (Primary accent)
- **Eye Ball**: #FFFDF7 (Off-white)
- **Hint Yellow**: #FCF1CC (Light background)
- **Pure White**: #FFF (White)

### Typography
- **Font**: Roboto Condensed
- **Responsive**: Tailwind responsive text classes

## 🚀 Getting Started

1. **Navigate to the project directory:**
   ```bash
   cd FoodieGo_onlinefoodDeliveryweb/ProjectReact/foodie_react
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Visit `http://localhost:5173`

## 📱 Pages

1. **Main Page** (`/`) - Landing page with hero, services, products, and reviews
2. **Home Page** (`/home`) - Alternative home with search and featured recipes
3. **Login/Signup** (`/login`) - Authentication forms with toggle functionality
4. **Menu Page** (`/menu`) - Categorized menu with tabs
5. **Categories** (`/categories`) - Food category browsing

## 🛒 Cart Features

- **Add to Cart**: Click any "Add to Cart" button
- **View Cart**: Click the cart icon in navigation
- **Update Quantity**: Use +/- buttons in cart
- **Remove Items**: Click trash icon
- **Real-time Updates**: Cart badge shows total items
- **Price Calculation**: Automatic total calculation

## 🎯 Key Components

### Navigation
- Responsive design with mobile hamburger menu
- Cart icon with item count badge
- React Router navigation links

### ProductCard
- Displays product image, name, and price
- Add to cart functionality using Context API
- Hover effects and animations

### CartSidebar
- Slide-out cart panel
- Item management (quantity, removal)
- Total price calculation
- Responsive design

### LoginSignup
- Toggle between login and registration forms
- Form validation and state management
- Responsive layout with background image

## 🔧 Build Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📦 Dependencies

### Production
- `react` - React library
- `react-dom` - React DOM rendering
- `react-router-dom` - Client-side routing
- `swiper` - Touch slider component

### Development
- `vite` - Build tool and dev server
- `tailwindcss` - CSS framework
- `postcss` - CSS processing
- `autoprefixer` - CSS vendor prefixes
- `eslint` - Code linting

## 🌟 Features Converted from Original

✅ **Navigation** - Responsive header with mobile menu
✅ **Product Display** - Dynamic product cards from JSON data
✅ **Shopping Cart** - Full cart functionality with persistence
✅ **User Authentication** - Login/signup forms with validation
✅ **Reviews Carousel** - Customer testimonials slider
✅ **Service Cards** - Feature highlights
✅ **Footer** - Multi-column footer with links
✅ **Mobile Responsive** - Mobile-first design
✅ **Animations** - Smooth transitions and hover effects

## 🎨 Styling Approach

- **Tailwind CSS** for utility-first styling
- **Custom color palette** matching original design
- **Responsive breakpoints** for mobile, tablet, desktop
- **Component-scoped styling** with Tailwind classes
- **Hover effects** and smooth transitions

This React conversion maintains all the functionality of the original HTML/CSS/JS version while adding modern React patterns, better state management, and improved maintainability.