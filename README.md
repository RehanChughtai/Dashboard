 WebScript Coursework 3 - University Of Portsmouth

  Student Number: UP837518


  The purpose of my dashboard was to create a general business purpose
  environment. I chose this because based on the mark scheme we want to
  attempt to have some sort of industry standard for things like our
  design, to which I thought it was best to base my dashboard around
  it. I feel as this is a dashboard that could be used in the industry
  in the future as well and with more time and skills, could be developed
  much further. To store all of my configurable data, I have chosen to
  go with node localStorage and the same goes for storing the data for
  all my widgets and panels. With a lot of information packed features
  in my dashboard, you can do things such as click on a news source or
  calendar event such as moon phases and it will redirect you to
  it on a new tab.

                    How to run the dashboard?

  Step 1 :Type npm install if node modules are not already installed

  Step 2: Type npm start - this will run on localhost:8080

                            Key features

In this dashboard, you will find a total of 9 different widgets, of
  which the admin has options to use any of their liking or for use
  relevant to their businesses. There is also a 10th part which isn't a
  widget but is a key feature to my dashboard which is known as drag &
  drop. All of these features can only be accessed while in settings,
  as soon as you sign out, you no longer have these abilities.

  1.Calendar - I have gone for a calendar which is taking its API from
  google with some event sources to choose from. When you click on the
  source, you're source changes upon which one you select. A neat feature
  is that when you click on a event, you are able to add events that are
  personalised, save certain public holidays to your personal google
  account and much more. All updates made on the external source will then
  be displayed on your calendar on the dashboard in the calendar panel.

  2.Weather - The weather shows the current weather and weather for the
  next 4 days giving you a total of a 5 day forecast. There are already
  a few locations which can be chosen from to view the area such as
  Portsmouth or my home country Pakistan. There are also icons to view
  weather it is day time or night time and also what the weather
  conditions are. Features like the exact date and day are also shown.
  Highest/Lowest Temp and Average Temp are also displayed. You can change
  the weather source by going into the admin panel and selecting the
  dropdown menu for the weather source and changing it to the desired
  weather source and clicking apply changes.

  3.News - I have gone with a news API, which has several news
  sources to choose from. The feed includes news sources of different
  order, not just main headlines which is something I like as I am able
  to read all sorts of news. A feature I've implemented is the auto-scroll
  which scroll at a steady pace but when you hover above it, It pauses
  for you to view. After every article, there is a view article button
  which ones pressed will redirect you to the page of the news article
  so that you can see it in much more detail. You can change
  the news source by going into the admin panel and selecting the
  dropdown menu for the news source and changing it to the desired
  news source and clicking apply changes.

  4.Geolocation - Geolocation shows you your location based on area name
  county and country name. This features works everywhere, hence the name
  geolocation and can be accessed by all users to view exactly where they
  are when using the dashboard.

  5.Date & Time - This features allows you to see the day, date in format
  MM:DD:YYYY and time in format HH:MM:SS. This feature I believe is really
  essential for workplaces as the date and time is necessary for everyone
  and a small but neat feature to have.

  6.To do list - The To-do List can work in both the format of things to
  do and also it can work in the form of announcements for the staff in
  a business for things such as an upcoming event or something like a
  important meeting or deadline. This API allows the admin to add
  information/text of choice and remove it when its completed. To delete
  you click on the text and it removes it and to add, you type the text
  you want in the text box provided and click the add button which adds
  it to the list.

  7.Google Sign in - The purpose of this is, when you sign in, you are
  redirected to the settings page where you can access the admin panel
  to make changes you want such as news source or background colour.
  Likewise, when your done making changes, you apply them and sign out
  which will redirect you to the unconfigurable dashboard. To sign in,
  you click on the 'Sign in with Google Button' and click your google
  account and you will be signed in. To sign out, you must press the
  'Sign Out' button on the admin panel.

  8.Random Quote - This is a small feature which upon click of the
  button generates a random quote every time you click 'Get Quote' which
  I feel is a nice feature for a business environment for the user to
  see when they see the dashboard, sort of like a quote of the day kind
  of thing. To use this, click 'Get Quote' each time to change quote.

  9.Background Colour - There is a ability to choose the background colour
  from a drop down menu which can be chosen as proffered by the company.
  They can choose to keep it one colour or alternate to however they wish.
  If I would develop the dashboard for future use I would include background
  image use so that the company can have there company logo as the background
  if they wish to do so. You can change the background colour by going into
  the admin panel and selecting the dropdown menu for the background colour
  and changing it to the desired background colour and clicking apply changes.

  10.Drag & Drop - All of the widgets/panels are able to be dragged and
  dropped as desired by the admin and placed as they would like to view their
  dashboard. This can be achieved by holding the left mouse button and moving
  the mouse around to there desired location within the browser and letting
  go where they wish to drop the item and place it there.

                                Design

  My design section has been split into 2 in terms of description of the
  design. The two sections are layout/frontend and system/backend design.


  Layout design/Frontend - As mentioned before, I've created my dashboard for
  a business use for all businesses of all types. This is very generic. So, I
  have decided to go for a very simple yet effective design which works for
  all works places, not just fancy ones. This is very good for usability
  as I have tried to keep it so that users of all types can use it without
  a problem with a classical look to it. I have made the website responsive
  for all types of browsers on all screens and made it very easy to use with
  very simple features. I've also included a drag and drop to rearrange the
  panels/widget as the admin pleases. I've gone for a very classical and simple
  look which I intend to give most users satisfaction for what they receive.


  System design/Backend - For my backend I have decided to use a very simple
  approach, the server.js file will be in the main directory and a new folder
  called dashboard has been made for the actual dashboard. Within dashboard
  we have all our html files which include both the settings page and the
  unattended display, alongside all CSS files. Also within this I have included
  the app.js file which includes all the relevant APIs that use the get and
  post functions. Also a folder called js has been created which is essentially
  for all the APIs that don't use keys or don't necessarily need keys. Certain
  items are not APIs either such as the responsive of the dashboard which is
  all included in the js file. I have used this format as this is the format
  I have used throughout both first and second year so far.

  The majority of my work is my own. I used external sources such as YouTube,
  StackOverFlow and OpenClassrooms to get familiar with both Theoretical and
  Coding functionality side of things. Most of this will be explained in the
  reflection as I had to redo my dashboard 3 times because of misunderstanding
  and problems I should have taken care of before it got deep into backend
  coding. Overall, I mainly used express and rest and did not opt for a database
  such as mysql, I attempted to make the application using node localStorage
  which allows me to store data on the server and means that running the project
  is as simple as installing npm and then running npm.



                      Implementation rationale


  Overall, I am more than satisfied with the outcome of the weather as I
  wanted a 5 day forecast format rather than just a daily format. As
  personally I like to see the next few days and would see that of more
  use for the businesses as well over just on the day weather format. The
  design I went for was a bit of a unique one as I was able to show a
  different yet ordered style for my weather API.

  The news API was another thing I was happy with. Initially when looking
  for an API for the news I found many but when I began the project my
  JavaScript knowledge was not up to scratch and therefore a lot of issues
  arises. This news had one problem on the unattended display, which was
  having to scroll. Through rigorous research on how to solve this, I
  came across an auto-scroll which I could change to a speed of my choice.
  I found this useful as I was then able to display news with a scrollbar,
  but not actually having to scroll, rather its done for you, which I think
  was a nice touch over other news panels which would display top 3 headlines
  for example, This way that I implemented allowed a lot more news to be
  shown.

  With my to-do List, I had to change it a couple of times and that was based
  on my own learning phases of this teaching year. For this, I used a simple
  to-do list at the end as I found adding too many features where causing issues,
  so I would rather have a simple to-do list that works as best as it can and
  store data on the server than one that is full of features but doesn't store
  data on the server or work that well with the rest of my dashboard.

  A final thing I really liked and developed into my dashboard was something
  I learned towards the end of the teaching year in our lecture where, we
  were taught how to implement Google Sign in API into our dashboard without
  the use of passwords which was something to avoid in this dashboard as a
  requirement given by our teachers. The way I adapted this was to combine the
  sign in button with my settings so that once the admin signs in, they are then
  redirected to the page with the admin panel to make their necessary changes.
  Same way I implemented the sign out button from the admin panel so that when
  the admin has made their changes they are redirected back to the unattended
  display and logged out.

																Conclusion

  In conclusion, I hope you have found my dashboard of use. I made it with
  the intent to develop it further after the deadline with more features
  and better code quality. This would be perfect for myself and I feel as
  for someone or a collective amount of people in a business which is the
  purpose of this dashboard. I have made errors along the way, but again
  they are learning curves and I hope to learn from the feedback given from
  this coursework. This coursework alone has really helped my ability to code
  JavaScript in specific NodeJS. I would have started at the start of the year
  had I known the intensity and difficulty of this coursework and maybe would
  been able to fix a lot of things that I could've had I not limited myself
  to time.
