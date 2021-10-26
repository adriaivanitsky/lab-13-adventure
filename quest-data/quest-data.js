const monsters = {
    id: 'monsters',
    title: 'A Den of Monsters',
    map: {
        top: '89%',
        left: '44%'
    },
    image: 'monsters.jpg',
    description: `
        You just played a bangin' sold out show at the music hall of Williamsburg
        in New York City. Everyone is ready to rage. You have not showered in 6 days.
        You have been subsisting on lunchables and gas station corn dogs for a week.
        Isaac Brock enters the green room with a bunch of friends and starts doing cocaine
        on the table. he offers you a bump. what do you do?
    `,
    choices: [{
        id: 'avoid',
        description: 'avoid him',
        result: `
            you decide you don't want to listen to an annoying dude talk about himself for 3 hours
            straight so you go back to the hotel to smoke a joint, shower, and watch naked & afraid in peace. 
            +20 hygiene

        `,
        hygiene: 20,
        money: 0
    }, {
        id: 'party',
        description: 'rage!!!',
        result: `
           fuck it, yolo, time to rage! you decide to go wild with all the weirdos you just
           met despite any negative consequences. you don't have time to shower and you reek like
           secondhand cigarette smoke. you end up at a casino double fisting margaritas and losing at
           blackjack. -400 dollars and -40 hygiene. 
        `,
        hygiene: -40,
        money: -400
    }, {
        id: 'hookup',
        description: 'hook up with a stranger instead',
        result: `
            not wanting to rage but not wanting to go back to the hotel yet either,
            you find a hottie at the bar. you tell her a joke about an infinity symbol getting
            a tattoo of a white girl on its wrist. she laughs and invites you back to her apartment
            where she pays $3,000 a month to sleep in a clawfoot tub with 6 roomates. the exposed
            brick is nice. 
        `,
        hygiene: -10,
        money: -100
    }]
};

const dragon = {
    id: 'dragon',
    title: 'a long and winding road',
    map: {
        top: '17%',
        left: '37%'
    },
    image: 'dragon.jpg',
    audio: 'dragon.wav',
    action: 'dragon-growl.aiff',
    description: `
        You decide you want to drive to Big Sur after your show so that you can wake up
        to the beauty of nature before continuing on your long journey. You drive 5 hours 
        until suddenly there's a sign about a rockslide and highway 1 is closed. 
        What do you do?
    `,
    choices: [{
        id: 'run',
        description: 'Get the hell out of the village',
        result: `
            You high tail it in the opposite direction. Luckily,
            in the panic you find a bag on the ground with 15 gold.
            Unluckily, you trip over a discarded wagon wheel on your
            way out of town and take 40 hp damage. 
        `,
        hp: -35,
        gold: 15
    }, {
        id: 'fight',
        description: 'Fiiiiiggghhhttt!',
        result: `
            You attempt to charge towards the dragon, who sees you approach
            and let's loose a fireball. You wake up the next morning and the
            village has been completely burned to the ground.
            Oh, and you take 45 hp damage.
        `,
        hp: -45,
        gold: 0
    }, {
        id: 'archer',
        description: 'Emulate that guy from LOR who shot an arrow',
        result: `
            Inspired by the legend of Bard the Bowman, you notice a
            stunned archer standing nearby and take their bow and quiver,
            climb to the top of a tall tower and take aim. On the dragon's
            next pass you steady your aim and let one fly. Amazingly,
            you strike the dragon in the eye, piercing into the brain and
            killing the dragon instantly. The villagers declare you their hero
            and award you 90 gold.
        `,
        hp: 0,
        gold: 90
    }]
};

const treasure = {
    id: 'treasure',
    title: 'A Golden Treasure',
    map: {
        top: '31%',
        left: '5%'
    },
    prerequisites: ['dragon', 'monsters'],
    image: 'treasure-chests.png',
    audio: 'treasure-chests.wav',
    action: 'chest-opening.wav',
    description: `
        As you enter the quest chamber you notice three chests before you.
        Just as you start to imagine the wealth, you see a giant serpent
        emerge from the back of the chamber. You'll need to make a run for it,
        but you have time to open one chest before you take off. Which one 
        do you choose?
    `,
    choices: [{
        id: 'wooden',
        description: 'A Wooden Chest',
        result: 'You grab 40 gold pieces!',
        hp: 0,
        gold: 40
    }, {
        id: 'golden',
        description: 'A Golden Chest',
        result: 'Oh no! The chest is booby trapped with poison and you take 50 hp damage',
        hp: -50,
        gold: 0
    }, {
        id: 'jeweled',
        description: 'A Jeweled Chest',
        result: 'A warm light engulfs you and you gain 35 hp',
        hp: 35,
        gold: 0
    }]
};

const quests = [
    monsters, 
    treasure,
    dragon,
];

export default quests;