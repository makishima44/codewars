function updateLight(current) {
    let color ;
    if(current === "green") {
        color = "yellow";
    } else if(current === "yellow") {
        color = "red";
    } else if(current === "red") {
        color = "green";
    }
    return color;
}
