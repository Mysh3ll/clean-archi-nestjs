# Set Node version
FROM node:14-alpine AS development

# Set working directory
WORKDIR /usr/src/app

# Add Git to the container
RUN apk --no-cache add git

# Copy the package.json from host to container
COPY package*.json ./

# Install all the dependencies
RUN npm install

# Bundle app source / copy all other files
COPY . .

# Build the app to the /dist folder
RUN npm run build

################
## PRODUCTION ##
################
# Build another image named production
FROM node:14 AS prodcution

# Set node env to prod
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# Set working directory
WORKDIR /usr/src/app

# Copy all from development stage
COPY --from=development /usr/src/app .

# Expose port
EXPOSE 8080

# Run app
CMD ['node', 'dist/main']
