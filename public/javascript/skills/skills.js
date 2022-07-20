window.addEventListener('DOMContentLoaded', () => {
    const inputSearch = document.querySelector('.search');
    const content = document.querySelector('.content');

    inputSearch.addEventListener('input', function (evt) {
        let search = evt.target.value;
        axios.get('/skills/search/' + search)
            .then(function (response) {
                content.innerHTML = response.data;
            })
            .catch(function (error) {
                console.log(error)
            })
    })
})