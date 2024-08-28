let products = JSON.parse(localStorage.getItem('products')) || [];
let editingProductId = null;

document.addEventListener('DOMContentLoaded', () => {
    showProducts(); 
});

function addProduct() {
    const id = document.getElementById('productId').value;
    const name = document.getElementById('productName').value;
    const price = document.getElementById('productPrice').value;
    const rate = document.getElementById('productRate').value;
    const quantity = document.getElementById('productQuantity').value;

    const product = {
        id: parseInt(id),
        name: name,
        price: parseFloat(price),
        rate: parseInt(rate),
        quantity: parseInt(quantity)
    };

    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));
    showProducts();
    clearForm();
}

function updateProduct() {
    if (editingProductId !== null) {
        const id = document.getElementById('productId').value;
        const name = document.getElementById('productName').value;
        const price = document.getElementById('productPrice').value;
        const rate = document.getElementById('productRate').value;
        const quantity = document.getElementById('productQuantity').value;

        const product = products.find(product => product.id === editingProductId);
        if (product) {
            product.id = parseInt(id);
            product.name = name;
            product.price = parseFloat(price);
            product.rate = parseInt(rate);
            product.quantity = parseInt(quantity);

            localStorage.setItem('products', JSON.stringify(products));
            showProducts();
            clearForm();
            editingProductId = null;
            document.getElementById('updateBtn').disabled = true;
            document.getElementById('addBtn').disabled = false;
        }
    }
}

function showProducts() {
    const tableBody = document.getElementById('productTableBody');
    tableBody.innerHTML = '';

    products.forEach((product) => {
        tableBody.innerHTML += `
            <tr>
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.price.toFixed(2)}</td>
                <td>${product.rate}</td>
                <td>${product.quantity}</td>
                <td>
                    <button class="btn btn-warning btn-sm" onclick="editProduct(${product.id})">Edit</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteProduct(${product.id})">Delete</button>
                </td>
            </tr>
        `;
    });
}

function deleteProduct(id) {
    products = products.filter(product => product.id !== id);
    localStorage.setItem('products', JSON.stringify(products));
    showProducts();
}

function editProduct(id) {
    const product = products.find(product => product.id === id);
    if (product) {
        document.getElementById('productId').value = product.id;
        document.getElementById('productName').value = product.name;
        document.getElementById('productPrice').value = product.price;
        document.getElementById('productRate').value = product.rate;
        document.getElementById('productQuantity').value = product.quantity;
        editingProductId = id;
        document.getElementById('updateBtn').disabled = false;
        document.getElementById('addBtn').disabled = true;
    }
}

function clearForm() {
    document.getElementById('productId').value = '';
    document.getElementById('productName').value = '';
    document.getElementById('productPrice').value = '';
    document.getElementById('productRate').value = '';
    document.getElementById('productQuantity').value = '';
    editingProductId = null;
    document.getElementById('updateBtn').disabled = true;
    document.getElementById('addBtn').disabled = false;
}
