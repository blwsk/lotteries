(function( $ ){

    $('#solve').click( function() {
      var x1 = $('#x1').val(); // 4000
      var p1 = $('#p1').val(); // 0.2

      var x2 = $('#x2').val(); // 3000
      var p2 = $('#p2').val(); // 0.25

      /*
var ev1 = x1 * p1;
var ev2 = x2 * p2;
*/

      var outcomeSimilar, outcomeSimilarityFactor, outcomeSimilarityValue;
      if ( x1 > x2 ) { // yes
        outcomeSimilarityFactor = 1.25;
        outcomeSimilarityValue = x1 / x2; // 1.33
        if ( outcomeSimilarityValue > outcomeSimilarityFactor ) {
          outcomeSimilar = false;
          /*alert('outcomes are not similar')*/
        }
        else {
          outcomeSimilar = true; // check
          /*alert('outcomes are similar')*/
        }
      }
      else {
        outcomeSimilarityFactor = 1.25;
        outcomeSimilarityValue = x2 / x1;
        if ( outcomeSimilarityValue > outcomeSimilarityFactor ) {
          outcomeSimilar = false;
          /*alert('outcomes are not similar')*/
        }
        else {
          outcomeSimilar = true;
          /*alert('outcomes are similar')*/
        }
      }

      var probabilitySimilar, probabilitySimilarityFactor, probabilitySimilarityValue;
      if ( p1 > p2 ) {
        probabilitySimilarityFactor = 0.1;
        probabilitySimilarityValue = p1 - p2;
        if ( probabilitySimilarityValue > probabilitySimilarityFactor ) {
          probabilitySimilar = false;
          /*alert('probs are not similar');*/
        }
        else {
          probabilitySimilar = true;
          /*alert('probs are similar');*/
        }
      }
      else { // yes
        probabilitySimilarityFactor = 0.1;
        probabilitySimilarityValue = p2 - p1; // 0.05
        if ( probabilitySimilarityValue > probabilitySimilarityFactor ) {
          probabilitySimilar = false;
          /*alert('probs are not similar');*/
        }
        else {
          probabilitySimilar = true; // check
          /*alert('probs are similar');*/
        }
      }

      /*
solve
*/
      var result;
      if ( outcomeSimilar==true && probabilitySimilar==true ) {
        /*
The outcomes and probabilities are both too similar to make this a reasonable means of determining preference
*/
        result = 'The outcomes and probabilities are both too similar to make this a reasonable means of determining preference.';
      }
      else if ( outcomeSimilar==true && probabilitySimilar==false ) {
        /*alert('1');*/
        /*
The outcomes are similar. Use probability as the determining factor.
*/
        if ( parseFloat(p1) > parseFloat(p2) ) {
          result = 'Lottery 1 is preferred to lottery 2 because the outcomes are similar and p1 is greater than p2.'
        }
        else if ( parseFloat(p1) < parseFloat(p2) ) {
          result = 'Lottery 2 is preferred to lottery 1 because the outcomes are similar and p2 is greater than p1.'
        }
        else {
          result = 'The lotteries are too similar. Expected value would be a better means of determining preference.'
        }
      }
      else if ( probabilitySimilar==true && outcomeSimilar==false ) {
        /*alert('2')*/
        /*
The probabilities are similar. Use outcome as the determining factor.
*/
        if ( parseFloat(x1) > parseFloat(x2) ) {
          result = 'Lottery 1 is preferred to lottery 2 because the probabilities are similar and x1 is greater than x2.'
        }
        else if ( parseFloat(x1) < parseFloat(x2) ) {
          result = 'Lottery 2 is preferred to lottery 1 because the probabilities are similar and x2 is greater than x1.'
        }
        else {
          result = 'The lotteries are too similar. Expected value would be a better means of determining preference.'
        }
      }
      else {
        /*alert('3');*/
        /*
Both the outcomes and probabilities are dissimilar. Whichever are more similar, use the others.
*/
        if ( parseFloat(outcomeSimilarityValue) > parseFloat(probabilitySimilarityValue) ) {
          /*
The outcomes are more similar
*/
          if ( parseFloat(p1) > parseFloat(p2) ) {
            result = 'Lottery 1 is preferred to lottery 2. The outcomes are more similar than the probabilities and p1 is greater than p2.'
          }
          else if ( parseFloat(p1) < parseFloat(p2) ) {
            result = 'Lottery 2 is preferred to lottery 1. The outcomes are more similar than the probabilities and p2 is greater than p1.'
          }
          else {
            result = 'The lotteries are too similar. Expected value would be a better means of determining preference.'
          }
        }
        else if ( parseFloat(outcomeSimilarityValue) < parseFloat(probabilitySimilarityValue) ) {
          /*
The outcomes are more similar
*/
          if ( parseFloat(x1) > parseFloat(x2) ) {
            result = 'Lottery 1 is preferred to lottery 2. The probabilities are more similar than the outcomes and x1 is greater than x2.'
          }
          else if ( parseFloat(x1) < parseFloat(x2) ) {
            result = 'Lottery 2 is preferred to lottery 1. The probabilities are more similar than the outcomes and x2 is greater than x1'
          }
          else {
            result = 'The lotteries are too similar. Expected value would be a better means of determining preference.'
          }
        }
        else {
          result = 'The lotteries are too similar. Expected value should suffice.'
        }

      }

      /*
var resultEV;
if ( ev1 > ev2 ) {
resultEV = 'Lottery 1 is preferred to lottery 2.';
}
else if ( ev1 == ev2 ) {
resultEV = 'The computer is indifferent to the two lotteries.';
}
else {
resultEV = 'Lottery 2 is preferred to lottery 1.';
}
*/

      $('#result').html(result);
      $('.display-when-solved').css('display', 'block');
    });

  })( jQuery );
