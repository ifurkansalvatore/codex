# Codex Marketplace

This repository contains a simple player marketplace built with **Laravel** and **Next.js**.

## Backend

Install dependencies and set up the database:

```bash
cd backend
composer install
# create the SQLite database file
mkdir -p database && touch database/database.sqlite
php artisan migrate --seed
```

Run the development server:

```bash
php -S localhost:8000 -t public
```

### API Endpoints

- `GET /players` – list all players
- `GET /players/{id}` – show a single player
- `POST /players` – create a player
- `PUT /players/{id}` – update a player
- `DELETE /players/{id}` – delete a player

## Frontend

The frontend is built with **Next.js**.

```bash
cd frontend
npm install
npm run dev
```

The application expects the backend at `http://localhost:8000`.
