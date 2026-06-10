window.addEventListener('load', function() {

    var northArrow = document.getElementById('north-arrow');

    function updateNorthArrow() {
        var rotation = map.getView().getRotation() || 0;
        northArrow.style.transform = 'rotate(' + (-rotation) + 'rad)';
    }

    map.getView().on('change:rotation', updateNorthArrow);

    northArrow.addEventListener('click', function() {
        map.getView().animate({
            rotation: 0,
            duration: 500
        });
    });

    updateNorthArrow();
});