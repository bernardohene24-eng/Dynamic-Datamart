# Dynamic Datamart 🚀

A comprehensive digital services marketplace for Ghana featuring data bundles, virtual numbers, and social media boosting services.

## Features

### 📱 Data Bundles
- MTN Mobile Money bundles
- Vodafone Cash bundles
- AirtelTigo Money bundles
- Voice, SMS, and data plans

### 🔢 Virtual Numbers
- International virtual phone numbers
- SMS receiving capabilities
- Verification service numbers
- Temporary and permanent numbers

### 📊 Social Media Booster
- Instagram followers, likes, and views
- TikTok engagement
- Twitter followers
- Facebook page likes
- YouTube subscribers and views

### ✅ Results Checker
- Real-time order status tracking
- Transaction receipts and invoices
- Delivery confirmation
- SMS notification history

### 🛒 E-Commerce Features
- Shopping cart management
- Multiple payment methods
- Order history
- User accounts and profiles
- Admin dashboard

## Tech Stack

### Frontend
- **Framework:** Next.js 14
- **UI Library:** React 18
- **Styling:** Tailwind CSS
- **State Management:** Redux Toolkit
- **API Client:** Axios

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB
- **Authentication:** JWT
- **Payment:** Stripe API + Mobile Money APIs

### DevOps
- **Containerization:** Docker
- **Version Control:** Git
- **Environment:** .env configuration

## Project Structure

```
dynamic-datamart/
├── frontend/                 # Next.js frontend application
│   ├── app/                 # App directory
│   ├── components/          # Reusable components
│   ├── pages/               # Page components
│   ├── styles/              # Global styles
│   ├── lib/                 # Utilities and helpers
│   └── public/              # Static assets
│
├── backend/                 # Express.js backend API
│   ├── src/
│   │   ├── models/          # MongoDB schemas
│   │   ├── controllers/     # Route controllers
│   │   ├── routes/          # API routes
│   │   ├── middleware/      # Custom middleware
│   │   ├── services/        # Business logic
│   │   ├── config/          # Configuration files
│   │   └── utils/           # Utility functions
│   ├── tests/               # Test files
│   └── server.js            # Entry point
│
├── database/                # Database schemas and migrations
│   ├── models/              # Mongoose models
│   └── seeds/               # Seed data
│
├── admin/                   # Admin dashboard (Next.js)
│   ├── app/                 # Admin pages
│   └── components/          # Admin components
│
├── docs/                    # Documentation
│   ├── API.md              # API documentation
│   ├── SETUP.md            # Setup guide
│   └── FEATURES.md         # Feature documentation
│
├── .env.example            # Environment variables template
├── docker-compose.yml      # Docker compose configuration
└── package.json            # Dependencies
```

## Getting Started

### Prerequisites
- Node.js 18+
- MongoDB 5.0+
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/bernardohene24-eng/dynamic-datamart.git
cd dynamic-datamart
```

2. Install dependencies
```bash
# Frontend
cd frontend && npm install

# Backend
cd ../backend && npm install

# Admin
cd ../admin && npm install
```

3. Configure environment variables
```bash
cp .env.example .env.local
# Edit .env.local with your credentials
```

4. Start development servers
```bash
# Frontend (localhost:3000)
npm run dev

# Backend (localhost:5000)
npm run server

# Admin (localhost:3001)
npm run admin
```

## API Documentation

See [API.md](docs/API.md) for comprehensive API documentation.

## Database Schema

See [Database Models](database/models/) for detailed schema information.

## Configuration

See [SETUP.md](docs/SETUP.md) for detailed setup instructions.

## Contributing

1. Create a feature branch
2. Commit your changes
3. Push to the branch
4. Open a Pull Request

## License

MIT License - see LICENSE file for details

## Support

For support, email support@dynamicdatamart.com or open an issue on GitHub.

---

**Made with ❤️ in Ghana** 🇬🇭
