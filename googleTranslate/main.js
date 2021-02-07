var googleTranslateCmd = function () {
    let self = this;
    this.options = {
        source: {
            simple: "s",
            desc: "source language"
        },
        target: {
            simple: "t",
            desc: "target language"
        },
    };

    this.Exec = function (command, terminal) {
        let source = self.getPropertyVal(command.options, 'source');
        let target = self.getPropertyVal(command.options, 'target');
        if (!source) {
            source = "auto";
        }
        if (!target) {
            target = api_locale_language();
        }

        let api = 'https://translate.googleapis.com/translate_a/single?dt=t&dt=bd&dt=qc&dt=rm&dt=ex&client=gtx&hl=en&sl=' + source + '&tl=' + target + '&q=' + command.content.join(' ') + '&dj=1'
        $.ajax({
            type: 'GET',
            url: api,
            dataType: 'json',
            crossDomain: true,
            success: function (data) {
                try {
                    let sentences = '';
                    let dict = '';
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
                                dict += '- ' + examples[i]['text'] + '<br/>';
                            }
                        }
                        sentences = dict;
                    } else if (data.hasOwnProperty('sentences')) {
                        for (let i in data.sentences) {
                            let trans = self.getPropertyVal(data.sentences[i], 'trans');
                            let orig = self.getPropertyVal(data.sentences[i], 'orig');
                            if (orig) sentences += '<div style="color:#ece09d;font-size:8px;">' + orig + '</div>';
                            if (trans) sentences += '<div>' + trans + '</div>';
                        }
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

    this.getPropertyVal = function (object, property, defaultVal) {
        if (object && object.hasOwnProperty(property)) {
            return object[property];
        }
        return defaultVal;
    }

}