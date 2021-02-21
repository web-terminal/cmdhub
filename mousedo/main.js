var mousedoCmd = function () {
    this.Exec = function (command, terminal) {
        terminal.displayOutput("Try holding down the right mouse button, don’t let go, and move.");
    }
}

mousedoCmd.shadowRoot = null;
mousedoCmd.move_direct = '';
mousedoCmd.move_direct_ins = '';

mousedoCmd.u = '<svg style="width:50px;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4307"><path d="M512 85.333333l249.6 298.666667H262.4z" fill="#fff" p-id="4308"></path><path d="M426.666667 320h170.666666v576h-170.666666z" fill="#fff" p-id="4309"></path></svg>'
mousedoCmd.d = '<svg style="width:50px;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1666"><path d="M512 938.666667L262.4 640h499.2z" fill="#fff" p-id="1667"></path><path d="M426.666667 128h170.666666v576h-170.666666z" fill="#fff" p-id="1668"></path></svg>'
mousedoCmd.l = '<svg style="width:50px;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2513"><path d="M85.333333 512l298.666667-249.6v499.2z" fill="#fff" p-id="2514"></path><path d="M320 426.666667h576v170.666666H320z" fill="#fff" p-id="2515"></path></svg>'
mousedoCmd.r = '<svg style="width:50px;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3584"><path d="M938.666667 512L640 761.6V262.4z" fill="#fff" p-id="3585"></path><path d="M128 426.666667h576v170.666666H128z" fill="#fff" p-id="3586"></path></svg>'
mousedoCmd.dl = '<svg style="width:50px;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1689"><path d="M85.333333 618.666667l298.666667-249.6v499.2z" fill="#fff" p-id="1690"></path><path d="M896 448V170.666667h-170.666667v277.333333c0 46.933333-38.4 85.333333-85.333333 85.333333H277.333333v170.666667h362.666667c140.8 0 256-115.2 256-256z" fill="#fff" p-id="1691"></path></svg>'
mousedoCmd.dr = '<svg style="width:50px;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1700"><path d="M938.666667 618.666667L640 369.066667v499.2z" fill="#fff" p-id="1701"></path><path d="M128 448V170.666667h170.666667v277.333333c0 46.933333 38.4 85.333333 85.333333 85.333333h362.666667v170.666667H384c-140.8 0-256-115.2-256-256z" fill="#fff" p-id="1702"></path></svg>'
mousedoCmd.ld = '<svg style="width:50px;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2524"><path d="M405.333333 938.666667l249.6-298.666667H155.733333z" fill="#fff" p-id="2525"></path><path d="M576 128h277.333333v170.666667H576c-46.933333 0-85.333333 38.4-85.333333 85.333333v362.666667h-170.666667V384c0-140.8 115.2-256 256-256z" fill="#fff" p-id="2526"></path></svg>'
mousedoCmd.lu = '<svg style="width:50px;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2572"><path d="M405.333333 85.333333l249.6 298.666667H155.733333z" fill="#fff" p-id="2573"></path><path d="M576 896h277.333333v-170.666667H576c-46.933333 0-85.333333-38.4-85.333333-85.333333V277.333333h-170.666667v362.666667c0 140.8 115.2 256 256 256z" fill="#fff" p-id="2574"></path></svg>'
mousedoCmd.rd = '<svg style="width:50px;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3637"><path d="M618.666667 938.666667L369.066667 640h499.2z" fill="#fff" p-id="3638"></path><path d="M448 128H170.666667v170.666667h277.333333c46.933333 0 85.333333 38.4 85.333333 85.333333v362.666667h170.666667V384c0-140.8-115.2-256-256-256z" fill="#fff" p-id="3639"></path></svg>'
mousedoCmd.ru = '<svg style="width:50px;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3659"><path d="M618.666667 85.333333L369.066667 384h499.2z" fill="#fff" p-id="3660"></path><path d="M448 896H170.666667v-170.666667h277.333333c46.933333 0 85.333333-38.4 85.333333-85.333333V277.333333h170.666667v362.666667c0 140.8-115.2 256-256 256z" fill="#fff" p-id="3661"></path></svg>'
mousedoCmd.ul = '<svg style="width:50px;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4269"><path d="M85.333333 405.333333l298.666667 249.6V155.733333z" fill="#fff" p-id="4270"></path><path d="M896 576v277.333333h-170.666667V576c0-46.933333-38.4-85.333333-85.333333-85.333333H277.333333v-170.666667h362.666667c140.8 0 256 115.2 256 256z" fill="#fff" p-id="4271"></path></svg>'
mousedoCmd.ur = '<svg style="width:50px;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4318"><path d="M938.666667 405.333333L640 654.933333V155.733333z" fill="#fff" p-id="4319"></path><path d="M128 576v277.333333h170.666667V576c0-46.933333 38.4-85.333333 85.333333-85.333333h362.666667v-170.666667H384c-140.8 0-256 115.2-256 256z" fill="#fff" p-id="4320"></path><path d="M938.666667 405.333333L640 654.933333V155.733333z" fill="#fff" p-id="4321"></path><path d="M128 576v277.333333h170.666667V576c0-46.933333 38.4-85.333333 85.333333-85.333333h362.666667v-170.666667H384c-140.8 0-256 115.2-256 256z" fill="#fff" p-id="4322"></path></svg>'

