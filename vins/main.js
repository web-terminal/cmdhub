var vinsCmd = function () {
    this.Exec = function (command, terminal) {
        terminal.displayOutput("You can also use shortcut keys (Shift+Alt+Z) to operate the browser.");
        vinsCmd.toggleCmdIns();
        terminal.toggleCmdWin();
    }
}

vinsCmd.showInsMode = false;
vinsCmd.insModeKey = '';

vinsCmd.toggleCmdIns = function () {
    vinsCmd.insModeKey = '';
    if ($('body').find('#terminal-ins-div').attr('id')) {
        $('body').find('#terminal-ins-div').remove();
        vinsCmd.showInsMode = false;
    } else {
        vinsCmd.showCmdIns();
        if (document.hasFocus()) $(document.activeElement).blur();
        vinsCmd.showInsMode = true;
    }
}

vinsCmd.handleInsInputShow = function () {
    $('body').find('#terminal-ins-div i').each(function () {
        let text = $(this).text();
        if (text.startsWith(vinsCmd.insModeKey)) {
            $(this).html(text.replace(vinsCmd.insModeKey, '<b>' + vinsCmd.insModeKey + '</b>') + '<t class="terminal-ins-triangle"></t>').show();
        } else {
            $(this).html(text).hide();
        }
    });
}

vinsCmd.Convert26 = function (num) {
    var str = "";
    while (num > 0) {
        var m = num % 26;
        if (m == 0) {
            m = 26;
        }
        str = String.fromCharCode(m + 96) + str;
        num = (num - m) / 26;
    }
    return str;
}

vinsCmd.showCmdIns = function () {
    $(document).find('[terminal-ins]').each(function () {
        $(this).removeAttr('terminal-ins');
    });

    function getInsStr(dom, position, ins) {
        let left = Math.max(0, Math.min(position.left, position.left - (8 + 7 * ins.length)));
        let top = Math.max(position.top, position.top - 8 + dom.outerHeight() / 2);
        return '<i class="terminal-ins" style="left:' + left + 'px;top:' + top + 'px;">' + ins + '<t class="terminal-ins-triangle"></t></i>';
    }

    // #09ff09
    let insStr = '<div id="terminal-ins-div">';
    insStr += '<style>i.terminal-ins{position:absolute;z-index:11111111;display:inline-block;font-size:12px;font-style:normal;box-shadow: 0px 0px 5px #000;box-sizing: content-box;height:12px;padding:2px;color:#000;line-height:10px;background:#ebf906;border-radius:2px;}.terminal-ins-triangle{position: absolute;top: 3px;right: -3px;width: 0;height: 0;border-top: 5px solid transparent;border-bottom: 5px solid transparent;border-left: 5px solid #ebf906;}</style>';
    let qty = 1;
    $(document).find('a[href]').each(function () {
        let position = $(this).offset();
        if (position.top == 0 && position.left == 0 || $(this).attr('terminal-ins')) return;
        let ins = 'a' + vinsCmd.Convert26(qty++);
        insStr += getInsStr($(this), position, ins);
        $(this).attr('terminal-ins', ins);
    });

    qty = 1;
    $(document).find('input').each(function () {
        let position = $(this).offset();
        if (position.top == 0 && position.left == 0 || $(this).attr('terminal-ins')) return;
        let ins = 'p' + vinsCmd.Convert26(qty++);
        insStr += getInsStr($(this), position, ins);
        $(this).attr('terminal-ins', ins);
    });

    qty = 1;
    $(document).find('button').each(function () {
        let position = $(this).offset();
        if (position.top == 0 && position.left == 0 || $(this).attr('terminal-ins')) return;
        let ins = 'b' + vinsCmd.Convert26(qty++);
        insStr += getInsStr($(this), position, ins);
        $(this).attr('terminal-ins', ins);
    });

    $(document).find('[role="button"]').each(function () {
        let position = $(this).offset();
        if (position.top == 0 && position.left == 0 || $(this).attr('terminal-ins')) return;
        let ins = 'b' + vinsCmd.Convert26(qty++);
        insStr += getInsStr($(this), position, ins);
        $(this).attr('terminal-ins', ins);
    });

    qty = 1;
    $(document).find('textarea').each(function () {
        let position = $(this).offset();
        if (position.top == 0 && position.left == 0 || $(this).attr('terminal-ins')) return;
        let ins = 't' + vinsCmd.Convert26(qty++);
        insStr += getInsStr($(this), position, ins);
        $(this).attr('terminal-ins', ins);
    });

    // ins tips
    insStr += '<div ins-input style="position:fixed;z-index:11111110;bottom:20px;right:20px;background:rgba(0,0,0,0.5);color:#fff;font-size:26px;padding:0px 10px;"></div>'
    insStr += '</div>';
    $('body').find('#terminal-ins-div').remove();
    $('body').append(insStr);
}

