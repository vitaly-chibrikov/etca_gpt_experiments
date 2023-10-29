missions = [
    { place: "Cafeteria and Food Preparation Area", who: "Administration", task: "a routine inspection", skillsNeeded: ["Resource Utilization Knowledges", "Biology and Nutritional Knowledge"] },
    { place: "Cafeteria and Food Preparation Area", who: "Team", task: "a regular maintenance", skillsNeeded: ["Engineering Skills", "Chemistry Knowledge"] },
    { place: "Cafeteria and Food Preparation Area", who: "Committee", task: "a degustation", skillsNeeded: ["Biology and Nutritional Knowledge", "Physical Fitness Training"] },
    { place: "Cafeteria and Food Preparation Area", who: "Administration", task: "a safety training", skillsNeeded: ["Healthcare Skills", "Communication Skills"] },
    { place: "Cafeteria and Food Preparation Area", who: "Team", task: "an improvement of the supply chain", skillsNeeded: ["Navigation and Orientation Skills", "Problem-Solving Skills"] },
    { place: "Lunar Port", who: "Moonlight Cargo", task: "repairing of orbital transport's navigation", skillsNeeded: ["Navigation and Orientation Skills", "Engineering Skills"] },
    { place: "Helium-3 mining site", who: "Hello-3 Industry", task: "new mine deposit value calculation", skillsNeeded: ["Scientific Knowledge", "Astrogeology Knowledge"] },
    { place: "Workshops for Rover Maintenance", who: "Team", task: "reduction of energy consumption", skillsNeeded: ["Chemistry Knowledge", "Resource Utilization Knowledge"] },
    { place: "Lunar Farm", who: "Nutrition committee", task: "a development of high-protein hybrids", skillsNeeded: ["Scientific Knowledge", "Biology and Nutritional Knowledge"] },
    { place: "Recreation and Social Center", who: "Half Moon Pet Shop", task: "an improvements for pet animals", skillsNeeded: ["Construction and Maintenance Knowledge", "Engineering Skills"] },
    { place: "Greenhouse", who: "Blossom Enthusiasts Society", task: "a holding of a flower festival", skillsNeeded: ["Communication Skills", "Teamwork Skills"] },
    { place: "Manufacturing Facility", who: "VC Group", task: "a process of creation of dyes from lunar regolith", skillsNeeded: ["Chemistry Knowledge", "Astrogeology Knowledge"] },
    { place: "Habitat Module", who: "Inhabitants' committee", task: "a regulation of artificial day and nigth cycle ", skillsNeeded: ["Problem-Solving Skills", "Healthcare Skills"] },
    { place: "Research Lab", who: "Department of Cosmogony", task: "finding of ancient asteroids in Moon craters", skillsNeeded: ["Navigation and Orientation Skills", "Astrogeology Knowledge"] },
    { place: "Construction site", who: "Nuh Beton", task: "tests of self-healing concrete from Moon dust", skillsNeeded: ["Construction and Maintenance Knowledge", "Chemistry Knowledge"] },
    { place: "Solar panel", who: "LUNA RING", task: "tuning of software of cleaning robots", skillsNeeded: ["Problem-Solving Skills", "Engineering Skills"] },
    { place: "Energy storage facility", who: "Facilities Inspection", task: "improvements in anti-asteroid protection", skillsNeeded: ["Construction and Maintenance Knowledge", "Engineering Skills"] },
    { place: "Thermonuclear plant", who: "Administration", task: "a safety training", skillsNeeded: ["Emergency Response Skills", "Physical Fitness Training"] },
    { place: "Thermonuclear plant", who: "Engineering team", task: "research of super-conductors from local materials", skillsNeeded: ["Scientific Knowledge", "Chemistry Knowledge"] },
    { place: "Emergency Shelter", who: "Administration", task: "Moon surface survival competitions", skillsNeeded: ["Navigation and Orientation Skills", "Environmental Training"] }

];


function getPossibleMissionsRequestText(){
    "I need to write a sci-fi story about a colony on Moon. The colony is big. 10000 people lives there." +
    'An astronaut with exceptional skills in "Healthcare Skills" and "Operational Skills" is going to work in "Waste Recycling Center". What kind of tasks he is ready to solve?';
}

function getMissionParametersDesigned() {
    return missions[0];//missions[missions.length - 1];
}

