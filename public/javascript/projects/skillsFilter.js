window.addEventListener('DOMContentLoaded', () => {
    const skills = document.querySelectorAll(".allSkills .skill");
    const skillsArray = [];
    skills.forEach(skill => {
        skill.setAttribute('is_selected', false)
        skill.addEventListener('click', (event) => {
            event.preventDefault();
            console.log(skill.getAttribute('is_selected'));
            if(skill.getAttribute('is_selected') === 'false'){
                skillsArray.push(skill.id);
                skill.setAttribute('is_selected', true)
                skill.style.opacity= "100%"
            } else {
                const index = skillsArray.indexOf(skill.id)
                skillsArray.splice(index, 1);
                skill.setAttribute('is_selected', false)
                skill.style.opacity= "60%"
            }
            console.log(skillsArray);
        })
    })
})