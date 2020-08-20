![License badge](https://img.shields.io/badge/license-MIT-green)
# bin-out
Bin-out is an application which helps people (specifically an old people) to take their bin out on the scheduled date.
## User Stories
```
Because of ageing I am having trouble to take bin out specially on the unsuitable climates.I am looking for somone who can take my bin out upon my request on certain days.
```
## Table of Content
1. [Installation](#Installation)
2. [Usage](#Usage)
3. [License](#Licence)
4. [Contribution](#Contribution)
5. [Tests](#Tests)
6. [Questions](#Questions)
7. [StartBy](#StartBy)
8. [VideoLink](#VideoLink)
## Installation
The dependencies are [MySQL](https://www.npmjs.com/package/mysql) for database.
 Install the packages/dependencies by hitting following command on your terminal console:-
```
npm install
```
## Usage
This application works on the basis of following block diagram:-
![Database Schema](public/images/BlockDiagram.png).
* **Step 1: SIGN UP**
I) Customer or user Enrollment
-Customer will be able to  signup account if and only if they sign up with follwing information.
  * **fullName**
  * **unit Number** 
  * **house number**
  * **street name** 
  * **postcode** 
  * **proof of address** 
Similarlly,
II) Employee or helper Enrollment
-Any one can become employee or helper if and only if they sign up with following information.
  * **fullName** -  VARCHAR(40) to hold customer full name
  * **email** - VARCHAR(30) to hold email address
  * **password** - VARCHAR(30) to hold password
  * **address** - VARCHAR(30) to hold full address 
  * **proof of id** -  VARCHAR to hold proof of id
  
  III) Admin panel
  -Admin is responsible for verifying the data send during the sign up process from  user and employee.
  -They can reject the request or complete the request upon successfull verification.
  -If User is successfully enrolled they get message back with unique User id
  otherwise with the unsuccessfull message.
  -If Employee is scuccessfully enrolled they get notified too.
  * **Step 2:**
  I) Request From User :
  -User will send request with their unique_id and date to take bin out just selecting date from calender and clicking on request helper button. 
  II)Admin will be Automatic controller.
  -Admin will receive the request, will search information in the database with the help of unique id of user.If it finds matching user goes next step otherwise sends message with "no customer found".
  -If it finds matching user it will search employee who is helper from the same area (post code) and sends employee notification as todo task available with customer information.Otherwise admin will send message to user as no matching helper found try next time.
  
  III)Accept From Employee 
  -Once employee/helper see the notification on their page.
  -They will be able to click on request accepted button.
  -Once they click the button the database table gets updated and sends the confirm message to use that they will be available on mention date.
  -The job will be appended on their list of task with progress.
  -Once the job is completed the employee can press job completed button so that record can be updated on the table.
  
## License
```
This is MIT license
```
## Contribution
```
When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owner of this repository before making a change.
```
## Tests
## Questions
 <a href="https://github.com/marasinipradeep">Github Url : https://github.com/marasinipradeep</a>
 <a href="marasinipradeep@gmail.com">Email : marasinipradeep@gmail.com</a>
## StartBy Instructions
Has following database schema containing three tables:
![Database Schema](public/images/databaseSchema.png)
* **admin**:
  * **id** - INT PRIMARY KEY
  * **fullName** - VARCHAR(40) to hold full name
  * **email** - VARCHAR(30) to hold email address
  * **password** - VARCHAR(30) to hold password
* **user**:
  * **id** - INT PRIMARY KEY
  * **fullName** -  VARCHAR(40) not null to hold customer full name
  * **unitNumber** -  INT  to hold unit number default null
  * **houseNumber** -  INT not null to hold house number
  * **streetName** -  VARCHAR(30) not null to hold street name
  * **postcode** -  INT not null to hold postcode
  * **proofOfAddress** -  VARCHAR(50) not null to hold proof of address
  * **request** -  BOOLEAN not null Default false to hold request from customer 
  * **customer admin id** - INT  not null foreign key
* **employee**:
  * **id** - INT PRIMARY KEY
  * **fullName** -  VARCHAR(40) to hold customer full name
  * **email** - VARCHAR(30) unique not null to hold email address
  * **password** - VARCHAR(30) not null to hold password
  * **address** - VARCHAR(30) not null to hold full address 
  * **proofOfId** -  VARCHAR(50) not null to hold proof of id
  * **accept request** -  BOOLEAN not null Default false
  * **Request completed** -  BOOLEAN not null Default false
  * **Employee customer ID** -  INT not null foreign key
  * **employee admin id** -  INT not null foreign key
  
## VideoLink
<a href= "">Click here for demo video link</a>

* [Ben Turnbull](http://www.github.com/benorule)
* [Chris Roschi](http://www.github.com/CR-53)
* [Pradeep Marasini](http://www.github.com/marasinipradeep)
* [Anjini Krishnan](http://www.github.com/anjkrish2608)