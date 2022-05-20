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
        isPlayer: true,
    },
    runner: {
        x: 0,
        y: 0,
        color: [255,20,20],
        speed: 4,
        hp: 100,
        fireDelay:20,
        bulletSpeed: 10,
        isPlayer: false,
    }
}

var waves = [
    [
        {x: 5, y: 10, type: "runner"},
        {x: 5, y: 90, type: "runner"},
    ],
]