function lightshard(){
  this.doAutoNav = 1;
  this.doNavTransparency = 1;
  this.doNavWithScroll = 1;
}

function oxfordComma(list){
  var output = "";
  if(list.length > 1){
    output += list[0];
    var i = 1;
    list.forEach(elem => {
      if(i >= list.length - 1){
        output += ", & " + elem;
      }else{
        output += ", " + elem;
      }
      i++;
    });
  }else if(list.length == 1){
   output += list[0];
  }
  return output;
}
