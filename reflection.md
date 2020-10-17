WebScript Coursework 3 - University Of Portsmouth

Student Number: UP837518

                              Reflection

I chose to setup my web application in a way where you would access the
unattended dashboard first and from there I've made my google sign in API
work in a way that when you sign in, as an Admin in a real life scenario
would, You are taken to the settings pages where you can make all the
modifications you wish to add. In the same way, once all changes have been
made, and you've applied all the changes by the click of the dedicated
button, you are redirected back to the unattended dashboard.

If I would start this API all over again I would start from one widget at
a time, upon completing the first one I would not start another one. If I
would get an error or a bug which I could not fix, I would try to fix it,
instead of finding a way of skipping it. I would document my code from the
start.

In this coursework, I have learned a lot in regards to restful APIs. One
problem that I had was not being to clear with the brief which is something
I should have got my head around and asked as many questions as I could
before I actually started to do my coursework. Failing to do so made me create
my dashboard 3 times from scratch after I had completed it. This was a very
frustrating process but was worth it in the end as although I did it wrong
the first two times, I only gained knowledge from it.

One thing really great about this coursework was being able to rectify my
own mistakes. Luckily, NodeJS is very big so finding resources for it aren't
as difficult as it is for other subjects such as Haskell. To begin I made my
server so that it displayed all my information with a settings panel all on
the same page, which again goes back to not reading the brief correctly.

I then attempted to make a different version which had my settings on a
different page to my unattended display, However, this was not server side
storage, rather it was client based which I was not fully aware of again
based on not paying enough detail and planning out my project. Finally, on
my third attempt, I did manage to make my dashboard server side following
the brief and was not hesitant on asking questions where I was unsure, both
to my teachers and my peers.

If I where to start all over again, I would have planned what I was going to
do in detail, I would have accumulated a few resources such as where I am
going to get my API key from. This would be a lot more structured and allow
me to access the dashboard in a more organised manor. The way I first made all
my APIs was all over the place. I would work on weather for example, not
finish it and go to news for example.

A lot of errors where made in the process like using news APIs which I didn't
know how to code correctly and wasted a lot of valuable time. However, I did
recover from this by the use of external sources such as StackOverFlow and
YouTube. This helped me to gain a lot of detail on things like how to obtain
only certain information from my API rather than everything. This is like my
weather, when I tried to code it generally, I ended up having a lot of
useless details such as Fahrenheit as I was only working in Celsius.

It would have been helpful to have lectures recorded so that I could look
back at certain parts of the lecture on many lectures as just having slides
where not enough in some cases. Attending all my lectures did help me retain
some information which was very helpful in the end.

In conclusion, I have learned a lot from this unit, not just through university,
but also through external sources. I used this coursework as more of a challenge
then a assignment to teach myself as much JavaScript as I can. I came with a aim
to learn JavaScript as web development is something I want to go into. One thing
I really wish this unit taught as well was PHP. As doing my research I have found
that with a combination of HTML, CSS, JavaScript and PHP, you are able to achieve
almost anything in web development.

Doing as much as I can myself has given me more confidence in making APIs and
based on this experience, If I attempt it again I will be able to plan and
structure exactly what I need based on the resources available. I have learned
through the many phases of trying how to transfer and exchange information and
data between a client and sever on two different web pages.


                            What went wrong?

In this section, I would like to discuss the problems I faced while attempting
to do this coursework. The first major problem was I started this coursework
with very little knowledge of both JavaScript and APIs. Also as mentioned
before, not paying attention to the brief in enough detail to begin with.
This has caused a lot of bad decisions on my end when creating all the
components of my dashboard.

I first began by creating a dashboard with several different ways of making
for example, the news API. I was retrieving all the data given by the API key
but not paying attention to what I actually needed which caused me many problems
later on. I did this for most of my APIs. Weather was an API that I had to keep
going back to and was very frustrating because of mistakes I was making.

If I had spent time fixing what I was doing at present and trying to understand
it, I would have saved a lot of time an effort. So I began by doing this throughout
my dashboard and also put my settings on the same page as at the time I could not
figure out how to communicate 2 different html pages at the time. When I had made
my initial dashboard, I didn't check correctly. Till one day I decided to go on it
and check, Where I found that everything worked fine for the session but as soon as
I had reset the page everything would go back to what I set as default.

This had become very frustrating as I then had to redo my work. The smart initiative
that I had taken here was that I got in contact with my teacher and started
asking questions. So that this time I was more prepared. This time I had
recoded all my work with again same sources. But managed to have my code
so that I had 2 different html pages that communicate with each other
with one having the settings page and the other not. However, when I looked
at lecture slides I found that I had not used rest when researching online.
To this, I had then contacted a family member of mine who owns his own server
and requested him to put my dashboard on his server. There I tested whether if
I could make changes on my settings, would he be able to see that on his
unattended display.

Unfortunately, no luck, to this I then stopped coding and slowed the pace down.
I started looking at different sources, lectures slides and basically anything
that I could find and sat down for 2 or 3 weeks and made sure I understood
rest both theoretically and functionally. I found a few useful sources on
both YouTube and OpenClassrooms. After this I did a bit of research on storage
as certain things such as my to-do list need a database backing of some sort.

From previous research I was already using localStorage, But after a lot of
research I came across node localStorage which allowed me to do what localStorage
did for a client based server, to do the same thing for a server based storage.
I finally had good enough grounds to get started and so I continued with all my
work and found that for my calendar API, weather API and news API I actually
had the same sort of function for the get and post functionality. To-do List was
one of the easiest ones to do as a lot of online examples did the same thing.

Also, I did not have any external changes, from for example the settings. Every
thing with the to-do list was done directly in the to-do list panel. The only
function I had that was stored on the server but did not use get and post function
was the background colour. For that I reverted to jQuery's.

One major error in my project was the lack of documentation and comments. I
did comment here and there but the problem was, there was either not enough
detail or there was not enough comments. Which meant when I was not fully
dedicated to the coursework, meaning I had other deadlines for other units
to work on to. When I came back to it, I was lost or could not remember some
things. This was definitely something to improve in as I would have known
exactly what happened where and where I am at right now. It was only when I
had completed all upcoming deadlines and had more time on my hands with this
coursework where I sat down and completed a lot more work with good comments
and documentation.

Another error in my coding at the absolute beginning was having a starting
HTML and CSS page which may have looked nice. But, the problem was I was
wasting a large amount of time coding things that could have been done in
the end when I have all the important stuff down. In the end I did not even
use that code or design which wasted valuable time.

When my dashboard was made in a client storage base which was my second
attempt. I had made several different JavaScript files, one per API as if
I had all the APIs on one page it would just overlap. When I put it all
in an app.js just like I was instructed to by external sources such as
OpenClassrooms I could merge everything into one because rest allowed me
to do so, which in the end in terms of folder management made my whole
project folder nice and neat.

A major let down to myself was the lack of let in my JavaScript code as I
had already started my code and thought to change it all in the end. I had
no idea starting when the coursework released would have still pushed me
till deadline day. Therefore, lack of time based on my own mistakes meant
that I could not add then where possible which was something I should have
done from the start.

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
