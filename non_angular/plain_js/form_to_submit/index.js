// Making a GET request to localhost:8080
fetch("http://localhost:8080/api/experiences")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    console.log("Success:", data);
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

// Making a POST request to localhost:8080
// fetch('http://localhost:8080/api/stories/test', {
// method: 'POST',
// headers: {
// 'Content-Type': 'application/json',
// Authorization: localStorage.getItem('token')
// },
// body: JSON.stringify({ name: "asdfsdf", password: "adsfasdfa", comments:"asdfadsfasdf" })
// })
// .then(response => {
// if (!response.ok) {
//    console.log(localStorage.getItem('token'))
// throw new Error('Network response was not ok ' + response.statusText);
// }
// return response.json();
// })
// .then(data => {
// console.log('Success:', data);
// localStorage.getItem('token')
// })
// .catch(error => {
// console.error('There was a problem with the fetch operation:', error);
// localStorage.getItem('token')
// });

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission
  console.log("****************", event);
 var openedW =  window.open("http://localhost:8080/#/homepage", "_blank");
  // Custom submit logic
  const formData = new FormData(this);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  console.log("Form data:", data);
  setTimeout(()=>{
    console.log("WindowData:", openedW);
    openedW.fetch("http://localhost:8080/api/stories/test", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((result) => {
          console.log("Success POST:", result);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
  },1000)
  
  // window.location.replace('http://localhost:8080')
  //   window.location.href = "http://localhost:8080";
  // window.location.assign('http://localhost:4200/#/admin/stories');

  const token = localStorage.getItem("token");
  console.log(token);
//   window.history.go(-1);
  // window.history.back()
  // Example: Send data to the server

  
//   fetch("http://localhost:8080/api/stories/test", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: token,
//     },
//     body: JSON.stringify(data),
//   })
//     .then((response) => response.json())
//     .then((result) => {
//       console.log("Success POST:", result);
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });
});
