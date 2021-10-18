# Restaurant-List 2.0
This website provides users with functions to create, read, update, and delete their own restaurant list information.

![image](https://github.com/tkoleo84119/restaurant-list/blob/25aa3a8b0a4d4faece2a6a8de06db1a198198a4d/Login%20page.png)
![image](https://github.com/tkoleo84119/restaurant-list/blob/25aa3a8b0a4d4faece2a6a8de06db1a198198a4d/Home%20page.png)

## Feature
* The user can create an account(with email or Facebook) to manage the restaurant list by herself.
* The user can see the following information about the restaurants on the home page: image, name, category, and rating.
* The user can click the `detail button` or `restaurant image` to see more information about the restaurant: phone, address, description, etc.
* The user can click the `新增餐廳 button` to create a new restaurant with some necessary information(ex: name, category, and rating).
* The user can click the `edit button` to edit information about the restaurant.
* The user can click the `delete button` to delete the restaurant card.
* The user can click the `排列方式` to select the order of the restaurant.
* The user can search for a specific restaurant by entering the name or category in the search bar.

## How to Use
* Git clone this project.(Use Terminal)

  ```
  git clone https://github.com/tkoleo84119/restaurant-list.git
  ```
* `cd` to restaurant list file.(Use Terminal)
* Install npm packages.(Use Terminal)

  ```
  npm install
  ```
* Change`.env.example`file name to`.env`
* Create default data.(Use Terminal)

  ```
  npm run seed
  ```

* Start the server.(Use Terminal)

  ```
  npm run dev
  ```
* When Terminal show `Express is listening on localhost:3000` `mongodb connected!`, you can use any browser and type http://localhost:3000 to enter the website.

## Defalut users
When running `npm run seed`, two default users will be created. User can use the following default user information to enter the website.
* email: user1@example.com
password: 12345678
* email: user2@example.com
password: 12345678

## Packages and versions
* [npm](https://docs.npmjs.com/cli/v6/commands/npm-install/): 6.14.11
* [nodemon](https://www.npmjs.com/package/nodemon): 2.0.12
* [dotenv](https://www.npmjs.com/package/dotenv): 10.0.0
* [express](https://www.npmjs.com/package/express): 4.17.1
* [express-session](https://www.npmjs.com/package/express-session): 1.17.2
* [express-handlebars](https://www.npmjs.com/package/express-handlebars): 5.3.2
* [method-override](https://www.npmjs.com/package/method-override): 3.0.0
* [mongoose](https://www.npmjs.com/package/mongoose): 5.13.7
* [passport](https://www.npmjs.com/package/passport): 0.5.0
* [passport-local](https://www.npmjs.com/package/passport-local): 1.0.0
* [passport-facebook](https://www.npmjs.com/package/passport-facebook): 3.0.0
* [bcryptjs](https://www.npmjs.com/package/bcryptjs): 2.4.3
* [connect-flash](https://www.npmjs.com/package/connect-flash): 0.1.1
* [jquery](https://www.npmjs.com/package/jquery): 3.6.0
* [popper](https://cdnjs.com/libraries/popper.js/2.9.1): 2.9.1
* [bootstrap](https://getbootstrap.com/docs/4.6/getting-started/introduction/): 4.6.0
* [font-awesome](https://fontawesome.com/v5.15/icons?d=gallery&p=2): 5.15.3
