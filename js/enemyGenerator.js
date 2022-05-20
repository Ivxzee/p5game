function generateEnemies(){
    console.log(waves["a"])
    for (let i = 0; i<waves[waveCount].length; i++){
        let w = waves[waveCount][i];
        let wt = w.type;
        let et = entityType[wt];

        let a = new Entity(map(w.x,0,100,0,width),map(w.y,0,100,0,height),et.color,et.speed,et.hp,et.fireDelay,et.bulletSpeed, false)
        enemies.push(a);
    }
}

