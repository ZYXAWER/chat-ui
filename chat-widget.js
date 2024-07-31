(function() {
    document.addEventListener('DOMContentLoaded', function() {
        const iframe = document.createElement('iframe');
        iframe.src = 'https://raw.githubusercontent.com/ZYXAWER/chat-ui/main/chat.html';
        iframe.style.width = '300px';
        iframe.style.height = '400px';
        iframe.style.position = 'fixed';
        iframe.style.bottom = '10px';
        iframe.style.right = '10px';
        iframe.style.border = 'none';
        iframe.style.zIndex = '1000';
        document.body.appendChild(iframe);
    });
})();
