
<h1 align="center">
  <img title="Netflix" src="https://fhsknightlife.com/wp-content/uploads/2020/04/uVASXqvMzyUrAPfSn9pMtxOC7s89ulzdDKBdtqCP.png" alt="NETFLIX Logo" width="400" />
  <br>
  Netflix Clone Built Using React.JS & Firebase
</h1>

<p><font size="3">
  This is a clone of Netflix website built using <strong><em>React.JS</em></strong> as a Front-end & <strong><em>MongoDB</em></strong> as Back-end. It's not a replica, and it     doesn't have all the features of Netflix website. it's a similar version of Netflix with my own design touch, showing my abilities in React.JS to build something advanced       like Netflix. It contains the home page, sign-in page, sign-up page, browse page, and movie player.
  <br><br> 
  <strong><em>Take a look at the live version here:</em></strong> https://netflix-clone-34rs.onrender.com/ :octocat: :heart_eyes:
</p>

## Table of Contents

- [Project Walk-Through](#project-walk-through)
  - [Home Page](#home-page)
  - [Login Page](#login-page)
  - [Sign-up Page](#sign-up-page)
  - [Browse Page](#browse-page)
- [Live Demo](#live-demo)
- [Technology Used](#technology-used)
- [How to Use](#how-to-use)

# Project Walk-Through

 # Home Page

![Image](https://github.com/user-attachments/assets/59a33eff-c3e1-43ec-bdff-1b818ebc32ce)
![Image](https://github.com/user-attachments/assets/7c0124c5-06aa-4fb1-8390-23bba0bfda99)
![Image](https://github.com/user-attachments/assets/e1c63467-ea11-4f83-adf8-7c4b495eb0f1)
![Image](https://github.com/user-attachments/assets/f7c742e4-0d23-4cdd-9114-b2dfe6c3a0eb)
![Image](https://github.com/user-attachments/assets/5d78971c-0a2f-4606-a6dc-a564a41d975c)
![Image](https://github.com/user-attachments/assets/03eb6a01-ddbf-479f-8abf-09634ab7929e)

The Home Page consists of 4 main sections:

***1) Header, which includes:***
- Logo: 
it redirects you to the home page when you click on it.

- Sign-in button: 
 it redirects you to the sign-in page.

- Feature title & subtitle:
It shows the main sentences of the website.

***2) Optform:***
It's a text input field and a button,  It redirects you to the sign-up page once you click on the button.

***3) Jumbotron:***
This section contains some images and paragraphs beside it, showing the advantages of Netflix. The data of this Jumbotron came from jumbo.json file.

***4) Footer:***
It contains useful links users may need it.


### The page is fully responsive to all mobile devices even the small ones. ###

 # Login Page
 
 <div align="center"><a name="menu"></a>

![Image](https://github.com/user-attachments/assets/b9bf1d9e-82ff-4351-ae10-227125720d34)
</div>

The Login Page consists of 3 main sections:

***1) Header, which includes:***
- Logo: 
it redirects you to the home page when you click on it.

***2) Login Form, which includes:***
- Email address input field.

- Password input field.

- Login Button: It has a validation option, if any field in the form is empty it will be disabled. If the form fields have any data it will be active and will send the data to the MongoDB database in the backend for authentication.

- Link to Sign-up Page:  it redirects you to the sign-up page. 

***3) Footer:***
It contains useful links users may need it.


### The page is fully responsive to all mobile devices even the small ones. ###


 # Sign-up Page
 
<div align="center"><a name="menu"></a>

![Image](https://github.com/user-attachments/assets/6b4b1fcc-8111-4e35-a576-b7d67f7e9759)
</div>

The Sign-up Page consists of 3 main sections:

***1) Header, which includes:***
- Logo: 
it redirects you to the home page when you click on it.

***2) Sign-up Form, which includes:***
- Email address input field.
- Username input field.
- Password input field.

The button is disabled until all form fields are filled. Once valid data is entered in all fields, the button becomes active, allowing the form to be submitted and the data to be sent to the MongoDB database for registration.

- Link to Login Page:  it redirects you to the login page.


***3) Footer:***
It contains useful links users may need it.


### The page is fully responsive to all mobile devices even the small ones. ###

 # Browse Page

<div align="center"><a name="menu"></a>

![Image](https://github.com/user-attachments/assets/7358759f-05c5-4a65-b88b-d236c71af4a5)
![Image](https://github.com/user-attachments/assets/d8a150b8-4d29-455b-abf0-168a3bb355b5)
![Image](https://github.com/user-attachments/assets/d08fb81a-3c1e-4d32-8ea2-09922a33a11d)
![Image](https://github.com/user-attachments/assets/a92e97ad-eb6b-4a6a-95f1-59b7631e8ae7)
</div>

The Browse Page consists of 5 main sections:

***1) Header, which includes:***
- **Logo**: Clicking the logo redirects you to the home page.
  
- **Navigation Links**: 
  - The page defaults to showing **Movies** content.
  - Clicking on the **Movies** button displays movie-related content.
  - Clicking on the **TV Shows** button switches to display TV show-related content.
  - **Search History**: Shows your recent searches.
  
- **Featured Title & Description**: Displays the title and description of the featured movie or TV show, depending on the active category.

- **Play Button**: Clicking the play button opens the video player to play the selected movie or TV show.


***2) Featured Sections:***
- **Movies Slider**: Displays sections of movies such as:
  - **Now Playing Movies**
  - **Top Rated Movies**
  - **Popular Movies**
  - **Upcoming Movies**
  
- **TV Shows Slider**: Displays sections of TV shows such as:
  - **Airing Today TV Shows**
  - **On the Air TV Shows**
  - **Popular TV Shows**
  - **Top Rated TV Shows**

***3) Movie/TV Card & Features:***
- Each card represents a movie or TV show.
- **Hover Effect**: The card enlarges slightly on hover.
- **Click to View Details**: Clicking a card shows:
  - **Title**, **Description**, and **Background Image**.
  - **Play Button** to start the video and a **Similar Content Slider**.
- **Card Feature**: Displays additional details below the card. Close by clicking the **close icon**.

![Image](https://github.com/user-attachments/assets/a4b77133-f244-44ba-b0fb-085e73c67bc7)
![Image](https://github.com/user-attachments/assets/8c6a62b6-2c46-421e-8b33-87f7e07904eb)
![Image](https://github.com/user-attachments/assets/c283fac4-fd16-4362-80f4-905fa2d36016)

</div>

***4) Search History:***
- Displays the latest search history.
- You can view and delete individual items from the search history.
- History is updated with each new search.

![Image](https://github.com/user-attachments/assets/a5a0c92f-7498-425b-ad4b-c69738050588)

***5) Footer:***
It contains useful links users may need it.



### The page is fully responsive to all mobile devices even the small ones. ###

**The page is fully responsive to all mobile devices, even small ones.**

# Live Demo

***Take a look on the live version here:*** https://netflix-clone-34rs.onrender.com/ :octocat: :heart_eyes: 

# Technology Used

I have built this project using the following tools & technologies:

- **React.js**
- **Node.js**
- **Express.js**
- **MongoDB**
- **Tailwind CSS**
- **Zustand**

### Key Features
- **Authentication with JWT**
- **Responsive UI**
- **Movie and TV Show Fetching**
- **Search Functionality**
- **Watch Trailers**
- **Search History Tracking**
- **Similar Movies/TV Shows Recommendations**



# How To Use

### Setup .env file
```
PORT=5000
MONGO_URI=your_mongo_uri
NODE_ENV=development
JWT_SECRET=your_jwt_secre
TMDB_API_KEY=your_tmdb_api_key
```
### Run this app locally
```
npm run build
```
### Start the app
```
npm run start
```
