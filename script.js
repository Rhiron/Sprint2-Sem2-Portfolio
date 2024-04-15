let currentIndex = 0;
const projects = [
    { img: './Images/RunnerCubed.png', desc: "Runner Cubed is my inaugural venture into game development, crafted with the Unity engine and scripted in C#. This project allowed me to grasp the intricacies of Unity's 3D physics and deepen my understanding of C#. In this 3D runner game, players navigate a cube by sliding it across surfaces using the 'A' and 'D' keys, leveraging ground friction to dodge obstacles. The game features level progression with dynamic respawning, as well as start and end menus for a complete game experience.", tech: ['Unity', 'C#'] },
    { img: './Images/Qap_3_s1_py.png', desc: 'Harnessing the versatility of Python, this program is designed to streamline the mundane task of receipt creation into a dynamic and interactive process. With user input at its core, the software deftly crafts detailed invoices tailored to the intricacies of used car sales transactions. Each receipt is meticulously calculated, presenting a breakdown of sale prices, trade allowances, applicable fees, taxes, and structured payment plans. A clear, ASCII-rendered output offers an immaculate representation of traditional receipts, complete with customer and vehicle details, cementing its utility in a bustling sales environment.', tech: ['Python'] },
    { img: './Images/Babins-catering.png', desc: "This website design project serves as the virtual storefront for Babin's Catering, Developed from scratch using HTML, JavaScript, and CSS, the site features a vibrant display of the company's menu offerings, bringing the allure of golden, crispy fish and chips to the fingertips of online customers. With an intuitive layout and responsive design, patrons can easily navigate through the service's culinary portfolio, from the Food Truck Menu to detailed Catering Packages, fostering an appetizing and accessible user experience. This project showcases a seamless blend of mouth-watering visuals with user-friendly functionality, capturing the essence of Babin's delectable brand.", tech: ['HTML', 'CSS', 'JavaScript'] },
    { img: './Images/Smart-sole.png', desc: "Crafting the seamless fusion of functionality and style, the Smart Sole e-commerce platform offers a front-end solution tailored for the modern shopper. My central contribution to this React-based project was the design and implementation of an intuitive shopping cart and checkout system, which dynamically accommodates the addition of new products. This system streamlines the user journey from selection to purchase, ensuring a smooth and responsive experience. Anchored by a stylish presentation of merchandise and a robust, interactive product catalogue, Smart Sole stands as a testament to collaborative development.", tech: ['React', 'HTML', 'CSS', 'JavaScript'] }
];

function changeProject(index) {
    const content = document.getElementById('project-content');
    content.classList.add('fade-out');

    setTimeout(() => {
        currentIndex = index;
        updateContent();
        content.classList.remove('fade-out');
    }, 500);
}

function navigate(direction) {
    const newIndex = (currentIndex + direction + projects.length) % projects.length;

    changeProject(newIndex);
}

function updateContent() {
    const project = projects[currentIndex];
    const iconsContainer = document.getElementById('tech-icons');


    iconsContainer.innerHTML = '';


    project.tech.forEach(tech => {
        const icon = document.createElement('img');
        let iconName = tech.toLowerCase().replace(/#/g, 'sharp').replace(/\s/g, '');
        icon.src = `./Images/${iconName}_icon.svg`; 
        icon.alt = tech;
        icon.classList.add('tech-icon');
        iconsContainer.appendChild(icon);
    });

    document.getElementById('project-img').src = project.img;
    document.getElementById('project-desc').textContent = project.desc;

    const projectSelectors = document.querySelectorAll('#project-icons div');
    projectSelectors.forEach((selector, index) => {
        if(index === currentIndex) {
            selector.classList.add('active-pro-nav'); 
            selector.classList.remove('pro-nav'); 
        } else {
            selector.classList.remove('active-pro-nav'); 
            selector.classList.add('pro-nav'); 
        }
    });
}
updateContent();

