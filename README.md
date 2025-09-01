# Job Tracker

A web app to help you track and manage your job applications in one place. Easily add, update, and delete jobs while keeping your applications organised and colour coded by status.

## Features

- User authentication with **Clerk**
- Dashboard showing jobs filtered by status: **Applied**, **Interview**, **Rejected**
- Add, update, and delete jobs via modal dialogs
- Responsive design for **mobile and desktop**
- Scrollable job descriptions and notes
- Colour coded status badges for quick visual reference
- Notifications for actions (success/error) using **Sonner**

## Tech Stack

- **Frontend:** Next.js, React, Tailwind CSS
- **Backend:** PostgreSQL (via `pg`)
- **Authentication:** Clerk
- **Form Validation:** React Hook Form + Zod
- **Notifications:** Sonner
- **Icons:** Lucide React

## Installation

1. Clone the repository:

```bash
git clone <repo-url>
cd job-tracker
```

2. Install dependencies:

```bash
npm install
```

3. Set up your environment variables in a .env.local file:

```bash
NEXT_DB_URL=<your-database-url>
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<clerk-key>
CLERK_SECRET_KEY=<your-secret-key>
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL=/dashboard
NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL=/dashboard
```

4. Start the development server:

```bash
npm run dev
```

The app should now be running at http://localhost:3000

## Usage

1. Sign in or sign up with Clerk.

2. Navigate to the Dashboard.

3. Add a job using the “Add Job” button.

4. Update or delete jobs directly from the dashboard.

5. View your applications organised by status.

## Future Improvements

- Pagination / “Load More” for long job lists
- Search or filter jobs by title, company, or notes
- Sorting jobs by date applied, company, or status
