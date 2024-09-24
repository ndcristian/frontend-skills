

document.getElementById("idd-btn").addEventListener("click", (e) => {
  // console.log(e);
  // console.log(document.getElementById("idd-in").value);
  // console.log(document.querySelectorAll("input")[0].value);
  const text = document.getElementById("idd-in").value;
  // console.log(text)
  document.getElementById("idd-a").innerHTML = text;
});
// using <script> tag seems having no effect. 
// <h1> works