var googleTranslateCmd = function () {
    let self = this;
    this.options = {
        source: {
            simple: "s",
            desc: "Source language. the default is auto."
        },
        target: {
            simple: "t",
            desc: "Target language. the default is the language set by the browser."
        },
        google: {
            simple: "g",
            desc: "Use Google translate engine. Useage: <code>translate text -g</code> or <code>translate text --google</code>",
            url: "https://translate.google.cn/#view=home&op=translate&sl={sl}&tl={tl}&text="
        },
        baidu: {
            simple: "d",
            desc: "Use Baidu translate engine. Useage: <code>translate text -d</code> or <code>translate text --baidu</code>",
            url: "https://fanyi.baidu.com/#{sl}/{tl}/"
        },
        deepl: {
            simple: "l",
            desc: "Use Deepl translate engine. Useage: <code>translate text -l</code> or <code>translate text --deepl</code>",
            url: "http://deepl.com/translator#{sl}/{tl}/"
        }
    };
    this.desc = "Useage: <code>translate text</code> use the google as the default translate engine.";
    this.Exec = (command, terminal) => {
        let source = self.getPropertyVal(command.options, 'source');
        let target = self.getPropertyVal(command.options, 'target');
        if (!source) {
            source = "auto";
        }
        if (!target) {
            target = api_locale_language();
        }
        if (command.options.hasOwnProperty('google') || command.options.hasOwnProperty('baidu') || command.options.hasOwnProperty('deepl')) {
            var nums = 0;
            for (let option in command.options) {
                if (this.options.hasOwnProperty(option)) {
                    nums++;
                    setTimeout(() => {
                        this.options[option]['url'] = this.options[option]['url'].replace('{sl}', source).replace('{tl}', target)
                        terminal.goToURL(encodeURI(this.options[option]['url'] + command.content.join("")));
                    }, nums * 300);
                }
            }
        } else {
            let api = 'https://translate.googleapis.com/translate_a/single?dt=t&dt=bd&dt=qc&dt=rm&dt=ex&client=gtx&hl=en&sl=' + source + '&tl=' + target + '&q=' + command.content.join(' ') + '&dj=1'
            $.ajax({
                type: 'GET',
                url: api,
                dataType: 'json',
                crossDomain: true,
                success: function (data) {
                    try {
                        let sentences = '';
                        if (data.hasOwnProperty('sentences')) {
                            for (let i in data.sentences) {
                                let trans = self.getPropertyVal(data.sentences[i], 'trans');
                                let orig = self.getPropertyVal(data.sentences[i], 'orig');
                                if (orig) sentences += '<div style="color:#ece09d;font-size:8px;">' + orig + '</div>';
                                if (trans) sentences += '<div>' + trans + '</div>';
                            }
                        }
                        let dict = sentences + '<br/>';
                        if (data.hasOwnProperty('dict')) {
                            for (let i in data.dict) {
                                let trans = data.dict[i];
                                dict += (i > 0 ? '<br/>' : '') + trans['pos'] + '<br/>';
                                let entrys = self.getPropertyVal(trans, 'entry', []);
                                for (let j in entrys) {
                                    dict += '<b>' + entrys[j]['word'] + '</b>  ';
                                    dict += entrys[j]['reverse_translation'].join(', ') + '<br/>';
                                }
                            }
                            if (data.hasOwnProperty('examples')) {
                                let examples = self.getPropertyVal(data.examples, 'example', [])
                                dict += '<br/>Examples<br/>'
                                for (let i in examples) {
                                    dict += '- <a class="command-exec" data-type="base64" data-command="' + window.btoa(unescape(encodeURIComponent('googleTranslate `' + $('<a>' + examples[i]['text'] + '</a>').text() + '`'))) + '">' + examples[i]['text'] + '</a><br/>';
                                }
                            }
                            sentences = dict;
                        }

                        terminal.displayOutput(sentences);
                    } catch (e) {
                        terminal.displayOutput("translate error: " + e);
                    }
                },
                error: function (err) {
                    console.log(err)
                }
            });
        }

        terminal.displayOutput("");
    }

    this.getPropertyVal = function (object, property, defaultVal) {
        if (object && object.hasOwnProperty(property)) {
            return object[property];
        }
        return defaultVal;
    }

}