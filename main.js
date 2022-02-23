// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘
//IS ADMIN
const isAdmin = function(userObj) {
    return userObj.userRole === 'ADMIN' ? true : false
}
// GET EMAIL
const getEmail = function(nameObj) {
    //change names to lowercase
    nameObj.firstName = nameObj.firstName.toLowerCase()
    nameObj.lastName = nameObj.lastName.toLowerCase()
    return `${nameObj.firstName}.${nameObj.lastName}@codeimmersives.com`
}
//GET PLAYLIST LENGTH
const getPlaylistLength = function(playList) {
    return playList.songs.length
}
// GET HARDEST HOMEWORK
const getHardestHomework = function(homeworks) {
    //if no homeworks exist return empty string
    if(homeworks.length === 0) {
        return ""
    }
    //set var to compare scores
    let avgScore = Infinity
    //set var to name hardest hw
    let hardestHw = ""
    //iterate homeworks
    for(let i = 0 ;i < homeworks.length ; i++) {
        if(homeworks[i].averageScore < avgScore) {
           avgScore= homeworks[i].averageScore 
           hardestHw = homeworks[i].name
        }
    }
    return hardestHw
}
// CREATE PHONEBOOK
const createPhonebook = function(names , numbers) {
    //if names & numbers are empty 
    if(names.length === 0 && numbers.length === 0) {
        //return empty phonebook
        return {};
    }
        
    //set empt phonebook to add info
    let phonebook = {};
    //iterate both arrays
    for(let i = 0 ; i < names.length ; i++) {
        //iterate through both arrays
        let firstName = names[i]
        let nums = numbers[i] ;
        //assign/add pairs to phonebook
        phonebook[firstName] = nums;
    }
        
    //return phonebook
    return phonebook
}
// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};