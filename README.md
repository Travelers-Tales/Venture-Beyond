# Server setup instructions

## Prerequisites
- Have Java 8 installed

## Two ways to start your server

1. ### Executing it manually
    - If you're on Windows, execute `start.bat` file. For Linux Users execute `start.sh`
    - Accept the EULA in the EULA.txt file
    - Execute `start.bat` or `start.sh` again and your server should start
    
2. ### Using Docker Compose 
    - First you'll need to accept the EULA in the .env file
    - Make sure you are ok with the parameters specified in the .env file
    - open a command prompt and execute the following commands :
        ```bash
        cd into/this/directory/if/needed
        ```
        ```bash
        docker-compose up -d
        ```

That's it !