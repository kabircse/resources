# GitHub Actions
**GitHub Actions:** A feature within GitHub that enables you to automate software development workflows, such as testing, building, and deploying code.

## Sample GitHub Actions yml
### 1. Node.js application:
Create a file inside a node project .github/workflows/main.yml

```yaml
name: Node.js CI  	# Name of the workflow

on:  				# Specify the event that trigger the workflow. In this case it triggers on every push to the main branch
							
  push:
    branches:
      - main

jobs:						# Contains a list of jobs need to be executed
  build:					# The name of the job
    runs-on: ubuntu-latest	# Specify the OS for the job. For this lastest ubuntu OS

    steps:					# Actions to perform within the job
    - uses: actions/checkout@v2	  #Action that checks out respository's code

    - name: Setup Node.js
      uses: actions/setup-node@v2 #Action to setup the Nodejs
      with:						  # Specify the installing app version
        node-version: '16' 		  # Choose the version you need

    - name: Install dependencies
      run: npm install			  # Install the app

    - name: Run tests
      run: npm test				  # Run tests	
```


### 2. Laravel Application:

Create a file inside a laravel project .github/workflows/main.yml

```yaml
name: Laravel CI/CD

on:
  push:
    branches:
      - main # Change this to your main branch name

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v2

    - name: Set up PHP
      uses: shivammathur/setup-php@v2
      with:
        php-version: '8.0' # Change to your PHP version

    - name: Install Composer dependencies
      run: composer install --no-ansi --no-interaction --no-progress --no-scripts --optimize-autoloader
        # Multiple dependencies
        # - run: |
        #  composer install
        #  php artisan key:generate
        #  php artisan migrate
        #  npm install && npm run dev

    - name: Generate environment file
      run: cp .env.example .env && php artisan key:generate && php artisan migrate && npm install && npm run dev

    - name: Run tests (optional)
      run: php artisan test

    - name: Deploy to server
      uses: easingthemes/deployments@v3
      with:
        HOST: ${{ secrets.SERVER_HOST }}
        USERNAME: ${{ secrets.SERVER_USERNAME }}
        PASSWORD: ${{ secrets.SERVER_PASSWORD }}
        source: ./                          #source directory that need to be transferred/deployed to the target server.
        target: /var/www/html/your-app      #Where project will be deployed on the server

# Add more steps as needed for your specific deployment setup

```