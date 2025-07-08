# Firebase Studio Portfolio

This is a Next.js portfolio starter project built in Firebase Studio.

## Getting Started

The application is fully configured to work with Firebase.

- **Authentication:** Managed via Firebase Authentication (Email/Password).
- **Database:** Uses Firestore for projects, messages, and settings.
- **Styling:** Next.js, React, ShadCN UI components, and Tailwind CSS.

## Running Locally

The application runs automatically in the preview window of Firebase Studio.

## Preparing for Deployment

Your application is ready to be deployed to Firebase App Hosting. Before you deploy, make sure you have done the following:

1.  **Set up Firebase Project:**
    *   Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com/).
    *   Enable **Firestore Database** (in Production Mode).
    *   Enable **Authentication** with the "Email/Password" provider and add at least one admin user.

2.  **Configure Environment Variables:**
    *   Copy your Firebase project's configuration keys into the `.env.local` file.
    *   **CRITICAL:** When you deploy, you must also add these same environment variables to your Firebase App Hosting backend configuration. This is done in the Firebase console settings for your App Hosting backend. The variables are:
        - `NEXT_PUBLIC_FIREBASE_API_KEY`
        - `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
        - `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
        - `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
        - `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
        - `NEXT_PUBLIC_FIREBASE_APP_ID`
        - `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID`

## Deployment

In Firebase Studio, you can typically deploy your application using the **"Deploy"** or **"Publish"** button in the user interface. This will build your Next.js application and deploy it to Firebase App Hosting, along with the Firestore security rules defined in `firestore.rules`.

After deployment, your site will be live on a `*.web.app` URL.
