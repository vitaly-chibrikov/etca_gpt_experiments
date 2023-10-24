missions = [
    { place: "Cafeteria and Food Preparation Area", who: "Administration", task: "a routine inspection", skillsNeeded: ["Resource Utilization Knowledges", "Biology and Nutritional Knowledge"] },
    { place: "Cafeteria and Food Preparation Area", who: "Team", task: "a regular maintenance", skillsNeeded: ["Engineering Skills", "Chemistry Knowledge"] },
    { place: "Cafeteria and Food Preparation Area", who: "Committee", task: "a degustation", skillsNeeded: ["Biology and Nutritional Knowledge", "Physical Fitness Training"] },
    { place: "Cafeteria and Food Preparation Area", who: "Administration", task: "a safety training", skillsNeeded: ["Healthcare Skills", "Communication Skills"] },
    { place: "Cafeteria and Food Preparation Area", who: "Team", task: "an improvement of the supply chain", skillsNeeded: ["Navigation and Orientation Skills", "Problem-Solving Skills"] }
];

function getMissionParameters() {
    const parameters = {
        place: "Cafeteria and Food Preparation Area",
        task: "a routine inspection",
        skillsNeeded: ["Resource Utilization Knowledges", "Biology and Nutritional Knowledge"]
    };
    return parameters;
};

function getMissionParametersDesigned(){
    return missions[4];
}

function getMissionParametersRnd() {
    var skills = Object.keys(skillsMap);
    shuffleArray(skills);
    var places = Object.keys(placesDescMap);

    const parameters = {
        place: places[getRndInteger(0, places.length)],
        task: "a routine inspection",
        skillsNeeded: [skills[0], skills[2]]
    };
    return parameters;
}

//************************************************************************************
// Returns a text with a request for a mission from one of Moon base facilities. 
// The mission requires 2 skills to be successfully accomplished.
//************************************************************************************
function getMissionDescriptionText(parameters) {
    var missionText = 'I am going to write a sci-fi story. People have colonized Moon and built a colony there. More than ten thousand people live and work there.'
        + ' On the Moon base in a ' + parameters.place + ' ' + parameters.task + ' must be done.'
        + ' To do it perfectly, one needs good ' + parameters.skillsNeeded[0] + ' and ' + parameters.skillsNeeded[1] + '.'
        + ' Please, write a description why it is important to be skilled in ' + parameters.skillsNeeded[0] + ' and ' + parameters.skillsNeeded[1] + ' to finish the task successfully.'
        + ' Start with words: '+ parameters.who +' of ' + parameters.place + ' is looking for help and requests a skilled astronaut to help them with ' + parameters.task + '.'
        + ' Add a title to the text. The title must be less than 5 words.'
        + " Markup the document as an HTML page.";
    ;

    return missionText;
};

//************************************************************************************
// Returns a text for the request of a mission debriefing.
// The astronaut assigned to the mission does not have the skills for the mission.
//************************************************************************************
function getMissionMismatchText(parameters) {
    var missionText = 'I am going to write a sci-fi story. People have colonized Moon and built a colony there. More than ten thousand people live and work there.'
        + ' On the Moon base in a ' + parameters.place + ' ' + parameters.task + ' must be done.'
        + ' To do it perfectly, one needs good ' + parameters.skillsNeeded[0] + ' and ' + parameters.skillsNeeded[1] + '.'
        + ' An astronaut named Constantine Constantinopolus with mediocre ' + parameters.skillsNeeded[0] + ' and ' + parameters.skillsNeeded[1] + ' is going to do this activity.'
        + ' Create a short story about this activity. And how he done it.'
        + ' Add a title to the text. The title must be less than 5 words.'
        + ' Start with the sentence: Eager to help his colony, Constantine started to work on the task.'
        + ' Mention that an astronaut tried his best to solve the task, but because of a lack of important skills, it was too difficult for him.'
        + ' He spent more time than was planned. He is not satisfied with the results. The task is done, but it was a bad experience that helped the colony a little.'
        + " Markup the document as an HTML page.";
    ;

    return missionText;
};

//************************************************************************************
// Returns a text for the request of a mission debriefing.
// The astronaut assigned to the mission have one skill for the mission.
//************************************************************************************
function getMissionFirstMatchText(parameters) {
    var missionText = 'I am going to write a sci-fi story. People have colonized Moon and built a colony there. More than ten thousand people live and work there.'
        + ' On the Moon base in a ' + parameters.place + ' ' + parameters.task + ' must be done.'
        + ' To do it perfectly, one needs good ' + parameters.skillsNeeded[0] + ' and ' + parameters.skillsNeeded[1] + '.'
        + ' An astronaut named Constantine Constantinopolus with exceptional skills in ' + parameters.skillsNeeded[0] + ' but with mediocre ' + parameters.skillsNeeded[1] + ' is going to do this activity.'
        + ' Create a short story about this activity. And how he done it.'
        + ' Add a title to the text. The title must be less than 5 words.'
        + ' Start with the sentence: Eager to help his colony, Constantine started to work on the task.'
        + ' Mention, that an astronaut used his best skill to solve the task, but not completely, couse of lask of another important skill. The task is done, but not perfectly.'
        + " Markup the document as an HTML page.";


    return missionText;
};

//************************************************************************************
// Returns a text for the request of a mission debriefing.
// The astronaut assigned to the mission have two skills for the mission.
//************************************************************************************
function getMissionFullMatchText(parameters) {
    var missionText = 'I am going to write a sci-fi story. People have colonized Moon and built a colony there. More than ten thousand people live and work there.'
        + ' On the Moon base in a ' + parameters.place + ' ' + parameters.task + ' must be done.'
        + ' To do it perfectly, one needs good ' + parameters.skillsNeeded[0] + ' and ' + parameters.skillsNeeded[1] + '.'
        + ' An astronaut named Constantine Constantinopolus with exceptional skills in ' + parameters.skillsNeeded[0] + ' and ' + parameters.skillsNeeded[1] + ' is going to do this activity.'
        + ' Create a short story about this activity. And how he done it.'
        + ' An astronaut should use his best skills for it.'
        + ' Add a title to the text. The title must be less than 5 words.'
        + ' Start with the sentence: Eager to help his colony, Constantine started to work on the task.'
        + " Markup the document as an HTML page.";


    return missionText;
};