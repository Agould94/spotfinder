## Spotfinder Readme ##

## Description ##

Spotfinder is an applciation built to browse and upload restaurants by their particular "vibe" or the way they make you feel. Discovery of restaurants could be improved over current options like yelp by innovating on UX and UI, making an application that is scrollable, like instagram, while also being searchable builds a more intuitive functionality for the application, and allows for users to find retaurants based on the feel of the restaurant, seeking more enjoyable, intriguing spaces. user reviews can also be added to the restaurants to help other users find restaurants. Currently, the application works with seed data, and is only searchable by a static list of food types. in the future, users will be able to add and sort and be shown restaurants by their location.

This applicaiton was built using React for the front end, with react bootstrap for styling, it was built using ruby on rails for the backend, with special librariaes for data serialization and pagination. 

To use this application, add restaurants, reviews, and sign up as a user. Double click on any restaurant to see its details and add a review. 

See the instructions for initializing and using this project below, or see it live at: 

https://spotfinder.onrender.com

## Credits ##
Infinite Scroll Feature:
https://github.com/ankeetmaini/react-infinite-scroll-component

Star Rating Feature:
https://www.npmjs.com/package/react-star-ratings 


**Initializing the database**
To initialize the database for your Instagram-like restaurant application, you will need to run the following command:

<rails db:create db:migrate>

This will create the necessary database tables and set up the schema.

**Seeding the database**
If you have a seed file (likely located at db/seeds.rb), you can use it to pre-populate your database with initial data. To do this, run the following command:


<rails db:seed>

If you do not want to seed the database, you can comment out the db:seed task in the db namespace of your Rakefile.

**Configuring the system**
To configure your system, you will need to set up the following:

Environment variables: You will need to set up any necessary environment variables, such as your database credentials, in a file like .env.

**Dependencies:**
Make sure all necessary dependencies are installed by running bundle install with your Gemfile.

You can start the react development server by running:

<npm start --prefix client>

Once you have completed these steps, you should be able to start your Rails server and begin using your Spotfinder.