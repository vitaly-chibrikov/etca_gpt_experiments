//************************************************************************************
// Returns a text with request of CV for an astronaut with 4 skills. 
// Two in description of current job and 2 in previous.   
//************************************************************************************
function getCVRequestText(stats) {
    var requestText = 'I am going to write a sci-fi story. In the 22nd century. People have colonized Moon, Mars, and the asteroid belt.'
    + ' There are several space stations around Earth, Mars, Venus and in space between planets. Several hundred thousand people live and work there.'
    + ' For my story please write a CV of an astronaut with more than ' + stats.astExpYears + ' years of work ' + stats.astWorkPlaces + '.'
    + " This is not a template CV. The CV must look realistic."
    + " This CV is created in 2125."
    + ' Create a name for the astronaut. It should be an uncommon ' + stats.astGender + ' ' + stats.astOrigin + ' name.'
    + ' This astronaut wants to participate in the new space project of the ExtraTerrestrial Colonies Agency (ETCA).'
    + " Emphasize that the astronaut in his current job shows exceptional: " + stats.astSkills[0] + " and " + stats.astSkills[1] + "."
    + " Use " + stats.astSkills[0] + " to generate the name of current job position. But not use words '" + stats.astSkills[0] + "' directly."
    + " Emphasize that the astronaut in his previous job used: " + stats.astSkills[2] + " and " + stats.astSkills[3] + "."
    + " Use " + stats.astSkills[2] + " to generate the name of previous job position. But not use words '" + stats.astSkills[2] + "' directly."
    + " Before the description of experience add a paragraph with a declaration of intent. Describe why this astronaut wants to participate in the project."
    + " As a phone number, use last twelve digits of the current time in Unix Epoch and add sign + at the begining."
    + " For an email use xmail.orb domain."
    + " Markup the document as an HTML page.";
    return requestText;
};

function getStatsRnd() {
    const genders = ["male", "female"];
    const origins = ["European", "Northern American", "Southern American", "Northern African", "Southern African", "Asian", "Middle Eastern", "Oceanian"];
    const expYears = [5, 10, 15];
    const workPlaces = ["in open space, asteroids, the Moon and Mars orbits", "on space stations and floating habitats of Venus", "in the asteroid belt and orbital stations", "in asteroid habitats"];
    var skills = Object.keys(skillsMap);

    shuffleArray(skills);

    const stats = {
        astGender: genders[getRndInteger(0, genders.length)],
        astOrigin: origins[getRndInteger(0, origins.length)],
        astExpYears: expYears[getRndInteger(0, expYears.length)],
        astWorkPlaces: workPlaces[getRndInteger(0, workPlaces.length)],
        astSkills: [skills[0], skills[1], skills[2], skills[3]]
    };
    return stats;
};


