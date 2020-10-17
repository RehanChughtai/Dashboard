/////////////////////////////////////////////////////////////////////////////////
// Load Option Values
/////////////////////////////////////////////////////////////////////////////////

//Onload to retrieve all data sent from the server to be used on the functions
window.onload = function() {
  getLocation();  // Location Value for Weather
  getBackgroundColour();  // Colour Name for Background
  getSource();  // Source for News
  getToDoItems(); // ToDo List items
  getCalendar(); // Calander for Events
}

/////////////////////////////////////////////////////////////////////////////////
// ToDo List
/////////////////////////////////////////////////////////////////////////////////

function getToDoItems(){
    let xml = new XMLHttpRequest();
    let list = document.getElementById("todoitems");
    xml.onreadystatechange = function(){
      //If function is displayed, gets items from server and displays them,
      //also has function to remove a completed task on the settings page
      if(xml.status == 200 && xml.readyState == 4){
        list.innerHTML = xml.responseText;
        for(let i = 0; list.childNodes.length>i; i++){
          list.childNodes[i].onclick = function(){
            this.parentNode.removeChild(this);
            postToDo(list);
          };
        }
      }
      // If no item is displayed, inform the user.
      else if (xml.status == 404 && xml.readyState == 4) {
        console.error("No items found on server!");
      }
    };
    xml.open("GET", "/todo", true);
    xml.send();
  }

//Allows you to add new items to the todo list.
function newToDoItem(){
    let textField = document.getElementById("todolst");
    let list = document.getElementById("todoitems");
    let li = document.createElement("li");
    if (textField.value == "CLEAR_ALL") {
      list.innerHTML = "";
    }
    else if(textField.value !== ""){
      li.innerText = textField.value;
      li.onclick = function(){
        this.parentNode.removeChild(this);
        postToDo(list);
      };
      list.appendChild(li);
      postToDo(list);
    }
    else{
      alert("Please enter a thing todo!");
    }
  }

  /*
  Updates the servers current todo list with newly edited todo list and vice
  vera
*/
function postToDo(list){
  let xml = new XMLHttpRequest();
  xml.open("POST", "/todo");
  xml.setRequestHeader("Content-type", "application/json");
  let listJSON = {list: list.innerHTML};
  xml.send(JSON.stringify(listJSON), true);
}


/////////////////////////////////////////////////////////////////////////////////
// Weather
/////////////////////////////////////////////////////////////////////////////////

function getLocation(){
  let xml = new XMLHttpRequest();
  xml.onreadystatechange = function(){
    // Retreives the weather location information
    if(xml.status == 200 && xml.readyState == 4){
      locat = xml.responseText;
      loadWeather(locat);
    }
    //If we don't get any items, inform the user.
    else if (xml.status == 404 && xml.readyState == 4){
      locat = 'London';
      loadWeather(locat);
    }
  };
  xml.open("GET", "/location", true);
  xml.send();


function loadWeather(locat){
  //Retreives the API from OpenWeather API server and display 5 day forcast
  //based on chosen location
  let weatherurl = 'http://api.apixu.com/v1/forecast.json?key=002e9a2600f546c9b5411016190803&q=' + locat + '&days=5';
  let xml = new XMLHttpRequest();
  xml.open('GET', weatherurl, true);
  xml.onload = function() {
      if (xml.status === 200) {
          createWeather(JSON.parse(xml.responseText));
      } else {
        //Displays an error if weather could not be retrieved.
          console.error('Weather not retrieved', xml);
      }
  }
  xml.send();

}

//Creates weather layout based on retreievd information
function createWeather(datae){
  window.current.innerHTML = '';
  window.forecast.innerHTML = '';

  let element = document.createElement('div');
  element.id = 'weathericon';
  let globalData = document.createElement('img');
  globalData.src = datae.current.condition.icon;
  element.appendChild(globalData);

  window.current.appendChild(element);


  element = document.createElement('div');
  element.id = 'weathertemp';
  globalData = document.createElement('p');
  globalData.textContent = datae.current.temp_c + '' + '\u2103';
  globalData.classList.add('tempFont');
  element.appendChild(globalData);

  globalData = document.createElement('i');
  globalData.textContent = datae.location.name + ',' + datae.location.country;
  element.appendChild(globalData);

  globalData = document.createElement('p');
  globalData.textContent = datae.current.condition.text + ', feels like... ' + datae.current.feelslike_c + '\u2103';
  element.appendChild(globalData);
  window.current.appendChild(element);



  let forecastData = datae.forecast.forecastday;
  forecastData.splice(0, 1);
  forecastData.forEach(function(weather){

    let element = document.createElement('div');
    element.id = 'dayfore';
    window.forecast.appendChild(element);

    let datae = document.createElement('img');
    datae.src = weather.day.condition.icon;
    element.appendChild(datae);

    datae = document.createElement('p');
    let date = new Date(weather.date)
    datae.textContent = days[date.getDay() - 0] + '	 ' + weather.date;
    if(datae.textContent === ''){
      datae.textContent = 'Sunday';
    }
    element.appendChild(datae);

      datae = document.createElement('p');
    datae.textContent = weather.day.avgtemp_c + '\u2103' + '    ' + weather.day.mintemp_c + '\u2103' + '/' + weather.day.maxtemp_c + '\u2103';
    element.appendChild(datae);

  });
}};

