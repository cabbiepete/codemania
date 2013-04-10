var util = require("util");
var events = require("events");

function MyStream() {
    events.EventEmitter.call(this);
}

util.inherits(MyStream, events.EventEmitter);

MyStream.prototype.write = function(data) {
    this.emit("data", data);
}

//consume
var obj = new MyStream();
obj.on('start', function(data) {
  console.log("Starting...");
});
obj.on('data', function(data) {
  console.log(data);
});
obj.on('end', function(data) {
  console.log("Ending..."+data);
});

obj.emit('start');
var i = 0;
var helloInt = setInterval(function() {
  i ++;
  obj.write(""+new Date());
  if (i > 10) {
    clearInterval(helloInt);
    obj.emit('end', new Date());
  }
}, 1000);
