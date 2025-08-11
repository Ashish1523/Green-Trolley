# Use official Node.js LTS image
FROM node:18

# Create app directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install --production

# Copy the rest of the service code
COPY . .

# Expose the port your service runs on
EXPOSE 5000

# Command to start the service
CMD ["npm", "start"]
