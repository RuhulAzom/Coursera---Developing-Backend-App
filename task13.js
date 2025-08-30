const { default: axios } = require("axios");

function getBookByTitleWithPromises(title) {
  axios
    .get(`http://localhost:5000/title/${title}`)
    .then((response) => {
      console.log("Books (with Promises):", response.data);
    })
    .catch((error) => {
      console.error("Error fetching books with Promises:", error.message);
    });
}

async function getBookByTitleWithAsyncAwait(title) {
  try {
    const response = await axios.get(`http://localhost:5000/title/${title}`);
    console.log("Books (with Async/Await):", response.data);
  } catch (error) {
    console.error("Error fetching books with Async/Await:", error.message);
  }
}

getBookByTitleWithPromises("Things Fall Apart");
getBookByTitleWithAsyncAwait("Things Fall Apart");
