# Bin-Out

[Click here to view repository.](https://github.com/benorule/bin-out)

[Click here to use the application on heroku.]()

## Table of Contents

* [Description of Application](#des)
* [Technologies Used](#tech)
* [Challenges Faced](#chall)
* [Features to be Implemented](#dev)
* [Installation Steps](#insta)
* [Tests](#tests)
* [How to Use](#use)
* [Credits](#cred)

<a id="des"></a>

## Description of Application


<a id="tech"></a>

## Technologies Used


<a id="chall"></a>

## Challenges Faced

testing whether email already exists - used following code from [here](https://stackoverflow.com/questions/16356856/sequelize-js-custom-validator-check-for-unique-username-password)
```
email: {
  type: Sequelize.STRING,
  allowNull: false,
  validate: {
    isEmail:true
  },
  unique: {
      args: true,
      msg: 'Email address already in use!'
  }
}
```

<a id="dev"></a>

## Features to be Implemented


<a id="insta"></a>

## Installation Steps


<a id="tests"></a>

## Tests


<a id="use"></a>

## How to Use


<a id="cred"></a>

## Credits

* [Ben Turnbull](http://www.github.com/benorule)
* [Chris Roschi](http://www.github.com/CR-53)
* [Pradeep Marasini](http://www.github.com/marasinipradeep)
* [Anjini Krishnan](http://www.github.com/anjkrish2608)