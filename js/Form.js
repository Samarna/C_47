class Form{
    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h1');
      this.a = createElement('h2');
      this.b = createElement('h2');
      this.c = createElement('h2');
      this.d = createElement('h2');
      this.e = createElement('h2');
      this.f = createElement('h2');
      this.g = createElement('h2');
      this.ques = createElement('h2');
      this.next = createButton('Next');
      this.proceed = createButton('Proceed');
      this.points = createElement('h2');
      this.aim = createElement('h2');
      this.throwDart = createElement('h2');
      this.instructionImg = loadImage("images/instructions.png");
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
      this.next.hide();
      this.a.hide();
      this.b.hide();
      this.c.hide();
      this.d.hide();
      this.e.hide();
      this.f.hide();
      this.g.hide();
      this.ques.hide();
      this.points.hide();
      this.aim.hide();
      this.throwDart.hide();
      this.proceed.hide();
    }
    show(){
      this.next.show(); 
      this.points.show();
      this.aim.show();
      this.throwDart.show();
      this.proceed.show();
    }  
    displayInstructions(){
      imageMode(CENTER);
      image(this.instructionImg,displayWidth/2,displayHeight/2,600,400);
    }

    display(){
      this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.button.position(displayWidth/2 + 30, displayHeight/2);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        name = this.input.value();
        this.greeting.html("Hey " + name);
        this.greeting.position(displayWidth/2 - 100, displayHeight/3 - 100);
        this.a.html("You are in an restaurant, and you are about");
        this.a.position(displayWidth/2 - 230, displayHeight/3 - 50);
        this.b.html("to pay the bill. Ohh! But you forgot your ");
        this.b.position(displayWidth/2 -230,displayHeight/3 - 10); 
        this.c.html("wallet at the gym! What are you gonna do?!");
        this.c.position(displayWidth/2 - 230, displayHeight/2 - 120);
        this.d.html("Luckly, the cashier has an idea. He tells you ");
        this.d.position(displayWidth/2 - 230, displayHeight/2 - 80);
        this.e.html("that if you are able to get the amount in the ");
        this.e.position(displayWidth/2 - 230, displayHeight/2 - 40);
        this.f.html("bill as your score in the target game in just ");
        this.f.position(displayWidth/2 - 230, displayHeight/2);
        this.g.html("5 throws, you don't have to pay the bill.");
        this.g.position(displayWidth/2 - 230,displayHeight - 420);
        this.ques.html("Will you be able to do it ? There is only one way to find out........");
        this.ques.position(displayWidth/2 - 330,displayHeight - 380);
        this.proceed.show();
        this.proceed.position(displayWidth/2 + 30, displayHeight/2 + 160);
      });
      this.proceed.mousePressed(()=>{
        this.greeting.hide();
        this.proceed.hide();
        this.a.hide();
        this.b.hide();
        this.c.hide();
        this.d.hide();
        this.e.hide();
        this.f.hide();
        this.g.hide();
        this.ques.hide();
        this.next.show();
        this.next.position(displayWidth/2 + 30, displayHeight/2 + 160);
        gameState = 2;
      })
      this.next.mousePressed(()=>{
        this.next.hide();
        gameState = 1;
        this.points.show();
        this.points.html("You need to earn 200 points in 5 throws to go home without paying....All The Best!!")
        this.points.position(displayWidth/2 - 450,displayHeight/2 - 300);
      })
  
    }
  }
  