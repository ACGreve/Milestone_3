![Alt text](public/timecapsulebanner3.gif)

  ###   Milestone Project Three

This appliction represents a virtual Time Capsule. Users of this application will upload pictures/images that represent memories, places they want to visit, places they have visited, history-making sporting events, current technology, and more. But, what will today's occurrences mean to a future generation that are 20, 30, 50 or even 100 years from now. Only time will tell.

## Application Description:




## How to use the Application:
The features of this application includes:
 - A home page with a link to signup by creating a username and password
 - The home page also has a secure login link
 - After login, users ...
 - Users then have the option to submit or save ...
 - When the user is finished, users will select the logoff/out button


## Demonstration:
  --- demonstration link  ----



## Technologies Used:
  - Node.js
  - React
  - Express
  - pgAdmin4

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
- [W3Wschools](https://www.w3wschools.com)
- [Stackoverflow](https://stackoverflow.com)
- [ChatGPT](https://openai.com/chatgpt)
- [GitHub CoPilot Chat](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-chat)
- [Sass:Syntactically Awesome Style Sheets](https://sass-lang.com/)
- [Amazon Web Services](https://us-east-2.console.aws.amazon.com/console/home?region=us-east-2)
- [Git_Version_Control_Notes/14_Markdown_Tutorial](https://github.com/CodyNicholson/Git_Version_Control_Notes/blob/master/14_Markdown_Tutorial.md)
- Node.js Register and Login Tutorial | Work with MongoDB, JWT and Node: https://www.youtube.com/watch?v=b91XgdyX-SM3



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