mousedoCmd.hasSelection = false;

// 鼠标左键点击时的位置信息
mousedoCmd.mdp_x = 0;
mousedoCmd.mdp_y = 0;
mousedoCmd.mdp_p_x = 0;
mousedoCmd.mdp_p_y = 0;

mousedoCmd.last_mouse = { x: 0, y: 0 };
mousedoCmd.mouse = { x: 0, y: 0 };

mousedoCmd.ev = null;	// onmousedown记录的事件信息
mousedoCmd.isMouseDown = 0;
mousedoCmd.isActiveCanvas = false

mousedoCmd.initEvents = function (terminal) {

    document.addEventListener('contextmenu', function (e) {
        if (mousedoCmd.move_direct) {
            e.preventDefault();
        } else {
            mousedoCmd.onmouseupHandle(terminal)
        }
    })

    document.addEventListener('mousedown', function (e) {
        mousedoCmd.ev = e || window.event;
        let step = 5;
        if (mousedoCmd.ev.button == 0) {
            mousedoCmd.mdp_x = mousedoCmd.ev.clientX
            mousedoCmd.mdp_y = mousedoCmd.ev.clientY
            mousedoCmd.mdp_p_x = mousedoCmd.ev.pageX
            mousedoCmd.mdp_p_y = mousedoCmd.ev.pageY
        } else {
            mousedoCmd.isMouseDown = 1;
            if (mousedoCmd.ev.button == 1) {
                return;
            }

            mousedoCmd.ensureShadowRootExist()
            mousedoCmd.cleanCanvas()

            let onPaint = function () {
                if (!window.context) return false;
                window.context.beginPath();
                window.context.moveTo(mousedoCmd.last_mouse.x, mousedoCmd.last_mouse.y);
                window.context.lineTo(mousedoCmd.mouse.x, mousedoCmd.mouse.y);
                window.context.stroke();
            };

            mousedoCmd.mouse = { x: mousedoCmd.ev.clientX, y: mousedoCmd.ev.clientY };

            document.addEventListener('mousemove', function (e) {
                let ev = e || window.event;

                if (!mousedoCmd.isActiveCanvas && (Math.abs(ev.clientX - mousedoCmd.mouse.x) > 0 || Math.abs(ev.clientY - mousedoCmd.mouse.y) > 0)) {
                    if (window.getSelection().toString()) {
                        mousedoCmd.hasSelection = window.getSelection().toString();
                    }
                    window.weupMouseoverDivTip = document.createElement("tips");
                    window.canvas = document.createElement("canvas");
                    window.context = canvas.getContext('2d')

                    weupMouseoverDivTip.setAttribute('id', 'md-tip')
                    weupMouseoverDivTip.setAttribute('style', 'font-size:16px;position:fixed;top:110px;left:45%;width:150px;background: rgba(0,0,0,0.9) none repeat scroll !important;color: #fff;text-align:center;padding:10px 10px;z-index: 99999998;display:none;')

                    window.canvas.setAttribute('id', 'md-canvas')
                    window.canvas.setAttribute('width', window.innerWidth)
                    window.canvas.setAttribute('height', window.innerHeight)
                    window.canvas.setAttribute('style', 'position:fixed;top:0px;left:0px;z-index:9999999999;background-color:rgba(255,255,255,0.01);')

                    shadowRoot.appendChild(canvas)
                    shadowRoot.appendChild(weupMouseoverDivTip)

                    mousedoCmd.last_mouse = { x: ev.clientX - canvas.offsetLeft, y: ev.clientY - canvas.offsetTop };
                    mousedoCmd.mouse = { x: ev.clientX - canvas.offsetLeft, y: ev.clientY - canvas.offsetTop };

                    onPaint()

                    window.context.lineJoin = 'round';
                    window.context.lineCap = 'round';
                    window.context.lineWidth = 5;
                    window.context.strokeStyle = "#07059a";

                    mousedoCmd.isActiveCanvas = true
                }

                if (!mousedoCmd.isActiveCanvas) return false

                mousedoCmd.mouse.x = ev.clientX;
                mousedoCmd.mouse.y = ev.clientY;

                onPaint()

                if (Math.abs(mousedoCmd.last_mouse.x - mousedoCmd.mouse.x) > step || Math.abs(mousedoCmd.last_mouse.y - mousedoCmd.mouse.y) > step) {
                    if (Math.abs(mousedoCmd.last_mouse.x - mousedoCmd.mouse.x) > Math.abs(mousedoCmd.last_mouse.y - mousedoCmd.mouse.y)) {
                        if (mousedoCmd.last_mouse.x > mousedoCmd.mouse.x && Math.abs(mousedoCmd.last_mouse.y - mousedoCmd.mouse.y) / (mousedoCmd.last_mouse.x - mousedoCmd.mouse.x) < 1 && mousedoCmd.move_direct != 'l') {
                            mousedoCmd.move_direct = 'l'
                            mousedoCmd.move_direct_ins += mousedoCmd.move_direct
                        } else if (mousedoCmd.last_mouse.x < mousedoCmd.mouse.x && Math.abs(mousedoCmd.last_mouse.y - mousedoCmd.mouse.y) / (mousedoCmd.mouse.x - mousedoCmd.last_mouse.x) < 1 && mousedoCmd.move_direct != 'r') {
                            mousedoCmd.move_direct = 'r'
                            mousedoCmd.move_direct_ins += mousedoCmd.move_direct
                        }
                    } else if (Math.abs(mousedoCmd.last_mouse.x - mousedoCmd.mouse.x) < Math.abs(mousedoCmd.last_mouse.y - mousedoCmd.mouse.y)) {
                        if (mousedoCmd.last_mouse.y > mousedoCmd.mouse.y && (mousedoCmd.last_mouse.y - mousedoCmd.mouse.y) / Math.abs(mousedoCmd.mouse.x - mousedoCmd.last_mouse.x) > 1 && mousedoCmd.move_direct != 'u') {
                            mousedoCmd.move_direct = 'u'
                            mousedoCmd.move_direct_ins += mousedoCmd.move_direct
                        } else if (mousedoCmd.last_mouse.y < mousedoCmd.mouse.y && (mousedoCmd.mouse.y - mousedoCmd.last_mouse.y) / Math.abs(mousedoCmd.mouse.x - mousedoCmd.last_mouse.x) > 1 && mousedoCmd.move_direct != 'd') {
                            mousedoCmd.move_direct = 'd'
                            mousedoCmd.move_direct_ins += mousedoCmd.move_direct
                        }
                    }

                    if (mousedoCmd.hasSelection) {
                        mousedoCmd.checkSelectionMoveIns(terminal, mousedoCmd.move_direct_ins, 'tip')
                    } else {
                        mousedoCmd.checkMoveIns(terminal, mousedoCmd.move_direct_ins, 'tip')
                    }

                    mousedoCmd.last_mouse.x = mousedoCmd.mouse.x
                    mousedoCmd.last_mouse.y = mousedoCmd.mouse.y
                }
            });

            document.addEventListener('mouseup', function (e) {
                mousedoCmd.onmouseupHandle(terminal)
            });


        }

    });
}