//************************************************************************************
// Returns a text with a request for a mission from one of Moon base facilities. 
// The mission requires 2 skills to be successfully accomplished.
//************************************************************************************
function getMissionDescriptionText(parameters) {
    var missionText = 'I am going to write a sci-fi story. People have colonized Moon and built a colony there. More than ten thousand people live and work there.'
        + ' On the Moon base in a ' + parameters.place + ' ' + parameters.task + ' must be done.'
        + ' To do it perfectly, one needs good ' + parameters.skillsNeeded[0] + ' and ' + parameters.skillsNeeded[1] + '.'
        + ' The task-giver, ' + parameters.who + ', estimates that the goal can be reached in several days.'
        + ' Please, write a description why it is important to be skilled in ' + parameters.skillsNeeded[0] + ' and ' + parameters.skillsNeeded[1] + ' to finish the task successfully.'
        + ' Start with words: ' + parameters.who + ' of ' + parameters.place + ' is looking for help and requests a skilled astronaut to help them with ' + parameters.task + '.'
        + ' Add a title to the text. The title must be less than 5 words.'
        + ' Write a paragraph explaining why the task has appeared and why it is important to do it.'
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
        + ' The task-giver, ' + parameters.who + ', estimates that the goal can be reached in several days.'
        + ' To do it perfectly, one needs good ' + parameters.skillsNeeded[0] + ' and ' + parameters.skillsNeeded[1] + '.'
        + ' An astronaut named Constantine Constantinopolus with mediocre ' + parameters.skillsNeeded[0] + ' and ' + parameters.skillsNeeded[1] + ' is going to do this activity.'
        + ' Create a short story about this activity. And how he done it.'
        + ' Add a title to the text. The title must be less than 5 words.'
        + ' Start with the sentence: Eager to help his colony, Constantine began working on the task.'
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
        + ' The task-giver, ' + parameters.who + ', estimates that the goal can be reached in several days.'
        + ' To do it perfectly, one needs good ' + parameters.skillsNeeded[0] + ' and ' + parameters.skillsNeeded[1] + '.'
        + ' An astronaut named Constantine Constantinopolus with exceptional skills in ' + parameters.skillsNeeded[0] + ' but with mediocre ' + parameters.skillsNeeded[1] + ' is going to do this activity.'
        + ' Create a short story about this activity. And how he done it.'
        + ' Add a title to the text. The title must be less than 5 words.'
        + ' Start with the sentence: Eager to help his colony, Constantine began working on the task.'
        + ' Mention, that an astronaut used his best skill to solve the task, but not completely, couse of lask of another important skill. The task is done, but not perfectly.'
        + " Markup the document as an HTML page.";


    return missionText;
};

//************************************************************************************
// Returns a text for the request of a mission debriefing.
// The astronaut assigned to the mission have one skill for the mission.
//************************************************************************************
function getMissionSecondMatchText(parameters) {
    var missionText = 'I am going to write a sci-fi story. People have colonized Moon and built a colony there. More than ten thousand people live and work there.'
        + ' On the Moon base in a ' + parameters.place + ' ' + parameters.task + ' must be done.'
        + ' The task-giver, ' + parameters.who + ', estimates that the goal can be reached in several days.'
        + ' To do it perfectly, one needs good ' + parameters.skillsNeeded[0] + ' and ' + parameters.skillsNeeded[1] + '.'
        + ' An astronaut named Constantine Constantinopolus with exceptional skills in ' + parameters.skillsNeeded[1] + ' but with mediocre ' + parameters.skillsNeeded[0] + ' is going to do this activity.'
        + ' Create a short story about this activity. And how he done it.'
        + ' Add a title to the text. The title must be less than 5 words.'
        + ' Start with the sentence: Eager to help his colony, Constantine began working on the task.'
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
        + ' The task-giver, ' + parameters.who + ', estimates that the goal can be reached in several days.'
        + ' To do it perfectly, one needs good ' + parameters.skillsNeeded[0] + ' and ' + parameters.skillsNeeded[1] + '.'
        + ' An astronaut named Constantine Constantinopolus with exceptional skills in ' + parameters.skillsNeeded[0] + ' and ' + parameters.skillsNeeded[1] + ' is going to do this activity.'
        + ' Create a short story about this activity. And how he done it.'
        + ' An astronaut should use his best skills for it.'
        + ' Add a title to the text. The title must be less than 5 words.'
        + ' Start with the sentence: Eager to help his colony, Constantine began working on the task.'
        + " Markup the document as an HTML page.";


    return missionText;
};