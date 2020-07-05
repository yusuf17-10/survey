class Form{
    constructor(){
        this.input = createInput("emailId");
        this.button = createButton("next");
        
        
    }
    hide(){
        this.input.hide();
        this.button.hide();
        
    }

    display(){
        var title = createElement('h2');
        title.html("survey");
        title.position(displayWidth/2-40,0);

        
        

       this.input.position(displayWidth/2-50,displayHeight/2-80);
       this.button.position(displayWidth/2-50,displayHeight/2);
      

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            user.name= this.input.value();
            userCount++;
            user.index=userCount;
            user.update();
            user.updateCount(userCount);

           this.greeting.html("hello "+ user.name);
           this.greeting.position(displayWidth/2-70,displayHeight/4);
        });
        
    }
}