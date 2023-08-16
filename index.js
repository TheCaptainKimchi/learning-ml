const axios = require("axios");

const url = "http://localhost:8080/";

axios
  .get(
    `${url}matchId?puuid=hsGXe6aNiaARussPRER1jIGiRCcNOMZbv9oZrHcVkDgX9HxuptRTnZw9EBweIPf1Dq8TxO79L8MNbg`
  )
  .then((response) => {
    const data = response.data;

    const compMatches = data.filter((match) => match.queueId === "competitive");

    console.log(compMatches);
  });
