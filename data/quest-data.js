const marines = {
    id: 'marines',
    title: 'A Group of Marines ',
    map:{
        top: '70%',
        left: '39%'
    },
    image: '../assets/marines.png',
    background:'../assets/marine-background.png',
    description: `
    You embark on your journey on a new island, but wait! There 
    seem to be marines and they don't look happy. What do you do?
    `,
    choices: [{
        id: 'negotiate',
        description: 'Do as Nami says and try to win them over',
        result:`
        Knowing you are a pirate, and marines aren't too fond of you...
        You decide to win them over with a banquet! Lots of food, music
        and booze! They give you 20 gold to cover some expenses but you
        take the money and escape
        `,
        hp:0,
        gold:20
    }, {
        id: 'fight',
        description:'Do as Luffy says and go to Battle',
        result: `
        As you go into your fight with nothing but determination to win 
        you look at your crew and see nothing but the same from them. 
        You throw your fists and swing your swords, not too long after 
        you look at the group of marines lying down infront of you. 
        You take 25 hp damage. In addition you find 60 gold.
        `,
        hp:-25,
        gold:50
    }, {
        id:'run',
        description:'Do as Usopp says and run away for now',
        result:`
        As you and your crew break for the opposite direction 
        you get trapped by a Navy Admiral! The Admiral launches 
        an extremely powerful attack and you take 60 hp damage!
        `,
        hp:-60,
        gold:0
    }]
};
const seaking = {
    id: 'seaking',
    title:'A Massive Seaking',
    map: {
        top: '22%',
        left: '26%'
    },
    image: '../assets/seaking.jpeg',
    background:'../assets/seaking-background.jpeg',
    description:`
    As you are sailing to the nearest island your ship is approached
    by a very hungry seaking! What do you do?
    `,
    choices: [{
        id: 'run',
        description: 'Do as Usopp says and get as far from the island as soon as possible',
        result:`
        You Bring a Spring Upon 'er! Unfortunatley the seaking 
        damaged your ship and you were forced to make repairs! Luckily 
        while repairing you find an old bag with 15 gold! Unluckily
        a piranaha swims through the hole in the ship and bites you!
        You take 20 hp damage.
        `,
        hp: -20,
        gold: 15
    }, {
        id: 'fight',
        description: 'Do as Luffy says and go to Battle',
        result:`
        You shoot your cannon at the Seaking only for it to do no damage.
        You watch as the Seaking launches its attack, you wake up washed up
        on the beach of an island. You took 50 damage.
        `,
        hp: -50,
        gold: 0
    }, {
        id: 'zoro',
        description: 'Let Zoro handle the Seaking',
        result:`
        Driven by his will to become the worlds greatest swordsman 
        Zoro steps up when the crew is in need. In three-sword style
        he launches off the ship towards the Seaking and with one swing
        of his swords he slices through the Seaking with ease. By chance
        there was 75 gold in the stomach of the Seaking.
        `,
        hp: 0,
        gold: 75
    }]
};

const village = {
    id: 'village',
    title: ' A Village Offer',
    map: {
        top: '80%',
        left: '70%'
    },
    image: '../assets/village.png',
    background:'../assets/village-background.jpeg',
    description:`
    As you enter a local village you are greeted by three people.
    Just when you think you can relax you get a tip that the marines
    from earlier are mad and coming for revenge. You'll need to set
    sail, but you have time to do one thing with the village people.
    What do you choose?
    `,
    choices: [{
        id:'banquet',
        description: 'The local pub owner offers to throw you a banquet',
        result: 'You healed all your hp!',
        hp:100,
        gold:0
    }, {
        id:'mayor',
        description: 'The Village mayor offers to pay you guys to leave despit your help.',
        result: 'You were given 120 gold!',
        hp:0,
        gold: 125,
    }, {
        id:'Admiral',
        description: 'You decide to just hang around and encounter a Navy Admiral',
        result:'The Admiral launches a ferocious attack and youy take 60 hp damage',
        hp:-60,
        gold:0
    }]
};
const quests = [
    marines,
    seaking,
    village,
];
export default quests;