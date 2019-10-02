// subquestions for q1
const subquestionsQ1 = [
    // for laugh
    {
        emotion: "laugh",
        question1a: "I want to laugh at...",
        answers: {
            a: "Dirty Jokes",
            b: "Wholesome Jokes",
            c: "Something So Bad, It's Good",
            d: "Anything"
        }
    },

    // for cry
    {
        emotion: "cry",
        question1b: "I want to cry because I...",
        answers: {
            a: "... had a bad day",
            b: "...got dumped",
            c: "...just need a good cry",
            d: "Leave me alone!"
        }
    },

    // for learn
    {
        emotion: "learn",
        question1c: "I want to learn...",
        answers: {
            a: "...something new",
            b: "...about a true story",
            c: "...a new way of thinking",
            d: "...some dinner party talking points"
        }
    },

    // for sentiment
    {
        emotion: "sentiment",
        question1d: "I want to be moved...",
        answers: {
            a: "...to action",
            b: "...to tears",
            c: "...by knowledge",
            d: "...by petty shit"
        }
    },

    // for action
    {
        emotion: "action",
        question1e: "I want to watch someone",
        answers: {
            a: "FIGHT!!!",
            b: "BLOW SHIT UP!!!",
            c: "TAKE ON THE MAN, MAN!!!",
            d: "GET REVENGE!!!"
        }
    },

    // for sleep 
    {
        emotion: "sleep",
        question1f: "I want to have...",
        answers: {
            a: "...weird dreams",
            b: "...sweet dreams",
            c: "...nightmares",
            d: "...a far out trip!"
        },

    // for horror
    {
        emotion: "horror",
        question1g: "I want to be scared by...",
        answers: {
            a: "Ghosts",
            b: "Zombies, Vampires, Monsters, oh my!",
            c: "Creeps IRL",
            d: "any phobia"
        }
    }
];

$("#dynamic").hide();

var questionMood = mood1;

$("#dynamic").show(function () {
    for (i = 0; i < subquestionsQ1.length; i++) {
        if (subquestionsQ1[i].emotion = questionMood) {
            $("#dynamic")
        }
    }
});