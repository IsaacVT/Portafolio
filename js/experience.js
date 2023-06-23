import { xpList } from "./data/exprecienceList.js";

export const printBlocksExperience = (container) => {
    const blocks = xpList.map((item, index) => {
        const box = document.createElement("div");

        box.className =
            (index + 1) % 2 ? "experience__box par" : "experience__box";

        const boxEvidence = document.createElement("div");
        boxEvidence.className = "experience__evidence";

        item.evidence.forEach((evidence) => {
            const img = document.createElement("img");
            img.className = "experience__img";
            img.src = "assets/profesional/" + evidence;
            boxEvidence.appendChild(img);
        });

        const modal = document.createElement("div");
        modal.id = "modal";
        modal.className = "modal";

        const span = document.createElement("span");
        span.className = "cerrar";
        span.textContent = "x";
        modal.appendChild(span);

        const imgModal = document.createElement("img");
        imgModal.id = "imagen-modal";
        imgModal.alt = "Imagen Modal";
        modal.appendChild(imgModal);

        boxEvidence.appendChild(modal);
        box.appendChild(boxEvidence);

        const boxInfo = document.createElement("div");
        boxInfo.className = "experience__info";

        const infoDetails = document.createElement("div");
        infoDetails.className = "experience__details";

        const h2 = document.createElement("h2");
        h2.className = "experience__title";
        h2.textContent = item.title;
        infoDetails.appendChild(h2);

        const h3 = document.createElement("h3");
        h3.className = "experience__text";
        h3.textContent = item.description;
        infoDetails.appendChild(h3);

        boxInfo.appendChild(infoDetails);

        const infoDescription = document.createElement("div");
        infoDescription.className = "experience__description";

        const spanRepo = document.createElement("span");
        const aRepo = document.createElement("a");
        aRepo.href = item.repo;
        aRepo.target = "_blank";
        const buttonRepo = document.createElement("button");
        buttonRepo.className = "experience__boton repo";
        buttonRepo.textContent = "Repositório";
        aRepo.appendChild(buttonRepo);
        spanRepo.appendChild(aRepo);
        infoDescription.appendChild(spanRepo);

        const spanDemo = document.createElement("span");
        const aDemo = document.createElement("a");
        aDemo.href = item.demo;
        aDemo.target = "_blank";
        const buttonDemo = document.createElement("button");
        buttonDemo.className = "experience__boton demo";
        buttonDemo.textContent = "Ver demo";
        aDemo.appendChild(buttonDemo);
        spanDemo.appendChild(aDemo);
        infoDescription.appendChild(spanDemo);

        boxInfo.appendChild(infoDescription);
        box.appendChild(boxInfo);

        return box;
    });

    blocks.forEach((block) => {
        container.appendChild(block);
    });
};
