// x and y coords are in %
// this is done for responsivity

var entityType = {
    player: {
        x: 50,
        y: 50,
        color: [25,20,20],
        speed: 5,
        hp: 100,
        fireDelay:20,
        bulletSpeed: 10,
        inaccuracy: 0,
        isPlayer: true,
    },
    runner: {
        color: [255,20,20],
        speed: 7,
        hp: 100,
        fireDelay:80,
        bulletSpeed: 5,
        inaccuracy: 10,
        isPlayer: false,
    },
    shooter: {
        color: [155,140,20],
        speed: 2,
        hp: 100,
        fireDelay:40,
        bulletSpeed: 10,
        inaccuracy: 0,
        isPlayer: false,
    }
}

var waves = [
    [
        {x: 5, y: 10, type: "runner"},
        {x: 5, y: 90, type: "shooter"},
        {x: 95, y: 10, type: "shooter"},
        {x: 95, y: 90, type: "runner"},
    ],
    [
        {x: 5, y: 10, type: "shooter"},
        {x: 5, y: 90, type: "shooter"},
        {x: 5, y: 10, type: "shooter"},
        {x: 5, y: 90, type: "shooter"},
    ],
]