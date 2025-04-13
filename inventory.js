let id = 1;                                                                 //id is used to increment to the next row value
let table = document.querySelector('#list');                                //assigns the handle to the html table to a variable
let row = table.insertRow(1);                                               //create the first row 
document.querySelector('#update').addEventListener('click', () => {         //Function for the click event on the button
    
    row = table.insertRow(id++)                                             //Insert a row and increment the row id 
    row.setAttribute('id', `item-${id}`);                                   //Set the id attribute for each row
    row.insertCell(0).innerHTML = document.querySelector('#product-id').value;  //insert the product id from the form into the table cell
    row.insertCell(1).innerHTML = document.querySelector('#product').value;     //insert the product from the form into the table cell
    row.insertCell(2).innerHTML = document.querySelector('#quantity').value;    //insert the quantity from the form into the table cell
    row.insertCell(3).innerHTML = document.querySelector('#price').value;       // insert the price from the form into the table cell
    
    document.table.append(row);                                                 // append the row to the table
    document.getElementById('myForm').reset();                                  // code to reset the form and clear the elements
});

