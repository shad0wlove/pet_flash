
document.addEventListener('DOMContentLoaded', function() {
    // Update current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // WhatsApp contact functionality
    const whatsAppNumber = "+5538992416142";
    const whatsAppMessage = "Olá! Gostaria de saber mais sobre os produtos Pet Flash.";
    
    function openWhatsApp() {
        const whatsappURL = `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(whatsAppMessage)}`;
        window.open(whatsappURL, '_blank');
    }
    
    // Add WhatsApp functionality to all contact buttons
    const whatsappButton = document.getElementById('whatsapp-button');
    if (whatsappButton) {
        whatsappButton.addEventListener('click', openWhatsApp);
    }
    
    const contactWhatsAppBtn = document.getElementById('contact-whatsapp-btn');
    if (contactWhatsAppBtn) {
        contactWhatsAppBtn.addEventListener('click', openWhatsApp);
    }
    
    const footerWhatsAppBtn = document.getElementById('footer-whatsapp-btn');
    if (footerWhatsAppBtn) {
        footerWhatsAppBtn.addEventListener('click', openWhatsApp);
    }
    
    const viewProductsBtn = document.getElementById('view-products-btn');
    if (viewProductsBtn) {
        viewProductsBtn.addEventListener('click', function() {
            document.getElementById('products').scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
    }
    
    // Add to cart functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-product-id');
            showToast('Produto adicionado ao carrinho!');
            
            // Add a small delay before opening WhatsApp
            setTimeout(openWhatsApp, 1500);
        });
    });
    
    // Favorite button functionality
    const favoriteButtons = document.querySelectorAll('.favorite-button');
    favoriteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-product-id');
            this.classList.toggle('active');
            
            if (this.classList.contains('active')) {
                this.querySelector('.heart-icon').setAttribute('fill', 'currentColor');
                showToast('Produto adicionado aos favoritos!');
            } else {
                this.querySelector('.heart-icon').setAttribute('fill', 'none');
                showToast('Produto removido dos favoritos.');
            }
        });
    });
    
    // Toast functionality
    function showToast(message) {
        const toast = document.getElementById('toast');
        toast.querySelector('.toast-message').textContent = message;
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
});
