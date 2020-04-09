const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

// Route for our application that accepts requests and responds in the form of
// a personalized route displaying user's platform, gamertag, and recent game history
router.get('/:platform/:gamertag', async (req,res) => {
    try {
        const headers = {
            'TRN-Api-Key': process.env.TRACKER_API_KEY
        }

        const { platform, gamertag} = req.params;

        const response = await fetch(`${process.env.TRACKER_API_URL}/profile/${platform}/${gamertag}`,
        {
            headers
        });

        const data = await response.json();

        // Catch error if player name is not found and return own response
        if(data.errors && data.errors.length > 0) {
            // 404 code for Not Found errors
            return res.status(404).json({
                message: 'Profile Not Found'
            });
        }

        res.json(data);
    } catch(err) {
        console.error(err);
        res.status(500).json({
            message: 'Server Error'
        });
    }
})

// export routers so it can be globally used
module.exports = router;