(function () {
    let username = "vision";
    let pwd = "wanda";


    let msg = "************************************************************\n";
    msg += "S.W.O.R.D \n";
    msg += "Top Secret Communique. \n";
    msg += "Authenticate. \n \n";
    msg += "Dr. Darcy Lewis' findings regarding Maximoff Anomaly. type\n";
    msg += "High levels of radiation present at perimeter. in\n"
    msg += "Effect on Westview residents unknown. help\n\n";
    msg += "\n\nPlease advise. \n\n";
    msg += "************************************************************\n";

    console.log("You're pretty clever, aren't you? Password is 'wAndAvIsIon' for 50 bonus points");
    let link = "https://tinyurl.com/3svb3nv5"
    $('body').terminal({
        help: function () {
            this.echo('Good job, you asked for help. Go next to this location: ');
            this.echo(link);
            this.echo();
        }
    }, {
        greetings: msg,
        prompt: 'vision: ',
        memory: true,

        login: function(user, password, callback) {
            if (user == username && password == pwd) {
                callback('AUTHENTICATION TOKEN');
            } else {
                callback(null);
            }
        }
    });
})();