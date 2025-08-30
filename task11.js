const { default: axios } = require("axios");

function getBookByIsbnWithPromises(isbn) {
  axios
    .get(`http://localhost:5000/isbn/${isbn}`)
    .then((response) => {
      console.log("Books (with Promises):", response.data);
    })
    .catch((error) => {
      console.error("Error fetching books with Promises:", error.message);
    });
}

async function getBookByIsbnWithAsyncAwait(isbn) {
  try {
    const response = await axios.get(`http://localhost:5000/isbn/${isbn}`);
    console.log("Books (with Async/Await):", response.data);
  } catch (error) {
    console.error("Error fetching books with Async/Await:", error.message);
  }
}

getBookByIsbnWithPromises(1);
getBookByIsbnWithAsyncAwait(1);
