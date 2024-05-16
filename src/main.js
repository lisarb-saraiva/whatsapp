

function sendMessage() {
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    const url = `https://api.whatsapp.com/send?phone=${phone}&text=${message}`;
    window.open(url, '_blank');
}


  
