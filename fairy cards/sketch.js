let button;
let c1,c2;
let cards = ["ADMIT YOUR TRUE FEELINGS TO YOURSELF- Be honest with yourself. Only you know what it is that you truly desire.", "AFFIRMATIONS- To lift up your thoughts and energy, and to attract what you desire, use positive affirmations.", "ASK FOR WHAT YOU WANT- Let the universe and other people know what you need.", "ASSERTIVENESS- Stand up for your beliefs, and only say yes if you really want to.", "AUTUMN- In the fall season, everything comes together and you reap wonderful harvests of abundance.", "BE YOURSELF- This situation calls for you to be your authentic self, which is the basis for your personal power.", "BIRTHDAY- A significant birthday holds the answer to your question.", "BUSINESS VENTURE- Trust and follow through on a  new business idea or career oppertunity.", "CHILDREN- Your connection with children is part of your life's purpose.", "CONNECT WITH NATURE- You're rejuvenated and inspired by spending time outdoors.","DAUGHTER- The answer to your questioln involves your daughter.", "DEBT PAID OFF- The old weight and habit of debt is lifted from you and your life.",
"DIETARY CHANGE- Improve your diet and your life will also improve.", "DO SOME RESEARCH- You need more information about this situation. Look into it further before proceeding.", "EASY DOES IT- Stop trying so hard to control everything and all the doors will open for you.", "EMOTIONAL HEALING- As your heart heals of old emotional pain, you recieve new blessings and love.", "EVERYTHING'S OKAY- Don't worry. It's all working out in a beautiful way.", "EXPRESS YOUR INDIVIDUALITY- Allow your true self to shine because you're awesome!", "FLOWER POWER- Spend time with flowers and flower essences to increase your personal healing power.", "GET SOME EXERCIRSE- As your body becomes stronger, you begin to feel stronger in all ways.", "GOODBYE TO THE OLD, HELLO TO THE NEW-  You've finished one part of your life, and now a new and even better part is beginning.", 
"HEALING, HEALED, HEALER- Healing energy surrounds you and your situation.", "HOLIDAY- The answer you're looking for can be found during a vacation, retreat or holiday getaway.", "LET GO- As you surrender the need to control, your relaxed energy rapidly attracts your desires.", "LOVE LIFE- The basis of your question involves your romantic life, which is now changing for the better.", "MARRIAGE- The fairies join you in celebrating weddded bliss.", "NEW CAREER- Your work focus is shifting in a positive, new and successful direction.", "NEW HOME- Moving is a step in the right direction for you.", "PATIENCE PLEASE- What you're asking for is coming about. Have patience, as there are unseen factors that need to occur first.", "PERFECT TIMING- This is the right time for you to move forward.", "PRACTICE, PRACTICE, PRACTICE- With daily practice, you can polish your skills and talents and increase your confidence.",
"PREGNANCY- The birth of a child brings great blessings to you and the world.", "SON- Your son is watched over and protected as he explores his world.", "SPIRITUAL TEACHER- Your life purpose involves teaching others about healing and spirituality.", "SPRING- Your desires fully manifest as the flowers bedgin to bloom.", "SUMMER- Everything that you're asking for becomes yours in the summertime.", "TRAVEL - An upcoming trip proves to be life-changing in positive ways.", "VEGETARIAN- A new way of eating gives you more energy, greater health, clarity and stronger manifestation abilities.", "WALK AWAY- Leave the unhealthy situation, and enjoy the new doors that open as a result!", "WHOM DO YOU NEED TO FORGIVE?- As you release old anger or resentment, you will find that your wishes come true.", "WINTER- The answers to your prayers and affirmations are fully realised in the winter months.", "YOUR DESIRE IS WITHIN REACH- Have faith, as everything is working out in your favor.", 
"YOUR WISH IS GRANTED- What you've asked for is coming true.", "YOU'VE GOT THE POWER- Use your abilities to resolvee this situation, you can do it!"];
let card = 0;
let img = ('untitled.png');





rectMode(CENTER);

function generate(){
  
  card = random(cards);




}
 

function setup() {

  createCanvas(windowWidth, windowHeight);

 

  let col = color(255,213,0);
  stroke(255);
  button = createButton('DRAW A CARD');
  button.position(windowWidth/2-111-111, windowHeight/2-222);
  button.mousePressed(generate);

  button.style('font-size', '60px');
  button.style('background-color', col);



    c1 = color(255,0,85);
    c2 = color(255,184,16);

  }



function draw() {
textSize(30)
text('Think of a question...', windowWidth/2,111)



  for(let y=0; y<height; y++){
    n = map(y,0,height,0,1);
    let newc = lerpColor(c1,c2,n);
    stroke(newc);
    line(0,y,width, y);



text(card, windowWidth/2, windowHeight/2+111);
textSize(25);
fill(0);
textAlign(CENTER);

}
}

