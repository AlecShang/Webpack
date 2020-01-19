import css from './css/index.css';
import Icon from './images/dog.jpg'
import {
    red
} from '_ansi-colors@3.2.4@ansi-colors';

function runCircle() {
    $('#circle-1').css({
        "transform": "translateX(1000px)",
        "transition": "transform 4s",
        "animation": "red-to-green 4s",
        "background": "green"
    })
}

function component() {

    var element = document.createElement('div');
    var myIcon = new Image();
    myIcon.src = Icon;
    Element.appendChild(myIcon);

    return element;
}

$('#run-circle').on('click', function () {
    runCircle()
})
document.body.appendChild(component());