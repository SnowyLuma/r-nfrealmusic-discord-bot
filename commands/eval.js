
exports.run = (client, message, args) => {
    if (message.author.id !== client.config.ownerid) return;
    code = args.join(' ')
    console.log(code)
    try {
        evald = eval(code)
        message.channel.send(evald, {code:"xl"}); 
    } catch {
        message.channel.send("dude your code sucks")
    }
}