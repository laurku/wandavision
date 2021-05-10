(function () {
    let msg = "*******************************************\n";
    msg += "S.W.O.R.D \n";
    msg += "Top Secret Communique. \n";
    msg += "Authenticate. \n \n";
    msg += "Dr. Darcy Lewis' findings regarding Maximoff Anomaly. \n";
    msg += "High levels of radiation present at perimeter.\n"
    msg += "Effect on Westview residents unknown. \n\n";
    msg += "\n\nPlease advise. \n\n";
    msg += "*******************************************\n";
    console.log(msg);


    $('body').terminal({
        hello: function (what) {
            this.echo('Hello, ' + what +
                '. Wellcome to this terminal.');
        }
    }, {
        greetings: msg
    });
})();