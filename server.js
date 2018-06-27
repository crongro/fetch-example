const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const shortid = require('shortid');
console.log(shortid.generate());


app.listen(3000, function() {
	console.log("start, express server on port 3000");
});

app.use(express.static('public'))
const jsonParser = bodyParser.json()

app.use(bodyParser.urlencoded({extended:false}))

app.delete('/api/questions/:questionid/answers/:answerid', function(req,res) {
    const answerid = req.params.answerid;
    res.json({'answerid' : answerid})
});

app.post('/api/questions/:questionid/answers', jsonParser,  function(req, res){
    const questionId = req.params.questionid;
    const body = req.body;

    if(!req.body) res.json({"error" : 400});

	res.json({
        "answerId" : shortid.generate(),
        "questionId" : questionId,
        "content" : body.content,
        "date" : "2018-08-11",
        "writer" : {
            "id" : "crong"
        }
    })
})