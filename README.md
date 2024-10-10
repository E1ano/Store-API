# Store-API

A RESTful API for managing products in a store.

## Features

- Retrieve all products
- Filter products by various fields (e.g., price, rating, name, company)
- Sort products based on specified fields
- Paginate results for better data management
- Handle numeric filters for price and rating

## Technologies Used

- **Node.js**: JavaScript runtime for building the back-end
- **Express.js**: Web framework for Node.js
- **MongoDB**: NoSQL database for product storage
- **Mongoose**: MongoDB object modeling for Node.js

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14.x or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (local instance or cloud service like MongoDB Atlas)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/E1ano/Store-API.git
   ```

2. Navigate to the project directory:

   ```bash
   cd store-api
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add the necessary environment variables (e.g., database connection string).

### Running the Application

1. Start your MongoDB server (or connect to a remote MongoDB instance).

2. Run the application:

   ```bash
   npm start
   ```

3. The server should now be running at `http://localhost:3000`.

### API Endpoints

| Method | Endpoint           | Description      |
| ------ | ------------------ | ---------------- |
| GET    | `/api/v1/products` | Get all products |

### Query Parameters

You can use the following query parameters when retrieving products:

- **featured**: Filter by featured status (true/false)
- **rating**: Filter products by rating
- **price**: Filter products by price
- **name**: Filter products by name
- **company**: Filter products by company
- **sort**: Sort results by specified fields (e.g., `price,rating`)
- **fields**: Select specific fields to return (e.g., `name,price`)
- **page**: Specify the page number for pagination
- **limit**: Specify the number of results per page
- **numericFilters**: Apply numeric filters (e.g., `price>50`)

### Example Request Body for Creating a Product

```json
{
  "name": "Product Name",
  "price": 100,
  "featured": true,
  "rating": 4.5,
  "company": "ikea"
}
```
