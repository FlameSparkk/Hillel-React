const axios = require('axios').default;

module.exports = {
    makeApiCall : url => {
        return (
            axios.get(url)
            .then(response => response.data)
            .catch(err => console.log(err))
        )
    }
}