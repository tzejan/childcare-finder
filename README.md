[![Build Status](https://travis-ci.org/tzejan/childcare-finder.svg?branch=master)](https://travis-ci.org/tzejan/childcare-finder)

This project is a demonstration of a mapping application with data from [Childcare link](https://childcarelink.gov.sg/ccls/home/CCLS_Home.jsp)

## Sections

- [Obtaining data](#obtaining-data)
- [Map provider](#map-provider)
- [Search](#search)
- [Code Organisation](#code-organisation)
- [Issues](#issues)
- [Possible improvements](#possible-improvements)
- [Github and Heroku URL](#github-and-heroku-url) 

## Obtaining data
- Data is downloaded from childcare link for full day childcare for a 4 year old child.
- The data format claimed to be in xls, but is actually html tables.
- Data is parsed with regex, and is written to a JSON format
- Using [OneMap REST APIs](https://docs.onemap.sg/#onemap-rest-apis), I lookup the address to obtain the longitude and latitude information.
  - however, lookups that includes the unit number or building number usually does not yield results, so we have to format our lookup using the block number,street name and postal code.
- The OneMap API will block requests if there are more than 250 requests per minute, so I will either have to trottle the requests, or to populate the data selectively when there are no existing location data for the childcare centre.

## Map provider
The map provider is [Mapbox](https://www.mapbox.com/about/maps/) using the [Reach-map-gl](https://uber.github.io/react-map-gl/#/) library

## Search
Search is implemented by filtering the childcare centre name and the address with regular expressions. If there is a match, then the centre will be included in the results.

## Code organisation
The childcare finder app is divided into 2 parts the Omnibar and the Map. The main childcare finder app holds the entire state of the applications and passes data via props with the Omnibar and the Map.
### Omnibar
The Omnibar uses components from [Material UI](https://material-ui-next.com/) which implements Google's Material Design.

The Omnibar contains a search bar and searches are performed whenever a key is pressed. There was an initial plan to limit searches to 3 characters or more but it was found to be quite misleading.

The Omnibar also shows the number of results returned by the current search, or if there is no search, it shows the total number of centres it has on file.

The search results is presented in a list which allows the user to click. Once clicked, the map will zoom in on the selected childcare centre with some highlighting

### Map
The markers on the map can be clicked on to show more detailed information about the childcare centre. Clicking on the popup would close the popup.

I have implemented the fly to location interpolation whenever a childcare centre is clicked in the results listing. This is implemented by observing if there is a change in the value of the props passed to the map, indicating that we need to trigger a fly to location.

The selected childcare centre marker will also be highlighted on the map for easy identification.

## Issues
- There are some performance issues with the map rendering a lot of markers on the map. (>100). Initially, each marker's style was calculated indivdually, which slowed down the rendering speed. I improved the rendering speed by moving the style to a class. However, the problem still persists if there are a lot of markers on the map. Perhaps I might need to find another React map component.

- Due to the issue with the rendering of large number of markers, initial searches with 1-2 character will yield a large number of results. It would be possible to delay the search until there is a period of inactivity. (e.g. 0.5s) so that the application can return more useful results without the initial delay.



## Future improvements
- Search for childcare with a fee range
- Automatically update data from Childcare Link 
- Obtaining more granular data

## Github and Heroku URL
Github URL [https://github.com/tzejan/childcare-finder](https://github.com/tzejan/childcare-finder)  

Heroku App [https://childcare-finder.herokuapp.com/](https://childcare-finder.herokuapp.com/)

