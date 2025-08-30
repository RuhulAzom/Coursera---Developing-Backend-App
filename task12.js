const { default: axios } = require("axios");

function getBookByAuthorWithPromises(author) {
  axios
    .get(`http://localhost:5000/author/${author}`)
    .then((response) => {
      console.log("Books (with Promises):", response.data);
    })
    .catch((error) => {
      console.error("Error fetching books with Promises:", error.message);
    });
}

async function getBookByAuthorWithAsyncAwait(author) {
  try {
    const response = await axios.get(`http://localhost:5000/author/${author}`);
    console.log("Books (with Async/Await):", response.data);
  } catch (error) {
    console.error("Error fetching books with Async/Await:", error.message);
  }
}

getBookByAuthorWithPromises("Chinua Achebe");
getBookByAuthorWithAsyncAwait("Chinua Achebe");
