# DocVisit - Doctor Home Visit & Medical Assistance Web App

## Overview
**DocVisit** is a fully responsive web application that connects users with certified doctors for home visits in India. The application allows users to request doctors based on medical conditions or symptoms, track their doctor's real-time location, and explore specialized care options nearby. Built using **Next.js** and **Tailwind CSS**, this app offers a seamless experience for users to access healthcare from the comfort of their homes.

---

## Features

### 🧑‍⚕️ Core Features

#### 1. Doctor On-Demand Request
- **Upload Medical Reports**: Users can upload medical reports in various formats (PDF, JPG, PNG, etc.).
- **Describe Symptoms**: Users can describe their symptoms through a text form.
- **Automated Assignment**: After submission, the system analyzes the medical report/description (simple text-based filtering or placeholder for AI model) and automatically assigns a nearby available doctor based on their specialization.

#### 2. Real-Time Tracking
- **Live Location Tracking**: Shows the assigned doctor's live location on a map.
- **Estimated Arrival Time**: Displays the estimated time of arrival for the doctor.
- **Doctor's Details**: Shows the doctor's name, photo, specialization, rating, and contact information.
- **Real-Time Tracking**: Both user and doctor locations are tracked in real-time using web sockets or polling.

### 🏥 Specialty-Based Recommendations

#### 3. Specialized Care Discovery
- **Browse and Explore Doctors**: Users can explore top-rated doctors and hospitals nearby based on their conditions:
  - Diabetes (Sugar)
  - Cardiac (Heart) issues
  - Gastro (Stomach) issues
  - Liver problems
  - Dental (Teeth) issues
- **Filters**: Users can filter by:
  - Location (using pincode or map)
  - Ratings, proximity, and availability
  - Specialization (Diabetes, Cardiac, etc.)
  
---

## Optional Add-ons for Better UX

#### 4. Authentication & Profiles
- **User Authentication**: Users can authenticate using phone/email or OTP.
- **Separate Dashboards**: Both user and doctor have personalized dashboards.
- **Profile Management**: Users can store previous reports, history of visits, and payment receipts.

#### 5. Doctor Panel
- **Request Management**: Doctors can accept or decline visit requests.
- **Availability Toggle**: Doctors can toggle their availability status.
- **Profile Setup**: Doctors can upload qualifications and set their specialization.

#### 6. Admin Panel
- **Doctor & Hospital Management**: Admin can add and manage doctors and hospitals.
- **Credential Verification**: Admin verifies doctor credentials before allowing them to accept requests.
- **Active Visit Tracking**: Admin can track active visits and view system analytics.

---

## Technologies Used
- **Frontend**: Next.js, Tailwind CSS (No third-party UI libraries)
- **Backend**: (Could be a backend tech of your choice, e.g., Node.js, Express, or others if included)
- **Real-time**: WebSockets or Polling for real-time location tracking
- **Authentication**: Phone/email OTP (For User and Doctor login)
- **Database**: (If relevant, e.g., MongoDB, PostgreSQL, etc.)

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/hsnaf/DocVisit.git
