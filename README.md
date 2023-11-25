# Creating A Time Capsule Project
  ## - Milestone Project Three

## Application Inspiration:


## How to use the Application:

## Demonstration:

## Technologies Used:
  - Node.js
  - React
  - Express
  - MongoDB (Mongoose)

## Future Updates (TBD):


# Routes		
| Method |Path | Purpose |
|:---------|:----------------------|:-----------------------------|
| GET | `/` | The home page |
| GET | `/capsules` | Show all capsules |
| GET | `/capsules/new` | Add a new capsule form |
| POST | `/capsules` | Create a new capsule |
| GET | `/capsules/:id` | Show details of one capsule |
| GET | `/capsules/:id/edit` | Edit the selected capsule |
| PUT | `/capsule/:id` | Update an existing capdule |
| DELETE | `/capsule/:id` | Delete a capsule |
| GET | `/users:new` | New user signup form |
| POST | `/users` | Create a new user |
| GET | `/users/:id` | Show details of one user |
| GET | `/users/:id/edit` | Edit the selected user |
| PUT | `/users/:id` | Update an existing user account |
| DELETE | `/users/:id` | Delete a user account |



# Database		
### capsules		
| Field | Type |
|:----------|:--------------|
| _id | Object ID |	
| user._id | STRING |
| name | STRING |
| image | STRING |
| year_added | DATE	|
| year_to_open | DATE |


### users		
| Field | Type |
|:--------------|:---------------
| _id | Object ID |
| name | STRING	|
| password | STRING
| city | STRING	|
| state | STRING |
| organization | STRING |	


# References/Resources:
- W3Wschools.com
- stackoverflow.com
- ChatGPT.com
- GitHub CoPilot Chat

Project Objectives:
- Build a full-stack application
- Include user authentication with secure logins and passwords; allow user to logout
- Focus placed on styling, appearance and user experience (SASS or TypeScript)
- Application tracking by 25 or more GitHub commits
- Application delployment via Amazon Web Service (AWS)
- Create the back-end using Node.js and Express (Node)
- Create thd front-end using using React
- Incorporate the use of a Mongo database
- The database will show a relationship between tables/collections
- The application will be responsive to the browser screen size changes
