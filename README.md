# dogs-and-poems

This repo contains code for an JavaScript/ Node.js website that utilizes an Express server, and EJS view engine to present users with a random photo of a dog, and a random short poem about a dog every time they visit the website.

This application can also be deplayed in a container using Docker.

## The Purpose

The purpose of this project is simple. I love dogs, I love poetry, and I have a feeling others might too.
I also wanted to practice designing, building, and deploying, and documenting a Node application that utilizes external APIs within a limited time frame.

## Instructions for Local Deployment:

### Requirements
    Node Version 18.17.0 or Later
    A Web browser of your choice

### Dependencies
    Express
    EJS
    Docker

1. Clone this repo to your machine.
2. cd into the dogs-and-poems directory
3. In the terminal, run the following commands in order
    - Install Node Version Manager in Environment
    ```
        nvm install 18.17.0 -g
        nvm use 18.17.0 
    ```

    - Install Dependencies
    ```
        npm ci -y
    ```

    - Start the app
    ```
        npm run start
    ```

    - Open in browser
    ```
        open http://localhost:3000
    ```

    #### OR
    - After navigating to dogs-and-poems directory, run the following commands in the terminal:
    ```
        chmod +x start.sh
        source start.sh
    ```

4. This application can be deployed locally using Docker (Docker must be installed on your machine):
    - To build the image, navigate to the the dogs-and-poems directory and in the terminal run:
        ```
        docker build --tag 'dog-poem-app' .
        ```
    - After build completes, run the following command to start the app:
        ```
        docker run -p 3000:3000 dog-poem-app
        ```
    - Navigate to https://localhost:3000 in your web browser and refresh the page.
