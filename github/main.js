var githubCmd = function() {
    this.desc = 'gitbub commands.';
    this.subCmds = {
        ls: {
            desc: "show repos.",
            Exec: function(command, cmdwin) {
                console.log('github ls command.');
            }
        }
    }
}
