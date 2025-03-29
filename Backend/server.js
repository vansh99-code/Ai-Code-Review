require('dotenv').config()
const app = require('./src/app')


app.listen("https://ai-code-review-flame.vercel.app/" || 3000, () => {
    console.log('Server is running...')
})
  