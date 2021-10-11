class lightshard {
  constructor() {
    this.doAutoNav = 1;
    this.doNavTransparency = 1;
    this.doNavWithScroll = 1;
    this.blocks = {
      parseURL: function (url) {
        if (url.includes("{WL}")) {
          var output = 'https://wilderzone.live/' + url.split("{WL}")[1];
        } else {
          var output = url;
        }
        return output;
      },

      general: function (tag, classlist, content) {
        var block = '<' + tag + ' class="' + classlist + '">' + content + '</' + tag + '>';
        return block;
      },

      background_image: function (url) {
        var block = '<background_image style="background-image:linear-gradient(270deg, #00000000 0%, #00000000 70%), url(' + this.parseURL(url) + ');"></background_image>';
        return block;
      },

      h1: function (string) {
        var block = '<h1>' + string + '</h1>';
        return block;
      },

      h2: function (string) {
        var block = '<h2>' + string + '</h2>';
        return block;
      },

      h3: function (string) {
        var block = '<h3>' + string + '</h3>';
        return block;
      },

      info: function (string) {
        var block = '<info>' + string + '</info>';
        return block;
      },

      link: function (url, target, rel, classlist, content) {
        var block = '<a href="' + url + '" target="' + target + '" rel="' + rel + '" class="' + classlist + '">' + content + '</a>';
        return block;
      },

      paragraph: function (string) {
        var block = '<p>' + string + '</p>';
        return block;
      },

      multi_paragraph: function (array) {
        var block = '';
        array.forEach(element => {
          block += this.paragraph(element);
        });
        return block;
      },

      imgdented_paragraph: function (url, string) {
        var block = '<p><img src="' + this.parseURL(url) + '" draggable="false">' + string + '</p>';
        return block;
      }
    };
    this.functions = {
      init: function () {
        if(this.doAutoNav == 1){
          console.log();
        }
      }
    };
  }
}

function oxfordComma(list){
  var output = "";
  if(list.length == 2){
   output += list[0] + " & " + list[1];
  }else if(list.length > 1){
    output += list[0];
    var i = 1;
    while(i < list.length){
      output += ", " + list[i];
      i++;
    }
    output += ", & " + list[i];
  }else if(list.length == 1){
   output += list[0];
  }
  return output;
}
