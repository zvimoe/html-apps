(function () {

    // -------------------- show exist data ------------ //
    const driversContainer = document.getElementById('drivers');
    const addressContainer = document.getElementById('addresses');

    getDrivers().then(function (res) {
        res = JSON.parse(res)
        var Driverarray = [];
        for (let i = 0; i < res.length; i++) {
            var v = Object.values(res[i])
            var a = new Driver(...v)
            getTemp('templates/driver.html').then(function(temp){
              temp = diploytemp(temp,res[i])
              var container=document.createElement('div')
              container.innerHTML = temp
              driversContainer.appendChild(container);  
        });
    }
        
    }).catch(function (res) {
        console.log(res)
    })
    getAddresses().then(function (res) {
        res = JSON.parse(res)
        var Driverarray = [];
        for (let i = 0; i < res.length; i++) {
            var v = Object.values(res[i])
            var a = new Address(...v)
            Driverarray.push(a)
            getTemp('templates/address.html').then(function(temp){
                temp = diploytemp(temp,res[i])
                var container=document.createElement('div')
                container.innerHTML = temp
                addressContainer.appendChild(container);  
        })
    }
    }).catch(function (res) {
        console.log(res)
    })





    // -------------------- create new data ------------ //
    const addAddressButton = document.getElementById('addAddress');
}());