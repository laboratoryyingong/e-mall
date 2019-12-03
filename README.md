# e-mall

## Introduction

The purpose of this repository is to use ember framework to establish a online-shopping web application. I will call it e-mall. It is a good opportunity to practice and learn ember js.

This e-mall will be divided to two main parts, front system and backend system.

### e-mall front-end system

I would like to divide front-end system to following parts:

| Components            | Description   | Development Status  |
| ----------------------|:------------- | ------------------- |
| Web portal            | Information display & Entry | developing - basic functional |
| Search                | use keyword to search products |  developing - basic functional |
| Products & Details    | check products details, browsing products list |    developing -basic functional |
| Shopping Cart         | add products to shopping cart, cart will display merchandise number, show shopping details      |    developing -basic functional |
| Shopping mode switch  | tag products to switch to different shopping mode, like event sales      |    Not start |
| User login/management | establish user management system to handle login (third party login), profiling or user-related functions.       |    Not start |
| Checkout/payment      | user check out / payment (third party payment integration, like paypal) system     |    Not Start |

### e-mall back-end system

In fact, the real online-shopping system must contain a back-end management system. I will ignore this part, too many things to consider.

| Components            | Description   | Development Status  |
| ----------------------|:------------- | ------------------- |
| business management system   | ...... | ...... |
| operation management system   | ...... | ...... |

### Tip up

In this project, I only consider the scenario as anonymous purchase. In this case, the shopping cart information will temporarily store in browser web session storage. The close page will lose session data. In fact, the better solution should consider use persistence data storage.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone https://github.com/laboratoryyingong/e-mall.git` this repository
* `cd e-mall`
* `npm install`

## Running / Development

* `ember serve` or run `npm run start` to start development server
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server` or run `npm run test`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

TODO:

    In this project, I recommend to use docker to deploy.

    * `cd docker`
    * `docker-compose up`

    after production build, please copy './dist' files to './docker/apache/app'

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
