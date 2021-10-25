### create homepage, map page, and quest page

**Homepage**
* HTML elements
* a form including:
* input text field for character name
* radio buttons for choosing character race
* submit button

**events**
* form submit 
* generate user object 
    * name: 
    * class:
    * hp:
    * gold:
    * completed: { quest1: true, quest2: false, quest3: false};

**On Button CLick**
* store user object in local storage 
* redirect to map page

## create map page
HTML elements:
* links
  *using query parameters URL = quest?key=value
* image of map
* display character info

**events:**
* links should only be clickable if the quest has not been completed
* css

## on page load:
*grab data from localStorage and display it

## Quest detail page
HTML elements
* title
* image
* form with multiple choice radio buttons 
* character object display somewhere (name, hp, gold)
* quest object
    * id:
    * title:
    * img:
    * description:
    * map: coordinates to position the link on top of the map image
    * choices: [{ multipleChoice1}, {multipleChoice2}, {id: , description: , result: , hp: , gold: } }] 
        * description: what the option displays before you select it
        * results: what happens if you select it

## on page load:
* grab data from localStorage and display it 
* re set updated data into local storage


**events**
 on page load
* replace page content 
* form submit - update user object, 
* display results of user choice
* redirect to map page
* if quests completed, redirect to results, 
* if else redirect to map
