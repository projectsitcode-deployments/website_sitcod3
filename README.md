# Sitcod3 Lab — Renaissance of Code

A modern web application featuring the Sitcod3 Lab website showcasing Project Agent Caliper_A1-Construct.

## 🏗️ Project Structure

```
Moja VEBSTRANICA_Sitcode_Web/
├── frontend/              # Static frontend (HTML/CSS/JS)
│   ├── index.html         # Main HTML file
│   ├── css/
│   │   └── styles.css     # All styles (Kowalski-inspired design)
│   ├── js/
│   │   └── main.js        # Frontend JavaScript
│   ├── assets/            # Images, fonts, etc.
│   └── package.json
├── backend/               # Node.js + Express API
│   ├── server.js          # Main server entry point
│   ├── routes/
│   │   └── api.js         # API routes
│   ├── middleware/
│   │   └── errorHandler.js
│   ├── models/
│   │   └── project.js     # Data models
│   ├── config/
│   │   └── index.js       # Configuration
│   └── package.json
├── package.json           # Root package.json
├── .env.example           # Environment variables template
├── .gitignore
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js >= 18.0.0
- npm >= 9.0.0

### Installation

1. **Install all dependencies:**
```bash
npm run install:all
```

Or install separately:
```bash
# Backend
cd backend && npm install

# Frontend
cd frontend && npm install
```

2. **Set up environment variables:**
```bash
cp .env.example backend/.env
# Edit backend/.env with your values
```

3. **Run development servers:**
```bash
npm run dev
```

This starts:
- Backend: http://localhost:3000
- Frontend: http://localhost:5173

### Production Build

```bash
npm run build    # Build frontend
npm start        # Start production server
```

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| GET | `/api/projects` | List all projects |
| GET | `/api/projects/:id` | Get project details |
| POST | `/api/contact` | Contact form submission |

## 🎨 Design

- **Style**: Emil Kowalski-inspired modern UI
- **Colors**: Dark theme with amber accents
- **Typography**: Inter font family
- **Animations**: Smooth micro-interactions

## 🛠️ Tech Stack

**Frontend:**
- HTML5 / CSS3 / Vanilla JavaScript
- Vite for development & building

**Backend:**
- Node.js + Express
- CORS enabled
- Rate limiting
- Helmet security headers

## 📝 License

MIT © Sitcod3 Lab
