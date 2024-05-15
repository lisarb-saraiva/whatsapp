
        function sendWhatsAppMessage() {
            var number = document.getElementById('number').value;
            var message = document.getElementById('message').value;

            if (number.length > 0 && message.length > 0) {
                var url = 'https://api.whatsapp.com/send?phone=' + number + '&text=' + encodeURIComponent(message);
                window.open(url);
            }
        }
