// import { alertMessage } from './modules/alert-message';
// import { consoleMsj } from './modules/console-message';

// alertMessage('message test :)');
// consoleMsj('message two');

var simpleVar;
simpleVar = true;

var promise1 = function(valP1) {
    return new Promise(function(resolve,reject){
        (valP1) ? resolve("p1 was resolved") : reject("p1 was rejected");
    });
}    

var promise2 = function(paramFromP1) {
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve({
                messageP1: `${paramFromP1}`,
                code: "token:123123asasdasd"
            });
        },10*1000);
    });
}

var promise3 = function(simpleVarChanged) {
    return new Promise(function(resolve,reject){
        (simpleVarChanged) ? resolve("p3 was resolved") : reject("p3 was rejected");
    });
}

promise1(simpleVar)
.then(function(res1) { 
    console.log(res1);
    return promise2(res1); 
}).then(function(res2){
    console.log(res2);
    simpleVar = false;
    return promise3(simpleVar);
}).then(function(res3){
        console.log(res3);
    }).catch(function(err){
        console.log(err);
    });