/////////////////////////////////////////////////////////////////////////////////
// News
/////////////////////////////////////////////////////////////////////////////////

//Gets News source information from the server
  function getSource(){
    let xml = new XMLHttpRequest();
    xml.onreadystatechange = function(){
      //Retrieves news information
      if(xml.status == 200 && xml.readyState == 4){
        source = xml.responseText;
        getNews();
      }
      // If we don't get any items, inform the user.
      else if (xml.status == 404 && xml.readyState == 4){
      }
    };
    xml.open("GET", "/newssource", true);
    xml.send();
  }

//Retreievs all information from the news api source
	function getNews()
	{
		let endPoint = "https://newsapi.org/v2/top-headlines";
    let apiKey = "ae8b3a2ce6734eb882fdabb55081b76b";
    let urls = [`${endPoint}${source}${apiKey}`
		];

//Retreieves information from the api key and endpoint, Retreievs information
//from package.json
		let allResults = [];

		let count = urls.length-1;
		const get =(real)=>{
			$.getJSON(urls[ count ], function(data) {
				console.log("JSON data has been retrieved from " + data.source);
				let news = data.articles; //get only the news articles
				allResults.push(news)
				// printNews(news);
				real();
			})
		};
		recurse();

		function recurse(){
			if(count >= 0){
				get(recurse);
				count--;
			}
			else
				//allResults is  an arrray of nested objects
				printNews(allResults);
		}
	}

	//display the news
	function printNews(result)
	{

		let res=[];
		//flatten the array of nested objects into one single array
		result.map(list=>{
			return list.map(item=>{
				res.push(item)
			})
		})
		console.log(res)
		//Shuffle all the news items randomly depending on source
		shuffleArray(res);
		let output = "";
		for(let i = 0; i < res.length; i++)
		{

      /* sets size of news panel */
			let link =  res[i].url;
			let resultDiv = `
				<div class="col-sm-1 col-md-1" width="280">
					<div class="thumbnail">
						<img src="${res[i].urlToImage}" alt="${res[i].title}" width="280">
						<div class="caption">
							<h2> ${res[i].title} </h2>
							<h4> ${res[i].description} </h4>
							<p><a href="${link}" target="_blank" class="btn btn-primary" role="button">View Article</a> </p>
						</div>
					</div>
				</div>	`
			output += resultDiv;
		}
		$('.printResults').html(output);
    //Outputs results of news
	}

//Shuffles news randomly so its not catogerised.
	function shuffleArray(array) {
	    for (let i = array.length - 1; i > 0; i--) {
	        let j = Math.floor(Math.random() * (i + 1));
	        let temp = array[i];
	        array[i] = array[j];
	        array[j] = temp;
	    }
  }



/////////////////////////////////////////////////////////////////////////////////
// Background Colour
/////////////////////////////////////////////////////////////////////////////////

function getBackgroundColour(){
    let xml = new XMLHttpRequest();
    xml.onreadystatechange = function(){
      // Gets the background colour, applies it and stores it on the server
      if(xml.status == 200 && xml.readyState == 4){
        bgcolour = xml.responseText;
        document.body.style.backgroundColor = bgcolour;
      }
      // If we don't get any items, inform the user.
      else if (xml.status == 404 && xml.readyState == 4){
      }
    };
    xml.open("GET", "/bgcolour", true);
    xml.send();
  }

/////////////////////////////////////////////////////////////////////////////////
// Calendar
/////////////////////////////////////////////////////////////////////////////////

//Gets all information for calander and stores it on the server.
function getCalendar(){
  let xml = new XMLHttpRequest();
  xml.onreadystatechange = function(){
    //Retreieves Calendar information
    if(xml.status == 200 && xml.readyState == 4){
      calendarsource = xml.responseText;
      localStorage.setItem('calendarsrc', calendarsource)
    }
    // If we don't get any items, inform the user.
    else if (xml.status == 404 && xml.readyState == 4){
    }
  };
  xml.open("GET", "/calend", true);
  xml.send();

}

//Uses event listener to get calendar element
document.addEventListener('DOMContentLoaded', function() {
  let calendarEl = document.getElementById('calendar');

//Retrieves the items from calender local storge
  let source = localStorage.getItem('calendarsrc');
  if(source === null){
  let  source = 'en.usa#holiday@group.v.calendar.google.com';
  }
  else {
  let  source = localStorage.getItem('calendarsrc');
  }

  let calendar = new FullCalendar.Calendar(calendarEl, {
//information is retrieved
    plugins: [ 'interaction', 'dayGrid', 'list', 'googleCalendar' ],

    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,listYear'
    },

    displayEventTime: false,

    googleCalendarApiKey: 'AIzaSyA5_7rmVdN60iH5EgpKt0ggrKtRjPXBbEQ',

    events: source,

    eventClick: function(arg) {

      window.open(arg.event.url, 'google-calendar-event', 'width=700,height=600');

      arg.jsEvent.preventDefault()
    },

    loading: function(bool) {
      document.getElementById('loading').style.display =
        bool ? 'block' : 'none';
    }

  });

  calendar.render();
});


//Adds new item to listen when add button is clicked
  document.getElementById("todo-button").addEventListener("click", newToDoItem);
