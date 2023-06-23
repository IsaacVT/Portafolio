const skills = [
    { name: "HTML 5 ", image: "htlm_icon.png" },
    { name: "Javascript", image: "javascript_icon.png" },
    { name: "CSS", image: "css_icon.png" },
    { name: "Node JS", image: "nodejs_icon.png" },
    { name: "Express", image: "express_icon.png" },
    { name: "React JS", image: "react_icon.png" },
    { name: "Spring Boot", image: "spring_boot_icon.png" },
    { name: "C", image: "c_icon.png" },
    { name: "C++", image: "c_plus_plus_icon.png" },
    { name: "Java", image: "java_icon.png" },
    { name: "MySQL", image: "mysql_icon.png" },
    { name: "PostgreSQL", image: "postgresql_icon.png" },
    { name: "GraphQL", image: "graphql_icon.png" },
    { name: "Mongo", image: "mongo_icon.png" },
    { name: "Cassandra", image: "cassandra_icon.png" },
    { name: "Contenful", image: "contentful_icon.png" },
    { name: "Figma", image: "figma_icon.png" },
    { name: "Git", image: "git_icon.png" },
    { name: "SCRUM", image: "scrum_icon.png" },
    { name: "Fusion 360", image: "fusion_icon.png" },
    { name: "SketchUp", image: "sketchup_icon.png" },
    { name: "Photoshop", image: "photoshop_icon.png" },
    { name: "Illustrator", image: "illustrator_icon.png" },
    { name: "After Effects", image: "after_effects_icon.png" },
];

const hobbies = [
    { name: "Oir música ", image: "music_icon.png" },
    { name: "DJ", image: "dj_icon.png" },
    { name: "Gamer", image: "gamer_icon.png" },
    { name: "Ver series", image: "tv_icon.png" },
    { name: "Ver películas", image: "movie_icon.png" },
    { name: "Tocar guitarra", image: "guitar_icon.png" },
    { name: "Cocinar", image: "cocina_icon.png" },
    { name: "Tomar fotos", image: "fotos_icon.png" },
    { name: "Carpinteria", image: "carpinteria_icon.png" },
];

export const printBoxes = (container, type) => {
    let list = [];
    type === "skills" ? (list = skills) : (list = hobbies);

    const skillsBlocks = list.map((item) => {
        const urlImg = "assets/" + type + "/" + item.image;

        const skillsBox = document.createElement("div");
        skillsBox.classList.add(type + "__box");

        const ul = document.createElement("ul");

        const liImg = document.createElement("li");
        liImg.classList.add(type + "__img");
        const img = document.createElement("img");
        img.src = urlImg;
        liImg.appendChild(img);

        const liName = document.createElement("li");
        liName.classList.add(type + "__name");
        liName.textContent = item.name;

        ul.appendChild(liImg);
        ul.appendChild(liName);

        skillsBox.appendChild(ul);

        return skillsBox;
    });

    skillsBlocks.forEach((block) => {
        container.appendChild(block);
    });
};
