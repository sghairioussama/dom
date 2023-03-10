
const itemList = document.getElementById('item-list');
const cartItems = document.getElementById('cart-items');
const clearCart = document.getElementById('clear-cart');
const placeOrder = document.getElementById('place-order');
const total = document.getElementById('total-price');

let cartTotal = 0;

itemList.addEventListener('click', (event) => {
  if (event.target.classList.contains('add-to-cart')) {
    const item = event.target.parentNode;
    const itemName = item.getElementsByTagName('h3')[0].innerText;
    const itemPrice = parseFloat(item.getElementsByTagName('p')[0].innerText.slice(6));
    const itemImageSrc = item.getElementsByTagName('img')[0].src;

    addToCart(itemName, itemPrice, itemImageSrc);
  }
});

cartItems.addEventListener('click', (event) => {
  if (event.target.classList.contains('remove-item')) {
    const item = event.target.parentNode;
    const itemName = item.getElementsByTagName('span')[0].innerText;
    const itemPrice = parseFloat(item.getElementsByTagName('span')[1].innerText.slice(0, -1));
    removeCartItem(itemName, itemPrice, item);
  }
});

clearCart.addEventListener('click', () => {
  while (cartItems.firstChild) {
    cartItems.removeChild(cartItems.firstChild);
  }
  cartTotal = 0;
  total.innerText = cartTotal.toFixed(2);
});

placeOrder.addEventListener('click', () => {
//   alert('Votre commande a été passée avec succès!');
alert(`Votre commande a été passée pour un total de ${cartTotal.toFixed(2)}€`);
  while (cartItems.firstChild) {
    cartItems.removeChild(cartItems.firstChild);
  }
  cartTotal = 0;
  total.innerText = cartTotal.toFixed(2);
});

function addToCart(name, price, imageSrc) {
  const existingCartItem = cartItems.querySelector(`[data-name="${name}"]`);
  if (existingCartItem) {
    const existingCartItemQuantity = parseInt(existingCartItem.getElementsByTagName('span')[2].innerText);
    existingCartItem.getElementsByTagName('span')[2].innerText = existingCartItemQuantity + 1;
    cartTotal += price;
  } else {
    const cartItem = document.createElement('li');
    cartItem.setAttribute('data-name', name);

    const cartItemImage = document.createElement('img');
    cartItemImage.setAttribute('src', imageSrc);
    cartItemImage.setAttribute('alt', name);
    cartItemImage.setAttribute('width', '10%');
    cartItem.appendChild(cartItemImage);

    const cartItemName = document.createElement('span');
    cartItemName.innerText = name;
    cartItem.appendChild(cartItemName);

    const cartItemPrice = document.createElement('span');
    cartItemPrice.innerText = `${price.toFixed(2)}€`;
    cartItem.appendChild(cartItemPrice);

    const cartItemQuantity = document.createElement('span');
    cartItemQuantity.innerText = '1';
    cartItem.appendChild(cartItemQuantity);

    const removeButton = document.createElement('button');
    removeButton.innerText = 'Supprimer';
    removeButton.setAttribute('class', 'remove-item');
    cartItem.appendChild(removeButton);

    cartItems.appendChild(cartItem);

    cartTotal += price;
  }

  total.innerText = cartTotal.toFixed(2);
}

function removeCartItem(name, price, item) {
  const itemQuantity = parseInt(item.getElementsByTagName('span')[2].innerText);
  if (itemQuantity > 1) {
    item.getElementsByTagName('span')[2].innerText = itemQuantity - 1;
  } else {
    cartItems.removeChild(item);
  }
  cartTotal -= price;
  total.innerText = cartTotal.toFixed(2);
}


// slideshow

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}



const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  if (validateForm()) {
    form.submit();
  }
});

function validateForm() {
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const subject = document.getElementById('subject');
  const message = document.getElementById('message');
  
  if (name.value.trim() === '') {
    alert('Veuillez saisir votre nom.');
    name.focus();
    return false;
  }
  
  if (email.value.trim() === '') {
    alert('Veuillez saisir votre email.');
    email.focus();
    return false;
  }
  
  if (subject.value.trim() === '') {
    alert('Veuillez saisir le sujet de votre message.');
    subject.focus();
    return false;
  }
  
  if (message.value.trim() === '') {
    alert('Veuillez saisir votre message.');
    message.focus();
    return false;
  }
  
  return true;
}

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     document.getElementById("myBtn").style.display = "block";
//   } else {
//     document.getElementById("myBtn").style.display = "none";
//   }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }
var scrollToTopButton = document.getElementById("scroll-to-top-button");

function scrollToTop() {
if (document.body.scrollTop !== 0 || document.documentElement.scrollTop !== 0) {
window.scrollTo({
top: 0,
behavior: "smooth"
});
}
}

function toggleScrollToTopButton() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
scrollToTopButton.classList.add("show");
} else {
scrollToTopButton.classList.remove("show");
}
}

scrollToTopButton.addEventListener("click", function() {
scrollToTop();
});

window.addEventListener("scroll", function() {
toggleScrollToTopButton();
});

toggleScrollToTopButton();