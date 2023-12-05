![Alt text](public/images/timecapsulebanner.gif)

###   Milestone Project Three

This application represents a virtual Time Capsule. Users of this application will upload pictures/images that represent memories, places they want to visit, places they have visited, history-making sporting events, current technology, and more. But, what will today's occurrences mean to a future generation that are 20, 30, 50 or even 100 years from now. Only time will tell. 

## Application Description:
This Time Capsule application is user-friendly and visually appealing approach to a modern-day time capsule. Users have the option to add images of events, items/possessions, family, friends or whatever the user feels was impactful for their life or the life of others. Once a user completes their capsule, the capsule can be locked for a period of two years. During this time the capsule cannot be opened or edited.


## How to use the Application:
1. New users must click the Signup link on ths navigation bar
  - create a user ID and password
2. Login to the application 
3. Click the link to Add a New Capsuls
4. Add images and notes to their capsule
5. Existing user can edit the capsule
6. After completing their capsule, a user can lock the capsule. The capsule remains locked for two years.


## Technologies Used:
  - Node.js
  - React
  - Express
  - MongoDb
  - Render


## Database Configuration:
Source: MongoDb (mongoose)
Localhost port: 5001
Connection string: MONGO_URI=mongodb+srv://milestone3:milestone3@cluster0.xmgpmzy.mongodb.net/?retryWrites=true&w=majority


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
| name | STRING |
| image | STRING |
| status | STRING |
| note | TEXT |
| lockedBy | STRING	|
| subdate | DATE |


### users		
| Field | Type |
|:--------------|:---------------
| _id | Object ID |
| username | STRING	|
| password | STRING


# References/Resources:
- [W3Wschools](https://www.w3wschools.com)
- [Stackoverflow](https://stackoverflow.com)
- [ChatGPT](https://openai.com/chatgpt)
- [GitHub CoPilot Chat](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-chat)
- [Sass:Syntactically Awesome Style Sheets](https://sass-lang.com/
- [Git_Version_Control_Notes/14_Markdown_Tutorial](https://github.com/CodyNicholson/Git_Version_Control_Notes/blob/master/14_Markdown_Tutorial.md)
- Node.js Register and Login Tutorial | Work with MongoDB, JWT and Node: https://www.youtube.com/watch?v=b91XgdyX-SM3


