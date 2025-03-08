let productName = document.getElementById('inputname');
let productPrice = document.getElementById('inputprice');
let category = document.getElementById('inputcategory');
let quantity = document.getElementById('inputquantity');
let updateButton = document.getElementById('updateButton');
let table = document.getElementById('tbody');

let product = [];
let edit = -1;


function add() {
    if (productName.value === '' || productPrice.value === '' && category.value === '' || quantity.value === '') {
        alert("error")
    } else {
        let input = {
            productName: productName.value,
            productPrice: productPrice.value,
            category: category.value,
            quantity: quantity.value,
        }

        if (edit === -1) {
            product.push(input);
        } else {
            product[edit] = input;
            edit = -1;
            updateButton.style.display = 'none';
        }
        clear()
        show()
    }
}

function show() {
    table.innerHTML = ''
    product.forEach((product, index) => {
        table.innerHTML += `
        <tr>
            <td>${product.productName}</td>
            <td>${product.productPrice}</td>
            <td>${product.category}</td>
            <td>${product.quantity}</td>
            <td><button class="btn btn-success" onclick="editProduct(${index})">Edit</button></td>
            <td><button class="btn btn-warning" onclick="deleteProduct(${index})">Delete</button></td>
        </tr>
        `
    });
}



function clear() {
    productName.value = '';
    productPrice.value = '';
    category.value = '';
    quantity.value = '';
}

function deleteProduct(index) {
    product.splice(index, 1);
    show();
}

function editProduct(index) {
    let prod = product[index];
    productName.value = prod.productName;
    productPrice.value = prod.productPrice;
    category.value = prod.category;
    quantity.value = prod.quantity;
    edit = index;
    updateButton.style.display = 'inline';

}

function updateProduct() {
    add();
}