mousedoCmd.ensureShadowRootExist = function () {
    if ($('#mousedo-shadowRoot').attr('id') != 'mousedo-shadowRoot') {
        let shadowHost = document.createElement('div');
        shadowHost.setAttribute('id', 'mousedo-shadowRoot');
        mousedoCmd.shadowRoot = shadowHost.attachShadow({ mode: 'closed' });
        let style = '<style>\
    a.label {padding:3px 5px;background-color:#eee;margin:3px 5px;color:#000;display:inline-block;}\
    a.label button{outline:none;margin-top:-8px;margin-right:-8px;font-size:16px;display:none;}\
    a.label:hover{color:#000;}\
    a.label:hover button{display:block}</style>\
    '
        if (mousedoCmd.shadowRoot) {
            $(mousedoCmd.shadowRoot).append(style)
        }

        document.body && document.body.appendChild(shadowHost);

    }
}

mousedoCmd.initName = function () {
    mousedoCmd.ev = null;
    mousedoCmd.move_direct = '';
    mousedoCmd.move_direct_ins = '';
    mousedoCmd.last_mouse.x = 0;
    mousedoCmd.last_mouse.y = 0;
    mousedoCmd.hasSelection = false;
}

mousedoCmd.onmouseupHandle = function (terminal) {
    mousedoCmd.isMouseDown = 0;
    mousedoCmd.isActiveCanvas = false;
    document.onmousemove = null
    document.onmouseup = null
    window.canvas && window.context.clearRect(0, 0, window.canvas.width, window.canvas.height);

    mousedoCmd.cleanCanvas();

    if (mousedoCmd.hasSelection) {
        mousedoCmd.checkSelectionMoveIns(terminal, mousedoCmd.move_direct_ins, 'ins')
    } else {
        mousedoCmd.checkMoveIns(terminal, mousedoCmd.move_direct_ins, 'ins')
    }

    setTimeout(function () {
        mousedoCmd.initName()
    }, 50);

}

