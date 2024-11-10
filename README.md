![image](https://github.com/user-attachments/assets/39a30581-46e9-4b01-a0fa-c74ab67fb37e)
# Car Rental Platform - Algeria

This is a **Car Rental Platform** developed to allow users to conveniently reserve cars online across multiple locations in Algeria. The application is structured with a **React front-end** and a **Node.js/Express back-end** connected to **MongoDB** for data storage.

![Uploading Capture d'écran 2024-02-15 151257.png…]()
![Uploading Capture d'écran 2024-02-15 151319.png…]()


## Key Features

### User Side
- **Online Reservation**: A user-friendly reservation form that lets clients book cars without physical presence or phone calls.
- **Vehicle Information**: Access detailed information on available cars across different rental locations, helping clients make informed choices.
- **Location Flexibility**: Users can select different pick-up and drop-off locations across Algeria.
- **Loyalty Program**: Clients can earn a loyalty card with progressive discounts based on rental duration.
- **User Accounts**: Registered users can log in to view and manage their reservations and access their loyalty benefits.

### Admin Dashboard
- **Car Management**: Add, update, or remove cars from the system.
- **Category Management**: Add and manage categories for different car types.
- **Reservation Management**: View and manage client reservations.
- **Search and Filtering**: Search cars by name, category, and filter by price range for efficient inventory management.

## Technology Stack

- **Front-End**: React, JavaScript, HTML5, CSS3, Bootstrap, Ant Design
- **Back-End**: Node.js, Express.js, MongoDB
- **Tools**: Visual Studio Code for development, StarUML for UML diagrams
- **Version Control**: Git & GitHub

## Project Structure

### Front-End (React)
Located in the `front` folder, the front-end handles the user interface and user interactions, making requests to the back-end API to fetch and manage data.

### Back-End (Node.js / Express)
Located in the `back` folder, the back-end provides a RESTful API that handles authentication, reservation management, and CRUD operations on car and category data.

## Installation

### Prerequisites
- Node.js and npm installed
- MongoDB instance (local or cloud)
- Git for version control

### Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/username/carRental.git
   cd carRental
   ```

2. **Install Front-End Dependencies**:
   Navigate to the `front` folder and install dependencies:
   ```bash
   cd front
   npm install
   ```

3. **Run the Front-End**:
   Start the React development server:
   ```bash
   npm start
   ```

4. **Install Back-End Dependencies**:
   Open a new terminal, navigate to the `back` folder, and install dependencies:
   ```bash
   cd ../back
   npm install
   ```

5. **Set up MongoDB**:
   Ensure your MongoDB instance is running, and update the database connection string in the `back` folder’s `.env` file:
   ```plaintext
   MONGO_URI=mongodb://localhost:27017/carRentalDB
   ```

6. **Run the Back-End**:
   Start the Node.js server:
   ```bash
   node index.js
   ```

### UML Diagrams
This project includes UML diagrams for the system structure and workflow, created with StarUML. Refer to the `docs` folder for detailed diagrams.

## Back-End Repository Link
For further details on the back-end setup, visit the separate back-end repository here: (https://github.com/MansourAmal/LocationVoitureB)

## Usage

Once both front-end and back-end servers are running:
1. Access the application through your browser at `http://localhost:3000`.
2. Use the navigation to explore car options, make reservations, and manage your account.
3. Admins can log in to the dashboard to manage car inventory and reservations.

## Contact
For questions or feedback, please reach out to the project maintainer, or submit an issue on GitHub.

