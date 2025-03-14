# Chatbase Alternative

A lightweight, open-source alternative to Chatbase for deploying AI chatbots with custom data sources.

## Features

- Playground for testing chatbot interactions
- Activity logs for monitoring conversations
- Analytics for tracking usage metrics
- Sources management for training data
- Custom actions for workflow automation
- Contact management
- Website embedding options
- Configuration settings

## Getting Started

### Prerequisites

- Python 3.9+
- Modern web browser

### Installation

#### Backend
```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

#### Frontend

Simply open the `frontend/index.html` file in your browser, or serve it using a simple HTTP server:

```bash
cd frontend
python -m http.server 8080
```

Then visit `http://localhost:8080` in your browser.

## Development

This project uses:
- FastAPI for the backend
- Vanilla JavaScript, HTML, and CSS for the frontend
- Tailwind CSS via CDN for styling

## License

MIT