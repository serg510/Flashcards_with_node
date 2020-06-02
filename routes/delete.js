///****information regarding the correct id for card and to display it. */

router.get('/:id', (req, res) => {
    // Here, we're setting either the string "answer" or the string "question" to a variable called side
    const side = req.query.side; // "answer"
    // Here, we're setting the index of the client's desired "card" to a variable called id
    const id = req.params.id; // 1232
    // This step has two parts: we're getting the specific "card" from the "cards" array using the id variable as an index number
    // Then, once we have a "card" object, we're grabbing the string of text inside of its "answer" property and assigning it to the variable "text"
    // We get the string of text inside of "answer" — instead of "question" — because that's what the value of "side" above happens to be
    const text = cards[id][side];
    // Similarily, "hint" will contain the the string of text inside of the "hint" property of the the selected "card" object
    const hint = cards[id].hint;
    // This step is really for readability and is arguably unnecessary
    // Basically, you're setting "templateData" with {text: "Something, something, answer", hint: "hint for the question"}
    const templateData = { text, hint };
    // Finally, we build our card.pug template using the contents of templateData, and send the resulting HTML to the client
    res.render('card', templateData);
});