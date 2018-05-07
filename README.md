# burger
Burger logger.

## Description

Eat-Da-Burger is designed to be a restaurant app. A user can enter a burger name or select one from an options menu. The burger then appears on the left side of the screen, waiting to be devoured.   l

## Technical Information

The burger app is essentially a logger that leverages the  Node and Express for the server and API routes, MySQL for database storage, and Handlebars for html template design and a custom ORM (Object Relational Mapping).

![alt text](./README_imgs/burger.png "Burger App Screen")

![alt text](./README_imgs/burger_menu.png "Burger Menu Screen")

## Installation

The burger app can be cloned and installed following the procedure below.

1. Now we are ready to clone this app by running the following command. `git clone git@github.com:f-flores/burger.git` Note that if `git` and `node` need to be installed, the steps to do so are the following: a) git must be installed. [Download git.](https://git-scm.com/downloads) and b. nodejs must also be installed. [Download nodejs](https://nodejs.org/en/download/)

2. Since this file makes use of several node modules, please run `npm install`.  This installs all of the dependencies.

3. `burger` is a full stack app that uses nodejs and express on the back end. It needs to be deployed to on a platform that provides (like Heroku) "back-end" support. [Guide to deploying a Node Web Server on Heroku](https://github.com/RutgersCodingBootcamp/RUTSOM201801FSF4-Class-Repository-FSF/blob/master/13-express/Supplemental/HerokuGuide.md)

4. It is also necessary to setup MySQL for the burger app. Please refer to the following guide. [Guide](https://github.com/RutgersCodingBootcamp/RUTSOM201801FSF4-Class-Repository-FSF/blob/master/14-handlebars/Supplemental/MySQLHerokuDeploymentProcess.pdf)


## Comments

The source code for the burger app was added to the following github repository:
[burger](https://github.com/f-flores/burger)

A link to the burger app on heroku:
[burger app](https://enigmatic-reef-11009.herokuapp.com/)