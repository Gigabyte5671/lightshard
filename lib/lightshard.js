var Lightshard = {
  flags: {
    navHeight: 50,
    doAutoNav: 1,
    doNavTransparency: 1,
    doNavWithScroll: 1
  },
  blocks: {
    general: function (tag, classlist, content) {
      var block = '<' + tag + ' class="' + classlist + '">' + content + '</' + tag + '>';
      return block;
    },

    background_image: function (url) {
      var block = '<background_image style="background-image:linear-gradient(270deg, #00000000 0%, #00000000 70%), url(' + Lightshard.functions.parseURL(url) + ');"></background_image>';
      return block;
    },

    img: function (url) {
      var block = '<img src="' + Lightshard.functions.parseURL(url) + '" draggable="false">';
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
    },

    taglist: function (classlist, tags = []) {
      var block = '<tag_list class="' + classlist + '">';
      tags.forEach((tag) => {
        block += '<tag>' + tag + '</tag>';
      });
      block += '</tag_list>';
      return block;
    },

    article: function (title = "Untitled", date = "No date", author = "No author", tags = [], images = [], content) {
      var block = '<article class="' + classlist + '">'
                +   '<background_image style="' + Lightshard.functions.parseURL(images[1]) + '"></background_image>'
                +   '<article_inner>'
                +     '<article_image style="' + Lightshard.functions.parseURL(images[0]) + '"></article_image>'
                +     this.taglist("", tags)
                +     '<h1>' + title + '</h1>'
                +     '<info>' + date + '</info>'
                +     '<p><i>' + author + '</i></p>'
                +     content
                +   '<article_inner>'
                + '</article>';
      return block;
    }
  },
  functions: {
    init: function () {
      if(Lightshard.flags.doAutoNav == 1){
        //console.log(this.flags.doAutoNav);
      }
      if(Lightshard.flags.doNavTransparency == 1){
        //console.log(this.flags.doNavTransparency);
        var threshold = Lightshard.flags.navHeight;
        document.addEventListener("scroll", function(e, threshold){
          //console.log(e);
          //console.log(threshold);
          if(window.scrollY > (window.innerHeight * 1.0)){
            document.querySelector("nav background").style.opacity = 1;
          }else{
            document.querySelector("nav background").style.opacity = 0.5;
          }
        });
      }else{
        document.querySelector("nav background").style.opacity = 1;
      }
    },
    
    parseURL: function (url) {
      if (url.includes("{WL}")) {
        var output = 'https://wilderzone.live/' + url.split("{WL}")[1];
      } else {
        var output = url;
      }
      return output;
    },

    parseLoopToArg(list = [], funct) {
      // var output = "";
      // p.tags.forEach((tag) => {
      //   output += ls.blocks.general("tag", "", tag)
      // });
      // return output;
    },

    oxfordComma(list = []) {
      var output = "";
      if(list.length <= 1){
        output += list[0];
      }else if(list.length == 2){
        output += list.join(" & ");
      }else{
        var i = 0;
        while(i < list.length - 1){
          output += list[i] + ", ";
          i++;
        }
        output += "& " + list[list.length - 1];
      }
      return output;
    },
    
    toSpokenDate(date = "0000/00/00") {
      const ordinals = ["th", "st", "nd", "rd"];
      const months = ["","Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"];
      const date_split = date.split("/");
      if(date_split.length != 3 || date_split[0].length != 4){
        return "Incorrect Date Format";
      }
      var spokenDate = parseInt(date_split[2]);
      if(parseInt(date_split[2][1]) >= 1 && parseInt(date_split[2][1]) <= 3 && parseInt(date_split[2]) != 11 && parseInt(date_split[2]) != 12 && parseInt(date_split[2]) != 13){
        spokenDate += ordinals[parseInt(date_split[2][1])];
      }else{
        spokenDate += ordinals[0];
      }
      
      spokenDate += " of " + months[parseInt(date.split("/")[1])] + " " + date_split[0];
      return spokenDate;
    }
  }
}