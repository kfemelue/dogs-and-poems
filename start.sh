# Install Node Version Manager in Environment
nvm install 18.17.0 -g
nvm use 18.17.0 

# Install Dependencies
npm ci -y
npm run start-dev