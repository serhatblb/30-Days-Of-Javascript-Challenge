const form = document.getElementById("car-form");
const titleElement = document.querySelector("#title");
const priceElement = document.querySelector("#price");
const urlElement = document.querySelector("#url");
const cardbody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-cars");

// UI objesini baslatma

const ui = new UI();

const storage = new Storage();


// Tum Eventleri Yukleme
eventListeners();

function eventListeners() {
    form.addEventListener("submit", addCar);
    document.addEventListener("DOMContentLoaded", function () {
        let cars = storage.getCarsFromStorage();
        ui.loadAllCArs(cars);
    });
    cardbody.addEventListener("click", deleteCar);
    clear.addEventListener("click", clearAllCars);
}

function addCar(e) {


    const title = titleElement.value;
    const price = priceElement.value;
    const url = urlElement.value;

    if (title === "" || price === "" || url === "") {
        ui.displayMessages("Tum Alanlari Doldurun...", "danger")
    } else {
        //yeni arac
        const newCar = new Car(title, price, url);

        storage.addCarToStorage(newCar);

        ui.addCarToUI(newCar); //arayuze arac ekleme
        ui.displayMessages("Arac basariyla eklendi...", "success")
    }
    ui.clearInputs(titleElement, urlElement, priceElement);
    e.preventDefault();
}

function deleteCar(e) {
    if (e.target.id === "delete-car") {
        ui.deleteCarFromUI(e.target);
        storage.deleteCarFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        ui.displayMessages("Silme Islemi Basariyla Gerceklesti", "success")
    }
}

function clearAllCars() {

    if (confirm("Tum Araclar Silinece. Emin misiniz??")) {
        ui.clearAllCarsFromUI();
        storage.clearAllCarsFromStorage();

    }
}