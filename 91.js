var number = function(busStops){
    let count = 0;
    for(let i = 0; i < busStops.length; i++) {
       count += busStops[i][0];
       count -= busStops[i][1];
    }
    return count;
}
