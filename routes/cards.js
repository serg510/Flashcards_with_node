const express = require('express');
const router = express.Router();
const { data } = require('../data/flashcardData.json');
const { cards } = data;

//get random cards
router.get('/',(req,res) => {
    const numberOfCards = cards.length;
    const flashcardId = Math.floor(Math.random() * numberOfCards );
    res.redirect(`/cards/${flashcardId}`);
})

router.get('/:id',(req,res) => {
    let { side } = req.query;
    const { id } = req.params;
// if Question is selected in url take to that ${card}
    if(!side){
      return  res.redirect(`/cards/${id}?side=question`);
    }
    const name = req.cookies.username;
    const text = cards[id][side];
    const { hint } = cards[id];

    const templateData = { id , text , name , side}

    if(side === 'question'){
        templateData.hint = hint;
        templateData.sideToShow = 'answer';
        templateData.sideToShowDisplay = 'Answer';
    } else if (side === 'answer'){
        templateData.sideToShow = 'question';
        templateData.sideToShowDisplay = 'Question';
    }
    
    res.render('card', templateData);
});


module.exports = router;