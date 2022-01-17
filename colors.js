
    var links = {
      SetColor:function(colors){
            // var links = document.querySelectorAll('a');
            // var i =0;
            // while(i<links.length){
            //  links[i].style.color=colors;
            //  i++;
            // }
            $('a').css('color',colors);
          }
        }

    var Body = {
      SetColor:function(colors){
            // var target = document.querySelector('body');
            // target.style.color = colors;
            $('body').css('color',colors);
          },
      SetBackGroundColor:function(colors){
            // var target = document.querySelector('body');
            // target.style.backgroundColor =colors;
            $('body').css('backgroundColor',colors);
          }
    }


     function handler(self){

      var target = document.querySelector('body');

      if(self.value === 'night'){
        Body.SetBackGroundColor('black');
        Body.SetColor('white');
        links.SetColor('powderblue');
        self.value = 'day';

      }

      else {
        Body.SetBackGroundColor('white');
        Body.SetColor('black');
        links.SetColor('gray');
        self.value = 'night';}
     }
