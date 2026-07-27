# DocAppoint - Frontend Client

DocAppoint is a modern web application designed to simplify the process of booking and managing doctor appointments. This repository contains the frontend client, which provides a responsive, user-friendly interface for patients to browse specialized doctors, book appointments, and manage their health schedules.

## Tech Stack

This project was built using the following technologies:

*   **Framework:** Next.js (App Router)
*   **Styling:** Tailwind CSS
*   **Authentication:** Firebase Auth (Email/Password & Google Sign-In)
*   **Icons:** React Icons
*   **Carousels:** Swiper.js
*   **Notifications:** React Hot Toast
*   **Fonts:** Next/Font (Inter)

## Key Features

*   **User Authentication:** Secure login and registration using Firebase, including Google social login.
*   **Doctor Directory:** Browse top-rated doctors, filter by specialty, and view detailed profiles including experience, education, and availability.
*   **Appointment Booking:** Seamlessly book appointments with specific time slots.
*   **Patient Dashboard:** A protected user dashboard to view, update, and cancel upcoming appointments.
*   **Profile Management:** Users can update their display name and profile picture URL.
*   **Fully Responsive:** Optimized for both mobile and desktop screens.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing.

### Prerequisites

*   Node.js (v18.x or higher recommended)
*   npm or yarn
*   The `docappoint-server` backend must be running locally or deployed to handle API requests.

### Installation

1.  Clone the repository:
    ```bash
    git clone [https://github.com/your-username/docappoint-client.git](https://github.com/your-username/docappoint-client.git)
    cd docappoint-client
    ```

2.  Install the dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

### Environment Variables

Create a `.env.local` file in the root directory of the project and add your Firebase configuration keys. Your file should look like this:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id