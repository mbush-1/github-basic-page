fetch('/page-specifics/data.json')
    .then(res => res.json())
    .then(data => { // data is an array

        // check that something happenend in the console.
        console.log("console should work");

        // initialize the key variables
        const projectsSection = document.querySelector('.projects-section'); // where to do things
        const projects = data.projects; // the project array | data is everything, projects is the projects array

        // for each loop; goes through each project object in projects array
        projects.forEach(project => {

            // actual project div (container)
            const projectDiv = document.createElement('div');
            projectDiv.className = 'project';

            // project thumbnail
            const thumbnail = document.createElement('img');
            thumbnail.className = 'project-thumbnail';
            thumbnail.src = project['image'];

            // project title/button
            const projectLink = document.createElement('a');
            projectLink.href = project['link'];
            projectLink.target = '_blank';

            const projectTitle = document.createElement('button')
            projectTitle.className = 'project-title';
            projectTitle.textContent = project.name;
            projectLink.appendChild(projectTitle);

            // project description
            const projectDescription = document.createElement('p');
            projectDescription.className = 'project-description';
            projectDescription.textContent = project.description;


            // append all things to the div

            projectDiv.append(thumbnail);
            projectDiv.append(projectLink);
            projectDiv.append(projectDescription);

            // append div to section.
            projectsSection.append(projectDiv);


        });
    })