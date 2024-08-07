
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '3bc5953286mshaac5828375c91aep18ada8jsn005d90f813ac',
		'x-rapidapi-host': 'ip-geolocation-apis.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}


const fetchAPInfo = ip => {
   return fetch(`https://ip-geolocation-apis.p.rapidapi.com/json/18.197.117.10?fields=status%2Cmessage%2Ccontinent%2CcontinentCode%2Ccountry%2CcountryCode%2Cregion%2CregionName%2Ccity%2Cdistrict%2Czip%2Clat%2Clon%2Ctimezone%2Coffset%2Ccurrency%2Cisp%2Corg%2Cas%2Casname%2Creverse%2Cmobile%2Cproxy%2Chosting%2Cquery/${ip}`, options)
   .then(res => res.json())
   .catch(err => console.error(err))
    
}

const $ = selector => document.querySelector(selector)

const $form = $('#form')
const $input = $('#input')
const $submit = $('#submit')
const $results = $('#results')

$form.addEventListener('submit', async (e) =>{
    e.preventDefault()
    const {value} = $input
    if (!value) return

    $submit.setAttribute('disabled', '')
    $submit.setAttribute('aria-busy', 'true')

    const ipInfo = await fetchAPInfo(value)

    if(ipInfo){
        $results.innerHTML = JSON.stringify(ipInfo, null, 2)
    }

    $submit.removeAttribute('disabled')
    $submit.removeAttribute('aria-busy')
})

