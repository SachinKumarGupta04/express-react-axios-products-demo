# express-react-axios-products-demo
Demo: Connect React frontend to Express API using Axios for product listing.

## Usage Instructions

### Running the Express Server

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Express server:
   ```bash
   node server.js
   ```
   The server will run on `http://localhost:5000` and provide a `/products` endpoint.

### Running the React Client

1. Open a new terminal and navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm start
   ```
   The React app will open in your browser at `http://localhost:3000`.

### Viewing the Fetched Products

Once both servers are running:
- The React app will automatically fetch product data from the Express API when the component mounts
- You'll see a list of products displayed with their names and prices
- The app handles loading states and potential errors during data fetching

## Example Output

Here's what the application looks like when running successfully:

![Product List Output](https://s3.ap-south-1.amazonaws.com/static.bytexl.app/uploads/42vxd5kz7/content/43qjzj4cx/9.png)

The screenshot shows the React frontend successfully fetching and displaying product data from the Express API using Axios.
