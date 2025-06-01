# Eclypse Fashion E-commerce

A luxury fashion e-commerce platform built with React, TypeScript, and TailwindCSS.

## Features

- Immersive product showcase with video backgrounds
- Detailed product views with image galleries
- Seamless checkout experience with order processing
- Responsive design for all devices
- Modern, minimalist UI/UX
- Backend API for order management

## Tech Stack

### Frontend
- React 18
- TypeScript
- TailwindCSS
- React Router DOM

### Backend
- Node.js
- Express
- TypeScript
- CORS

## Getting Started

### Prerequisites

- Node.js 14+ and npm installed
- Git

### Installation

1. Clone the repository
```bash
git clone [your-repo-link]
cd eclypse-fashion
```

2. Install frontend dependencies and start the development server
```bash
npm install
npm run dev
```

3. Install backend dependencies and start the server
```bash
cd server
npm install
npm run dev
```

The frontend application will be available at `http://localhost:3000`
The backend server will be running at `http://localhost:5000`

## Project Structure

```
eclypse-fashion/
├── src/
│   ├── components/         # Reusable components
│   ├── assets/            # Static assets (images, videos)
│   ├── pages/             # Page components
│   ├── services/          # API services
│   └── styles/            # Global styles
├── server/                # Backend server
│   ├── index.ts          # Server entry point
│   └── package.json      # Server dependencies
├── public/                # Public assets
└── package.json          # Frontend dependencies
```

## Key Components

- `ProductDetailSection`: Main product showcase with video and details
- `CheckoutModal`: Handles the checkout process with order creation
- `ImageGallery`: Product image showcase
- `VideoBackground`: Video background component

## API Endpoints

- `POST /api/orders`: Create a new order
- `GET /api/orders/:id`: Get order details

## Deployment

The application can be deployed using platforms like Vercel (frontend) and Heroku (backend).

## Future Improvements

- Database integration (MongoDB/PostgreSQL)
- User authentication
- Shopping cart functionality
- Order management system
- Payment gateway integration
- Order status tracking
- Email notifications

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details 