mousedoCmd.cleanCanvas = function () {
    if (mousedoCmd.shadowRoot) {
        if (mousedoCmd.shadowRoot.getElementById('md-canvas')) {
            mousedoCmd.shadowRoot.removeChild(window.canvas);
        }
        if (mousedoCmd.shadowRoot.getElementById('md-tip')) {
            mousedoCmd.shadowRoot.removeChild(window.weupMouseoverDivTip);
        }
    }
}

mousedoCmd.switchMouseoverDivTip = function (onoff, text) {
    if (onoff) {
        if (!mousedoCmd.shadowRoot.getElementById('md-tip')) {
            window.weupMouseoverDivTip = document.createElement("tips");
            weupMouseoverDivTip.setAttribute('id', 'md-tip')
            weupMouseoverDivTip.setAttribute('style', 'font-size:16px;position:fixed;top:110px;left:45%;width:150px;background: rgba(0,0,0,0.6) none repeat scroll !important;color: #fff;text-align:center;padding:10px 10px;z-index: 99999998;')
            mousedoCmd.shadowRoot.appendChild(weupMouseoverDivTip)
        }
        weupMouseoverDivTip.style.display = 'block'
        weupMouseoverDivTip.innerHTML = text
    } else {
        if (mousedoCmd.shadowRoot.getElementById('md-tip')) {
            weupMouseoverDivTip.style.display = 'none'
            mousedoCmd.shadowRoot.removeChild(window.weupMouseoverDivTip);
        }
    }
}