vinsCmd.handleInsKey = function (terminal, key) {
    switch (key) {
        case 'B':
            history.go(-1);
            return true;
        case 'F':
            history.go(1);
            return true;
        case 'n':
            terminal.handleInput('tab new');
            return true;
        case 'N':
            terminal.handleInput('tab newwindow');
            return true;
        case 'H': // left
            terminal.handleInput('js history.go(1)');
            return true;
        case 'L': // right
            terminal.handleInput('js history.go(1)');
            return true;
        case 'J': // down
            terminal.handleInput('js history.go(1)');
            return true;
        case 'K': // up
            terminal.handleInput('js history.go(1)');
            return true;
        case 'h': // left
            document.documentElement.scrollLeft -= 40;
            return true;
        case 'l': // right
            document.documentElement.scrollLeft += 40;
            return true;
        case 'j': // down
            document.documentElement.scrollTop += 40;
            return true;
        case 'k': // up
            document.documentElement.scrollTop -= 40;
            return true;
        case 'u':
            document.documentElement.scrollTop = document.documentElement.scrollTop - window.innerHeight + 80;
            return true;
        case 'd':
            document.documentElement.scrollTop = document.documentElement.scrollTop + window.innerHeight - 80;
            return true;
        case 'g': // up
            document.documentElement.scrollTop = 0;
            return true;
        case 'G': // up
            document.documentElement.scrollTop = document.documentElement.scrollHeight;
            return true;
    }
    return false;
}

vinsCmd.initEvents = function (terminal) {
    document.addEventListener('keyup', function (event) {
        console.log(event)
        if (event.code == 'KeyZ' && event.shiftKey && event.altKey) {
            vinsCmd.toggleCmdIns();
        }
        if (vinsCmd.showInsMode) {
            if (event.key == 'Enter' && vinsCmd.insModeKey) {
                if (event.shiftKey) {
                    vinsCmd.showCmdIns();
                } else {
                    vinsCmd.toggleCmdIns();
                }
                vinsCmd.insModeKey = '';
            } else if (event.key == 'Backspace') {
                $('[terminal-ins="' + vinsCmd.insModeKey + '"]').blur();
                if (vinsCmd.insModeKey) {
                    vinsCmd.insModeKey = vinsCmd.insModeKey.slice(0, -1);
                }
                $('[terminal-ins="' + vinsCmd.insModeKey + '"]').focus();
                // showCmdIns();
                vinsCmd.handleInsInputShow();
                $('body').find('#terminal-ins-div [ins-input]').text(vinsCmd.insModeKey);
            } else if (event.key == 'Escape') {
                vinsCmd.toggleCmdIns();
            }
        }
    });

    document.addEventListener('keypress', function (event) {
        if (vinsCmd.showInsMode) {
            if ((event.keyCode > 47 && event.keyCode < 58) || (event.keyCode > 64 && event.keyCode < 91) || (event.keyCode > 96 && event.keyCode < 123)) {
                vinsCmd.insModeKey += event.key;
                setTimeout(function () {
                    $('[terminal-ins="' + vinsCmd.insModeKey + '"]').focus()
                }, 500);
                // showCmdIns();
                if (vinsCmd.handleInsKey(terminal, vinsCmd.insModeKey)) {
                    vinsCmd.insModeKey = '';
                }
                vinsCmd.handleInsInputShow();
                $('body').find('#terminal-ins-div [ins-input]').text(vinsCmd.insModeKey);
            }
        }
    });
}