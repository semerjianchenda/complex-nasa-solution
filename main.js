document.querySelector('button').addEventListener('click', getNasaLocations)


function getNasaLocations() {

    let url = `https://data.nasa.gov/resource/gvk9-iz74.json`

    fetch(url)
        .then(res => res.json())
        .then(data => {


            console.log(data)
            console.log(data[0].facility)
            console.log(data[0].center)
            console.log(data[0].country)
            console.log(data[0].state)

            const locationInfo = []

            let latInfo;
            let longInfo;


            for (let i = 0; i < data.length; i++) {

                const nasaLocations = [data[i].facility, data[i].center, data[i].country, data[i].state]


                locationInfo.push(nasaLocations)
                console.log(nasaLocations)

                document.querySelector('h3').innerText = locationInfo

                latInfo = data[i].location.latitude
                longInfo = data[i].location.longitude


                fetch(`http://api.weatherapi.com/v1/current.json?q=${latInfo},${longInfo}&key=b241fe98261948029a4175544241810`)
                .then(res => res.json())
                .then(data => {

                    // console.log(data)
                    console.log(data.current.temp_f)

                    document.querySelector('h4').innerText += data.current.temp_f


                })
            }


        })

        .catch(err => {
            console.log(`error ${err}`)
        });
}