document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const groups = document.querySelectorAll('.group-1, .group-2, .group-3, .group-4, .group-5, .group-6');
    const totalGroups = groups.length;

    function showSlide(index) {
        groups.forEach(group => group.style.display = 'none');
        groups[index].style.display = 'block';
    }

    function applyLayout() {
        const sliderContainer = document.querySelector('.slider-container');
        const dottedLines = document.querySelectorAll('.DottedLine1, .DottedLine2, .DottedLine3, .DottedLine4, .DottedLine5');
        const testElements = document.querySelectorAll('.test');
        const vectorElements = document.querySelectorAll('.vector');

        if (window.innerWidth <= 320) {
            sliderContainer.classList.add('slide');
            sliderContainer.classList.remove('slider-container-1399');

            dottedLines.forEach(dottedLine => dottedLine.style.display = 'none');
            showSlide(currentIndex);

            testElements.forEach(el => el.style.display = 'flex');
            vectorElements.forEach(el => el.style.display = 'none');

        } else if (window.innerWidth <= 1399) {
            sliderContainer.classList.add('slider-container-1399');
            sliderContainer.classList.remove('slide');

            groups.forEach(group => group.style.display = 'contents');
            dottedLines.forEach(dottedLine => dottedLine.style.display = 'flex');

            testElements.forEach(el => el.style.display = 'flex');
            vectorElements.forEach(el => el.style.display = 'flex');
        }
    }

    showSlide(currentIndex);

    const nextButton = document.getElementById('nextButton');
    if (nextButton) {
        nextButton.addEventListener('click', function() {
            currentIndex = (currentIndex + 1) % totalGroups;
            showSlide(currentIndex);
        });
    }

    const prevButton = document.getElementById('prevButton');
    if (prevButton) {
        prevButton.addEventListener('click', function() {
            currentIndex = (currentIndex - 1 + totalGroups) % totalGroups;
            showSlide(currentIndex);
        });
    }

    window.addEventListener('resize', applyLayout);

    applyLayout();
});
