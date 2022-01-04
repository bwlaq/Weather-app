<script>
    let location = 'Brisbane';
    const fetchWeather = ( async ()=> {
        const response = await fetch ('http://www.bom.gov.au/fwo/IDQ60801/IDQ60801.94576.json', {mode: 'no-cors'})
        return await response.json();
    })()
</script>

<style>
    #weather-card{
        background-color: white;
    }
</style>

<h1>
    Weather in {location}
</h1>

<div id = 'weather-card'>
    {#await fetchWeather}
    <p>...fetching weather</p>
    {:then data}
    <h3>{data.observations}</h3>
    <p></p>
    {:catch error}
	<p>{error}</p>
    {/await}
</div>