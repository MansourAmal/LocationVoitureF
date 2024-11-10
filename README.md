
# Car Rental Platform - Algeria

This is a **Car Rental Platform** developed to allow users to conveniently reserve cars online across multiple locations in Algeria. The application is structured with a **React front-end** and a **Node.js/Express back-end** connected to **MongoDB** for data storage.

![image](https://github.com/user-attachments/assets/39a30581-46e9-4b01-a0fa-c74ab67fb37e)
![Capture d'écran 2024-02-15 151319](https://github.com/user-attachments/assets/1e0d2743-0b14-4bdd-aa9c-4b5a877aaa3a)
![Capture d'écran 2024-02-15 151330](https://github.com/user-attachments/assets/db58cda4-cdb8-48a9-b80a-53bf59d9da05)
![Capture d'écran 2024-02-15 151341](https://github.com/user-attachments/assets/334d30eb-7602-45a5-b0f8-e88e42d6bd88)
![Capture d'écran 2024-02-15 151353](https://github.com/user-attachments/assets/29aee2c2-3fae-42f6-922b-623580ca7401)
![Capture d'écran 2024-02-15 152151](https://github.com/user-attachments/assets/d8e4d3ef-99a8-4f1f-aefb-736a2cd90dd2)
![Capture d'écran 2024-02-15 152209](https://github.com/user-attachments/assets/0deecdd4-c7bd-4d25-a382-4a18402abb5a)
![Capture d'écran 2024-02-15 152444](https://github.com/user-attachments/assets/243592a5-db21-4c5e-9f86-70347ac1ce40)
![Capture d'écran 2024-02-15 152452](https://github.com/user-attachments/assets/6178fe40-cf3b-476e-a4c8-d7bcc771cebe)
![Capture d'écran 2024-02-15 152624](https://github.com/user-attachments/assets/4003de28-3090-4374-8105-572625c2c9a1)
![Capture d'écran 2024-02-15 152718](https://github.com/user-attachments/assets/9ca25d06-951d-473a-8488-1d07c8b6df72)
![Capture d'écran 2024-02-15 153751](https://github.com/user-attachments/assets/18b290e4-3337-4acb-aec8-ca10ad70e145)
![Capture d'écran 2024-02-15 153813](https://github.com/user-attachments/assets/42713993-bba0-4565-ba83-5c52eca5d136)
![Capture d'écran 2024-02-15 153825](https://github.com/user-attachments/assets/e01be8cb-0be7-49e8-9a50-fe89291a6e5b)
![Capture d'écran 2024-02-15 153839](https://github.com/user-attachments/assets/1e859c95-f05f-46d6-a4d4-c01cb59d5f29)
![Capture d'écran 2024-02-15 153935](https://github.com/user-attachments/assets/85d1d7aa-4076-4e35-82a6-b4ddd8c52ac6)
![Capture d'écran 2024-02-15 153948](https://github.com/user-attachments/assets/35f673c7-c56c-4ed4-a4f7-125a49b6a892)
![Capture d'écran 2024-02-15 154005](https://github.com/user-attachments/assets/87a2fdb2-b9bb-421c-8812-a98e251adc51)
![Capture d'écran 2024-02-15 154031](https://github.com/user-attachments/assets/d1263989-0708-47c4-9031-c735c102b366)



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

