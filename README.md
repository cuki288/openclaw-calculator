# DreamAI Clone

**DreamAI** is a full-stack web application that uses Generative AI to create illustrated children's stories on demand.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Frontend](https://img.shields.io/badge/Frontend-React%20%2B%20Vite-blue)
![Backend](https://img.shields.io/badge/Backend-Spring%20Boot-green)
![Database](https://img.shields.io/badge/Database-PostgreSQL-orange)

## Features

- **AI Story Generation**: Generates creative stories using OpenAI's GPT-3.5 Turbo.
- **AI Illustrations**: Creates cover images for stories using OpenAI's DALL-E 2/3.
- **User Authentication**: Secure registration and login (Basic Auth).
- **Personal Library**: Save and view your generated stories.
- **Dark Mode**: Fully responsive UI with persistent theme toggle.
- **Mock Mode**: Frontend falls back to demo data if the backend is unreachable.

## Tech Stack

### Frontend
- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS
- **Testing**: Vitest + React Testing Library
- **Routing**: React Router DOM

### Backend
- **Framework**: Spring Boot 3.2 + Java 17
- **AI Integration**: Spring AI (OpenAI)
- **Database**: PostgreSQL (Dockerized)
- **Security**: Spring Security (Basic Auth, BCrypt)
- **Docs**: Swagger UI / OpenAPI 3.0

---

## Setup Instructions

### Prerequisites
- Java 17+
- Node.js 18+
- Docker & Docker Compose
- OpenAI API Key

### 1. Database Setup
Start the PostgreSQL container using Docker Compose:
```bash
cd dreamai-clone
docker-compose up -d
```

### 2. Backend Setup
Configure your OpenAI API Key and run the Spring Boot application:

```bash
cd dreamai-clone/backend
export OPENAI_API_KEY=your_api_key_here
mvn spring-boot:run
```
The backend will start at `http://localhost:8080`.
- **Swagger UI**: `http://localhost:8080/swagger-ui.html`

### 3. Frontend Setup
Install dependencies and start the development server:

```bash
cd dreamai-clone/frontend
npm install
npm run dev
```
The frontend will start at `http://localhost:5173`.

---

## API Endpoints

| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/auth/register` | Register a new user | No |
| `POST` | `/api/auth/login` | Log in (Returns success msg) | No |
| `POST` | `/api/stories/generate` | Generate a story from prompt | **Yes** |
| `GET` | `/api/stories` | Get all stories | **Yes** |

## Testing

### Backend (JUnit)
```bash
cd dreamai-clone/backend
mvn test
```

### Frontend (Vitest)
```bash
cd dreamai-clone/frontend
npm test
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
