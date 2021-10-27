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

const drive = {
    id: 'drive',
    title: 'a long and winding road',
    map: {
        top: '17%',
        left: '37%'
    },
    image: 'dragon.jpg',
    audio: 'dragon.wav',
    action: 'dragon-growl.aiff',
    description: `
        You decide you want to drive to Big Sur after your show in san francisco so that you can wake up
        to the beauty of nature before continuing on your long journey. everyone is drinking pabst in the van.
        you suddenly reach a dead end. the sign says highway 1 is closed due to rockslides. the only way out is driving 
        two hours backwards the way you just came in. it is 1am. what do you do?`

    choices: [{
        id: 'cry',
        description: 'cry',
        result: `
            you decide to let it all hang out and cry from a mixture of exhaustion and frustration.
            you should have listened to your dad and been a lawyer instead. the van smells like an ogre ate a pound of weed,
            washed it down with piss beer, and shit it out in the backseat.
        `,
        hygiene: -50,
        money: -100
    }, {
        id: 'drive',
        description: 'keep on drivin',
        result: `
            you decide to take action and stay in good spirits. big sur woulda been cool, but oh well. you turn around and
            drive the two hours back the way you came, take 68 over to 101 south, and drive until you hit king city, where
            you proceed to park and pass out in a jack in the box parking lot at 3am. everyone sleeps in their jeans. you are
            crunched like a shrimp in the front seat wondering why on earth you did this to yourself.
        `,
        hygiene: -30,
        money: -50
    }, {
        id: 'sleep',
        description: 'pass out',
        result: `
            running only on 3 hours of sleep from the night before and a slutty bbq burrito you found on the dashboard, you 
            give up on trying to be the one to solve the problem. you pass out with your shoes on. someone else will drive everyone
            to safety, not u tho. 
        `,
        hygiene: -10,
        money: 0
    }]
};

const redrocks = {
    id: 'redrocks',
    title: 'A Golden Treasure',
    map: {
        top: '31%',
        left: '5%'
    },
    // prerequisites: ['dragon', 'monsters'],
    // image: 'treasure-chests.png',
    // audio: 'treasure-chests.wav',
    // action: 'chest-opening.wav',
    description: `
        you are at red rocks in colorado watching my morning jacket play a 3 hour long set. you realize the person sitting
        in front of you is mclovin. like actually. you make a bet with your friend for a hundred bucks that its really him.
        you find a way to introduce yourself and learn it really is chris mintze plasse. you win a hundred bucks. fast forward
        two hours and you're in the green room taking shots of tequila and playing egyptian rat screw with mclovin. he offers you
        and your bandmates mushrooms. what do you do?
    `,
    choices: [{
        id: 'mushroom',
        description: 'take the mushrooms!',
        result: 'you go on a cosmic journey with mclovin. you go for a group night hike to the top of red rocks feeling like you are exploring an alien planet',
        hygiene: 0,
        money: what is money
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
    redrocks,
    drive,
];

export default quests;