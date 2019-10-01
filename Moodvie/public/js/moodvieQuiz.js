// questions
const myQuestions = [
    // initial emotion
    {
        question1: "I want a movie that will make me...",
        answers: {
            a: "Laugh",
            b: "Cry",
            c: "Think",
            d: "Sentimental",
            e: "Scared",
            f: "Pumped",
            g: "Sleepy"
        }
    },

    // conditional questions from answer to q1
    
    // for Laughs
    {
        question1a: "I want to laugh at...",
        answers: {
            a: "Dirty Jokes",
            b: "Wholesome Jokes",
            c: "Something So Bad, It's Good",
            d: "Anything"
        }
    },
    
    // for Tears
    {
        question1b: "I want to cry because I...",
        answers: {
            a: "... had a bad day",
            b: "...got dumped",
            c: "...just need a good cry",
            d: "Leave me alone!"
        }
    },

    // for the brain
    {
        question1c: "I want to learn...",
        answers: {
            a: "...something new",
            b: "...about a true story",
            c: "...a new way of thinking",
            d: "...some dinner party talking points"
        }
    },
    
    // for sentiments
    {
        question1d: "I want to be moved...",
        answers: {
            a: "...to action",
            b: "...to tears",
            c: "...by knowledge",
            d: "...by petty shit"
        }
    },
    
    // for adrenaline
    {
        question1e: "I want to watch someone",
        answers: {
            a: "FIGHT!!!",
            b: "BLOW SHIT UP!!!",
            c: "TAKE ON THE MAN, MAN!!!",
            d: "GET REVENGE!!!"
        }
    },
    
    // for trippy sh*t
    {
        question1f: "I want to have...",
        answers: {
            a: "...weird dreams",
            b: "...sweet dreams",
            c: "...nightmares",
            d: "...a far out trip. Take the wheel!"
        }
    },

    // for horror
    {
        question1g: "I want to be scared by...",
        answers: {
            a: "Ghosts",
            b: "Zombies, Vampires, Monsters, oh my!",
            c: "Creeps IRL",
            d: "any phobia"
        }
    },

    // type of audience (maybe tie in MPAA Rating?)
    {
        question2: "Who are you watching with?",
        answers: {
            a: "Myself",
            b: "My Significant Other",
            c: "My Family",
            d: "My Squad",
            e: "None of your business!"
        }
    },
];

// logic for quiz questions
// quiz will dynamically switch based on q1
// user only answers a total of 3 questions

function quiz(answerToQ1) {
    switch (answerToQ1git ) {
        case "laugh":
        genre = "laugh";
          console.log("laugh");
          laughFunc(genre);
          break;
        case 1:
          day = "cry";
          break;
        case 2:
           day = "think";
          break;
        case 3:
          day = "sentimental";
          break;
        case 4:
          day = "scared";
          break;
        case 5:
          day = "pumped";
          break;
        case 6:
          day = "sleepy";
      }
}
quiz(normalizedAnswer);
function laughFunc(answer2) {
    switch (answer2) {
        case: "myself"
        break;
    }
    return answer2
}