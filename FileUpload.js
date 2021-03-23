var http = require('http');
var fs = require('fs');
var formidable = require('formidable');

http.createServer(function(req,res)
{
    if(req.url == '/')
    {
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<form action = "biodata" method="post" enctype="multipart/form-data" >');
        res.write('<h1>VJ TECHNO WIZARD</h1>');
        res.write('Name <input type="text" name="username"><br>');
        res.write('D.O.B <input type="date" name="dob"><br>');
        res.write('Qualification <input type="text" name="qualification"><br>');
        res.write('Email id <input type="email" name="mailid"><br>');
        res.write('Phone number <input type="text" name="pno"><br>');
        res.write('Upload your resume <input type="file" name="uploadfile"><br>');
        res.write('<input type="submit">');
        res.end();
    }
    else if(req.url == '/biodata')
    {
        var form = new formidable.IncomingForm();
        form.parse(req, function(err,fields,files)
        {
            res.write('<h1>Name :' + fields.username + '</h1><br>');
            res.write('<h1>D.O.B :' + fields.dob + '</h1><br>');
            res.write('<h1>Qualification :' + fields.qualification + '</h1><br>');
            res.write('<h1>Mail Id :' + fields.mailid + '</h1><br>');
            res.write('<h1>Phone number :' + fields.pno + '</h1><br>');

            var oldpath = files.uploadfile.path;
            var newpath = 'C:/Users/Desktop/' + files.uploadfile.name;
            fs.rename(oldpath,newpath,function(err)
            {
                    if (err) throw err;
                    res.write('<h1>Your File Location</h1><br>');
                    res.write('<h1>Old path : ' + oldpath + '</h1><br>');
                    res.write('<h1>New path : ' + newpath + '</h1><br>');
                    res.end("<h1>Thanks for your interest in VJ TECHNO WIZARD ! Your form submitted successfully</h1>");
            });
        });
    }
    else
    {
     res.end('<h1>404 PAGE NOT FOUND</h1>');   
    }
}).listen(8080);