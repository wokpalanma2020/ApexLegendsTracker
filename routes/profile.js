const express = require('express');
const router = express.Router();

// Route for our application that accepts requests and responds in the form of
// a personalized route displaying user's platform and gamertag
router.get('/:platform/:gamertag', (req,res) => {
    console.log(req.params.platform, req.params.gamertag);
    res.send('Hello');
})

// export routers so it can be globally used
module.exports = router;