function toggle() {
    var curtain = document.getElementById('curtain');
    curtain.classList.toggle('active')
}

function toggleIcon() {
    var icon = document.getElementById('menu-icon')
    if (icon.classList.contains('active') == false) {
        icon.src="https://img.icons8.com/material-outlined/24/ffffff/close-window.png";
        icon.classList.add('active');
    }
    else {
        icon.src="https://img.icons8.com/material-outlined/24/ffffff/menu--v1.png";
        icon.classList.remove('active')
    }
}

function toggleProject() {
    var projectSection = document.getElementById('project-section');
    projectSection.classList.toggle('active')
}

function toggleBasys3() {
    var fpgaSection = document.getElementById('fpga-content-section');
    fpgaSection.classList.toggle('active')
}

function toggleKaggle() {
    var kaggleSection = document.getElementById('kaggle');
    kaggleSection.classList.toggle('active')
}

function toggleContact() {
    var contactSection = document.getElementById('contact-form');
    contactSection.classList.toggle('active')
}

function toggleOutservedLink() {
    var contactSection = document.getElementById('outserved-link');
    contactSection.classList.toggle('active')
}

function toggleResume() {
    var resumeSection = document.getElementById('resumePDF');
    resumeSection.classList.toggle('active')
}

function createTriangle(triangleType, rowSection) {
    const triangle = document.createElement('div');
    triangle.setAttribute('id', triangleType);
    const row = document.getElementById(rowSection);
    row.appendChild(triangle);
}

function createTriangleRows() {
    for (let i = 0; i < 4; i++) {
        if (i == 0) {
            for (let j = 0; j < 12; j++) {
                if (j == 0 || j == 4 || j == 8) {
                    createTriangle('triangle-topleft', 'row-top-main');
                }
                else if (j == 1 || j == 5 || j == 9) {
                    createTriangle('triangle-bottomright', 'row-top-main');
                }
                else if (j == 2 || j == 6 || j == 10) {
                    createTriangle('triangle-bottomleft', 'row-top-main');
                }
                else if (j == 3 || j == 7) {
                    createTriangle('triangle-topright', 'row-top-main');
                }
            }
        }
        else if (i == 1) {
            for (let j = 0; j < 12; j++) {
                if (j == 0 || j == 4 || j == 8) {
                    createTriangle('triangle-bottomleft', 'row-bottom');
                }
                else if (j == 1 || j == 5 || j == 9) {
                    createTriangle('triangle-topright', 'row-bottom');
                }
                else if (j == 2 || j == 6 || j == 10) {
                    createTriangle('triangle-topleft', 'row-bottom');
                }
                else if (j == 3 || j == 7 || j == 11) {
                    createTriangle('triangle-bottomright', 'row-bottom');
                }
            }
        }
        else if (i == 2) {
            for (let j = 0; j < 12; j++) {
                if (j == 0 || j == 4 || j == 8) {
                    createTriangle('triangle-topleft', 'row-top');
                }
                else if (j == 1 || j == 5 || j == 9) {
                    createTriangle('triangle-bottomright', 'row-top');
                }
                else if (j == 2 || j == 6 || j == 10) {
                    createTriangle('triangle-bottomleft', 'row-top');
                }
                else if (j == 3 || j == 7 || j == 11) {
                    createTriangle('triangle-topright', 'row-top');
                }
            }
        }
        else if (i == 3) {
            for (let j = 0; j < 12; j++) {
                if (j == 0 || j == 4 || j == 8) {
                    createTriangle('triangle-bottomleft', 'row-bottom-main');
                }
                else if (j == 1 || j == 5 || j == 9) {
                    createTriangle('triangle-topright', 'row-bottom-main');
                }
                else if (j == 2 || j == 6 || j == 10) {
                    createTriangle('triangle-topleft', 'row-bottom-main');
                }
                else if (j == 3 || j == 7 || j == 11) {
                    createTriangle('triangle-bottomright', 'row-bottom-main');
                }
            }
        }
    }
}

function deleteTriangleRows() {
    if (screen.width < 700) {
        var rowOne = document.getElementById('row-top-main');
        var rowTwo = document.getElementById('row-bottom');
        var rowThree = document.getElementById('row-top');
        var rowFour = document.getElementById('row-bottom-main');
        var menuTriangle = document.getElementById('triangle-topright');

        rowOne.style.display = "none";
        rowTwo.remove();
        rowThree.remove();
        rowFour.remove(); 
        menuTriangle.remove();
    }
}

function toggleRows() {
    var rowOne = document.getElementById('row-top-main');
    rowOne.classList.toggle('active')

    var rowTwo = document.getElementById('row-top');
    rowTwo.classList.toggle('active')

    var rowThree = document.getElementById('row-bottom-main');
    rowThree.classList.toggle('active')

    var rowFour = document.getElementById('row-bottom');
    rowFour.classList.toggle('active')
}