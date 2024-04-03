# Use the cypress/base:latest image as the base image
FROM cypress/base:latest

ENV ROOT="/cypress-test-v1"
WORKDIR ${ROOT}

# Create directory app
RUN mkdir -p $ROOT

# Set the working directory
WORKDIR ${ROOT}

# Copy the project files into the container
COPY . ${ROOT}

# Install project dependencies
RUN npm install

# Install Cypress
RUN npm install cypress --save-dev

RUN npm install cucumber selenium-webdriver chromedriver --save-dev

# Set the default command to run tests
CMD ["npm", "test"]