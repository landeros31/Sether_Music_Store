//////////////piano
var context= new AudioContext();
 
function jsNota(frecuencia){
        var o= context.createOscillator();
        g=context.createGain();
        o.connect(g);
        o.type="sawtooth";
        o.frequency.value=frecuencia;
        g.connect(context.destination);
        o.start(0);
        g.gain.exponentialRampToValueAtTime(0.00001,context.currentTime +1.5);
}

//////////////////////////por teclas 
$body =document.getElementById("body")

$body.addEventListener('keydown', (e) => {

  if(e.key=="a"){
    console.log("do")
    jsNota(261.626);
  }
  if(e.key=="w"){
    console.log("do#")
    jsNota(277.183);
  }
  if(e.key=="s"){
    console.log("re")
    jsNota(293.665);
  }
  if(e.key=="e"){
    console.log("re#")
    jsNota(293.665);
  }
  if(e.key=="d"){
    console.log("mi")
    jsNota(329.628);
  }
  if(e.key=="f"){
    console.log("fa")
    jsNota(174.614);
  }
  if(e.key=="t"){
    console.log("fa#")
    jsNota(184.997);
  }
  if(e.key=="g"){
    console.log("sol")
    jsNota(195.998);
  }
  if(e.key=="y"){
    console.log("sol#")
    jsNota(207.652);
  }
  if(e.key=="h"){
    console.log("la")
    jsNota(220.000);
  }
  if(e.key=="u"){
    console.log("la#")
    jsNota(233.082);
  }
  if(e.key=="j"){
    console.log("si")
    jsNota(246.942);
  }
});


//////////////////////peticion a la API de GiPhy
function selectapi(){

  const xhr=new XMLHttpRequest(),
  $gif =document.getElementById("gif")
  $service1=document.getElementById("service1")
  $service2=document.getElementById("service2")
  $service3=document.getElementById("service3")
 
  //const link ="https://media.giphy.com/media/9SINvGfhqxDhtKmYvX/giphy.gif"
  
  xhr.addEventListener("readystatechange",(e)=>{
  if(xhr.readyState !==4){ ///xhr tiene 4 estados este if se hace para que solo imprima el ultimo que es el de finalizado (estado 4) se imprime en else
    return;
  }else{
    console.log(xhr)
  }
  
  if(xhr.status>=200 && xhr.status<300){
     console.log("exito")
     ///console.log(xhr.responseText) usar para ver que tienes la informacion
     let json =JSON.parse(xhr.responseText) /////transformar el archivo a json que pueda entender JS
     console.log(json)
     console.log(json.data) /////////////ingreso a el objeto
  
     const datos=json.data.map(data=>data.images.downsized.url) ///////////pongo las url en un array
     console.log(datos)
    
     $gif.style.backgroundImage= `url(${datos[0]})`
     $service1.style.backgroundImage=`url(${datos[4]})`
     $service2.style.backgroundImage=`url(${datos[3]})`
     $service3.style.backgroundImage=`url(${datos[2]})`
     
  }else{
    console.log("error")
  }
  })
  //////////////ingreso a la API para traer el archivo   ///
  xhr.open("GET","https://api.giphy.com/v1/gifs?api_key=KwwRTY3pUfli9cb3jgFXdP2URverGB1C&ids=9SINvGfhqxDhtKmYvX+%2C+pEGIFM7NMgWVG+%2C+l1J3NVxmdwdewwRzO+%2C+YOveQX8gVE94Ke8Fmo+%2C+fdLR99RFsxv1hwB4Ha");
  
  ///////////////////////ejecutar /////
  xhr.send();
  
  
  };
  selectapi();