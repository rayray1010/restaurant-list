# Restaurant-List 1.0
This website provides user with functions to create, read, update, and delete restaurant information.

![image](https://github.com/tkoleo84119/restaurant-list/blob/cea907caaac753302ef53287da60ba6d750fd248/Home%20page.png)!
![image](https://github.com/tkoleo84119/restaurant-list/blob/cea907caaac753302ef53287da60ba6d750fd248/Create%20page.png)!
![image](https://github.com/tkoleo84119/restaurant-list/blob/cea907caaac753302ef53287da60ba6d750fd248/Edit%20page.png)!
![image](https://github.com/tkoleo84119/restaurant-list/blob/cea907caaac753302ef53287da60ba6d750fd248/Detail%20page.png)!

## Feature
* The user can see the following information about the restaurants on the home page: image, name, category, and rating.
* The user can click the `detail button` or `restaurant image` to see more information about the restaurant: phone, address, description.
* The user can click the `新增餐廳 button` to create a new restaurant with some necessary information(ex: name, image, category, and rating).
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
* Create default data.(Use Terminal)

  ```
  npm run seed
  ```

* Start the server.(Use Terminal)

  ```
  npm run dev
  ```
* When Terminal show `Express is listening on localhost:3000`, you can use any browser and type http://localhost:3000 to enter the website.

## Packages and versions
* npm: 6.4.1
* express: 4.17.1
* express-handlebars: 5.3.2
* nodemon: 2.0.12
* mongoose: 5.13.2
* jquery: 3.6.0
* popper: 2.9.1
* bootstrap: 4.6.0
* font-awesome: 5.15.3
