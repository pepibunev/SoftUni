function solve() {
    const infoElement = document.querySelector('div#info span.info');
    const departButton = document.getElementById('depart');
    const arriveButton = document.getElementById('arrive');

    let nextStopId = 'depot';
    let stopName;

    async function depart() {
        try {
            const res = await fetch(`http://localhost:3030/jsonstore/bus/schedule/${nextStopId}`);
            
            if (!res.ok){
                let error = new Error();
                error.status = response.status;
                error.statusText = response.statusText;
                throw error; 
            }
            const data = await res.json();
            stopName = data.name;
            nextStopId = data.next;
            infoElement.textContent = `Next stop ${stopName}`;
            departButton.disabled = true;
            arriveButton.disabled = false;
        
        
        } catch (error) {
            infoElement.textContent = 'Error';
            departButton.disabled = true;
            arriveButton.disabled = true;
        }
    }

    function arrive() {
        infoElement.textContent = `Arriving at ${stopName}`;
        departButton.disabled = false;
        arriveButton.disabled = true
    }

    return {
        depart,
        arrive
    };
}

let result = solve();