const { default: axios } = require("axios");

function getBooksWithPromises() {
  axios
    .get("http://localhost:5000/")
    .then((response) => {
      console.log("Books (with Promises):", response.data);
    })
    .catch((error) => {
      console.error("Error fetching books with Promises:", error.message);
    });
}

async function getBooksWithAsyncAwait() {
  try {
    const response = await axios.get("http://localhost:5000/");
    console.log("Books (with Async/Await):", response.data);
  } catch (error) {
    console.error("Error fetching books with Async/Await:", error.message);
  }
}

getBooksWithPromises();
getBooksWithAsyncAwait();
