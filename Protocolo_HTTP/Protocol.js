// sem Express // No Express

/*
//////////////////////////////////////////////////////////////////////////////////
//require("/Time")//
//
// esse método pega um módulo // this method takes a module //
//////////////////////////////////////////////////////////////////////////////////
// Um módulo é algo externo como um arquivo .js, ou uma funçao deste arquivo // 
//////////////////////////////////////////////////////////////////////////////////
// A module is something external like a .js file, or a function of this file //
//////////////////////////////////////////////////////////////////////////////////
*/

var http = require("http") // modulo padrao do node // default node module //

http.createServer().listen(3308)

console.log("O servidor está rodande")