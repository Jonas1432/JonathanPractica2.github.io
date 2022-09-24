self.addEventListener('install', (event) =>{
    console.log('SW: Instalado');
});

self.addEventListener('activate', (event)=>{
    console.log('SW: Activado');
    const myPromise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('Instalando finalizado');
            resolve('OK');
        }, 3000);
    });
    event.waitUntil(myPromise);
});

self.addEventListener('fetch', (event) =>{
   // console.log(event.request.url);
    if(event.request.url.includes('style.css')){
        const repuesta = new Response(
            `body{
                color: red;
                background-color: #000;
            }`,
            {
                headers:{
                    'Content-Type' : 'text/css'
                }
            }
        )
        event.respondWith(repuesta);
    }
    if(event.request.url.includes('.jpg')){
        
        const respuesta = fetch('./images/imagen2.jpg');
        
        event.respondWith(respuesta);
    }
});