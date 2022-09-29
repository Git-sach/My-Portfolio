window.addEventListener('DOMContentLoaded', () => {
    const inputSearch = document.querySelector('#search');
    const content = document.querySelector('#content');

    inputSearch.addEventListener('input', function (evt) {
        let search = evt.target.value;
        if(search === ""){
            search = "null"
        }
        console.log(search);
        axios.get('/skills/search/' + search)
            .then(function (response) {
                console.log(response.data);
                content.innerHTML = response.data;
            })
            .catch(function (error) {
                console.log(error)
            })
    })
})