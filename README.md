<div align="center">
    <img src="https://upload.wikimedia.org/wikipedia/en/1/19/DayOne_Logo_2016.png" alt="Logo" width="80" height="80">

  <h3 align="center">Day two</h3>

  <p align="center">
    A simplistic journaling app
    <br />
  </p>
</div>
<br />

## Getting Started

To start the app, clone down this repo to your computer, and then follow the steps below:

1. Create a file named `.env` within the newly cloned repo directory and add the following line:
    ```
    PORT={CHOSEN_DB_PORT}
    DATABASE={CHOSEN_DB_NAME}
    USERNAME={CHOSEN_PG_USERNAME}
    PASSWORD={CHOSEN_PG_PASSWORD}
    ```

2. Create a new PG database using the port, db name, username, and password you've added to the `.env` file.

3. Go to the terminal, navigate to the root folder of the project, and execute the following commands:

    ```
    npm install
    npx sequelize-cli db:migrate
    npx sequelize-cli db:seed:all
    ```

4. To start the app, run:

    ```
    npm start
    ```