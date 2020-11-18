# Human Rights First FE - Team F

## Description
[Human Rights First](https://www.humanrightsfirst.org/) is an independent advocacy and action organization that challenges America to live up to its ideals. We believe American leadership is essential in the global struggle for human rights, so we press the U.S. government and private companies to respect human rights and the rule of law. When they fail, we step in to demand reform, accountability and justice. Around the world, we work where we can best harness American influence to secure core freedoms. 

Lambda will be developing a visualization that showcases instances of police use of force along with a data science model that helps classify possible instances of brutality. 

Labs 27 started work on an analytics dashboard. Improve dashboard that showcases trends in police use of force. Showcase what types of force is trending in certain areas. Showcase what kinds of populations where police use of force is occurring more. Our team was tasked with improving these visualizations how you see fit.

Ultimately our team determined that we would implement the following user stories:
- Implement a filter feature (into the graphs component)
- As a user, I can interact with a timeline of use of force
- As a user, I can add an instance of use of force
- As a user, I can see a casualty count as a result of use of force

<hr>



## Contributors

| [Alexander Goncalves](https://github.com/schroeder-g) | [Kory Hacker](https://github.com/Tusk617) | [Jason Fadelli](https://github.com/Jfadelli) | [Brandon Neil](https://github.com/bneil7) |
| :---: | :---: | :---: | :---: | 
| [<img src="https://avatars2.githubusercontent.com/u/66321261?s=460&u=a4d4c3deaa7e9199d640617b80b80c8bd129ab5a&v=4" width = "200" />](https://github.com/schroeder-g) | [<img src="https://avatars2.githubusercontent.com/u/59673124?s=460&u=5d08730ede70f6ad608cdbc9e0c44ea8d5f8bc9e&v=4" width = "200" />](https://github.com/Tusk617) | [<img src="https://avatars2.githubusercontent.com/u/47641725?s=460&v=4" width = "200" />](https://github.com/Jfadelli) | [<img src="https://avatars3.githubusercontent.com/u/63384257?s=460&u=39856fe83f292970782a06240b43640dc0166cc7&v=4" width = "200" />](https://github.com/bneil7) |
| Web Developer | Web Developer | Web Developer | Web Developer |
|[<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/schroeder-g) | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/Tusk617) | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/Jfadelli) | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/bneil7) |
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/alexgoncalves1/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/k-hacker/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/jfadelli/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/brandon-g-neil/) |
             

<br>

## Deployed Product
- Backend  - https://hrf-f-api.herokuapp.com/
- Frontend - https://f.humanrightsfirst.dev/
- DS       - http://human-rights-first-api.eba-rb7uzmhr.us-east-1.elasticbeanstalk.com/

## Linked Repos
- Backend  - https://github.com/Lambda-School-Labs/human-rights-first-be-f
- Frontend - https://github.com/Lambda-School-Labs/human-rights-first-fe-f
- DS       - https://github.com/Lambda-School-Labs/human-rights-first-ds-f

