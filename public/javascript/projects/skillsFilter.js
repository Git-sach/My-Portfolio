window.addEventListener('DOMContentLoaded', () => {
    const skills = document.querySelectorAll(".allSkills .skill");
    const content = document.querySelector("#content");
    const skillsArray = [];

    skills.forEach(skill => {
        skill.setAttribute('is_selected', false)
        skill.addEventListener('click', (event) => {
            event.preventDefault();
            if(skill.getAttribute('is_selected') === 'false'){
                skillsArray.push(skill.id);
                skill.setAttribute('is_selected', true)
                skill.style.opacity= "90%"
            } else {
                const index = skillsArray.indexOf(skill.id)
                skillsArray.splice(index, 1);
                skill.setAttribute('is_selected', false)
                skill.style.opacity= "60%"
            }

            if(skillsArray.length === 0){
                skillsArray[0] = 'all';
            }
            axios.get('/projects/filtersSkillsId/' + skillsArray)
            .then(function (response) {
                content.innerHTML = response.data;
            })
            .catch(function (error) {
                console.log(error)
            })
        })
    })
})