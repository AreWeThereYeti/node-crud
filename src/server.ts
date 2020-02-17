import app from "./app";
let port = process.env.PORT || 4000;

app.on('listening',function(){
  console.log('ok, server is running');
});

app.listen(port, () => {
  console.log('Server is up and running on port number ' + port);
});