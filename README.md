
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

![Image](https://github.com/user-attachments/assets/5bbccf6f-b618-4cde-a25c-280d7ecead8c)
![Image](https://github.com/user-attachments/assets/96790805-4223-4440-81a7-7f4ec2fdb944)
![Image](https://github.com/user-attachments/assets/2cf97a96-a6a7-4d8f-94be-71e63d896483)
![Image](https://github.com/user-attachments/assets/2fa83cad-4ecd-4e54-b407-56b609408b7b)
![Image](https://github.com/user-attachments/assets/8b4d9eaa-3dea-49cc-85bf-77df41238f3b)
![Image](https://github.com/user-attachments/assets/f5ac986c-c9e2-408e-9bd5-f534eafd5624)

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

![Image](https://github.com/user-attachments/assets/560385d1-16c0-43ec-ab93-19e8c116d748)
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

![Image](https://github.com/user-attachments/assets/82ae84d2-5f0e-42d5-beac-26b18e8011e6)
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

![Image](https://github.com/user-attachments/assets/f2c24e97-cd91-411d-9378-66664164d325)
![Image](https://github.com/user-attachments/assets/baa888e4-9b34-4487-82b5-36a15edc0d35)
![Image](https://github.com/user-attachments/assets/01621d1e-8473-4f60-aa4f-157103c530c3)
![Image](https://github.com/user-attachments/assets/e2fe2a62-c8e0-4656-84d1-25f4b7bdf91f)
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

![Image](https://github.com/user-attachments/assets/3133f207-52ca-40db-9ac7-e804a96990ae)
![Image](https://github.com/user-attachments/assets/c7b137a2-8f05-4499-9f39-c1cf7173c35a)
![Image](https://github.com/user-attachments/assets/aeabf2c9-627b-4474-b20c-fcf361bc6034)

</div>

***4) Search History:***
- Displays the latest search history.
- You can view and delete individual items from the search history.
- History is updated with each new search.

![Image](https://github.com/user-attachments/assets/1e2be9f1-8729-472e-8c53-22dc53d89765)

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
