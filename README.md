# Dashboard Project

This project contains an interactive Dashboard with a frontend built with Vite and a backend built with Node.js/Express and Hono.

## Installation Flow

Follow these steps to set up the project on your local machine:

1.  **Install project dependencies**:
    Run the following command from the root directory (`CompareSystem/`). This will automatically trigger the installation of dependencies for both the `app/web` and `app/api` folders:
    ```bash
    npm install
    ```

2.  **Configure Environment Variables**:
    Create a `.env` file in the `app/api/` directory (if it doesn't already exist) and provide your database and server configuration:
    ```env
    DATABASE_NAME=your_db_name
    DATABASE_HOST=your_host
    DATABASE_USER=your_user
    DATABASE_PASSWORD=your_password
    DATABASE_PORT=3306
    PORT=5000
    ```

3.  **Run the Project**:
    You can run everything simultaneously from the root:
    ```bash
    npx tsx run.ts
    ```

## How to Run the Project

You can run both the frontend and the backend from the root directory.

### Quick Start Command

From the root directory (`CompareSystem/`):
```bash
npx tsx run.ts
```

### Running Services Separately

**Frontend (Vite)**:
```bash
npm run dev
```

**Backend (API)**:
Currently, `npm run api` runs the Express server (`app.ts`). To run the new **Hono** server (with OpenAPI support), use:
```bash
cd app/api
npx tsx watch src/node.ts
```

## Project Structure
- **Frontend** (`app/web/`): Built with Vite/React.
- **Backend** (`app/api/`): Feature-rich API with Hono (OpenAPI) and Express.
- **Database**: Managed via Kysely with MySQL.
# CompareSystem
