/*  ======================= SETUP ======================= */
var config = {
  trace: true,
  spiralResolution: 1, //Lower = better resolution
  spiralLimit: 360 * 5,
  lineHeight: 0.8,
  xWordPadding: 0,
  yWordPadding: 3,
  font: "sans-serif"
}

var wordsFreq = [{word:"crashed", freq:3215},{word:"aircraft",freq:2482},{word:"plane",freq:1864},
 {word:"pilot",freq:1290},{word:"flight",freq:1176},{word:"off",freq:1049},{word:"engine",freq:946},
 {word:"approach",freq:944},{word:"runway",freq:917},{word:"failure",freq:881},{word:"crew",freq:812},
 {word:"landing",freq:734},{word:"airport",freq:629},{word:"altitude",freq:611},{word:"weather",freq:606},
 {word:"mountain",freq:559},{word:"takeoff",freq:548},{word:"conditions",freq:540},{word:"taking",freq:536},
 {word:"landing",freq:523},{word:"struck",freq:510},{word:"control",freq:505},
 {word:"ground",freq:496},{word:"ground",freq:476},{word:"cargo",freq:469},{word:"fire",freq:455},
 {word:"route",freq:439},{word:"miles",freq:433},{word:"attempting",freq:367},{word:"down",freq:360},{word:"left",freq:357},
 {word:"poor",freq:346},{word:"shortly",freq:346},{word:"lost",freq:341},{word:"accident",freq:334},
 {word:"airpressure",freq:333},{word:"loss",freq:329},{word:"fog",freq:324},{word:"killed",freq:324},
 {word:"failed",freq:312},{word:"feet",freq:310},{word:"fuel",freq:306},{word:"low",freq:302},
 {word:"short",freq:299},{word:"flying",freq:297},{word:"terrain",freq:281},{word:"wing",freq:271},
 {word:"trees",freq:264},{word:"emergency",freq:255},{word:"power",freq:254},
 {word:"captain",freq:247},{word:"error",freq:247},{word:"high",freq:236},{word:"minutes",freq:234},
 {word:"descent",freq:233},{word:"caused",freq:229},{word:"hit",freq:231},{word:"vfr",freq:223},
 {word:"sea",freq:215},{word:"rain",freq:206},{word:"maintenance",freq:205},{word:"heavy",freq:193},
 {word:"flew",freq:187},{word:"turn",freq:186},{word:"cause",freq:185},{word:"crash",freq:179},
 {word:"visibility",freq:175},{word:"engines",freq:172},{word:"broke",freq:172},{word:"instrument",freq:156},
 {word:"stalled",freq:154}];
 
//    var words = words_freq.map(obj => {
//        var rObj = {};
//        rObj[obj.key] = obj.value;
//        return rObj;
//    });


wordsFreq.sort(function(a, b) {
  return -1 * (a.freq - b.freq);
});

var cloud = document.getElementById("word-cloud");
cloud.style.position = "relative";
// cloud.style.position = "absolute";
cloud.style.fontFamily = config.font;

var traceCanvas = document.createElement("canvas");
traceCanvas.width = cloud.offsetWidth;
traceCanvas.height = cloud.offsetHeight;
var traceCanvasCtx = traceCanvas.getContext("2d");
cloud.appendChild(traceCanvas);

var startPoint = {
  x: cloud.offsetWidth / 1.5,
  y: cloud.offsetHeight / 1.5
};

var wordsDown = [];
/* ======================= END SETUP ======================= */

/* =======================  PLACEMENT FUNCTIONS =======================  */
function createWordObject(word, freq) {
  var fsize = freq/35; //added 9/23
  var wordContainer = document.createElement("div");
  wordContainer.style.position = "absolute";
  wordContainer.style.fontSize = fsize + "px";
  wordContainer.style.lineHeight = config.lineHeight;
/*    wordContainer.style.transform = "translateX(-50%) translateY(-50%)";*/
  wordContainer.appendChild(document.createTextNode(word));

  return wordContainer;
}

function placeWord(word, x, y) {

  cloud.appendChild(word);
  word.style.left = x - word.offsetWidth/2 + "px";
  word.style.top = y - word.offsetHeight/2 + "px";

  wordsDown.push(word.getBoundingClientRect());
}

function trace(x, y) {
//     traceCanvasCtx.lineTo(x, y);
//     traceCanvasCtx.stroke();
  traceCanvasCtx.fillRect(x, y, 1, 1);
}

function spiral(i, callback) {
  angle = config.spiralResolution * i;
  x = (1 + angle) * Math.cos(angle);
  y = (1 + angle) * Math.sin(angle);
  return callback ? callback() : null;
}

function intersect(word, x, y) {
  cloud.appendChild(word);    
  
  word.style.left = x - word.offsetWidth/2 + "px";
  word.style.top = y - word.offsetHeight/2 + "px";
  
  var currentWord = word.getBoundingClientRect();
  
  cloud.removeChild(word);
  
  for(var i = 0; i < wordsDown.length; i+=1){
      var comparisonWord = wordsDown[i];
      
      if(!(currentWord.right + config.xWordPadding < comparisonWord.left - config.xWordPadding ||
           currentWord.left - config.xWordPadding > comparisonWord.right + config.wXordPadding ||
           currentWord.bottom + config.yWordPadding < comparisonWord.top - config.yWordPadding ||
           currentWord.top - config.yWordPadding > comparisonWord.bottom + config.yWordPadding)){
          
          return true;
      }
  }
  
  return false;
}
/* =======================  END PLACEMENT FUNCTIONS =======================  */
/* =======================  LETS GO! =======================  */
(function placeWords() {
  for (var i = 0; i < wordsFreq.length; i += 1) {

      var word = createWordObject(wordsFreq[i].word, wordsFreq[i].freq);
      console.log(word);
      for (var j = 0; j < config.spiralLimit; j++) {
          //If the spiral function returns true, we've placed the word down and can break from the j loop
          if (spiral(j, function() {
                  if (!intersect(word, startPoint.x + x, startPoint.y + y)) {
                      placeWord(word, startPoint.x + x, startPoint.y + y);
                      return true;
                  }
              })) {
              break;
          }
      }
  }
})();
/* ======================= WHEW. THAT WAS FUN. We should do that again sometime ... ======================= */
/* =======================  Draw the placement spiral if trace lines is on ======================= */
(function traceSpiral() {
  
  traceCanvasCtx.beginPath();
  
  if (config.trace) {
      var frame = 1;

      function animate() {
          spiral(frame, function() {
              trace(startPoint.x + x, startPoint.y + y);
          });

          frame += 1;

          if (frame < config.spiralLimit) {
              window.requestAnimationFrame(animate);
          }
      }

      animate();
  }
})();