// scripts.js
const sentences = [
   "Do or do not. There is no try. - Yoda",
            "The Force will be with you, always. - Obi-Wan Kenobi",
            "May the Force be with you. - Multiple characters",
            "Help me, Obi-Wan Kenobi. You're my only hope. - Princess Leia",
            "I am your father. - Darth Vader",
            "Laugh it up, fuzzball! - Han Solo",
            "It's a trap! - Admiral Ackbar",
            "That's no moon. It's a space station. - Obi-Wan Kenobi",
            "I have a bad feeling about this. - Multiple characters",
            "Never tell me the odds! - Han Solo",
            "Do not underestimate the power of the dark side. - Darth Sidious",
            "Fear leads to anger. Anger leads to hate. Hate leads to suffering. - Yoda",
            "The greatest teacher, failure is. - Yoda",
            "I'm not afraid to die. I'm afraid to live in a world ruled by the Empire. - Princess Leia",
            "Size matters not. - Yoda",
            "Your focus determines your reality. - Qui-Gon Jinn",
            "The Force is strong with this one. - Obi-Wan Kenobi",
            "I find your lack of faith disturbing. - Darth Vader",
            "It's the ship that made the Kessel Run in less than twelve parsecs. - Han Solo",
            "This is the way. - Din Djarin (The Mandalorian)",
            "You were the chosen one! It was said that you would destroy the Sith, not join them! - Obi-Wan Kenobi",
            "I am altering the deal, pray I do not alter it further. - Darth Vader",
            "Let the past die. Kill it if you have to. It's the only way to truly be free. - Kylo Ren",
            "The Force doesn't belong to the Jedi, or the Sith. It belongs to the living. - Rey",
            "Everything you've heard about me is true. - Han Solo",
            "We must keep our faith in the Republic. There is good in the world, and we have not lost it yet. - Senator Bail Organa",
            "Judge me by my size, do you? - Yoda",
            "He is as clumsy as he is stupid. - C-3PO",
            "To die for one's people is a great sacrifice. - Padmé Amidala",
            "I'll never turn to the dark side. You have my word. - Anakin Skywalker",
            "The garbage will do! - C-3PO",
            "I've been waiting for you, Obi-Wan. The Jedi Council has failed you, as it failed your father. - Darth Vader",
            "The Sith killed each other, victims of their own greed. - Yoda",
            "Oh, my dear friend. You've only scratched the surface. - Obi-Wan Kenobi",
            "Pages turners, they were not. - Yoda",
            "There's always a bigger fish. - Qui-Gon Jinn",
            "You were my brother, Anakin. I loved you. - Obi-Wan Kenobi",
            "Travelling through hyperspace ain't like dusting crops, boy. - Han Solo",
            "But I was going into Tosche Station to pick up some power converters! - Luke Skywalker",
            "Now, witness the power of this fully operational battle station. - Grand Moff Tarkin",
            "I like firsts. Good or bad, they're always memorable. - Ahsoka Tano",
            "Come on, baby! Do the magic hand thing. - Greef Karga",
            "I am a Mandalorian. Weapons are part of my religion. - Din Djarin",
            "Be careful not to choke on your aspirations, director. - Darth Vader",
            "Congratulations. You are being rescued. - K-2SO",
            "Sorry lady. - Boba Fett",
            "Women always figure out the truth. - Shmi Skywalker",
            "In my experience, there's no such thing as luck. - Obi-Wan Kenobi",
            "Never underestimate a droid. - General Leia Organa",
            "You can't stop change any more than you can stop the suns from setting. - Shmi Skywalker",
            "I'm not a committee. - Princess Leia",
            "Insolence? We are pirates. - Captain Jack Sparrow (Sorry, wrong galaxy!)",
            "I have you now! - Darth Vader",
            "R2-D2, you know better than to trust a strange computer! - C-3PO",
            "I don't know where you get your delusion, laser brain. - Han Solo",
            "Strike me down, and I will become more powerful than you could possibly imagine. - Obi-Wan Kenobi",
            "Give yourself to the Dark Side. - Emperor Palpatine",
            "Awww! But I was going into Tosche Station to pick up some power converters! - Luke Skywalker",
            "So what I told you was true... from a certain point of view. - Obi-Wan Kenobi",
            "It's not impossible. I used to bullseye womp rats in my T-16 back home, they're not much bigger than two meters. - Luke Skywalker",
            "He is as clumsy as he is stupid! - C-3PO",
            "We have ... powerful friends. You're going to regret this. - Princess Leia",
            "I have a bad feeling about this. - Lando Calrissian",
            "That… is why you fail. - Yoda",
            "It's worse. - Obi-Wan Kenobi",
            "Well, you said you wanted to be around when I made a mistake. - Han Solo",
            "Now, witness the power of this fully operational battle station. - Grand Moff Tarkin",
            "… Scoundrel. I like that. - Han Solo",
            "That's no moon. - Obi-Wan Kenobi",
            "Hmm! Adventure. Hmmpf! Excitement. A Jedi craves not these things. - Yoda",
            "Ben! I can be a Jedi. Ben, tell him I'm ready! - Luke Skywalker",
            "You do have your moments. Not many, but you have them. - Han Solo",
            "I have a bad feeling about this. - Luke Skywalker",
            "Laugh it up, fuzzball! - Chewbacca",
            "IT'S A TRAP. - Admiral Ackbar",
            "I love you. - Princess Leia",
            "I know. - Han Solo",
            "Sorry about the mess. - Obi-Wan Kenobi",
            "Never tell me the odds! - Luke Skywalker",
            "I can feel the disturbance in the Force. - Obi-Wan Kenobi",
            "The Force is strong with you, young Skywalker. - Obi-Wan Kenobi",
            "You must learn to control your anger, young Skywalker. If you give into it, you will be destroyed. - Yoda",
            "The path to the Dark Side is quick and easy. - Darth Sidious"
];

function getRandomSentence() {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    return sentences[randomIndex];
}

function animateWordCloud() {
    const wordCloud = document.getElementById('word-cloud');
    const sentence = getRandomSentence();

    // Clear previous content
    wordCloud.innerHTML = '';

    // Create a new span element for the sentence
    const span = document.createElement('span');
    span.textContent = sentence;

    // Apply initial styles
    span.style.opacity = 0;
    span.style.position = 'absolute';
    span.style.fontSize = '24px';
    span.style.transition = 'opacity 1s ease-in-out, transform 1s ease-in-out';

    // Append the span to the word cloud
    wordCloud.appendChild(span);

    // Set a timeout to animate the opacity and transform properties
    setTimeout(() => {
        span.style.opacity = 1;
        span.style.transform = 'scale(1.5)';
    }, 100);

    // Remove the span after animation
    setTimeout(() => {
        wordCloud.removeChild(span);
    }, 2000);
}

// Event listener for the button
document.getElementById('new-sentence').addEventListener('click', animateWordCloud);

// Initial animation
animateWordCloud();
