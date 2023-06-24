import { skills } from "./data/skillsList.js";
import { hobbies } from "./data/hobbiesList.js";

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
