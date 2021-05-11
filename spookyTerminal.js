(function () {

    
    // You're peeking in the source code, aren't you? How clever.
    // You don't need to be here, now go back.



    let msg = "************************************************************\n";
    msg += "S.W.O.R.D \n";
    msg += "Top Secret Communique. \n";
    msg += "Authenticate. \n \n";
    msg += "Dr. Darcy Lewis' findings regarding Maximoff Anomaly. please\n";
    msg += "High levels of radiation present at perimeter. say\n"
    msg += "Effect on Westview residents unknown. hello\n\n";
    msg += "\n\nPlease advise. \n\n";
    msg += "************************************************************\n";
    let username = "vision";
    let pwd = "iluvwanda";
    let link = "https://tinyurl.com/3svb3nv5"
    $('body').terminal({
        hello: function () {
            this.echo('Hello Vision. Good to hear from you. Ask me for help.\n');
        },

        hi: function () {
            this.echo('Hi Vision, there you are. Ask me for help.\n');
        },

        help: function () {
            this.echo("6ood, y2u 4sked for help. Go next to this location:");
            this.echo(link);
            this.echo();
        },

        pietro: function (a, b) {
            if (a == "is" && b == "fake") {
                this.echo("Nicely done. Maybe you can get out of the hex after all.");
                this.echo("You’re gonna have to find a clue in this code - ");
                this.echo("it’s been cHaNgInG aT tHe mOLecULaR LeVeL!");
                this.echo("Just kidding not kidding, inspect the console for clues.");
                this.echo();
                mes = "You found it out - the townspeople are all in the Hex! You need to talk to them after the Halloween costume contest.\n";
                mes += "Don’t forget, the passphrase to temporarily break the spell is ‘cHaNgInG aT tHe mOLecULaR LeVeL’. Go back now.";
                console.log(mes);
            }
            else {
                this.echo("Didn't Ultron kill Pietro?");
            }
        },

        sword: function () {
            this.echo("You're pretty clever, aren't you? Say 'wAndAvIsIon' for 50 bonus points");
        }
    }, {
        greetings: msg,
        prompt: 'vision: ',
        memory: true,

        login: function (user, password, callback) {
            if (user == username && password == pwd) {
                callback('AUTHENTICATION TOKEN');
            } else {
                callback(null);
            }
        }
    });
})();