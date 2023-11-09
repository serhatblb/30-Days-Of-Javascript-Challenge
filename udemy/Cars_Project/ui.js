function UI() {



}

UI.prototype.addCarToUI = function (newCar) {

    const carList = document.getElementById("cars");
    carList.innerHTML += `
    <tr>
        <td><img src="${newCar.url}" class="img-fluid img-thumbnail"></td>
        <td>${newCar.title}</td>
        <td>${newCar.price}</td>
        <td><a href="#" id = "delete-car" class = "btn btn-danger">Araci Sil</a></td>
    </tr> 

`
}

UI.prototype.clearInputs = function (element1, element2, element3) {
    element1.value = "";
    element2.value = "";
    element3.value = "";
}

UI.prototype.displayMessages = function (message, type) {
    const cardBody = document.querySelector(".card-body");

    //alert div
    const div = document.createElement("div");
    div.className = `alert alert-${type}`;
    div.textContent = message;
    cardBody.appendChild(div);

    setTimeout(function () {
        div.remove();
    }, 2000)
}

UI.prototype.loadAllCArs = function (cars) {
    const carList = document.getElementById("cars");

    cars.forEach(function (car) {
        carList.innerHTML += `
        <tr>
            <td><img src="${car.url}" class="img-fluid img-thumbnail"></td>
            <td>${car.title}</td>
            <td>${car.price}</td>
            <td><a href="#" id = "delete-car" class = "btn btn-danger">Araci Sil</a></td>
        </tr> 
    `
    });
}

UI.prototype.deleteCarFromUI = function (element) {
    element.parentElement.parentElement.remove();
}

UI.prototype.clearAllCarsFromUI = function () {
    const carList = document.getElementById("cars");

    if (carList !== null) {
        while (carList.firstChild !== null) {
            carList.firstElementChild.remove();
        }
    }

}