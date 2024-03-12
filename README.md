# ABOUT:
A Personal Recipe book that allows you to create recipes and share them with others. 

## Application Architecture

CookBook's backend was built using Flask for Python. The server has a RESTful API layer for all CRUD actions. It is connected to a PostgreSQL database which leverages the SQLAlchemy ORM for information retrieval and data manipulation. The frontend was built using React and Hooks and uses built-in context for client storage and global state management. All outgoing client requests are proxied to Flask server.


### Minimum Viable Product

-   Authentication
-   Recipe Creation
-   Recipe Deletion
-   Image Link


### WIP:
-   S3 image upload
-   Reviews
-   Make Recipe Private
-   Editing
-   Favorites


### Future Features:
- Smart Search
- Ingredients Stock (displaying what you have and when to use by)
- Mobile App with React Native

## Dependencies

#### Backend

-   Flask
-   SQLAlchemy
-   Flask Login
-   Flask JWT
-   Werkzeug
-   Psycopg2

#### Frontend

-   React
-   Material UI
-   Bootstrap
-   Moment
-   HTTP Proxy Middleware




## Images:
![Screenshot 2024-03-12 at 6 46 50 PM](https://github.com/Cmolerov/cookbook/assets/68914791/1f4dbb6a-e6a6-437a-bbb7-bfeff20057fc)
![Screenshot 2024-03-12 at 6 47 11 PM](https://github.com/Cmolerov/cookbook/assets/68914791/a28c1042-5549-4ffd-9943-2efb18852541)
![Screenshot 2024-03-12 at 6 47 25 PM](https://github.com/Cmolerov/cookbook/assets/68914791/59b6ab6d-65c5-4538-bd9d-e6afbe9c24a9)
![Screenshot 2024-03-12 at 6 47 49 PM](https://github.com/Cmolerov/cookbook/assets/68914791/76c1bfa0-30e4-4680-b429-a99984d77af4)
![Screenshot 2024-03-12 at 6 48 05 PM](https://github.com/Cmolerov/cookbook/assets/68914791/03848649-000b-4fca-8334-f6838a33e164)
![Screenshot 2024-03-12 at 6 48 29 PM](https://github.com/Cmolerov/cookbook/assets/68914791/37d99b6c-7cbb-4a2c-8406-b8891dbd08a1)
![Screenshot 2024-03-12 at 6 48 56 PM](https://github.com/Cmolerov/cookbook/assets/68914791/31ba7cab-8b8a-4eff-a0f8-2638c9ff1749)








## Getting started

1. Install dependencies

      ```bash
      pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
      ```

2. Create a **.env** file based on the example with proper settings for your
   development environment
3. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

4. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

6. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.

***
*IMPORTANT!*
   If you add any python dependencies to your pipfiles, you'll need to regenerate your requirements.txt before deployment.
   You can do this by running:

   ```bash
   pipenv lock -r > requirements.txt
   ```

*ALSO IMPORTANT!*
   psycopg2-binary MUST remain a dev dependency because you can't install it on apline-linux.
   There is a layer in the Dockerfile that will install psycopg2 (not binary) for us.
***

## Deploy to Heroku

1. Create a new project on Heroku
2. Under Resources click "Find more add-ons" and add the add on called "Heroku Postgres"
3. Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-command-line)
4. Run

   ```bash
   heroku login
   ```

5. Login to the heroku container registry

   ```bash
   heroku container:login
   ```

6. Update the `REACT_APP_BASE_URL` variable in the Dockerfile.
   This should be the full URL of your Heroku app: i.e. "https://flask-react-aa.herokuapp.com"
7. Push your docker container to heroku from the root directory of your project.
   This will build the dockerfile and push the image to your heroku container registry

   ```bash
   heroku container:push web -a {NAME_OF_HEROKU_APP}
   ```

8. Release your docker container to heroku

   ```bash
   heroku container:release web -a {NAME_OF_HEROKU_APP}
   ```

9. set up your database:

   ```bash
   heroku run -a {NAME_OF_HEROKU_APP} flask db upgrade
   heroku run -a {NAME_OF_HEROKU_APP} flask seed all
   ```

10. Under Settings find "Config Vars" and add any additional/secret .env variables.

11. profit
# cookbook