mousedoCmd.showTips = function (tips) {
    weupMouseoverDivTip.style.display = 'block'
    weupMouseoverDivTip.innerHTML = tips
}

mousedoCmd.api_locales = function (text) {
    let lang = api_locale_language();
    let locales = {
        "zh_CN": {
            "Back": "后退",
            "Page up": "向上翻页",
            "Forward": "前进",
            "Page down": "向下翻页",
            "Close all tabs": "关闭所有标签页",
            "Close other labels": "关闭其他标签",
            "The former label": "前一个标签",
            "The latter label": "后一个标签",
            "Label pages": "给页面打标签",
            "Reload (refresh)": "重新载入（刷新）",
            "Copy tabs": "复制标签页",
            "Close the tab": "关闭标签页",
            "Scroll to the top of the page": "滚动到页面顶部",
            "Scroll to the bottom of the page": "滚动到页面底部",
            "Invalid action": "无效动作",
            "Translate": "翻译",
        }
    };

    return locales.hasOwnProperty(lang) ? (locales[lang].hasOwnProperty(text) ? locales[lang][text] : text) : text;
}

mousedoCmd.checkMoveIns = function (terminal, ins, type) {
    if (!window.weupMouseoverDivTip) return false
    if (type == 'tip') {
        weupMouseoverDivTip.style.display = 'block'
    } else if (type == 'ins') {
        weupMouseoverDivTip.style.display = 'none'
    }

    switch (ins) {
        case 'l':
            // 后退
            if (type == 'tip') {
                weupMouseoverDivTip.innerHTML = mousedoCmd.l + '<br/>' + mousedoCmd.api_locales('Back')
            } else if (type == 'ins') {
                window.history.go(-1);
            }
            break;
        case 'u':
            // 向上翻页
            if (type == 'tip') {
                weupMouseoverDivTip.innerHTML = mousedoCmd.u + '<br/>' + mousedoCmd.api_locales('Page up')
            } else if (type == 'ins') {
                document.documentElement.scrollTop = document.documentElement.scrollTop - window.innerHeight + 80;
            }
            break;
        case 'r':
            // 前进
            if (type == 'tip') {
                weupMouseoverDivTip.innerHTML = mousedoCmd.r + '<br/>' + mousedoCmd.api_locales('Forward')
            } else if (type == 'ins') {
                window.history.go(1);
            }
            break;
        case 'd':
            // 向下翻页
            if (type == 'tip') {
                weupMouseoverDivTip.innerHTML = mousedoCmd.d + '<br/>' + mousedoCmd.api_locales('Page down')
            } else if (type == 'ins') {
                document.documentElement.scrollTop = document.documentElement.scrollTop + window.innerHeight - 80;
            }
            break;
        case 'lu':
            if (type == 'tip') {
                weupMouseoverDivTip.innerHTML = mousedoCmd.lu + '<br/>' + mousedoCmd.api_locales('Close all tabs')
            } else if (type == 'ins') {
                terminal.handleInput('tab close -a');
            }
            break;
        case 'ld':
            if (type == 'tip') {
                // weupMouseoverDivTip.innerHTML = '左、下<br/>停止'
                weupMouseoverDivTip.innerHTML = mousedoCmd.ld + '<br/>' + mousedoCmd.api_locales('Close other labels')
            } else if (type == 'ins') {
                terminal.handleInput('tab close -o');
            }
            break;
        case 'ul':
            if (type == 'tip') {
                weupMouseoverDivTip.innerHTML = mousedoCmd.ul + '<br/>' + mousedoCmd.api_locales('The former label')
            } else if (type == 'ins') {
                terminal.handleInput('tab skip -s=-1');
            }
            break;
        case 'ur':
            if (type == 'tip') {
                weupMouseoverDivTip.innerHTML = mousedoCmd.ur + '<br/>' + mousedoCmd.api_locales('The latter label')
            } else if (type == 'ins') {
                terminal.handleInput('tab skip');
            }
            break;
        case 'ru':
            if (type == 'tip') {
                weupMouseoverDivTip.innerHTML = mousedoCmd.ru + '<br/>' + mousedoCmd.api_locales('Label pages')
            } else if (type == 'ins') {
                terminal.handleInput('tab new');
            }
            break;
        case 'rd':
            if (type == 'tip') {
                weupMouseoverDivTip.innerHTML = mousedoCmd.rd + '<br/>' + mousedoCmd.api_locales('Reload (refresh)')
            } else if (type == 'ins') {
                location.reload();
            }
            break;
        case 'dl':
            if (type == 'tip') {
                weupMouseoverDivTip.innerHTML = mousedoCmd.dl + '<br/>' + mousedoCmd.api_locales('Copy tabs')
            } else if (type == 'ins') {
                terminal.handleInput('tab copy');
            }
            break;
        case 'dr':
            if (type == 'tip') {
                weupMouseoverDivTip.innerHTML = mousedoCmd.dr + '<br/>' + mousedoCmd.api_locales('Close the tab')
            } else if (type == 'ins') {
                terminal.handleInput('tab close');
            }
            break;
        case 'du':
            if (type == 'tip') {
                weupMouseoverDivTip.innerHTML = mousedoCmd.d + mousedoCmd.u + '<br/>' + mousedoCmd.api_locales('Scroll to the top of the page')
            } else if (type == 'ins') {
                document.documentElement.scrollTop = 0;
            }
            break;
        case 'ud':
            if (type == 'tip') {
                weupMouseoverDivTip.innerHTML = mousedoCmd.u + mousedoCmd.d + '<br/>' + mousedoCmd.api_locales('Scroll to the bottom of the page')
            } else if (type == 'ins') {
                document.documentElement.scrollTop = document.documentElement.scrollHeight;
            }
            break;
        default:
            if (type == 'tip') {
                weupMouseoverDivTip.innerHTML = '<br/>' + mousedoCmd.api_locales('Invalid action')
            }
            break;
    }
}

