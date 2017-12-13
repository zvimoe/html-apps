function getDrivers() {
   return fetchJson("GET",'data/drivers.json');
}

function getAddresses() {
  return fetchJson('GET','data/addresses.json')
}

function fetchJson(methud,url) {
   return new Promise(function(resolve,reject){
    
     var con = new XMLHttpRequest();
     con.open(methud,url)
     con.onload = function(){
         resolve(con.responseText)
     }
     con.onerror =function(e){
         reject(e)
     }
    con.send();
        
       
   })
}
function getTemp(url){
   return fetchJson('GET',url)
}
function diploytemp(temp,obj){
    var keys=Object.keys(obj);
            for(let i=0;i<keys.length;i++){
              temp = temp.replace("{{"+keys[i]+"}}",obj[keys[i]]);
           
             }
             return temp;
}