## Getting Started 
The team inherited a semi-functional app that included a dashboard, a map with functional api, and a non functional sign up / login page. The previous labs team left us with [this repo](https://github.com/Lambda-School-Labs/human-rights-first-fe-f/tree/7649403a57a25e5b4d02c33ada73d2633bada457).

[The product vision statement that we were presented with.](https://www.notion.so/Human-Rights-First-Roadmap-Labs-28-4725bc357588498587902fed9d9b78c5) 

To get started with this repo, you will need to install all of the packages with "npm i" in your src directory. After that you will need to create a .env file with the following key:values...

| Keys  | Vals (provided by TPL) |
|---|---|
| REACT_APP_CLIENT_ID| xxxxxxxxxxxxxxxxxx |
| REACT_APP_OKTA_ISSUER_URI  | xxxxxxxxxxxxxxxxxx |
| REACT_APP_API_URI  | xxxxxxxxxxxxxxxxxx |
| REACT_APP_MAPBOX_TOKEN  | xxxxxxxxxxxxxxxxxx |

<br>
e.g. 

![example .env file](https://imgur.com/a/oqRoetB) 

<br>


## Tech Stack Used 

| Tech Stack | Purpose |
| --- | --- |
| React | This application is built in react | 
| Axios | To access API driven data |
| Redux | To handle state between components |

<br>

## User Flows 
The user lands on the maps page and can navigate, via the navbar, to the graph component or to the submit incident component.
Within the graph component the page renders a visualization of the dataset provided by the DS team.
The user can interact with the data by selecting the type of force, and filter the data by month with the filter component (the filter component needs to be debugged and integrated)
Within the submit incident form the user can input incident data (the submission form still needs a yup schema, and API integration)

![demo gif](https://imgur.com/a/n22CMxZ)

## Wireframes

![Graph Wireframe 1](https://imgur.com/a/Cd9oKzN)

![Graph Wireframe 2](https://imgur.com/5kLTK7b)

We agreed that the current iteration of the graph was visually unappealing and hard to read (the curvy lines looked like spaghetti), so we decided to change it to a stacked bar graph, which looks cleaner and easier to navigate. The Y-axis still represents the number of incidents, and the X-axis represents a timeline, with each different bar separated by month, to show how many incidents happened per month. The filters allow the user to separate out the different uses of force used to focus on specific incidents. In future iterations of this feature, we would apply more filtering functionality, like allowing the user to filter incidents based on location, and specific date ranges (instead of just months at a time).

// Incident Form: https://whimsical.com/user-submissions-board-hrf-2Gm3Ps5SpfrxN4BwHQGxfB
[Incident Form Wireframe](https://imgur.com/WhjarOQ)
We added a new tab with a form for users to submit incident reports, with the input fields of the date, location, a dropdown menu to select from the list of types of force that best categorizes the incident, a text field for the user to type a description of what happened, and a field for their email address for verification purposes. In the delivered product, there is not an input for “cross-streets”, but that was an idea that we had for the wireframe because we believe it would be ideal to provide a more precise location of the incident rather than just mentioning the city it happened in. With more time, we believe it is something that could be accomplished with being able to map the longitude and latitude coordinate data in a way that could be displayed in a given city’s street grid system.


## Architecture
This repository is supported by a variety of different technologies and packages. This being a Create React App, it follows typical CRA architecture, with CRACO overlays for customizable configurations. A couple notes on important features of file structure and dependencies:
 
Components are by and large reliant on the Ant Design module for their structure. Ant Design is an open source bootstrap-like templating solution you can read more about [here](https://ant.design/docs/react/introduce).

Two other important packages are Mapboxgl and react-chartjs2, which are the interfaces that run the map and bar chart, respectively.

State wants to be managed by Redux. The store and middleware are hosted in ```/components/index.js```, while the reducers and actions exist in the ```state``` directory. We did not achieve full autonomy for Redux as the single source of truth Application-wide.

Generally speaking, there is still a good bit of legacy code that’s dead code, and there are some ‘loose’ files in the main directory that could be consolidated (all the .md files, for example, could be placed in a ‘documentation’ directory).

**File Structure**
``` 
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
│ README.md 
│ DEPLOYMENT_GUIDE.md 
│ README.md 
│ jestconfig.js -- *for testing*
│ package/lock.json -- *controls dependencies for development and node modules*
│ LICENSE -- *MIT License for open use*
│ craco.config.js -- *Create React App Configuration Override. Gives additional dev and deployment options.*
│ .env -- *holds the keys for Mapbox and Okta authentication*
│ amplify.yml -- *Controls deployment options for Amplify*
│ .prettierrc -- *Configuration for Prettier code formatter*
│ .eslinttrc -- *Configuration for linter*
│ 
└───Node_Modules
│ 	└───check package.json for list of node packages
└───[Amplify](https://aws.amazon.com/getting-started/hands-on/build-react-app-amplify-graphql/)
│ 	└───Holds settings for Amplify web hosting on AWS
└───[Storybook](https://storybook.js.org/)
|	└───A GUI for creating user stories for interacting with components
└───public
|	└───favicon, root ```index.html```, ```robots.txt```, ```manifest.json```
└─── Src
|	└─── tests -- jest and React Testing Library unit testing for components
|	└─── api -- legacy code, unsure of functionality
|	└─── assets -- holds data and images for application
|	└─── components/common -- holds all jsx files; about page, filters, etc.
|	└─── state -- Redux store’s reducers and actions
|	└─── stories -- extension of the storybook.js module
|	└─── styles -- hosts all css.
|	└─── utils -- should be refactored. 
|		└───getDataForBarChart -- deprecated
|		└─── aws-exports.js -- deprecated
|		└─── okta.config -- all configuration files could go into assets
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
```


## Updates To Repo in Labs 28
1. Converted the line chart of incidents over time into a stacked bar chart using Chart.js to increase readability and comparability of the data.

2. Implemented a new filter for the stacked bar chart to filter incidents by date. Chart state was moved to the GraphFilterReducer in the store, and sends updates with the UPDATE_FILTER action.
Architected a draft of the MVC for the total counts of incidence of each category to date. The current implementation is located in the Graph component and managed locally through useState and usEffect. It solely displays the number of incidents of lethal force.
Built an Incident Submission Form using Ant Design for users to add their own data to the db.
3. Refactored the package to remove 1,250 files of dead code. Specifically, the ‘pages’ directory and OldMap component were removed to decrease total package size by 45%.

## End Points 
- You can find the documentation for the data endpoint for this project is [here](http://human-rights-first-api.eba-rb7uzmhr.us-east-1.elasticbeanstalk.com/). The current valid schemas for HTTP requests are as follows:
**/predict** | *post* | Makes a baseline prediction of the content of a generated incident of police use of force. No arguments need to be provided.
-**/getdata** | *get* | returns all incidents of police data in the database. The format of each incident object is as follows:
```
{
    "src": [
      "https://www.youtube.com/watch?v=s7MM1VauRHo"
    ],
    "state": "Washington",
    "city": "Olympia",
    "desc": "Footage shows a few individuals break off from a protest to smash City Hall windows. Protesters shout at vandals to stop.  Police then arrive. They arrest multiple individuals near the City Hall windows, including one individual who appeared to approach the vandals in an effort to defuse the situation.  Police fire tear gas and riot rounds at protesters during the arrests. Protesters become agitated.  After police walk arrestee away, protesters continue to shout at police. Police respond with a second bout of tear gas and riot rounds.  A racial slur can be heard shouted, although it is unsure who is shouting.",
    "tags": [
      "arrest",
      "less-lethal",
      "projectile",
      "protester",
      "shoot",
      "tear-gas"
    ],
    "geolocation": "{'lat': '47.0378741', 'long': '-122.9006951'}",
    "title": "Police respond to broken windows with excessive force",
    "date": "2020-05-31",
    "date_text": "May 31st",
    "id": "wa-olympia-1"
},  
```
- **/get_timeline** | *get* | Returns all incidents in chronological order. Same response shape as **/getdata. 

- **/getcount** | *get* | Returns a string detailing the total number of  incidence in each category of use  of force. The response shape is a string, as follows:
```
"{\"1. Officer Presence\": 1218, \"2. Nonthreatening Commands\": 115, \"3. Threatening Commands\": 425, \"4. Soft Technique\": 83, \"5. Hard Technique\": 1020, \"6. Blunt Impact\": 838, \"7. Chemical\": 1030, \"8. Conducted Energy Devices\": 322, \"9. Lethal\": 313}"
```
<br>

## Issues

- [ ] The filter for the stacked bar graph is not working effectively. Currently, the X axis is set up to organize incidents by month for a static range of January to December-- however, the intention was to represent each day in a selected range with its associated incidents.
- [ ] The Post New Incident form does not have an associated endpoint on the back end. It’s currently pointed to a dummy API.
- [ ] The map doesn’t display all incidents in a given range if they share geo coordinates, it only displays one.
- [ ] There is no routing between components.
- [ ] The Map and the graph are missing tests.
<br>
## Future Features
The most important contributions yet to be made to this application include:

- [ ] Sophisticated state management with Redux. 
- [ ]  The filters for the bar graph’s date range and location are not fully functional.
- [ ]  The user signup and login are not currently functional.
- [ ]  The current ‘death count’ widget in the ‘graph’ tab reallocated into its own component.
- [ ]  Implement browser-routing between components.
<br>

There is still room for improving the connectivity between the front-end application and our database of the incidence of police use of force (UoF). For one thing, the tagging system they implemented to categorize sentiments of social content pertaining to UoF still needs to be bucketed into the seven categories laid out by the National Institute of Justice’s Use of Force Continuum. This is a *necessary* step in the implementation of a stacked bar graph that displays trends in the different approaches to UoF by American police.

There are some other possible additions to the current Use of Force application that rely entirely on effort from future front-end web developers. One avenue for innovation would be building out more visualizations for the data accrued. For example, adding placards or modals to the map for each incident, or building a new page with a pie chart comparing different locations or other demographic data. 

Another possible approach would be to increase the functionality of the app by making sharing the data or custom visualizations easier for our users. Following the associated wireframe above, you can facilitate sharing custom infographics on various social platforms, like Facebook, Twitter, or Instagram. This would require custom routes for each unique ‘view’ of the data, and implementing sharing features from these platforms associated APIs. Alternatively, you could make the information for each view downloadable into a pdf or png format, or using a custom link, that users can then post. This would make the information far more transmissible and increase the reach of this project.
<br>

For more information on the nature of the use of force by police in the United States, visit [Human Rights First](https://www.humanrightsfirst.org/). If you’d like to know more about the Use of Force Continuum, please check out the NIJ’s resources [here](https://nij.ojp.gov/topics/articles/use-force-continuum).
<br>
## Support
If you have any questions regarding the status of our front end repository or its features, don’t hesitate to reach out to:
<br>
 Alex Goncalves (git: @schroeder-g | [email](mailto:schroedergoncalves@gmail.com)) or Kory Hacker (git: @Tusk617 | [email](mailto:kory.hacker@gmail.com) or 
Brandon Neil (git: @bneil7 | [email](mailto:bgn4@nau.edu)