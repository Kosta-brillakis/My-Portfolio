import pokemon from './images/pokemon.jpg'
import quoteApp from './images/quoteApp.jpg'

export const projects = [
    {
        title: "Pokemon Pet Checker API",
        description: "Look up any pokemon and see if it would make a good housepet! Pulls in data from an API, tests that data against parameters, and includes some simple, elegant styling with a css built rotating card.",
        image: `${pokemon}`,
        url: 'https://kostas-pokemon-pet-checker.netlify.app'
    },
    {
        title: "Quote Generator",
        description: "Powerful, beautiful quote generator app with Twitter, Speech, and Copy/Paste funtionality.",
        image: `${quoteApp}`,
        url: 'https://kostas-quotable-quote-react-app.netlify.app'
    }
]