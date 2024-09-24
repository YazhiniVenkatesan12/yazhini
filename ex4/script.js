const restaurantList = document.getElementById('restaurant-list');
const cartItems = document.getElementById('cart-items');
const totalPriceElem = document.getElementById('total-price');

const restaurants = [
    { id: 1, name: 'Sushi House', menu: [{ name: 'California Roll', price: 10 }, { name: 'Tuna Sashimi', price: 15 }, { name: 'Tempura Udon', price: 12 }] },
    { id: 2, name: 'Taco Place', menu: [{ name: 'Chicken Taco', price: 5 }, { name: 'Beef Burrito', price: 7 }, { name: 'Veggie Quesadilla', price: 6 }] },
    { id: 3, name: 'Pasta Bistro', menu: [{ name: 'Spaghetti Carbonara', price: 11 }, { name: 'Fettuccine Alfredo', price: 10 }, { name: 'Pesto Penne', price: 12 }] },
    { id: 4, name: 'Curry Corner', menu: [{ name: 'Chicken Curry', price: 9 }, { name: 'Paneer Tikka Masala', price: 8 }, { name: 'Vegetable Biryani', price: 7 }] },
    { id: 5, name: 'Salad Bar', menu: [{ name: 'Caesar Salad', price: 6 }, { name: 'Greek Salad', price: 7 }, { name: 'Quinoa Salad', price: 8 }] }
];

let cart = [];

function displayRestaurants() {
    restaurantList.innerHTML = '';
    restaurants.forEach(restaurant => {
        const div = document.createElement('div');
        div.classList.add('restaurant');
        div.innerHTML = `
            <h3>${restaurant.name}</h3>
            <h4>Menu</h4>
            <ul>${restaurant.menu.map(item => `<li>${item.name} - $${item.price} <button onclick="orderFood(${restaurant.id}, '${item.name}', ${item.price})">Order</button></li>`).join('')}</ul>
        `;
        restaurantList.appendChild(div);
    });
}

function orderFood(restaurantId, foodName, price) {
    cart.push({ foodName, price });
    updateCart();
}

function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.foodName} - $${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });
    totalPriceElem.textContent = total.toFixed(2);
}

function placeOrder() {
    if (cart.length === 0) {
        alert('Your cart is empty. Please add items to your cart before placing an order.');
        return;
    }
    alert(`Your order has been placed! Total: $${totalPriceElem.textContent}`);
    cart = []; // Clear the cart after placing the order
    updateCart();
}

// Initialize the app
displayRestaurants();
