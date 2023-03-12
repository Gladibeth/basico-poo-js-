function play (id){
  const url = 'https://api.twitter.com/';
  console.log(`Se esta reproduciendo ${url}${id}`);
}
function stop (id){
  const url = 'https://api.twitter.com/';
  console.log(`Se pauso ${url}${id}`);
}


export class Platziclass {
  constructor({
    name,
    videoID,
  }) {
    this.name = name;
    this.videoID = videoID;
  }

  reproducir(){
    play(this.videoID);
  }
  pausa(){
   stop(this.videoID);
  }
}

