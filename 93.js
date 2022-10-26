function hello(name) {
    if(name) {
    return "Hello, " + name[0].toUpperCase() + name.slice(1).toLowerCase() + "!";
    } else {
        return "Hello, World!"
    }
}
