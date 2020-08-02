var githubCmd = function() {
    this.desc = 'gitbub commands.';
    this.subCmds = {
        ls: {
            desc: "show repos."
            exec: function(command, cmdwin) {
                console.log('github ls command.');
            }
        }
    };
    this.Exec = function(command, cmdwin) {
        if (command.content.length > 0) {
            if (this.subCmds.hasOwnProperty(command.content[0])) {
                this.subCmds[command.content[0]].exec(command, cmdwin);
            } else {
                cmdwin.displayErrorOutput("invalid command "+command.content[0]);
            }
        } else {
            cmdwin.displayErrorOutput("please input sub command. like: browser bookmark <first content>");
        }
    }
}
