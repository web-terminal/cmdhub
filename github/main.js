var githubCmd = function() {
    this.desc = 'gitbub commands.';
    this.subCmds = {
        ls: {
            desc: "show repos.",
            exec: function(command, cmdwin) {
                console.log('github ls command.');
            }
        }
    };
    this.Exec = function(command, terminal) {
        if (command.content.length > 0) {
            if (this.subCmds.hasOwnProperty(command.content[0])) {
                this.subCmds[command.content[0]].exec(command, terminal);
            } else {
                terminal.displayErrorOutput("invalid command "+command.content[0]);
            }
        } else {
            terminal.displayErrorOutput("please input sub command. like: github ls <first content>");
        }
    }
}
