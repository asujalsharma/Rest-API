# Healthcare Service Management API


## Features
- Add a new service (POST `/api/services/addservice`)
- Get all services (GET `/api/services/getservices`)
- Update a service (PUT `/api/services/update/:serviceId`)
- Delete a service (DELETE `/api/services/delete/:serviceId`)

## Installation


2. Install dependencies:
    ```
    npm install express body-parser mongoose
    ```

4. Start the server:
    ```
    npm start
    ```

## Testing the API
You can test the API using Postman or any other API testing tool by using the following endpoints:
- **Add a service (POST)**: `http://localhost:3000/api/services/addservice`
- **Get all services (GET)**: `http://localhost:3000/api/services/getservices`
- **Update a service (PUT)**: `http://localhost:3000/api/services/update/:serviceId`
- **Delete a service (DELETE)**: `http://localhost:3000/api/services/delete/:serviceId`

