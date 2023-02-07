// keep track of data from feedback forms
const feeling = (state = 0, action) => {
    if (action.type === 'SET_FEELING') {
        return action.payload;
    } 
    return state;
}

const understanding = (state = 0, action) => {
    if (action.type === 'SET_UNDERSTANDING') {
        return action.payload;
    } 
    return state;
}

const support = (state = 0, action) => {
    if (action.type === 'SET_SUPPORT') {
        return action.payload;
    } 
    return state;
}

const comments = (state = '', action) => {
    if (action.type === 'SET_COMMENTS') {
        return action.payload;
    } 
    return state;
}

//keep track of if a page has been "submitted"
const feelingCompleted = (state = false, action) => {
    if (action.type === 'SET_FEELING_COMPLETED') {
        return action.payload;
    }
    return state;
}

const understandingCompleted = (state = false, action) => {
    if (action.type === 'SET_UNDERSTANDING_COMPLETED') {
        return action.payload;
    }
    return state;
}

const supportCompleted = (state = false, action) => {
    if (action.type === 'SET_SUPPORT_COMPLETED') {
        return action.payload;
    }
    return state;
}

const commentsCompleted = (state = false, action) => {
    if (action.type === 'SET_COMMENTS_COMPLETED') {
        return action.payload;
    }
    return state;
}

//SET feedbackList with GET data
const feedbackList = (state = [], action) => {
    if (action.type === 'SET_FEEDBACK_LIST') {
        return action.payload;
    }
    return state;
};

export {feeling, understanding, support, comments, feelingCompleted, understandingCompleted, supportCompleted, commentsCompleted, feedbackList};