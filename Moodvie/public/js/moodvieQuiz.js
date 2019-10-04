// subquestions for q1
const subquestion = [
    // for laugh
    {
        emotion: "laugh_",
        question: "I want to laugh at...",
        answers: {
            a: "Dirty Jokes",
            b: "Wholesome Jokes",
            c: "Something So Bad, It's Good",
            d: "Anything"
        }
    },

    // for cry
    {
        emotion: "cry_",
        question: "I want to cry because I...",
        answers: {
            a: "had a bad day",
            b: "got dumped",
            c: "just need a good cry",
            d: "Leave me alone!"
        }
    },

    // for learn
    {
        emotion: "think_",
        question: "I want to learn...",
        answers: {
            a: "something new",
            b: "about a true story",
            c: "a new way of thinking",
            d: "dinner party talking points"
        }
    },

    // for sentimental
    {
        emotion: "emotion_",
        question: "I want to be moved...",
        answers: {
            a: "to action",
            b: "to tears",
            c: "by knowledge",
            d: "by petty shit"
        }
    },

    // for action
    {
        emotion: "amp_",
        question: "I want to watch someone",
        answers: {
            a: "FIGHT!!!",
            b: "BLOW SHIT UP!!!",
            c: "TAKE ON THE MAN, MAN!!!",
            d: "GET REVENGE!!!"
        }
    },

    // for relaxing 
    {
        emotion: "sleep_",
        question: "I want to have...",
        answers: {
            a: "weird dreams",
            b: "sweet dreams",
            c: "nightmares",
            d: "a far out trip!"
        },

    // for horror
    {
        emotion: "scare_",
        question: "I want to be scared by...",
        answers: {
            a: "Ghosts",
            b: "Zombies, Vampires, Monsters, oh my!",
            c: "Creeps IRL",
            d: "any phobia"
        }
    }
];

$(".goAway").hide();
$(".goAway").hide();

var questionMood = $("#FormControlSelect1").val();

$("#dynamic").show(function () {
    for (i=0; i<subquestion.length; i++) {
        if (subquestion[i].emotion === questionMood) {
            console.log(subquestion[i]);
            
        }
    }
});
