import pokemon from './images/pokemon.jpg'
import quoteApp from './images/quoteApp.jpg'
import reactTodo from './images/react-todolist.png'

export const projects = [
    {
        title: "React Todo List",
        description: "Small yet tricky todo list built with react and including full local storage functionality",
        image: `${reactTodo}`,
        url: 'https://kostas-react-todolist.netlify.app'
    },

    {
        title: "React Quote Generator",
        description: "Powerful, beautiful quote generator app with Twitter, Speech, and Copy/Paste funtionality.",
        image: `${quoteApp}`,
        url: 'https://kostas-quotable-quote-react-app.netlify.app'
    },
    {
        title: "Pokemon Pet Checker API",
        description: "Look up any pokemon and see if it would make a good housepet! Pulls in data from an API, tests that data against parameters, and includes some simple, elegant styling with a css built rotating card.",
        image: `${pokemon}`,
        url: 'https://kostas-pokemon-pet-checker.netlify.app'
    }
]