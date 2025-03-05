// Sample product data
const products = [
    {
      id: 1,
      name: 'CD22-formula',
      potency: '900 Billion Sachet',
      description: 'Superior power\nPotency: 900 billion live bacteria per sachet'
    },
    {
      id: 2,
      name: 'CD22-formula',
      potency: '450 Billion Sachet',
      description: 'Superior power\nPotency: 450 billion live bacteria per sachet'
    }
  ];
  
  // Cart array to store added products
  let cart = [];
  
  // Function to add product to cart
  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
      cart.push(product);
      alert(`${product.name} added to cart!`);
      console.log(cart); // For checking the cart in console
    }
  }
  
  // Event listeners for Shop Now buttons
  document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.shop-now');
    buttons.forEach(button => {
      button.addEventListener('click', (e) => {
        const productId = parseInt(e.target.dataset.productId);
        addToCart(productId);
      });
    });
  });
  
