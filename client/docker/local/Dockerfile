ARG NODE_VERSION=23-alpine

FROM node:${NODE_VERSION}

# Correct default path
ARG APP_HOME=/app

WORKDIR ${APP_HOME}

# COPY only package.json and package-lock.json first to optimize Docker layer caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Then copy the rest of the application files
COPY . .

# Start the application
CMD ["npm", "start"]