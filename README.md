New Food Ordering Client
This is a frontend project for the Food Ordering Application, built using Next.js. It is designed to fetch and display data from a backend service hosted on EC2 using Docker, and it can be served both locally and through an S3 bucket.

Getting Started
Prerequisites
Node.js (v18 or higher recommended)
npm or yarn
AWS CLI (if deploying to S3)
Installation and Local Setup
Step 1: Clone the Repository
bash
Copy code
git clone https://github.com/sireeshakuppampati/NEW-FOODORDER-CLIENT.git
cd NEW-FOODORDER-CLIENT
Step 2: Install Dependencies
bash
Copy code
npm install
Step 3: Update Environment Variables
The BASE_URL for the backend API is configured in next.config.js:
javascript
Copy code
env: {
    BASE_URL: 'http://ec2-18-234-125-13.compute-1.amazonaws.com:8080/New-FoodOrdering',
},
Update this value if the backend API URL changes.
For local development, you can also use localhost:
javascript
Copy code
BASE_URL: 'http://localhost:8080/New-FoodOrdering'
Step 4: Run Locally
To start the development server:

bash
Copy code
npm run dev
Visit the application at: http://localhost:3000

Building and Deploying the Application
Build for Production
bash
Copy code
npm run build
Serve Locally
For static exports:

bash
Copy code
npx serve@latest out
Deploy to S3
Export the app for static hosting:
bash
Copy code
npm run build
aws s3 sync out/ s3://your-s3-bucket-name --acl public-read
The application will be available at your S3 bucket URL:
arduino
Copy code
http://your-s3-bucket-name.s3-website-us-east-1.amazonaws.com
Backend Integration
Backend API
The backend is hosted on EC2 and serves endpoints like:

http://ec2-18-234-125-13.compute-1.amazonaws.com:8080/New-FoodOrdering/users/all
http://ec2-18-234-125-13.compute-1.amazonaws.com:8080/New-FoodOrdering/orders/all
Ensure that the backend is running and accessible via the configured BASE_URL.

CORS Configuration
To ensure seamless integration, the backend includes a CORS policy that allows requests from:

Frontend S3 Bucket URL
Local Development (http://localhost:3000)
Directory Structure
plaintext
Copy code
.
├── public/                     # Static assets
├── src/                        # Source code
│   ├── app/                    # Next.js app directory
│   │   ├── users/              # User-related pages
│   │   ├── orders/             # Order-related pages
│   │   ├── menu_items/         # Menu item-related pages
│   │   ├── restaurants/        # Restaurant-related pages
│   ├── utils/                  # Utility functions
│   └── styles/                 # CSS and global styles
├── next.config.js              # Next.js configuration
├── .env                        # Environment variables
├── package.json                # Project dependencies and scripts
└── README.md                   # Project documentation
Key Features
Dynamic Pages:
View and manage Users, Orders, Menu Items, and Restaurants.
REST API Integration:
Fetches and interacts with backend services.
Multi-Environment Support:
Works both locally (localhost:3000) and on S3 (S3 bucket URL).
Optimized for Production:
Statically exported for S3 hosting.
Troubleshooting
1. Frontend UI Loads but Data Isn’t Fetching
Ensure that the backend is accessible at the configured BASE_URL.
Verify that the backend’s CORS policy allows requests from your frontend’s origin (S3 bucket or localhost).
2. Port Issues on Local Machine
If port 3000 is in use:

bash
Copy code
lsof -i :3000
kill -9 <PID>
npm run dev
Deploying Backend to EC2
Steps
SSH into your EC2 instance:
bash
Copy code
ssh -i ~/path-to-key.pem ec2-user@<EC2-IP>
Pull the latest Docker image:
bash
Copy code
docker pull sireesha2024/food-ordering-app:latest
Stop any running containers:
bash
Copy code
docker stop food-ordering-app
docker rm food-ordering-app
Start the backend container:
bash
Copy code
docker run -d \
  --name food-ordering-app \
  -p 8080:8080 \
  sireesha2024/food-ordering-app:latest
Contributions
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

