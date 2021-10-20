function doShowAll(){
    <body onload="doShowAll()"></body>
}

function CheckBrowser() {
    if ('localStorage' in window && window['localStorage'] !== null) {
        // We can use localStorage object to store data.
        return true;
    } else {
            return false;
    }
}

// Dynamically populate the table with shopping list items.
//Step below can be done via PHP and AJAX, too.
function doShowAll() {
    if (CheckBrowser()) {
        var key = "";
        var list = "<tr><th>Item</th><th>Value</th></tr>\n";
        var i = 0;
        //For a more advanced feature, you can set a cap on max items in the cart.
        for (i = 0; i <= localStorage.length-1; i++) {
            key = localStorage.key(i);
            list += "<tr><td>" + key + "</td>\n<td>"
                    + localStorage.getItem(key) + "</td></tr>\n";
        }
        //If no item exists in the cart.
        if (list == "<tr><th>Item</th><th>Value</th></tr>\n") {
            list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
        }
        //Bind the data to HTML table.
        //You can use jQuery, too.
        document.getElementById('list').innerHTML = list;
    } else {
        alert('Cannot save shopping list as your browser does not support HTML 5');
    }
}

function localStorage() {
    localStorage.myProperty="myValue";
    delete localStorage.myProperty;
    localStorage.setItem('propertyName','value');
    localStorage.getItem('propertyName');
    localStorage.removeItem('propertyName');

}

function SaveItem() {

    var name = document.forms.ShoppingList.name.value;
    var data = document.forms.ShoppingList.data.value;
    localStorage.setItem(name, data);
    doShowAll();

}

//Change an existing key-value in HTML5 storage.
function ModifyItem() {
    var name1 = document.forms.ShoppingList.name.value;
    var data1 = document.forms.ShoppingList.data.value;
    //check if name1 is already exists

//Check if key exists.
            if (localStorage.getItem(name1) !=null)
            {
              //update
              localStorage.setItem(name1,data1);
              document.forms.ShoppingList.data.value = localStorage.getItem(name1);
            }

    doShowAll();
}

function RemoveItem()
{
var name=document.forms.ShoppingList.name.value;
document.forms.ShoppingList.data.value=localStorage.removeItem(name);
doShowAll();
}

function ClearAll() {
    localStorage.clear();
    doShowAll();
}

//Customer info

var obj1 = { firstname: "John", lastname: "thomson" };
var cust = JSON.stringify(obj1);

//Mailing info
var obj2 = { state: "VA", city: "Arlington" };
var mail = JSON.stringify(obj2);

//Item info
var obj3 = { item: "milk", quantity: 2 };
var basket = JSON.stringify(obj3);

//Next, push three strings into key-value of HTML5 storage.

//Use JSON parse function below to convert string back into object or array.
var New_cust=JSON.parse(cust);
