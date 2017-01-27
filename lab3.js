/** Created by NOshukany on 01/25/2017 */


// link to the connect npm package
let connect = require('connect');
let url = require('url');

//create a new instance of a connect application
let app = connect();

//calculator function 
let calc = function(request, response, next){
    let qs = url.parse(request.url, true).query;

    let method = qs.method;
    let x = qs.x;
    let y = qs.y;

    //methods
    if(method == 'add'){
        response.write(x + '+' + y + '=' + (parseInt(x)+parseInt(y)));
        response.end();
    }else if(method == 'subtract'){
        response.write(x + '-' + y + '=' + (parseInt(x)-parseInt(y)));
        response.end();
    }else if(method == 'multiply'){
        response.write(x + 'x' + y + '=' + (parseInt(x)*parseInt(y)));
        response.end();
    }else if(method == 'divide'){
        response.write(x + '÷' + y + '=' + (parseInt(x)/parseInt(y)));
        response.end();
    }else{
        response.write('Invalid operation, please use either add, subtract, multiply, or divide');
        response.end();
    }
}

app.use('/lab3', calc);

//start the server on port 3000
app.listen(3000);
console.log('Connect running on port 3000');