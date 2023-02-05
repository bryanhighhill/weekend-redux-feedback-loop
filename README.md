# Project Name
WEEKEND-REDUX-FEEDBACK-LOOP

## Description
The main objective was to create a feedback app that allows users to rate their current status in the following categories:
    - how they are feeling (on scale of 0 - 5)
    - what their current level of understanding the material is (on scale of 0 - 5)
    - how supported they feel (on scale of 0 - 5)
Each category is on its own page, then once the feedback has been provided, a button click brings them to the next form.

I also needed to include a place where the user can provide feedback in the form of text.

Upon completion of the forms, the user is brought to a page where they can review the data that they provided, then submit it.

To accomplish this I created 6 components. 4 of the components each represent one of the feedback categories, a 5th component contains the page to review the feedback provided, and the 6th component confirms that the form was submitted and gives the user an option to provide more feedback by returning to the start of the app.

To start, I created a reduxStore so that I could pass and collect data from the forms. This is located in index.js.

Then I created route paths so that I could define navigation between each of the forms. These route paths are located in app.jsx.

Feeling.jsx is the first form component and is set to display on the "home page". 

## Basic structure of form components
The components for Feeling, Support, and Understanding are all pretty similar because they are all collecting the same type of data and storing it in the same manner.
For the basic structure of these components I created variables to set and get the form data (ranking of 0 - 5). Each component is returning a form with a <select> component. The onChange inside <select> is what is setting the variable.

In order to enable the Next button, the user must select a 0 - 5 value. Once they do, the Next button becomes clickable. This is also happening in the onChange function by setting the disabled value of the button to false onChange.

On buttonSubmit, I created a function that is dispatch a payload of the getter variable to the reduxStore, then utilizing useHistory() in order to proceed to the next form.

The 4th component is Comments. Here is where the user can enter comments or feedback as text. The basic structure is the same as outlined above except instead of the <select> component, I utilized <input> so that there was a text field instead of a drop-down.
Instead of proceeding to another form on handleSubmit, the user is then brought to a page that contains all the data the provided (Review.jsx).

## Review Component
The review component utilizes useSelector in order to access all the data that was dispatched to store. I created variables for all of the store data.
Using these variables I displayed the feedback data on the DOM, as well as created an object that contains all the feedback data.

onClick of the Submit button, the newFeedback object is dispatched as payload back to the store, where it is grabbed and put into an axios request. It gets routed to the server side feedback.router.js where a SQL request is made and the data gets posted to the database.

After the POST request is made, the user is brought to a page that thanks them for their feedback and includes a button that allows them to return to the homepage and provide more feedback.

## Stretch Goal #1 - Allow user to update/edit their feedback
To accomplish this goal, I created a new component called "StatusBar" which is displayed at the top of each page.
It tracks the progress of where the user is at and after a page has been "completed" it dispatches that status to store.
Navigation becomes clickable once the user reaches the review page and all forms have been completed. They can then click on the section they want to go back and update, using the status bar.
If a user goes back to edit feedback on a specific page, the button text becomes "update" instead of "next", and when it is clicked, it goes back to the review page instead of the next form page.

# Duration:

    [BASE GOALS]
    (approx. 6 hours for base goals)
        - started assignment: 
            10:25am February 3, 2023
        - finished base goals:
            4:29pm February 3, 2023 

    [STRETCH GOALS]
    (approx. 5 hours for stretch 1)
    - started stretch goal 1:
        10:30am February 4, 2023
    - completed first stretch goal to update scores:
        3:30pm February 4, 2023
    
    (approx. 2 1/2 hrs for stretch 2)
    - started stretch goal 2:
        8:45am February 5, 2023
    - stopped (plenty more I could do with styling!)
        11:!5am February 5, 2023

# Prerequisites
    - axios
    - express
    - pg
    - react
    - react-redux
    - react-router-dom


# Installation
    npm install
    npm install react-redux

    npm run server

    in new terminal tab:
    npm run client

# Database
The project is built on Postgres, so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries.

- Create your database and title it `prime_feedback`
- Use the provided `data.sql` file set up your table

The query in the `data.sql` file is set up to create the necessary table and populate the needed data to allow the application to run correctly. 


## Built With
React, React-Redux, React-Router-Dom, SQL, axios, javaScript, html, css, nodejs, express

License
MIT

Note, include this only if you have a license file. GitHub will generate one for you if you want!

Acknowledgement
Thanks to Prime Digital Academy who equipped and helped me to make this application a reality. (Thank your people)

Support
If you have suggestions or issues, please email me at youremail@whatever.com