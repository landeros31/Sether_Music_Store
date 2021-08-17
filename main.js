
//////////////////////peticion a la API de GiPhy
(()=>{

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
  
  
  })();