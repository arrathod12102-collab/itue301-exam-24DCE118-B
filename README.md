# Hospital Appointment System — MedCare Plus

**ITUE301 — Advanced Web Development Frameworks**  
**SET A — Hospital Appointment System**

---

## 1. Project Name

**MedCare Plus** — Hospital Appointment System

## 2. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend runs on `http://localhost:5173` (Vite default).

## 3. Backend Setup

```bash
cd backend
npm install
node server.js
```

Or use:

```bash
cd backend
npm start
```

The backend runs on `http://localhost:5000`.

## 4. MongoDB Setup

1. Make sure **MongoDB** is installed and running locally.
2. Create a `.env` file in the `backend/` directory (see `.env.example` for reference).
3. The application will automatically create the `medcareplus` database when data is inserted.

## 5. Required Environment Variables

Create a `backend/.env` file with the following:

```
MONGO_URI=mongodb://localhost:27017/medcareplus
PORT=5000
```

## Tech Stack

- **Frontend**: React (Vite) + React Router
- **Backend**: Express.js
- **Database**: MongoDB with Mongoose

## API Endpoints

### In-Memory (Task 3)

| Method | Endpoint                 | Description             |
| ------ | ------------------------ | ----------------------- |
| GET    | `/api/v1/doctors`        | Get all doctors         |
| GET    | `/api/v1/appointments`   | Get all appointments    |
| POST   | `/api/v1/appointments`   | Create new appointment  |

### MongoDB (Task 5)

| Method | Endpoint                    | Description              |
| ------ | --------------------------- | ------------------------ |
| GET    | `/api/v1/db/doctors`        | Get all doctors (DB)     |
| POST   | `/api/v1/db/doctors`        | Create doctor (DB)       |
| GET    | `/api/v1/db/appointments`   | Get all appointments (DB)|
| POST   | `/api/v1/db/appointments`   | Create appointment (DB)  |
| GET    | `/api/v1/db/patients`       | Get all patients (DB)    |
| POST   | `/api/v1/db/patients`       | Create patient (DB)      |
