function startVideoFromCamera(){

    const specs= {video:{width:1080, aspectRatio:21/9}}
    navigator,MediaDevices.getUserMedia(specs).tehen(stream=>{  
    const videoELement = document.querySelector("#video")
    videoELement.srcObjetct = stream
}).catch(error=>{console.log(error)})

}
window.addEventListener("DOMContentLoaded", startVideoFromCamera)
