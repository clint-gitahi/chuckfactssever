import express from 'express'


const main = async () => {
    const app = express();

    app.listen(6000, () => {
        console.log('server listening on port 4000')
    })
}

main().catch((error) => {
    console.log(error);
})