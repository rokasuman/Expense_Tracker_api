# Finance Tracker API

THIS financial app is made in using mern stack. This application will show the income and expenses of the user.


## Feature
- login 
- logout 
- signin
- user can calculate thier income and how how much they have expend with graph 

## logout 
1. on logout click, delete `access jwt` token from the `localStorage`
2. Reset user object from the state 
3. redirect user to login page

## Auto-login
This feature allows user to login only one time a day and use system for a day without needing to login again and again 
 1. check if the user exist, if doesnot then call the auto login function 
 2. Auto-login functions:
  - check if the `accessJWT` exist, if so, call getuser api to get users, else do nothing
  - mount user to the state
  - redirect to the dashboard


## Technology 
- React.js 
- React-router-
- react-tostify 
- react- bootstrap
- cors
- Axios
- Mongoose
- bcyrpt
- Node.js


## Installization 
1. This app has backend and forntend folder 
2. Get the app in vs code or any tools 
3. Once you open it to run backend go to the terminal and type nodemon server.js
4. and to run frontend you need to type npm run dev in your termina


## Api endpoint 
1. login : it is done with post method 
2. signup 
3. logout 


## Environment Variable 
  1. jWT_SECRET = YOUR_JWT_SECRET

  2. Token exiration time 
  JWT_EXPIRES_IN = 1 HR



