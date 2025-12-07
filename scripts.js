const ESP_IP = '192.168.1.164';

async function updateStatus() {
    try {
        const res = await fetch(`http://${ESP_IP}/api/config`);
        const data = await res.json();
        document.getElementById('light').classList.toggle('on', data.light_state);
    } catch(e) {
        document.getElementById('status').textContent = 'ESP offline';
    }
}

async function toggleLight() {
    try {
        await fetch(`http://${ESP_IP}/api/toggle`, {method: 'POST'});
        updateStatus();
    } catch(e) {
        alert('ESP connection failed');
    }
}

// document.getElementById('light').addEventListener('click', toggleLight);
setInterval(updateStatus, 2000);
updateStatus();
