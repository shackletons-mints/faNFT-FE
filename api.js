const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()

const PORT = 8080

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.get('/get-fans', (req, res) => {
    // return five fans
        // fan = { cid, title }
})

app.post('/post-fan/{metadata}{walletAddress}', (req, res) => {
    /**
     * imaginary database
     * 
     *  fan {
     *      cid,
     *      title,
     *      owner: walletAddress
     *  }
     * 
     */

    // pinJSONToIPFS(process.env.PINATA_API_KEY, process.env.PINATA_SECRET_API_KEY, nftMetadata)
})

app.post('/test', (req, res) => {
    console.log('req: ', req.body)
    res.send({ success: true })
})

app.listen(PORT, () => console.log('Listening on port ' + PORT))
