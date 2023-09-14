function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function PictureMode(){
  for(var i=0;i<100;i++){
    // Here You can type your custom JavaScript...alert("DISNEY");
    await sleep(1000);
    if(document.getElementsByTagName('video')[0]){
      var video = document.getElementsByTagName('video')[0];
      video.removeAttribute("disablepictureinpicture");
      console.log("REMOVED");
    }else{
      console.log("Does not exist");
    }
  }
}
PictureMode();