function checkSelectionMoveIns(terminal, ins, type) {
    if (!window.weupMouseoverDivTip) return false
    if (type == 'tip') {
        weupMouseoverDivTip.style.display = 'block'
    } else if (type == 'ins') {
        weupMouseoverDivTip.style.display = 'none'
    }

    switch (ins) {
        // case 'u':
        //     // 向上翻页
        //     if (type == 'tip') {
        //         weupMouseoverDivTip.innerHTML = mousedoCmd.u + '<br/>' + mousedoCmd.api_locales('mouseSearchTip')
        //     } else if (type == 'ins') {
        //         api_send_message({ type: 'page', action: 'search', text: window.getSelection().toString() })
        //     }
        //     break;
        // case 'r':
        //     // 前进
        //     if (type == 'tip') {
        //         weupMouseoverDivTip.innerHTML = mousedoCmd.r + '<br/>' + mousedoCmd.api_locales('note')
        //     } else if (type == 'ins') {
        //         showNoteTip()
        //     }
        //     break;
        case 'd':
            // 向下翻页
            if (type == 'tip') {
                weupMouseoverDivTip.innerHTML = mousedoCmd.d + '<br/>' + mousedoCmd.api_locales('Translate')
            } else if (type == 'ins') {
                terminal.handleInput('translate `' + window.getSelection().toString() + '` -t en');
                terminal.toggleCmdWin('show');
            }
            break;
        default:
            if (type == 'tip') {
                weupMouseoverDivTip.innerHTML = '<br/>' + mousedoCmd.api_locales('mousemoveNullTip')
            }
            break;
    }
}