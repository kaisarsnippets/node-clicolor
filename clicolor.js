// Return colored cli text
var colors = {
    auto: "\x1b[0m",
    blink: "\x1b[5m",
    bright: "\x1b[1m",
    dim: "\x1b[2m",
    hide: "\x1b[8m",
    inverse: "\x1b[7m",
    underline: "\x1b[4m",
    
    black: "\x1b[30m",
    blue: "\x1b[34m",
    cyan: "\x1b[36m",
    green: "\x1b[32m",
    magenta: "\x1b[35m",
    red: "\x1b[31m",
    white: "\x1b[37m",
    yellow: "\x1b[33m",
    
    bgblack: "\x1b[40m",
    bgblue: "\x1b[44m",
    bgcyan: "\x1b[46m",
    bggreen: "\x1b[42m",
    bgmagenta: "\x1b[45m",
    bgred: "\x1b[41m",
    bgwhite: "\x1b[47m",
    bgyellow: "\x1b[43m"
}

function CLIColor(color, text) {
    var str = colors.auto;
    text = text || '';
    text = text.toString();
    color = color || '';
    if (typeof color == 'string')
    color = color.split(' ');
    color.forEach(function(c){
        c = c.trim();
        if (
        typeof colors[c]
        !== 'undefined'
        ) { str += colors[c]; }
    });
    str += text;
    str += colors.auto;
    return str;
};
