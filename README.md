# 377_Final_Project
Patricia Alday and Vanessa Huang

Music platforms such as Spotify aren’t able to create personalized playlists that their users enjoy. Majority of its users create their own playlists, this makes it harder for them to find new music and help smaller   artists build their career. Some of Spotify's daily mixes are repetitive and biased when it comes to lesser-known artists. Users heavily rely on different platforms like TikTok to find new music, artists also rely on   this platform to get their music noticed. We want to create a platform that avoids these issues so that there is a better user experience for customers and artists. 

Some of the stakeholders would be students ranging from middle to college level, artists, music labels, and music publishers. Ideally, this website is catered towards desktop users since the resolution of it isn't designed for it. Both IOS and Windows users are able to use the website. 
 

Our system would help users find new music, usually people get bored of their playlist because it gets repetitive. Broadening the algorithm also allows aspiring artists to get popularity since the system would be adding try to create personalized playlists for users to discover new artists. 

VERCEL LINK: https://inst377-final-project-vp.vercel.app/homepage.html


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Developer Manual 
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The manual is intended for future developers who will take over this project. It will provide all necessary information for setting up, running, and contributing to the project. 


1. How to install your application and all dependencies:
   clone the repo
   
```git clone https://github.com/your-username/inst377-final-project-vp.git cd inst377-final-project-vp ```

  make sure you run this in terminal: 
```npm install```

   create a .env file in the root with the following (use ur own): 
``` SUPABASE_URL=your_supabase_project_url ```
 ```SUPABASE_KEY=your_supabase_anon_key ```

2. How to run your application on a server

This project can be run on Live Server or Vercel. If using VS Code, right-click any HTML file and press Live Server. If using Vercel, import the repository to Vercel. Add Supabase keys to the environment and deploy in the dashboard. Make sure you are pushing new changes before redeploying. 


3. How to run any tests you have written for your software

There are currently no tests implemented in this project. Future developers are encouraged!

4. The API for your server application - all GET, POST, PATCH, etc endpoints, and what they each do


```POST /save-playlist```
  Saves generated playlist to the Supabase table. 

```GET /playlist```
  Returns all the saved playlists from Supabase. 

4. A clear set of expectations around known bugs and a road-map for future development.

Known bugs: 
  1. The playlist saves fail if the Supabase credentials are incorrect or the Vercel link is incorrect.
  2. Voice commands may not work on all pages.
  3. API calls if backend URL are misconfigured.

For future development: 
  1. Implement user accounts to associate playlists with users.
  2. Improve error handling for Supabase and fetch requests.
  3. Integrate Spotify API.






