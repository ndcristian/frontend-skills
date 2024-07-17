
function secureBooking2() {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
}

secureBooking2()();
secureBooking2()();
secureBooking2()();

