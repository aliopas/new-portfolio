# Firebase Studio Portfolio (Ready for Vercel)

This is a Next.js portfolio starter project built in Firebase Studio. It's fully configured to connect to a Firebase backend for authentication and database, and it's ready to be deployed to **Vercel**.

## Getting Started: Local Setup

To run this application locally and connect it to your Firebase backend, you need to configure your environment variables and set up an admin user.

### 1. Configure Environment Variables

This project uses environment variables to store your Firebase project's secret keys.

1.  **Create a `.env.local` file:** In the root directory of the project, make a copy of the `.env.local.example` file and rename it to `.env.local`.
2.  **Find your Firebase keys:**
    *   Go to your Firebase project console: [console.firebase.google.com](https://console.firebase.google.com/)
    *   Click the gear icon next to "Project Overview" to go to **Project Settings**.
    *   In the "General" tab, scroll down to the "Your apps" section.
    *   If you haven't created a web app yet, do so now.
    *   Click on the **</>** icon to view your web app's configuration.
    *   You will see a `firebaseConfig` object. Copy the values from this object into your `.env.local` file.

    ```javascript
    // Example of what you're looking for in Firebase
    const firebaseConfig = {
      apiKey: "AIzaSy...",
      authDomain: "your-project-id.firebaseapp.com",
      projectId: "your-project-id",
      // ... and so on
    };
    ```

3.  **Fill `.env.local`:** Your completed `.env.local` file should look something like this:
    ```
    NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSy...
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=1234567890
    NEXT_PUBLIC_FIREBASE_APP_ID=1:1234567890:web:...
    NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-...
    ```

### 2. Set Up Your Admin User

For security, your admin login credentials are **not** stored in the code. You create them directly in the Firebase console.

1.  In your Firebase project console, go to the **Authentication** section (from the "Build" menu on the left).
2.  Click the **"Get started"** button if it's your first time.
3.  Go to the **"Sign-in method"** tab.
4.  Click on **"Email/Password"** from the list of providers and **enable** it. Save your changes.
5.  Now, go to the **"Users"** tab.
6.  Click the **"Add user"** button.
7.  Enter the email address and a secure password that you will use to log into your portfolio's dashboard.
8.  Click **"Add user"**.

You can now use these credentials on the `/login` page of your application to access the admin dashboard.

## Deploying to Vercel

This project is optimized for deployment on Vercel.

### Step 1: Push to a Git Repository
Push your project code to a GitHub, GitLab, or Bitbucket repository.

### Step 2: Import Project to Vercel
1.  Log in to your Vercel account.
2.  Click on **"Add New... > Project"**.
3.  Import the Git repository you just created.
4.  Vercel will automatically detect that you are using Next.js and configure the build settings for you.

### Step 3: Configure Environment Variables in Vercel

This is the most important step to connect your live site to Firebase.

1.  In your new Vercel project dashboard, go to the **Settings** tab.
2.  Click on **Environment Variables** in the left menu.
3.  For each variable in your `.env.local` file, add it here.
    *   **Copy the variable name** (e.g., `NEXT_PUBLIC_FIREBASE_API_KEY`).
    *   **Copy the value** (e.g., `AIzaSy...`).
    *   Click **Add**.
4.  Repeat this for all the `NEXT_PUBLIC_` variables from your file.

### Step 4: Deploy
Go to the **Deployments** tab in Vercel and trigger a new deployment. Vercel will build and deploy your site. Once it's done, your portfolio will be live and connected to your Firebase database!
