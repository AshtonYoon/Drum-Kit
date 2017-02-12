/*!
 * Hover.css (http://ianlunn.github.io/Hover/)
 * Version: 2.1.0
 * Author: Ian Lunn @IanLunn
 * Author URL: http://ianlunn.co.uk/
 * Github: https://github.com/IanLunn/Hover

 * Made available under a MIT License:
 * http://www.opensource.org/licenses/mit-license.php

 * Hover.css Copyright Ian Lunn 2014. Generated with Sass.
 */


/* 2D TRANSITIONS */


/* Grow */

.hvr - grow {
    display: inline - block;
    vertical - align: middle; -
    webkit - transform: perspective(1 px) translateZ(0);
    transform: perspective(1 px) translateZ(0);
    box - shadow: 0 0 1 px transparent; -
    webkit - transition - duration: 0.3 s;
    transition - duration: 0.3 s; -
    webkit - transition - property: transform;
    transition - property: transform;
}

.hvr - grow: hover,
    .hvr - grow: focus,
    .hvr - grow: active {
        -webkit - transform: scale(1.1);
        transform: scale(1.1);
    }


/* Shrink */

.hvr - shrink {
    display: inline - block;
    vertical - align: middle; -
    webkit - transform: perspective(1 px) translateZ(0);
    transform: perspective(3 px) translateZ(0);
    box - shadow: 0 0 1 px transparent; -
    webkit - transition - duration: 0.3 s;
    transition - duration: 0.3 s; -
    webkit - transition - property: transform;
    transition - property: transform;
}

.hvr - shrink: hover,
    .hvr - shrink: focus,
    .hvr - shrink: active {
        -webkit - transform: scale(0.9);
        transform: scale(0.9);
    }


/* Pulse */

@ - webkit - keyframes hvr - pulse {
    25 % {-webkit - transform: scale(1.1);
        transform: scale(1.1);
    }
    75 % {-webkit - transform: scale(0.9);
        transform: scale(0.9);
    }
}

@keyframes hvr - pulse {
    25 % {-webkit - transform: scale(1.1);
        transform: scale(1.1);
    }
    75 % {-webkit - transform: scale(0.9);
        transform: scale(0.9);
    }
}

.hvr - pulse {
    display: inline - block;
    vertical - align: middle; -
    webkit - transform: perspective(1 px) translateZ(0);
    transform: perspective(1 px) translateZ(0);
    box - shadow: 0 0 1 px transparent;
}

.hvr - pulse: hover,
    .hvr - pulse: focus,
    .hvr - pulse: active {
        -webkit - animation - name: hvr - pulse;
        animation - name: hvr - pulse; -
        webkit - animation - duration: 1 s;
        animation - duration: 1 s; -
        webkit - animation - timing - function: linear;
        animation - timing - function: linear; -
        webkit - animation - iteration - count: infinite;
        animation - iteration - count: infinite;
    }


/* Pulse Grow */

@ - webkit - keyframes hvr - pulse - grow {
    to {
        -webkit - transform: scale(1.1);
        transform: scale(1.1);
    }
}

@keyframes hvr - pulse - grow {
    to {
        -webkit - transform: scale(1.1);
        transform: scale(1.1);
    }
}

.hvr - pulse - grow {
    display: inline - block;
    vertical - align: middle; -
    webkit - transform: perspective(1 px) translateZ(0);
    transform: perspective(1 px) translateZ(0);
    box - shadow: 0 0 1 px transparent;
}

.hvr - pulse - grow: hover,
    .hvr - pulse - grow: focus,
    .hvr - pulse - grow: active {
        -webkit - animation - name: hvr - pulse - grow;
        animation - name: hvr - pulse - grow; -
        webkit - animation - duration: 0.3 s;
        animation - duration: 0.3 s; -
        webkit - animation - timing - function: linear;
        animation - timing - function: linear; -
        webkit - animation - iteration - count: infinite;
        animation - iteration - count: infinite; -
        webkit - animation - direction: alternate;
        animation - direction: alternate;
    }


/* Pulse Shrink */

@ - webkit - keyframes hvr - pulse - shrink {
    to {
        -webkit - transform: scale(0.9);
        transform: scale(0.9);
    }
}

@keyframes hvr - pulse - shrink {
    to {
        -webkit - transform: scale(0.9);
        transform: scale(0.9);
    }
}

.hvr - pulse - shrink {
    display: inline - block;
    vertical - align: middle; -
    webkit - transform: perspective(1 px) translateZ(0);
    transform: perspective(1 px) translateZ(0);
    box - shadow: 0 0 1 px transparent;
}

.hvr - pulse - shrink: hover,
    .hvr - pulse - shrink: focus,
    .hvr - pulse - shrink: active {
        -webkit - animation - name: hvr - pulse - shrink;
        animation - name: hvr - pulse - shrink; -
        webkit - animation - duration: 0.3 s;
        animation - duration: 0.3 s; -
        webkit - animation - timing - function: linear;
        animation - timing - function: linear; -
        webkit - animation - iteration - count: infinite;
        animation - iteration - count: infinite; -
        webkit - animation - direction: alternate;
        animation - direction: alternate;
    }


/* Push */

@ - webkit - keyframes hvr - push {
    50 % {-webkit - transform: scale(0.8);
        transform: scale(0.8);
    }
    100 % {-webkit - transform: scale(1);
        transform: scale(1);
    }
}

@keyframes hvr - push {
    50 % {-webkit - transform: scale(0.8);
        transform: scale(0.8);
    }
    100 % {-webkit - transform: scale(1);
        transform: scale(1);
    }
}

.hvr - push {
    display: inline - block;
    vertical - align: middle; -
    webkit - transform: perspective(1 px) translateZ(0);
    transform: perspective(1 px) translateZ(0);
    box - shadow: 0 0 1 px transparent;
}

.hvr - push: hover,
    .hvr - push: focus,
    .hvr - push: active {
        -webkit - animation - name: hvr - push;
        animation - name: hvr - push; -
        webkit - animation - duration: 0.3 s;
        animation - duration: 0.3 s; -
        webkit - animation - timing - function: linear;
        animation - timing - function: linear; -
        webkit - animation - iteration - count: 1;
        animation - iteration - count: 1;
    }


/* Pop */

@ - webkit - keyframes hvr - pop {
    50 % {-webkit - transform: scale(1.2);
        transform: scale(1.2);
    }
}

@keyframes hvr - pop {
    50 % {-webkit - transform: scale(1.2);
        transform: scale(1.2);
    }
}

.hvr - pop {
    display: inline - block;
    vertical - align: middle; -
    webkit - transform: perspective(1 px) translateZ(0);
    transform: perspective(1 px) translateZ(0);
    box - shadow: 0 0 1 px transparent;
}

.hvr - pop: hover,
    .hvr - pop: focus,
    .hvr - pop: active {
        -webkit - animation - name: hvr - pop;
        animation - name: hvr - pop; -
        webkit - animation - duration: 0.3 s;
        animation - duration: 0.3 s; -
        webkit - animation - timing - function: linear;
        animation - timing - function: linear; -
        webkit - animation - iteration - count: 1;
        animation - iteration - count: 1;
    }


/* Bounce In */

.hvr - bounce - in {
    display: inline - block;
    vertical - align: middle; -
    webkit - transform: perspective(1 px) translateZ(0);
    transform: perspective(1 px) translateZ(0);
    box - shadow: 0 0 1 px transparent; -
    webkit - transition - duration: 0.5 s;
    transition - duration: 0.5 s;
}

.hvr - bounce - in: hover,
    .hvr - bounce - in: focus,
    .hvr - bounce - in: active {
        -webkit - transform: scale(1.2);
        transform: scale(1.2); -
        webkit - transition - timing - function: cubic - bezier(0.47, 2.02, 0.31, -0.36);
        transition - timing - function: cubic - bezier(0.47, 2.02, 0.31, -0.36);
    }


/* Bounce Out */

.hvr - bounce - out {
    display: inline - block;
    vertical - align: middle; -
    webkit - transform: perspective(1 px) translateZ(0);
    transform: perspective(1 px) translateZ(0);
    box - shadow: 0 0 1 px transparent; -
    webkit - transition - duration: 0.5 s;
    transition - duration: 0.5 s;
}

.hvr - bounce - out: hover,
    .hvr - bounce - out: focus,
    .hvr - bounce - out: active {
        -webkit - transform: scale(0.8);
        transform: scale(0.8); -
        webkit - transition - timing - function: cubic - bezier(0.47, 2.02, 0.31, -0.36);
        transition - timing - function: cubic - bezier(0.47, 2.02, 0.31, -0.36);
    }


/* Rotate */

.hvr - rotate {
    display: inline - block;
    vertical - align: middle; -
    webkit - transform: perspective(1 px) translateZ(0);
    transform: perspective(1 px) translateZ(0);
    box - shadow: 0 0 1 px transparent; -
    webkit - transition - duration: 0.3 s;
    transition - duration: 0.3 s; -
    webkit - transition - property: transform;
    transition - property: transform;
}

.hvr - rotate: hover,
    .hvr - rotate: focus,
    .hvr - rotate: active {
        -webkit - transform: rotate(4 deg);
        transform: rotate(4 deg);
    }


/* Grow Rotate */

.hvr - grow - rotate {
    display: inline - block;
    vertical - align: middle; -
    webkit - transform: perspective(1 px) translateZ(0);
    transform: perspective(1 px) translateZ(0);
    box - shadow: 0 0 1 px transparent; -
    webkit - transition - duration: 0.3 s;
    transition - duration: 0.3 s; -
    webkit - transition - property: transform;
    transition - property: transform;
}

.hvr - grow - rotate: hover,
    .hvr - grow - rotate: focus,
    .hvr - grow - rotate: active {
        -webkit - transform: scale(1.1) rotate(4 deg);
        transform: scale(1.1) rotate(4 deg);
    }


/* Float */

.hvr - float {
    display: inline - block;
    vertical - align: middle; -
    webkit - transform: perspective(1 px) translateZ(0);
    transform: perspective(1 px) translateZ(0);
    box - shadow: 0 0 1 px transparent; -
    webkit - transition - duration: 0.3 s;
    transition - duration: 0.3 s; -
    webkit - transition - property: transform;
    transition - property: transform; -
    webkit - transition - timing - function: ease - out;
    transition - timing - function: ease - out;
}

.hvr - float: hover,
    .hvr - float: focus,
    .hvr - float: active {
        -webkit - transform: translateY(-8 px);
        transform: translateY(-8 px);
    }


/* Sink */

.hvr - sink {
    display: inline - block;
    vertical - align: middle; -
    webkit - transform: perspective(1 px) translateZ(0);
    transform: perspective(1 px) translateZ(0);
    box - shadow: 0 0 1 px transparent; -
    webkit - transition - duration: 0.3 s;
    transition - duration: 0.3 s; -
    webkit - transition - property: transform;
    transition - property: transform; -
    webkit - transition - timing - function: ease - out;
    transition - timing - function: ease - out;
}

.hvr - sink: hover,
    .hvr - sink: focus,
    .hvr - sink: active {
        -webkit - transform: translateY(8 px);
        transform: translateY(8 px);
    }


/* Bob */

@ - webkit - keyframes hvr - bob {
    0 % {-webkit - transform: translateY(-8 px);
        transform: translateY(-8 px);
    }
    50 % {-webkit - transform: translateY(-4 px);
        transform: translateY(-4 px);
    }
    100 % {-webkit - transform: translateY(-8 px);
        transform: translateY(-8 px);
    }
}

@keyframes hvr - bob {
    0 % {-webkit - transform: translateY(-8 px);
        transform: translateY(-8 px);
    }
    50 % {-webkit - transform: translateY(-4 px);
        transform: translateY(-4 px);
    }
    100 % {-webkit - transform: translateY(-8 px);
        transform: translateY(-8 px);
    }
}

@ - webkit - keyframes hvr - bob - float {
    100 % {-webkit - transform: translateY(-8 px);
        transform: translateY(-8 px);
    }
}

@keyframes hvr - bob - float {
    100 % {-webkit - transform: translateY(-8 px);
        transform: translateY(-8 px);
    }
}

.hvr - bob {
    display: inline - block;
    vertical - align: middle; -
    webkit - transform: perspective(1 px) translateZ(0);
    transform: perspective(1 px) translateZ(0);
    box - shadow: 0 0 1 px transparent;
}

.hvr - bob: hover,
    .hvr - bob: focus,
    .hvr - bob: active {
        -webkit - animation - name: hvr - bob - float, hvr - bob;
        animation - name: hvr - bob - float, hvr - bob; -
        webkit - animation - duration: .3 s, 1.5 s;
        animation - duration: .3 s, 1.5 s; -
        webkit - animation - delay: 0 s, .3 s;
        animation - delay: 0 s, .3 s; -
        webkit - animation - timing - function: ease - out, ease - in -out;
        animation - timing - function: ease - out, ease - in -out; -
        webkit - animation - iteration - count: 1, infinite;
        animation - iteration - count: 1, infinite; -
        webkit - animation - fill - mode: forwards;
        animation - fill - mode: forwards; -
        webkit - animation - direction: normal, alternate;
        animation - direction: normal, alternate;
    }


/* Hang */

@ - webkit - keyframes hvr - hang {
    0 % {-webkit - transform: translateY(8 px);
        transform: translateY(8 px);
    }
    50 % {-webkit - transform: translateY(4 px);
        transform: translateY(4 px);
    }
    100 % {-webkit - transform: translateY(8 px);
        transform: translateY(8 px);
    }
}

@keyframes hvr - hang {
    0 % {-webkit - transform: translateY(8 px);
        transform: translateY(8 px);
    }
    50 % {-webkit - transform: translateY(4 px);
        transform: translateY(4 px);
    }
    100 % {-webkit - transform: translateY(8 px);
        transform: translateY(8 px);
    }
}

@ - webkit - keyframes hvr - hang - sink {
    100 % {-webkit - transform: translateY(8 px);
        transform: translateY(8 px);
    }
}

@keyframes hvr - hang - sink {
    100 % {-webkit - transform: translateY(8 px);
        transform: translateY(8 px);
    }
}

.hvr - hang {
    display: inline - block;
    vertical - align: middle; -
    webkit - transform: perspective(1 px) translateZ(0);
    transform: perspective(1 px) translateZ(0);
    box - shadow: 0 0 1 px transparent;
}

.hvr - hang: hover,
    .hvr - hang: focus,
    .hvr - hang: active {
        -webkit - animation - name: hvr - hang - sink, hvr - hang;
        animation - name: hvr - hang - sink, hvr - hang; -
        webkit - animation - duration: .3 s, 1.5 s;
        animation - duration: .3 s, 1.5 s; -
        webkit - animation - delay: 0 s, .3 s;
        animation - delay: 0 s, .3 s; -
        webkit - animation - timing - function: ease - out, ease - in -out;
        animation - timing - function: ease - out, ease - in -out; -
        webkit - animation - iteration - count: 1, infinite;
        animation - iteration - count: 1, infinite; -
        webkit - animation - fill - mode: forwards;
        animation - fill - mode: forwards; -
        webkit - animation - direction: normal, alternate;
        animation - direction: normal, alternate;
    }


/* Skew */

.hvr - skew {
    display: inline - block;
    vertical - align: middle; -
    webkit - transform: perspective(1 px) translateZ(0);
    transform: perspective(1 px) translateZ(0);
    box - shadow: 0 0 1 px transparent; -
    webkit - transition - duration: 0.3 s;
    transition - duration: 0.3 s; -
    webkit - transition - property: transform;
    transition - property: transform;
}

.hvr - skew: hover,
    .hvr - skew: focus,
    .hvr - skew: active {
        -webkit - transform: skew(-10 deg);
        transform: skew(-10 deg);
    }


/* Skew Forward */

.hvr - skew - forward {
    display: inline - block;
    vertical - align: middle; -
    webkit - transform: perspective(1 px) translateZ(0);
    transform: perspective(1 px) translateZ(0);
    box - shadow: 0 0 1 px transparent; -
    webkit - transition - duration: 0.3 s;
    transition - duration: 0.3 s; -
    webkit - transition - property: transform;
    transition - property: transform; -
    webkit - transform - origin: 0 100 % ;
    transform - origin: 0 100 % ;
}

.hvr - skew - forward: hover,
    .hvr - skew - forward: focus,
    .hvr - skew - forward: active {
        -webkit - transform: skew(-10 deg);
        transform: skew(-10 deg);
    }


/* Skew Backward */

.hvr - skew - backward {
    display: inline - block;
    vertical - align: middle; -
    webkit - transform: perspective(1 px) translateZ(0);
    transform: perspective(1 px) translateZ(0);
    box - shadow: 0 0 1 px transparent; -
    webkit - transition - duration: 0.3 s;
    transition - duration: 0.3 s; -
    webkit - transition - property: transform;
    transition - property: transform; -
    webkit - transform - origin: 0 100 % ;
    transform - origin: 0 100 % ;
}

.hvr - skew - backward: hover,
    .hvr - skew - backward: focus,
    .hvr - skew - backward: active {
        -webkit - transform: skew(10 deg);
        transform: skew(10 deg);
    }


/* Wobble Vertical */

@ - webkit - keyframes hvr - wobble - vertical {
    16.65 % {-webkit - transform: translateY(8 px);
        transform: translateY(8 px);
    }
    33.3 % {-webkit - transform: translateY(-6 px);
        transform: translateY(-6 px);
    }
    49.95 % {-webkit - transform: translateY(4 px);
        transform: translateY(4 px);
    }
    66.6 % {-webkit - transform: translateY(-2 px);
        transform: translateY(-2 px);
    }
    83.25 % {-webkit - transform: translateY(1 px);
        transform: translateY(1 px);
    }
    100 % {-webkit - transform: translateY(0);
        transform: translateY(0);
    }
}

@keyframes hvr - wobble - vertical {
    16.65 % {-webkit - transform: translateY(8 px);
        transform: translateY(8 px);
    }
    33.3 % {-webkit - transform: translateY(-6 px);
        transform: translateY(-6 px);
    }
    49.95 % {-webkit - transform: translateY(4 px);
        transform: translateY(4 px);
    }
    66.6 % {-webkit - transform: translateY(-2 px);
        transform: translateY(-2 px);
    }
    83.25 % {-webkit - transform: translateY(1 px);
        transform: translateY(1 px);
    }
    100 % {-webkit - transform: translateY(0);
        transform: translateY(0);
    }
}

.hvr - wobble - vertical {
    display: inline - block;
    vertical - align: middle; -
    webkit - transform: perspective(1 px) translateZ(0);
    transform: perspective(1 px) translateZ(0);
    box - shadow: 0 0 1 px transparent;
}

.hvr - wobble - vertical: hover,
    .hvr - wobble - vertical: focus,
    .hvr - wobble - vertical: active {
        -webkit - animation - name: hvr - wobble - vertical;
        animation - name: hvr - wobble - vertical; -
        webkit - animation - duration: 1 s;
        animation - duration: 1 s; -
        webkit - animation - timing - function: ease - in -out;
        animation - timing - function: ease - in -out; -
        webkit - animation - iteration - count: 1;
        animation - iteration - count: 1;
    }


/* Wobble Horizontal */

@ - webkit - keyframes hvr - wobble - horizontal {
    16.65 % {-webkit - transform: translateX(8 px);
        transform: translateX(8 px);
    }
    33.3 % {-webkit - transform: translateX(-6 px);
        transform: translateX(-6 px);
    }
    49.95 % {-webkit - transform: translateX(4 px);
        transform: translateX(4 px);
    }
    66.6 % {-webkit - transform: translateX(-2 px);
        transform: translateX(-2 px);
    }
    83.25 % {-webkit - transform: translateX(1 px);
        transform: translateX(1 px);
    }
    100 % {-webkit - transform: translateX(0);
        transform: translateX(0);
    }
}

@keyframes hvr - wobble - horizontal {
    16.65 % {-webkit - transform: translateX(8 px);
        transform: translateX(8 px);
    }
    33.3 % {-webkit - transform: translateX(-6 px);
        transform: translateX(-6 px);
    }
    49.95 % {-webkit - transform: translateX(4 px);
        transform: translateX(4 px);
    }
    66.6 % {-webkit - transform: translateX(-2 px);
        transform: translateX(-2 px);
    }
    83.25 % {-webkit - transform: translateX(1 px);
        transform: translateX(1 px);
    }
    100 % {-webkit - transform: translateX(0);
        transform: translateX(0);
    }
}

.hvr - wobble - horizontal {
    display: inline - block;
    vertical - align: middle; -
    webkit - transform: perspective(1 px) translateZ(0);
    transform: perspective(1 px) translateZ(0);
    box - shadow: 0 0 1 px transparent;
}

.hvr - wobble - horizontal: hover,
    .hvr - wobble - horizontal: focus,
    .hvr - wobble - horizontal: active {
        -webkit - animation - name: hvr - wobble - horizontal;
        animation - name: hvr - wobble - horizontal; -
        webkit - animation - duration: 1 s;
        animation - duration: 1 s; -
        webkit - animation - timing - function: ease - in -out;
        animation - timing - function: ease - in -out; -
        webkit - animation - iteration - count: 1;
        animation - iteration - count: 1;
    }


/* Wobble To Bottom Right */

@ - webkit - keyframes hvr - wobble - to - bottom - right {
    16.65 % {-webkit - transform: translate(8 px, 8 px);
        transform: translate(8 px, 8 px);
    }
    33.3 % {-webkit - transform: translate(-6 px, -6 px);
        transform: translate(-6 px, -6 px);
    }
    49.95 % {-webkit - transform: translate(4 px, 4 px);
        transform: translate(4 px, 4 px);
    }
    66.6 % {-webkit - transform: translate(-2 px, -2 px);
        transform: translate(-2 px, -2 px);
    }
    83.25 % {-webkit - transform: translate(1 px, 1 px);
        transform: translate(1 px, 1 px);
    }
    100 % {-webkit - transform: translate(0, 0);
        transform: translate(0, 0);
    }
}

@keyframes hvr - wobble - to - bottom - right {
    16.65 % {-webkit - transform: translate(8 px, 8 px);
        transform: translate(8 px, 8 px);
    }
    33.3 % {-webkit - transform: translate(-6 px, -6 px);
        transform: translate(-6 px, -6 px);
    }
    49.95 % {-webkit - transform: translate(4 px, 4 px);
        transform: translate(4 px, 4 px);
    }
    66.6 % {-webkit - transform: translate(-2 px, -2 px);
        transform: translate(-2 px, -2 px);
    }
    83.25 % {-webkit - transform: translate(1 px, 1 px);
        transform: translate(1 px, 1 px);
    }
    100 % {-webkit - transform: translate(0, 0);
        transform: translate(0, 0);
    }
}

.hvr - wobble - to - bottom - right {
    display: inline - block;
    vertical - align: middle; -
    webkit - transform: perspective(1 px) translateZ(0);
    transform: perspective(1 px) translateZ(0);
    box - shadow: 0 0 1 px transparent;
}

.hvr - wobble - to - bottom - right: hover,
    .hvr - wobble - to - bottom - right: focus,
    .hvr - wobble - to - bottom - right: active {
        -webkit - animation - name: hvr - wobble - to - bottom - right;
        animation - name: hvr - wobble - to - bottom - right; -
        webkit - animation - duration: 1 s;
        animation - duration: 1 s; -
        webkit - animation - timing - function: ease - in -out;
        animation - timing - function: ease - in -out; -
        webkit - animation - iteration - count: 1;
        animation - iteration - count: 1;
    }


/* Wobble To Top Right */

@ - webkit - keyframes hvr - wobble - to - top - right {
    16.65 % {-webkit - transform: translate(8 px, -8 px);
        transform: translate(8 px, -8 px);
    }
    33.3 % {-webkit - transform: translate(-6 px, 6 px);
        transform: translate(-6 px, 6 px);
    }
    49.95 % {-webkit - transform: translate(4 px, -4 px);
        transform: translate(4 px, -4 px);
    }
    66.6 % {-webkit - transform: translate(-2 px, 2 px);
        transform: translate(-2 px, 2 px);
    }
    83.25 % {-webkit - transform: translate(1 px, -1 px);
        transform: translate(1 px, -1 px);
    }
    100 % {-webkit - transform: translate(0, 0);
        transform: translate(0, 0);
    }
}

@keyframes hvr - wobble - to - top - right {
    16.65 % {-webkit - transform: translate(8 px, -8 px);
        transform: translate(8 px, -8 px);
    }
    33.3 % {-webkit - transform: translate(-6 px, 6 px);
        transform: translate(-6 px, 6 px);
    }
    49.95 % {-webkit - transform: translate(4 px, -4 px);
        transform: translate(4 px, -4 px);
    }
    66.6 % {-webkit - transform: translate(-2 px, 2 px);
        transform: translate(-2 px, 2 px);
    }
    83.25 % {-webkit - transform: translate(1 px, -1 px);
        transform: translate(1 px, -1 px);
    }
    100 % {-webkit - transform: translate(0, 0);
        transform: translate(0, 0);
    }
}

.hvr - wobble - to - top - right {
    display: inline - block;
    vertical - align: middle; -
    webkit - transform: perspective(1 px) translateZ(0);
    transform: perspective(1 px) translateZ(0);
    box - shadow: 0 0 1 px transparent;
}

.hvr - wobble - to - top - right: hover,
    .hvr - wobble - to - top - right: focus,
    .hvr - wobble - to - top - right: active {
        -webkit - animation - name: hvr - wobble - to - top - right;
        animation - name: hvr - wobble - to - top - right; -
        webkit - animation - duration: 1 s;
        animation - duration: 1 s; -
        webkit - animation - timing - function: ease - in -out;
        animation - timing - function: ease - in -out; -
        webkit - animation - iteration - count: 1;
        animation - iteration - count: 1;
    }


/* Wobble Top */

@ - webkit - keyframes hvr - wobble - top {
    16.65 % {-webkit - transform: skew(-12 deg);
        transform: skew(-12 deg);
    }
    33.3 % {-webkit - transform: skew(10 deg);
        transform: skew(10 deg);
    }
    49.95 % {-webkit - transform: skew(-6 deg);
        transform: skew(-6 deg);
    }
    66.6 % {-webkit - transform: skew(4 deg);
        transform: skew(4 deg);
    }
    83.25 % {-webkit - transform: skew(-2 deg);
        transform: skew(-2 deg);
    }
    100 % {-webkit - transform: skew(0);
        transform: skew(0);
    }
}

@keyframes hvr - wobble - top {
    16.65 % {-webkit - transform: skew(-12 deg);
        transform: skew(-12 deg);
    }
    33.3 % {-webkit - transform: skew(10 deg);
        transform: skew(10 deg);
    }
    49.95 % {-webkit - transform: skew(-6 deg);
        transform: skew(-6 deg);
    }
    66.6 % {-webkit - transform: skew(4 deg);
        transform: skew(4 deg);
    }
    83.25 % {-webkit - transform: skew(-2 deg);
        transform: skew(-2 deg);
    }
    100 % {-webkit - transform: skew(0);
        transform: skew(0);
    }
}

.hvr - wobble - top {
    display: inline - block;
    vertical - align: middle; -
    webkit - transform: perspective(1 px) translateZ(0);
    transform: perspective(1 px) translateZ(0);
    box - shadow: 0 0 1 px transparent; -
    webkit - transform - origin: 0 100 % ;
    transform - origin: 0 100 % ;
}

.hvr - wobble - top: hover,
    .hvr - wobble - top: focus,
    .hvr - wobble - top: active {
        -webkit - animation - name: hvr - wobble - top;
        animation - name: hvr - wobble - top; -
        webkit - animation - duration: 1 s;
        animation - duration: 1 s; -
        webkit - animation - timing - function: ease - in -out;
        animation - timing - function: ease - in -out; -
        webkit - animation - iteration - count: 1;
        animation - iteration - count: 1;
    }


/* Wobble Bottom */

@ - webkit - keyframes hvr - wobble - bottom {
    16.65 % {-webkit - transform: skew(-12 deg);
        transform: skew(-12 deg);
    }
    33.3 % {-webkit - transform: skew(10 deg);
        transform: skew(10 deg);
    }
    49.95 % {-webkit - transform: skew(-6 deg);
        transform: skew(-6 deg);
    }
    66.6 % {-webkit - transform: skew(4 deg);
        transform: skew(4 deg);
    }
    83.25 % {-webkit - transform: skew(-2 deg);
        transform: skew(-2 deg);
    }
    100 % {-webkit - transform: skew(0);
        transform: skew(0);
    }
}

@keyframes hvr - wobble - bottom {
    16.65 % {-webkit - transform: skew(-12 deg);
        transform: skew(-12 deg);
    }
    33.3 % {-webkit - transform: skew(10 deg);
        transform: skew(10 deg);
    }
    49.95 % {-webkit - transform: skew(-6 deg);
        transform: skew(-6 deg);
    }
    66.6 % {-webkit - transform: skew(4 deg);
        transform: skew(4 deg);
    }
    83.25 % {-webkit - transform: skew(-2 deg);
        transform: skew(-2 deg);
    }
    100 % {-webkit - transform: skew(0);
        transform: skew(0);
    }
}

.hvr - wobble - bottom {
    display: inline - block;
    vertical - align: middle; -
    webkit - transform: perspective(1 px) translateZ(0);
    transform: perspective(1 px) translateZ(0);
    box - shadow: 0 0 1 px transparent; -
    webkit - transform - origin: 100 % 0;
    transform - origin: 100 % 0;
}

.hvr - wobble - bottom: hover,
    .hvr - wobble - bottom: focus,
    .hvr - wobble - bottom: active {
        -webkit - animation - name: hvr - wobble - bottom;
        animation - name: hvr - wobble - bottom; -
        webkit - animation - duration: 1 s;
        animation - duration: 1 s; -
        webkit - animation - timing - function: ease - in -out;
        animation - timing - function: ease - in -out; -
        webkit - animation - iteration - count: 1;
        animation - iteration - count: 1;
    }


/* Wobble Skew */

@ - webkit - keyframes hvr - wobble - skew {
    16.65 % {-webkit - transform: skew(-12 deg);
        transform: skew(-12 deg);
    }
    33.3 % {-webkit - transform: skew(10 deg);
        transform: skew(10 deg);
    }
    49.95 % {-webkit - transform: skew(-6 deg);
        transform: skew(-6 deg);
    }
    66.6 % {-webkit - transform: skew(4 deg);
        transform: skew(4 deg);
    }
    83.25 % {-webkit - transform: skew(-2 deg);
        transform: skew(-2 deg);
    }
    100 % {-webkit - transform: skew(0);
        transform: skew(0);
    }
}

@keyframes hvr - wobble - skew {
    16.65 % {-webkit - transform: skew(-12 deg);
        transform: skew(-12 deg);
    }
    33.3 % {-webkit - transform: skew(10 deg);
        transform: skew(10 deg);
    }
    49.95 % {-webkit - transform: skew(-6 deg);
        transform: skew(-6 deg);
    }
    66.6 % {-webkit - transform: skew(4 deg);
        transform: skew(4 deg);
    }
    83.25 % {-webkit - transform: skew(-2 deg);
        transform: skew(-2 deg);
    }
    100 % {-webkit - transform: skew(0);
        transform: skew(0);
    }
}

.hvr - wobble - skew {
    display: inline - block;
    vertical - align: middle; -
    webkit - transform: perspective(1 px) translateZ(0);
    transform: perspective(1 px) translateZ(0);
    box - shadow: 0 0 1 px transparent;
}

.hvr - wobble - skew: hover,
    .hvr - wobble - skew: focus,
    .hvr - wobble - skew: active {
        -webkit - animation - name: hvr - wobble - skew;
        animation - name: hvr - wobble - skew; -
        webkit - animation - duration: 1 s;
        animation - duration: 1 s; -
        webkit - animation - timing - function: ease - in -out;
        animation - timing - function: ease - in -out; -
        webkit - animation - iteration - count: 1;
        animation - iteration - count: 1;
    }


/* Buzz */

@ - webkit - keyframes hvr - buzz {
    50 % {-webkit - transform: translateX(3 px) rotate(2 deg);
        transform: translateX(3 px) rotate(2 deg);
    }
    100 % {-webkit - transform: translateX(-3 px) rotate(-2 deg);
        transform: translateX(-3 px) rotate(-2 deg);
    }
}

@keyframes hvr - buzz {
    50 % {-webkit - transform: translateX(3 px) rotate(2 deg);
        transform: translateX(3 px) rotate(2 deg);
    }
    100 % {-webkit - transform: translateX(-3 px) rotate(-2 deg);
        transform: translateX(-3 px) rotate(-2 deg);
    }
}

.hvr - buzz {
    display: inline - block;
    vertical - align: middle; -
    webkit - transform: perspective(1 px) translateZ(0);
    transform: perspective(1 px) translateZ(0);
    box - shadow: 0 0 1 px transparent;
}

.hvr - buzz: hover,
    .hvr - buzz: focus,
    .hvr - buzz: active {
        -webkit - animation - name: hvr - buzz;
        animation - name: hvr - buzz; -
        webkit - animation - duration: 0.15 s;
        animation - duration: 0.15 s; -
        webkit - animation - timing - function: linear;
        animation - timing - function: linear; -
        webkit - animation - iteration - count: infinite;
        animation - iteration - count: infinite;
    }


/* Buzz Out */

@ - webkit - keyframes hvr - buzz - out {
    10 % {-webkit - transform: translateX(3 px) rotate(2 deg);
        transform: translateX(3 px) rotate(2 deg);
    }
    20 % {-webkit - transform: translateX(-3 px) rotate(-2 deg);
        transform: translateX(-3 px) rotate(-2 deg);
    }
    30 % {-webkit - transform: translateX(3 px) rotate(2 deg);
        transform: translateX(3 px) rotate(2 deg);
    }
    40 % {-webkit - transform: translateX(-3 px) rotate(-2 deg);
        transform: translateX(-3 px) rotate(-2 deg);
    }
    50 % {-webkit - transform: translateX(2 px) rotate(1 deg);
        transform: translateX(2 px) rotate(1 deg);
    }
    60 % {-webkit - transform: translateX(-2 px) rotate(-1 deg);
        transform: translateX(-2 px) rotate(-1 deg);
    }
    70 % {-webkit - transform: translateX(2 px) rotate(1 deg);
        transform: translateX(2 px) rotate(1 deg);
    }
    80 % {-webkit - transform: translateX(-2 px) rotate(-1 deg);
        transform: translateX(-2 px) rotate(-1 deg);
    }
    90 % {-webkit - transform: translateX(1 px) rotate(0);
        transform: translateX(1 px) rotate(0);
    }
    100 % {-webkit - transform: translateX(-1 px) rotate(0);
        transform: translateX(-1 px) rotate(0);
    }
}

@keyframes hvr - buzz - out {
    10 % {-webkit - transform: translateX(3 px) rotate(2 deg);
        transform: translateX(3 px) rotate(2 deg);
    }
    20 % {-webkit - transform: translateX(-3 px) rotate(-2 deg);
        transform: translateX(-3 px) rotate(-2 deg);
    }
    30 % {-webkit - transform: translateX(3 px) rotate(2 deg);
        transform: translateX(3 px) rotate(2 deg);
    }
    40 % {-webkit - transform: translateX(-3 px) rotate(-2 deg);
        transform: translateX(-3 px) rotate(-2 deg);
    }
    50 % {-webkit - transform: translateX(2 px) rotate(1 deg);
        transform: translateX(2 px) rotate(1 deg);
    }
    60 % {-webkit - transform: translateX(-2 px) rotate(-1 deg);
        transform: translateX(-2 px) rotate(-1 deg);
    }
    70 % {-webkit - transform: translateX(2 px) rotate(1 deg);
        transform: translateX(2 px) rotate(1 deg);
    }
    80 % {-webkit - transform: translateX(-2 px) rotate(-1 deg);
        transform: translateX(-2 px) rotate(-1 deg);
    }
    90 % {-webkit - transform: translateX(1 px) rotate(0);
        transform: translateX(1 px) rotate(0);
    }
    100 % {-webkit - transform: translateX(-1 px) rotate(0);
        transform: translateX(-1 px) rotate(0);
    }
}

.hvr - buzz - out {
    display: inline - block;
    vertical - align: middle; -
    webkit - transform: perspective(1 px) translateZ(0);
    transform: perspective(1 px) translateZ(0);
    box - shadow: 0 0 1 px transparent;
}

.hvr - buzz - out: hover,
    .hvr - buzz - out: focus,
    .hvr - buzz - out: active {
        -webkit - animation - name: hvr - buzz - out;
        animation - name: hvr - buzz - out; -
        webkit - animation - duration: 0.75 s;
        animation - duration: 0.75 s; -
        webkit - animation - timing - function: linear;
        animation - timing - function: linear; -
        webkit - animation - iteration - count: 1;
        animation - iteration - count: 1;
    }


/* Forward */

.hvr - forward {
    display: inline - block;
    vertical - align: middle; -
    webkit - transform: perspective(1 px) translateZ(0);
    transform: perspective(1 px) translateZ(0);
    box - shadow: 0 0 1 px transparent; -
    webkit - transition - duration: 0.3 s;
    transition - duration: 0.3 s; -
    webkit - transition - property: transform;
    transition - property: transform;
}

.hvr - forward: hover,
    .hvr - forward: focus,
    .hvr - forward: active {
        -webkit - transform: translateX(8 px);
        transform: translateX(8 px);
    }


/* Backward */

.hvr - backward {
    display: inline - block;
    vertical - align: middle; -
    webkit - transform: perspective(1 px) translateZ(0);
    transform: perspective(1 px) translateZ(0);
    box - shadow: 0 0 1 px transparent; -
    webkit - transition - duration: 0.3 s;
    transition - duration: 0.3 s; -
    webkit - transition - property: transform;
    transition - property: transform;
}

.hvr - backward: hover,
    .hvr - backward: focus,
    .hvr - backward: active {
        -webkit - transform: translateX(-8 px);
        transform: translateX(-8 px);
    }


/* BACKGROUND TRANSITIONS */


/* Fade */

.hvr - fade {
    display: inline - block;
    vertical - align: middle; -
    webkit - transform: perspective(1 px) translateZ(0);
    transform: perspective(1 px) translateZ(0);
    box - shadow: 0 0 1 px transparent;
    overflow: hidden; -
    webkit - transition - duration: 0.3 s;
    transition - duration: 0.3 s; -
    webkit - transition - property: color,
    background - color;
    transition - property: color,
    background - color;
}

.hvr - fade: hover,
    .hvr - fade: focus,
    .hvr - fade: active {
        background - color: #2098D1;
    color: white;
}


/* Back Pulse */

@-webkit-keyframes hvr-back-pulse {
    50% {
        background-color: rgba(32, 152, 209, 0.75);
    }
}

@keyframes hvr-back-pulse {
    50% {
        background-color: rgba(32, 152, 209, 0.75);
    }
}

.hvr-back-pulse {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px transparent;
    overflow: hidden;
    -webkit-transition-duration: 0.5s;
    transition-duration: 0.5s;
    -webkit-transition-property: color, background-color;
    transition-property: color, background-color;
}

.hvr-back-pulse:hover,
.hvr-back-pulse:focus,
.hvr-back-pulse:active {
    -webkit-animation-name: hvr-back-pulse;
    animation-name: hvr-back-pulse;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-delay: 0.5s;
    animation-delay: 0.5s;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    background-color: # 2098 D1;
        background - color: #2098d1;
    color: white;
}


/* Sweep To Right */

.hvr-sweep-to-right {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px transparent;
    position: relative;
    -webkit-transition-property: color;
    transition-property: color;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
}

.hvr-sweep-to-right:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: # 2098 D1; -
        webkit - transform: scaleX(0);
        transform: scaleX(0); -
        webkit - transform - origin: 0 50 % ;
        transform - origin: 0 50 % ; -
        webkit - transition - property: transform;
        transition - property: transform; -
        webkit - transition - duration: 0.3 s;
        transition - duration: 0.3 s; -
        webkit - transition - timing - function: ease - out;
        transition - timing - function: ease - out;
    }

.hvr - sweep - to - right: hover,
    .hvr - sweep - to - right: focus,
    .hvr - sweep - to - right: active {
        color: white;
    }

.hvr - sweep - to - right: hover: before,
    .hvr - sweep - to - right: focus: before,
    .hvr - sweep - to - right: active: before {
        -webkit - transform: scaleX(1);
        transform: scaleX(1);
    }


/* Sweep To Left */

.hvr - sweep - to - left {
    display: inline - block;
    vertical - align: middle; -
    webkit - transform: perspective(1 px) translateZ(0);
    transform: perspective(1 px) translateZ(0);
    box - shadow: 0 0 1 px transparent;
    position: relative; -
    webkit - transition - property: color;
    transition - property: color; -
    webkit - transition - duration: 0.3 s;
    transition - duration: 0.3 s;
}

.hvr - sweep - to - left: before {
    content: "";
    position: absolute;
    z - index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #2098D1;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transform-origin: 100% 50%;
    transform-origin: 100% 50%;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
}

.hvr-sweep-to-left:hover,
.hvr-sweep-to-left:focus,
.hvr-sweep-to-left:active {
    color: white;
}

.hvr-sweep-to-left:hover:before,
.hvr-sweep-to-left:focus:before,
.hvr-sweep-to-left:active:before {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
}


/* Sweep To Bottom */

.hvr-sweep-to-bottom {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px transparent;
    position: relative;
    -webkit-transition-property: color;
    transition-property: color;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
}

.hvr-sweep-to-bottom:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: # 2098 D1; -
    webkit - transform: scaleY(0);
    transform: scaleY(0); -
    webkit - transform - origin: 50 % 0;
    transform - origin: 50 % 0; -
    webkit - transition - property: transform;
    transition - property: transform; -
    webkit - transition - duration: 0.3 s;
    transition - duration: 0.3 s; -
    webkit - transition - timing - function: ease - out;
    transition - timing - function: ease - out;
}

.hvr - sweep - to - bottom: hover,
    .hvr - sweep - to - bottom: focus,
    .hvr - sweep - to - bottom: active {
        color: white;
    }

.hvr - sweep - to - bottom: hover: before,
    .hvr - sweep - to - bottom: focus: before,
    .hvr - sweep - to - bottom: active: before {
        -webkit - transform: scaleY(1);
        transform: scaleY(1);
    }


/* Sweep To Top */

.hvr - sweep - to - top {
    display: inline - block;
    vertical - align: middle; -
    webkit - transform: perspective(1 px) translateZ(0);
    transform: perspective(1 px) translateZ(0);
    box - shadow: 0 0 1 px transparent;
    position: relative; -
    webkit - transition - property: color;
    transition - property: color; -
    webkit - transition - duration: 0.3 s;
    transition - duration: 0.3 s;
}

.hvr - sweep - to - top: before {
    content: "";
    position: absolute;
    z - index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #2098D1;
    -webkit-transform: scaleY(0);
    transform: scaleY(0);
    -webkit-transform-origin: 50% 100%;
    transform-origin: 50% 100%;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
}

.hvr-sweep-to-top:hover,
.hvr-sweep-to-top:focus,
.hvr-sweep-to-top:active {
    color: white;
}

.hvr-sweep-to-top:hover:before,
.hvr-sweep-to-top:focus:before,
.hvr-sweep-to-top:active:before {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
}


/* Bounce To Right */

.hvr-bounce-to-right {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px transparent;
    position: relative;
    -webkit-transition-property: color;
    transition-property: color;
    -webkit-transition-duration: 0.5s;
    transition-duration: 0.5s;
}

.hvr-bounce-to-right:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: # 2098 D1; -
    webkit - transform: scaleX(0);
    transform: scaleX(0); -
    webkit - transform - origin: 0 50 % ;
    transform - origin: 0 50 % ; -
    webkit - transition - property: transform;
    transition - property: transform; -
    webkit - transition - duration: 0.5 s;
    transition - duration: 0.5 s; -
    webkit - transition - timing - function: ease - out;
    transition - timing - function: ease - out;
}

.hvr - bounce - to - right: hover,
    .hvr - bounce - to - right: focus,
    .hvr - bounce - to - right: active {
        color: white;
    }

.hvr - bounce - to - right: hover: before,
    .hvr - bounce - to - right: focus: before,
    .hvr - bounce - to - right: active: before {
        -webkit - transform: scaleX(1);
        transform: scaleX(1); -
        webkit - transition - timing - function: cubic - bezier(0.52, 1.64, 0.37, 0.66);
        transition - timing - function: cubic - bezier(0.52, 1.64, 0.37, 0.66);
    }


/* Bounce To Left */

.hvr - bounce - to - left {
    display: inline - block;
    vertical - align: middle; -
    webkit - transform: perspective(1 px) translateZ(0);
    transform: perspective(1 px) translateZ(0);
    box - shadow: 0 0 1 px transparent;
    position: relative; -
    webkit - transition - property: color;
    transition - property: color; -
    webkit - transition - duration: 0.5 s;
    transition - duration: 0.5 s;
}

.hvr - bounce - to - left: before {
    content: "";
    position: absolute;
    z - index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #2098D1;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transform-origin: 100% 50%;
    transform-origin: 100% 50%;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-duration: 0.5s;
    transition-duration: 0.5s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
}

.hvr-bounce-to-left:hover,
.hvr-bounce-to-left:focus,
.hvr-bounce-to-left:active {
    color: white;
}

.hvr-bounce-to-left:hover:before,
.hvr-bounce-to-left:focus:before,
.hvr-bounce-to-left:active:before {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
    -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
    transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
}


/* Bounce To Bottom */

.hvr-bounce-to-bottom {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px transparent;
    position: relative;
    -webkit-transition-property: color;
    transition-property: color;
    -webkit-transition-duration: 0.5s;
    transition-duration: 0.5s;
}

.hvr-bounce-to-bottom:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: # 2098 D1; -
    webkit - transform: scaleY(0);
    transform: scaleY(0); -
    webkit - transform - origin: 50 % 0;
    transform - origin: 50 % 0; -
    webkit - transition - property: transform;
    transition - property: transform; -
    webkit - transition - duration: 0.5 s;
    transition - duration: 0.5 s; -
    webkit - transition - timing - function: ease - out;
    transition - timing - function: ease - out;
}

.hvr - bounce - to - bottom: hover,
    .hvr - bounce - to - bottom: focus,
    .hvr - bounce - to - bottom: active {
        color: white;
    }

.hvr - bounce - to - bottom: hover: before,
    .hvr - bounce - to - bottom: focus: before,
    .hvr - bounce - to - bottom: active: before {
        -webkit - transform: scaleY(1);
        transform: scaleY(1); -
        webkit - transition - timing - function: cubic - bezier(0.52, 1.64, 0.37, 0.66);
        transition - timing - function: cubic - bezier(0.52, 1.64, 0.37, 0.66);
    }


/* Bounce To Top */

.hvr - bounce - to - top {
    display: inline - block;
    vertical - align: middle; -
    webkit - transform: perspective(1 px) translateZ(0);
    transform: perspective(1 px) translateZ(0);
    box - shadow: 0 0 1 px transparent;
    position: relative; -
    webkit - transition - property: color;
    transition - property: color; -
    webkit - transition - duration: 0.5 s;
    transition - duration: 0.5 s;
}

.hvr - bounce - to - top: before {
    content: "";
    position: absolute;
    z - index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #2098D1;
    -webkit-transform: scaleY(0);
    transform: scaleY(0);
    -webkit-transform-origin: 50% 100%;
    transform-origin: 50% 100%;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-duration: 0.5s;
    transition-duration: 0.5s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
}

.hvr-bounce-to-top:hover,
.hvr-bounce-to-top:focus,
.hvr-bounce-to-top:active {
    color: white;
}

.hvr-bounce-to-top:hover:before,
.hvr-bounce-to-top:focus:before,
.hvr-bounce-to-top:active:before {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
    -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
    transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
}


/* Radial Out */

.hvr-radial-out {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px transparent;
    position: relative;
    overflow: hidden;
    background: # e1e1e1; -
    webkit - transition - property: color;
    transition - property: color; -
    webkit - transition - duration: 0.3 s;
    transition - duration: 0.3 s;
}

.hvr - radial - out: before {
    content: "";
    position: absolute;
    z - index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #2098D1;
    border-radius: 100%;
    -webkit-transform: scale(0);
    transform: scale(0);
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
}

.hvr-radial-out:hover,
.hvr-radial-out:focus,
.hvr-radial-out:active {
    color: white;
}

.hvr-radial-out:hover:before,
.hvr-radial-out:focus:before,
.hvr-radial-out:active:before {
    -webkit-transform: scale(2);
    transform: scale(2);
}


/* Radial In */

.hvr-radial-in {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px transparent;
    position: relative;
    overflow: hidden;
    background: # 2098 D1; -
    webkit - transition - property: color;
    transition - property: color; -
    webkit - transition - duration: 0.3 s;
    transition - duration: 0.3 s;
}

.hvr - radial - in: before {
    content: "";
    position: absolute;
    z - index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #e1e1e1;
    border - radius: 100 % ; -
    webkit - transform: scale(2);
    transform: scale(2); -
    webkit - transition - property: transform;
    transition - property: transform; -
    webkit - transition - duration: 0.3 s;
    transition - duration: 0.3 s; -
    webkit - transition - timing - function: ease - out;
    transition - timing - function: ease - out;
}

.hvr - radial - in: hover,
    .hvr - radial - in: focus,
    .hvr - radial - in: active {
        color: white;
    }

.hvr - radial - in: hover: before,
    .hvr - radial - in: focus: before,
    .hvr - radial - in: active: before {
        -webkit - transform: scale(0);
        transform: scale(0);
    }


/* Rectangle In */

.hvr - rectangle - in {
    display: inline - block;
    vertical - align: middle; -
    webkit - transform: perspective(1 px) translateZ(0);
    transform: perspective(1 px) translateZ(0);
    box - shadow: 0 0 1 px transparent;
    position: relative;
    background: #2098D1;
    -webkit-transition-property: color;
    transition-property: color;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
}

.hvr-rectangle-in:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: # e1e1e1; -
    webkit - transform: scale(1);
    transform: scale(1); -
    webkit - transition - property: transform;
    transition - property: transform; -
    webkit - transition - duration: 0.3 s;
    transition - duration: 0.3 s; -
    webkit - transition - timing - function: ease - out;
    transition - timing - function: ease - out;
}

.hvr - rectangle - in: hover,
    .hvr - rectangle - in: focus,
    .hvr - rectangle - in: active {
        color: white;
    }

.hvr - rectangle - in: hover: before,
    .hvr - rectangle - in: focus: before,
    .hvr - rectangle - in: active: before {
        -webkit - transform: scale(0);
        transform: scale(0);
    }


/* Rectangle Out */

.hvr - rectangle - out {
    display: inline - block;
    vertical - align: middle; -
    webkit - transform: perspective(1 px) translateZ(0);
    transform: perspective(1 px) translateZ(0);
    box - shadow: 0 0 1 px transparent;
    position: relative;
    background: #e1e1e1; -
    webkit - transition - property: color;
    transition - property: color; -
    webkit - transition - duration: 0.3 s;
    transition - duration: 0.3 s;
}

.hvr - rectangle - out: before {
    content: "";
    position: absolute;
    z - index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #2098D1;
    -webkit-transform: scale(0);
    transform: scale(0);
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
}

.hvr-rectangle-out:hover,
.hvr-rectangle-out:focus,
.hvr-rectangle-out:active {
    color: white;
}

.hvr-rectangle-out:hover:before,
.hvr-rectangle-out:focus:before,
.hvr-rectangle-out:active:before {
    -webkit-transform: scale(1);
    transform: scale(1);
}


/* Shutter In Horizontal */

.hvr-shutter-in-horizontal {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px transparent;
    position: relative;
    background: # 2098 D1; -
    webkit - transition - property: color;
    transition - property: color; -
    webkit - transition - duration: 0.3 s;
    transition - duration: 0.3 s;
}

.hvr - shutter - in -horizontal: before {
    content: "";
    position: absolute;
    z - index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #e1e1e1; -
    webkit - transform: scaleX(1);
    transform: scaleX(1); -
    webkit - transform - origin: 50 % ;
    transform - origin: 50 % ; -
    webkit - transition - property: transform;
    transition - property: transform; -
    webkit - transition - duration: 0.3 s;
    transition - duration: 0.3 s; -
    webkit - transition - timing - function: ease - out;
    transition - timing - function: ease - out;
}

.hvr - shutter - in -horizontal: hover,
    .hvr - shutter - in -horizontal: focus,
    .hvr - shutter - in -horizontal: active {
        color: white;
    }

.hvr - shutter - in -horizontal: hover: before,
    .hvr - shutter - in -horizontal: focus: before,
    .hvr - shutter - in -horizontal: active: before {
        -webkit - transform: scaleX(0);
        transform: scaleX(0);
    }


/* Shutter Out Horizontal */

.hvr - shutter - out - horizontal {
    display: inline - block;
    vertical - align: middle; -
    webkit - transform: perspective(1 px) translateZ(0);
    transform: perspective(1 px) translateZ(0);
    box - shadow: 0 0 1 px transparent;
    position: relative;
    background: #e1e1e1; -
    webkit - transition - property: color;
    transition - property: color; -
    webkit - transition - duration: 0.3 s;
    transition - duration: 0.3 s;
}

.hvr - shutter - out - horizontal: before {
    content: "";
    position: absolute;
    z - index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #2098D1;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transform-origin: 50%;
    transform-origin: 50%;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
}

.hvr-shutter-out-horizontal:hover,
.hvr-shutter-out-horizontal:focus,
.hvr-shutter-out-horizontal:active {
    color: white;
}

.hvr-shutter-out-horizontal:hover:before,
.hvr-shutter-out-horizontal:focus:before,
.hvr-shutter-out-horizontal:active:before {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
}


/* Shutter In Vertical */

.hvr-shutter-in-vertical {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px transparent;
    position: relative;
    background: # 2098 D1; -
    webkit - transition - property: color;
    transition - property: color; -
    webkit - transition - duration: 0.3 s;
    transition - duration: 0.3 s;
}

.hvr - shutter - in -vertical: before {
    content: "";
    position: absolute;
    z - index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #e1e1e1; -
    webkit - transform: scaleY(1);
    transform: scaleY(1); -
    webkit - transform - origin: 50 % ;
    transform - origin: 50 % ; -
    webkit - transition - property: transform;
    transition - property: transform; -
    webkit - transition - duration: 0.3 s;
    transition - duration: 0.3 s; -
    webkit - transition - timing - function: ease - out;
    transition - timing - function: ease - out;
}

.hvr - shutter - in -vertical: hover,
    .hvr - shutter - in -vertical: focus,
    .hvr - shutter - in -vertical: active {
        color: white;
    }

.hvr - shutter - in -vertical: hover: before,
    .hvr - shutter - in -vertical: focus: before,
    .hvr - shutter - in -vertical: active: before {
        -webkit - transform: scaleY(0);
        transform: scaleY(0);
    }


/* Shutter Out Vertical */

.hvr - shutter - out - vertical {
    display: inline - block;
    vertical - align: middle; -
    webkit - transform: perspective(1 px) translateZ(0);
    transform: perspective(1 px) translateZ(0);
    box - shadow: 0 0 1 px transparent;
    position: relative;
    background: #e1e1e1; -
    webkit - transition - property: color;
    transition - property: color; -
    webkit - transition - duration: 0.3 s;
    transition - duration: 0.3 s;
}

.hvr - shutter - out - vertical: before {
    content: "";
    position: absolute;
    z - index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #2098D1;
    -webkit-transform: scaleY(0);
    transform: scaleY(0);
    -webkit-transform-origin: 50%;
    transform-origin: 50%;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
}

.hvr-shutter-out-vertical:hover,
.hvr-shutter-out-vertical:focus,
.hvr-shutter-out-vertical:active {
    color: white;
}

.hvr-shutter-out-vertical:hover:before,
.hvr-shutter-out-vertical:focus:before,
.hvr-shutter-out-vertical:active:before {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
}


/* BORDER TRANSITIONS */


/* Border Fade */

.hvr-border-fade {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px transparent;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: box-shadow;
    transition-property: box-shadow;
    box-shadow: inset 0 0 0 4px # e1e1e1,
    0 0 1 px transparent;
    /* Hack to improve aliasing on mobile/tablet devices */
}

.hvr - border - fade: hover,
    .hvr - border - fade: focus,
    .hvr - border - fade: active {
        box - shadow: inset 0 0 0 4 px #2098D1, 0 0 1px transparent;
    /* Hack to improve aliasing on mobile/tablet devices */
}


/* Hollow */

.hvr-hollow {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px transparent;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: background;
    transition-property: background;
    box-shadow: inset 0 0 0 4px # e1e1e1, 0 0 1 px transparent;
        /* Hack to improve aliasing on mobile/tablet devices */
    }

.hvr - hollow: hover,
    .hvr - hollow: focus,
    .hvr - hollow: active {
        background: none;
    }


/* Trim */

.hvr - trim {
    display: inline - block;
    vertical - align: middle; -
    webkit - transform: perspective(1 px) translateZ(0);
    transform: perspective(1 px) translateZ(0);
    box - shadow: 0 0 1 px transparent;
    position: relative;
}

.hvr - trim: before {
    content: '';
    position: absolute;
    border: white solid 4 px;
    top: 4 px;
    left: 4 px;
    right: 4 px;
    bottom: 4 px;
    opacity: 0; -
    webkit - transition - duration: 0.3 s;
    transition - duration: 0.3 s; -
    webkit - transition - property: opacity;
    transition - property: opacity;
}

.hvr - trim: hover: before,
    .hvr - trim: focus: before,
    .hvr - trim: active: before {
        opacity: 1;
    }


/* Ripple Out */

@ - webkit - keyframes hvr - ripple - out {
    100 % {
        top: -12 px;
        right: -12 px;
        bottom: -12 px;
        left: -12 px;
        opacity: 0;
    }
}

@keyframes hvr - ripple - out {
    100 % {
        top: -12 px;
        right: -12 px;
        bottom: -12 px;
        left: -12 px;
        opacity: 0;
    }
}

.hvr - ripple - out {
    display: inline - block;
    vertical - align: middle; -
    webkit - transform: perspective(1 px) translateZ(0);
    transform: perspective(1 px) translateZ(0);
    box - shadow: 0 0 1 px transparent;
    position: relative;
}

.hvr - ripple - out: before {
    content: '';
    position: absolute;
    border: #e1e1e1 solid 6 px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0; -
    webkit - animation - duration: 1 s;
    animation - duration: 1 s;
}

.hvr - ripple - out: hover: before,
    .hvr - ripple - out: focus: before,
    .hvr - ripple - out: active: before {
        -webkit - animation - name: hvr - ripple - out;
        animation - name: hvr - ripple - out;
    }


/* Ripple In */

@ - webkit - keyframes hvr - ripple - in {
    100 % {
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        opacity: 1;
    }
}

@keyframes hvr - ripple - in {
    100 % {
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        opacity: 1;
    }
}

.hvr - ripple - in {
    display: inline - block;
    vertical - align: middle; -
    webkit - transform: perspective(1 px) translateZ(0);
    transform: perspective(1 px) translateZ(0);
    box - shadow: 0 0 1 px transparent;
    position: relative;
}

.hvr - ripple - in: before {
    content: '';
    position: absolute;
    border: #e1e1e1 solid 4 px;
    top: -12 px;
    right: -12 px;
    bottom: -12 px;
    left: -12 px;
    opacity: 0; -
    webkit - animation - duration: 1 s;
    animation - duration: 1 s;
}

.hvr - ripple - in: hover: before,
    .hvr - ripple - in: focus: before,
    .hvr - ripple - in: active: before {
        -webkit - animation - name: hvr - ripple - in ;
        animation - name: hvr - ripple - in ;
    }


/* Outline Out */

.hvr - outline - out {
    display: inline - block;
    vertical - align: middle; -
    webkit - transform: perspective(1 px) translateZ(0);
    transform: perspective(1 px) translateZ(0);
    box - shadow: 0 0 1 px transparent;
    position: relative;
}

.hvr - outline - out: before {
    content: '';
    position: absolute;
    border: #e1e1e1 solid 4 px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0; -
    webkit - transition - duration: 0.3 s;
    transition - duration: 0.3 s; -
    webkit - transition - property: top,
    right,
    bottom,
    left;
    transition - property: top,
    right,
    bottom,
    left;
}

.hvr - outline - out: hover: before,
    .hvr - outline - out: focus: before,
    .hvr - outline - out: active: before {
        top: -8 px;
        right: -8 px;
        bottom: -8 px;
        left: -8 px;
    }


/* Outline In */

.hvr - outline - in {
    display: inline - block;
    vertical - align: middle; -
    webkit - transform: perspective(1 px) translateZ(0);
    transform: perspective(1 px) translateZ(0);
    box - shadow: 0 0 1 px transparent;
    position: relative;
}

.hvr - outline - in: before {
    pointer - events: none;
    content: '';
    position: absolute;
    border: #e1e1e1 solid 4 px;
    top: -16 px;
    right: -16 px;
    bottom: -16 px;
    left: -16 px;
    opacity: 0; -
    webkit - transition - duration: 0.3 s;
    transition - duration: 0.3 s; -
    webkit - transition - property: top, right, bottom, left;
    transition - property: top, right, bottom, left;
}

.hvr - outline - in: hover: before,
    .hvr - outline - in: focus: before,
    .hvr - outline - in: active: before {
        top: -8 px;
        right: -8 px;
        bottom: -8 px;
        left: -8 px;
        opacity: 1;
    }


/* Round Corners */

.hvr - round - corners {
    display: inline - block;
    vertical - align: middle; -
    webkit - transform: perspective(1 px) translateZ(0);
    transform: perspective(1 px) translateZ(0);
    box - shadow: 0 0 1 px transparent; -
    webkit - transition - duration: 0.3 s;
    transition - duration: 0.3 s; -
    webkit - transition - property: border - radius;
    transition - property: border - radius;
}

.hvr - round - corners: hover,
    .hvr - round - corners: focus,
    .hvr - round - corners: active {
        border - radius: 1e m;
    }


/* Underline From Left */

.hvr - underline - from - left {
    display: inline - block;
    vertical - align: middle; -
    webkit - transform: perspective(1 px) translateZ(0);
    transform: perspective(1 px) translateZ(0);
    box - shadow: 0 0 1 px transparent;
    position: relative;
    overflow: hidden;
}

.hvr - underline - from - left: before {
    content: "";
    position: absolute;
    z - index: -1;
    left: 0;
    right: 100 % ;
    bottom: 0;
    background: #2098D1;
    height: 4px;
    -webkit-transition-property: right;
    transition-property: right;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
}

.hvr-underline-from-left:hover:before,
.hvr-underline-from-left:focus:before,
.hvr-underline-from-left:active:before {
    right: 0;
}


/* Underline From Center */

.hvr-underline-from-center {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px transparent;
    position: relative;
    overflow: hidden;
}

.hvr-underline-from-center:before {
    content: "";
    position: absolute;
    z-index: -1;
    left: 50%;
    right: 50%;
    bottom: 0;
    background: # 2098 D1;
    height: 4 px; -
    webkit - transition - property: left,
    right;
    transition - property: left,
    right; -
    webkit - transition - duration: 0.3 s;
    transition - duration: 0.3 s; -
    webkit - transition - timing - function: ease - out;
    transition - timing - function: ease - out;
}

.hvr - underline - from - center: hover: before,
    .hvr - underline - from - center: focus: before,
    .hvr - underline - from - center: active: before {
        left: 0;
        right: 0;
    }


/* Underline From Right */

.hvr - underline - from - right {
    display: inline - block;
    vertical - align: middle; -
    webkit - transform: perspective(1 px) translateZ(0);
    transform: perspective(1 px) translateZ(0);
    box - shadow: 0 0 1 px transparent;
    position: relative;
    overflow: hidden;
}

.hvr - underline - from - right: before {
    content: "";
    position: absolute;
    z - index: -1;
    left: 100 % ;
    right: 0;
    bottom: 0;
    background: #2098D1;
    height: 4px;
    -webkit-transition-property: left;
    transition-property: left;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
}

.hvr-underline-from-right:hover:before,
.hvr-underline-from-right:focus:before,
.hvr-underline-from-right:active:before {
    left: 0;
}


/* Overline From Left */

.hvr-overline-from-left {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px transparent;
    position: relative;
    overflow: hidden;
}

.hvr-overline-from-left:before {
    content: "";
    position: absolute;
    z-index: -1;
    left: 0;
    right: 100%;
    top: 0;
    background: # 2098 D1;
    height: 4 px; -
    webkit - transition - property: right;
    transition - property: right; -
    webkit - transition - duration: 0.3 s;
    transition - duration: 0.3 s; -
    webkit - transition - timing - function: ease - out;
    transition - timing - function: ease - out;
}

.hvr - overline - from - left: hover: before,
    .hvr - overline - from - left: focus: before,
    .hvr - overline - from - left: active: before {
        right: 0;
    }


/* Overline From Center */

.hvr - overline - from - center {
    display: inline - block;
    vertical - align: middle; -
    webkit - transform: perspective(1 px) translateZ(0);
    transform: perspective(1 px) translateZ(0);
    box - shadow: 0 0 1 px transparent;
    position: relative;
    overflow: hidden;
}

.hvr - overline - from - center: before {
    content: "";
    position: absolute;
    z - index: -1;
    left: 50 % ;
    right: 50 % ;
    top: 0;
    background: #2098D1;
    height: 4px;
    -webkit-transition-property: left, right;
    transition-property: left, right;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
}

.hvr-overline-from-center:hover:before,
.hvr-overline-from-center:focus:before,
.hvr-overline-from-center:active:before {
    left: 0;
    right: 0;
}


/* Overline From Right */

.hvr-overline-from-right {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px transparent;
    position: relative;
    overflow: hidden;
}

.hvr-overline-from-right:before {
    content: "";
    position: absolute;
    z-index: -1;
    left: 100%;
    right: 0;
    top: 0;
    background: # 2098 D1;
    height: 4 px; -
    webkit - transition - property: left;
    transition - property: left; -
    webkit - transition - duration: 0.3 s;
    transition - duration: 0.3 s; -
    webkit - transition - timing - function: ease - out;
    transition - timing - function: ease - out;
}

.hvr - overline - from - right: hover: before,
    .hvr - overline - from - right: focus: before,
    .hvr - overline - from - right: active: before {
        left: 0;
    }


/* Reveal */

.hvr - reveal {
    display: inline - block;
    vertical - align: middle; -
    webkit - transform: perspective(1 px) translateZ(0);
    transform: perspective(1 px) translateZ(0);
    box - shadow: 0 0 1 px transparent;
    position: relative;
    overflow: hidden;
}

.hvr - reveal: before {
    content: "";
    position: absolute;
    z - index: -1;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border - color: #2098D1;
    border-style: solid;
    border-width: 0;
    -webkit-transition-property: border-width;
    transition-property: border-width;
    -webkit-transition-duration: 0.1s;
    transition-duration: 0.1s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
}

.hvr-reveal:hover:before,
.hvr-reveal:focus:before,
.hvr-reveal:active:before {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    border-width: 4px;
}


/* Underline Reveal */

.hvr-underline-reveal {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px transparent;
    position: relative;
    overflow: hidden;
}

.hvr-underline-reveal:before {
    content: "";
    position: absolute;
    z-index: -1;
    left: 0;
    right: 0;
    bottom: 0;
    background: # 2098 D1;
    height: 4 px; -
    webkit - transform: translateY(4 px);
    transform: translateY(4 px); -
    webkit - transition - property: transform;
    transition - property: transform; -
    webkit - transition - duration: 0.3 s;
    transition - duration: 0.3 s; -
    webkit - transition - timing - function: ease - out;
    transition - timing - function: ease - out;
}

.hvr - underline - reveal: hover: before,
    .hvr - underline - reveal: focus: before,
    .hvr - underline - reveal: active: before {
        -webkit - transform: translateY(0);
        transform: translateY(0);
    }


/* Overline Reveal */

.hvr - overline - reveal {
    display: inline - block;
    vertical - align: middle; -
    webkit - transform: perspective(1 px) translateZ(0);
    transform: perspective(1 px) translateZ(0);
    box - shadow: 0 0 1 px transparent;
    position: relative;
    overflow: hidden;
}

.hvr - overline - reveal: before {
    content: "";
    position: absolute;
    z - index: -1;
    left: 0;
    right: 0;
    top: 0;
    background: #2098D1;
    height: 4px;
    -webkit-transform: translateY(-4px);
    transform: translateY(-4px);
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
}

.hvr-overline-reveal:hover:before,
.hvr-overline-reveal:focus:before,
.hvr-overline-reveal:active:before {
    -webkit-transform: translateY(0);
    transform: translateY(0);
}


/* SHADOW/GLOW TRANSITIONS */


/* Glow */

.hvr-glow {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px transparent;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: box-shadow;
    transition-property: box-shadow;
}

.hvr-glow:hover,
.hvr-glow:focus,
.hvr-glow:active {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
}


/* Shadow */

.hvr-shadow {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px transparent;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: box-shadow;
    transition-property: box-shadow;
}

.hvr-shadow:hover,
.hvr-shadow:focus,
.hvr-shadow:active {
    box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
}


/* Grow Shadow */

.hvr-grow-shadow {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px transparent;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: box-shadow, transform;
    transition-property: box-shadow, transform;
}

.hvr-grow-shadow:hover,
.hvr-grow-shadow:focus,
.hvr-grow-shadow:active {
    box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}


/* Box Shadow Outset */

.hvr-box-shadow-outset {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px transparent;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: box-shadow;
    transition-property: box-shadow;
}

.hvr-box-shadow-outset:hover,
.hvr-box-shadow-outset:focus,
.hvr-box-shadow-outset:active {
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.6);
}


/* Box Shadow Inset */

.hvr-box-shadow-inset {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px transparent;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: box-shadow;
    transition-property: box-shadow;
    box-shadow: inset 0 0 0 rgba(0, 0, 0, 0.6), 0 0 1px transparent;
    /* Hack to improve aliasing on mobile/tablet devices */
}

.hvr-box-shadow-inset:hover,
.hvr-box-shadow-inset:focus,
.hvr-box-shadow-inset:active {
    box-shadow: inset 2px 2px 2px rgba(0, 0, 0, 0.6), 0 0 1px transparent;
    /* Hack to improve aliasing on mobile/tablet devices */
}


/* Float Shadow */

.hvr-float-shadow {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px transparent;
    position: relative;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
}

.hvr-float-shadow:before {
    pointer-events: none;
    position: absolute;
    z-index: -1;
    content: '';
    top: 100%;
    left: 5%;
    height: 10px;
    width: 90%;
    opacity: 0;
    background: -webkit-radial-gradient(center, ellipse, rgba(0, 0, 0, 0.35) 0%, transparent 80%);
    background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.35) 0%, transparent 80%);
    /* W3C */
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform, opacity;
    transition-property: transform, opacity;
}

.hvr-float-shadow:hover,
.hvr-float-shadow:focus,
.hvr-float-shadow:active {
    -webkit-transform: translateY(-5px);
    transform: translateY(-5px);
    /* move the element up by 5px */
}

.hvr-float-shadow:hover:before,
.hvr-float-shadow:focus:before,
.hvr-float-shadow:active:before {
    opacity: 1;
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
    /* move the element down by 5px (it will stay in place because it's attached to the element that also moves up 5px) */
}


/* Shadow Radial */

.hvr-shadow-radial {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px transparent;
    position: relative;
}

.hvr-shadow-radial:before,
.hvr-shadow-radial:after {
    pointer-events: none;
    position: absolute;
    content: '';
    left: 0;
    width: 100%;
    box-sizing: border-box;
    background-repeat: no-repeat;
    height: 5px;
    opacity: 0;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: opacity;
    transition-property: opacity;
}

.hvr-shadow-radial:before {
    bottom: 100%;
    background: -webkit-radial-gradient(50% 150%, ellipse, rgba(0, 0, 0, 0.6) 0%, transparent 80%);
    background: radial-gradient(ellipse at 50% 150%, rgba(0, 0, 0, 0.6) 0%, transparent 80%);
}

.hvr-shadow-radial:after {
    top: 100%;
    background: -webkit-radial-gradient(50% -50%, ellipse, rgba(0, 0, 0, 0.6) 0%, transparent 80%);
    background: radial-gradient(ellipse at 50% -50%, rgba(0, 0, 0, 0.6) 0%, transparent 80%);
}

.hvr-shadow-radial:hover:before,
.hvr-shadow-radial:focus:before,
.hvr-shadow-radial:active:before,
.hvr-shadow-radial:hover:after,
.hvr-shadow-radial:focus:after,
.hvr-shadow-radial:active:after {
    opacity: 1;
}


/* SPEECH BUBBLES */


/* Bubble Top */

.hvr-bubble-top {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px transparent;
    position: relative;
}

.hvr-bubble-top:before {
    pointer-events: none;
    position: absolute;
    z-index: -1;
    content: '';
    border-style: solid;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
    left: calc(50% - 10px);
    top: 0;
    border-width: 0 10px 10px 10px;
    border-color: transparent transparent # e1e1e1 transparent;
}

.hvr - bubble - top: hover: before,
    .hvr - bubble - top: focus: before,
    .hvr - bubble - top: active: before {
        -webkit - transform: translateY(-10 px);
        transform: translateY(-10 px);
    }


/* Bubble Right */

.hvr - bubble - right {
    display: inline - block;
    vertical - align: middle; -
    webkit - transform: perspective(1 px) translateZ(0);
    transform: perspective(1 px) translateZ(0);
    box - shadow: 0 0 1 px transparent;
    position: relative;
}

.hvr - bubble - right: before {
    pointer - events: none;
    position: absolute;
    z - index: -1;
    content: '';
    border - style: solid; -
    webkit - transition - duration: 0.3 s;
    transition - duration: 0.3 s; -
    webkit - transition - property: transform;
    transition - property: transform;
    top: calc(50 % -10 px);
    right: 0;
    border - width: 10 px 0 10 px 10 px;
    border - color: transparent transparent transparent# e1e1e1;
}

.hvr - bubble - right: hover: before,
    .hvr - bubble - right: focus: before,
    .hvr - bubble - right: active: before {
        -webkit - transform: translateX(10 px);
        transform: translateX(10 px);
    }


/* Bubble Bottom */

.hvr - bubble - bottom {
    display: inline - block;
    vertical - align: middle; -
    webkit - transform: perspective(1 px) translateZ(0);
    transform: perspective(1 px) translateZ(0);
    box - shadow: 0 0 1 px transparent;
    position: relative;
}

.hvr - bubble - bottom: before {
    pointer - events: none;
    position: absolute;
    z - index: -1;
    content: '';
    border - style: solid; -
    webkit - transition - duration: 0.3 s;
    transition - duration: 0.3 s; -
    webkit - transition - property: transform;
    transition - property: transform;
    left: calc(50 % -10 px);
    bottom: 0;
    border - width: 10 px 10 px 0 10 px;
    border - color: #e1e1e1 transparent transparent transparent;
}

.hvr - bubble - bottom: hover: before,
    .hvr - bubble - bottom: focus: before,
    .hvr - bubble - bottom: active: before {
        -webkit - transform: translateY(10 px);
        transform: translateY(10 px);
    }


/* Bubble Left */

.hvr - bubble - left {
    display: inline - block;
    vertical - align: middle; -
    webkit - transform: perspective(1 px) translateZ(0);
    transform: perspective(1 px) translateZ(0);
    box - shadow: 0 0 1 px transparent;
    position: relative;
}

.hvr - bubble - left: before {
    pointer - events: none;
    position: absolute;
    z - index: -1;
    content: '';
    border - style: solid; -
    webkit - transition - duration: 0.3 s;
    transition - duration: 0.3 s; -
    webkit - transition - property: transform;
    transition - property: transform;
    top: calc(50 % -10 px);
    left: 0;
    border - width: 10 px 10 px 10 px 0;
    border - color: transparent# e1e1e1 transparent transparent;
}

.hvr - bubble - left: hover: before,
    .hvr - bubble - left: focus: before,
    .hvr - bubble - left: active: before {
        -webkit - transform: translateX(-10 px);
        transform: translateX(-10 px);
    }


/* Bubble Float Top */

.hvr - bubble - float - top {
    display: inline - block;
    vertical - align: middle; -
    webkit - transform: perspective(1 px) translateZ(0);
    transform: perspective(1 px) translateZ(0);
    box - shadow: 0 0 1 px transparent;
    position: relative; -
    webkit - transition - duration: 0.3 s;
    transition - duration: 0.3 s; -
    webkit - transition - property: transform;
    transition - property: transform;
}

.hvr - bubble - float - top: before {
    position: absolute;
    z - index: -1;
    content: '';
    left: calc(50 % -10 px);
    top: 0;
    border - style: solid;
    border - width: 0 10 px 10 px 10 px;
    border - color: transparent transparent# e1e1e1 transparent; -
    webkit - transition - duration: 0.3 s;
    transition - duration: 0.3 s; -
    webkit - transition - property: transform;
    transition - property: transform;
}

.hvr - bubble - float - top: hover,
    .hvr - bubble - float - top: focus,
    .hvr - bubble - float - top: active {
        -webkit - transform: translateY(10 px);
        transform: translateY(10 px);
    }

.hvr - bubble - float - top: hover: before,
    .hvr - bubble - float - top: focus: before,
    .hvr - bubble - float - top: active: before {
        -webkit - transform: translateY(-10 px);
        transform: translateY(-10 px);
    }


/* Bubble Float Right */

.hvr - bubble - float - right {
    display: inline - block;
    vertical - align: middle; -
    webkit - transform: perspective(1 px) translateZ(0);
    transform: perspective(1 px) translateZ(0);
    box - shadow: 0 0 1 px transparent;
    position: relative; -
    webkit - transition - duration: 0.3 s;
    transition - duration: 0.3 s; -
    webkit - transition - property: transform;
    transition - property: transform;
}

.hvr - bubble - float - right: before {
    position: absolute;
    z - index: -1;
    top: calc(50 % -10 px);
    right: 0;
    content: '';
    border - style: solid;
    border - width: 10 px 0 10 px 10 px;
    border - color: transparent transparent transparent# e1e1e1; -
    webkit - transition - duration: 0.3 s;
    transition - duration: 0.3 s; -
    webkit - transition - property: transform;
    transition - property: transform;
}

.hvr - bubble - float - right: hover,
    .hvr - bubble - float - right: focus,
    .hvr - bubble - float - right: active {
        -webkit - transform: translateX(-10 px);
        transform: translateX(-10 px);
    }

.hvr - bubble - float - right: hover: before,
    .hvr - bubble - float - right: focus: before,
    .hvr - bubble - float - right: active: before {
        -webkit - transform: translateX(10 px);
        transform: translateX(10 px);
    }


/* Bubble Float Bottom */

.hvr - bubble - float - bottom {
    display: inline - block;
    vertical - align: middle; -
    webkit - transform: perspective(1 px) translateZ(0);
    transform: perspective(1 px) translateZ(0);
    box - shadow: 0 0 1 px transparent;
    position: relative; -
    webkit - transition - duration: 0.3 s;
    transition - duration: 0.3 s; -
    webkit - transition - property: transform;
    transition - property: transform;
}

.hvr - bubble - float - bottom: before {
    position: absolute;
    z - index: -1;
    content: '';
    left: calc(50 % -10 px);
    bottom: 0;
    border - style: solid;
    border - width: 10 px 10 px 0 10 px;
    border - color: #e1e1e1 transparent transparent transparent; -
    webkit - transition - duration: 0.3 s;
    transition - duration: 0.3 s; -
    webkit - transition - property: transform;
    transition - property: transform;
}

.hvr - bubble - float - bottom: hover,
    .hvr - bubble - float - bottom: focus,
    .hvr - bubble - float - bottom: active {
        -webkit - transform: translateY(-10 px);
        transform: translateY(-10 px);
    }

.hvr - bubble - float - bottom: hover: before,
    .hvr - bubble - float - bottom: focus: before,
    .hvr - bubble - float - bottom: active: before {
        -webkit - transform: translateY(10 px);
        transform: translateY(10 px);
    }


/* Bubble Float Left */

.hvr - bubble - float - left {
    display: inline - block;
    vertical - align: middle; -
    webkit - transform: perspective(1 px) translateZ(0);
    transform: perspective(1 px) translateZ(0);
    box - shadow: 0 0 1 px transparent;
    position: relative; -
    webkit - transition - duration: 0.3 s;
    transition - duration: 0.3 s; -
    webkit - transition - property: transform;
    transition - property: transform;
}

.hvr - bubble - float - left: before {
    position: absolute;
    z - index: -1;
    content: '';
    top: calc(50 % -10 px);
    left: 0;
    border - style: solid;
    border - width: 10 px 10 px 10 px 0;
    border - color: transparent# e1e1e1 transparent transparent; -
    webkit - transition - duration: 0.3 s;
    transition - duration: 0.3 s; -
    webkit - transition - property: transform;
    transition - property: transform;
}

.hvr - bubble - float - left: hover,
    .hvr - bubble - float - left: focus,
    .hvr - bubble - float - left: active {
        -webkit - transform: translateX(10 px);
        transform: translateX(10 px);
    }

.hvr - bubble - float - left: hover: before,
    .hvr - bubble - float - left: focus: before,
    .hvr - bubble - float - left: active: before {
        -webkit - transform: translateX(-10 px);
        transform: translateX(-10 px);
    }


/* ICONS */


/* Icon Back */

.hvr - icon - back {
    display: inline - block;
    vertical - align: middle; -
    webkit - transform: perspective(1 px) translateZ(0);
    transform: perspective(1 px) translateZ(0);
    box - shadow: 0 0 1 px transparent;
    position: relative;
    padding - left: 2.2e m; -
    webkit - transition - duration: 0.1 s;
    transition - duration: 0.1 s;
}

.hvr - icon - back: before {
    content: "\f137";
    position: absolute;
    left: 1e m;
    padding: 0 1 px;
    font - family: FontAwesome; -
    webkit - transform: translateZ(0);
    transform: translateZ(0); -
    webkit - transition - duration: 0.1 s;
    transition - duration: 0.1 s; -
    webkit - transition - property: transform;
    transition - property: transform; -
    webkit - transition - timing - function: ease - out;
    transition - timing - function: ease - out;
}

.hvr - icon - back: hover: before,
    .hvr - icon - back: focus: before,
    .hvr - icon - back: active: before {
        -webkit - transform: translateX(-4 px);
        transform: translateX(-4 px);
    }


/* Icon Forward */

.hvr - icon - forward {
    display: inline - block;
    vertical - align: middle; -
    webkit - transform: perspective(1 px) translateZ(0);
    transform: perspective(1 px) translateZ(0);
    box - shadow: 0 0 1 px transparent;
    position: relative;
    padding - right: 2.2e m; -
    webkit - transition - duration: 0.1 s;
    transition - duration: 0.1 s;
}

.hvr - icon - forward: before {
    content: "\f138";
    position: absolute;
    right: 1e m;
    padding: 0 1 px;
    font - family: FontAwesome; -
    webkit - transform: translateZ(0);
    transform: translateZ(0); -
    webkit - transition - duration: 0.1 s;
    transition - duration: 0.1 s; -
    webkit - transition - property: transform;
    transition - property: transform; -
    webkit - transition - timing - function: ease - out;
    transition - timing - function: ease - out;
}

.hvr - icon - forward: hover: before,
    .hvr - icon - forward: focus: before,
    .hvr - icon - forward: active: before {
        -webkit - transform: translateX(4 px);
        transform: translateX(4 px);
    }


/* Icon Down */

@ - webkit - keyframes hvr - icon - down {
    0 % ,
        50 % ,
        100 % {-webkit - transform: translateY(0);
            transform: translateY(0);
        }
    25 % ,
        75 % {-webkit - transform: translateY(6 px);
            transform: translateY(6 px);
        }
}

@keyframes hvr - icon - down {
    0 % ,
        50 % ,
        100 % {-webkit - transform: translateY(0);
            transform: translateY(0);
        }
    25 % ,
        75 % {-webkit - transform: translateY(6 px);
            transform: translateY(6 px);
        }
}


/* Icon Down */

.hvr - icon - down {
    display: inline - block;
    vertical - align: middle; -
    webkit - transform: perspective(1 px) translateZ(0);
    transform: perspective(1 px) translateZ(0);
    box - shadow: 0 0 1 px transparent;
    position: relative;
    padding - right: 2.2e m;
}

.hvr - icon - down: before {
    content: "\f01a";
    position: absolute;
    right: 1e m;
    padding: 0 1 px;
    font - family: FontAwesome; -
    webkit - transform: translateZ(0);
    transform: translateZ(0);
}

.hvr - icon - down: hover: before,
    .hvr - icon - down: focus: before,
    .hvr - icon - down: active: before {
        -webkit - animation - name: hvr - icon - down;
        animation - name: hvr - icon - down; -
        webkit - animation - duration: 0.75 s;
        animation - duration: 0.75 s; -
        webkit - animation - timing - function: ease - out;
        animation - timing - function: ease - out;
    }


/* Icon Up */

@ - webkit - keyframes hvr - icon - up {
    0 % ,
        50 % ,
        100 % {-webkit - transform: translateY(0);
            transform: translateY(0);
        }
    25 % ,
        75 % {-webkit - transform: translateY(-6 px);
            transform: translateY(-6 px);
        }
}

@keyframes hvr - icon - up {
    0 % ,
        50 % ,
        100 % {-webkit - transform: translateY(0);
            transform: translateY(0);
        }
    25 % ,
        75 % {-webkit - transform: translateY(-6 px);
            transform: translateY(-6 px);
        }
}


/* Icon Up */

.hvr - icon - up {
    display: inline - block;
    vertical - align: middle; -
    webkit - transform: perspective(1 px) translateZ(0);
    transform: perspective(1 px) translateZ(0);
    box - shadow: 0 0 1 px transparent;
    position: relative;
    padding - right: 2.2e m;
}

.hvr - icon - up: before {
    content: "\f01b";
    position: absolute;
    right: 1e m;
    padding: 0 1 px;
    font - family: FontAwesome; -
    webkit - transform: translateZ(0);
    transform: translateZ(0);
}

.hvr - icon - up: hover: before,
    .hvr - icon - up: focus: before,
    .hvr - icon - up: active: before {
        -webkit - animation - name: hvr - icon - up;
        animation - name: hvr - icon - up; -
        webkit - animation - duration: 0.75 s;
        animation - duration: 0.75 s; -
        webkit - animation - timing - function: ease - out;
        animation - timing - function: ease - out;
    }


/* Icon Spin */

.hvr - icon - spin {
    display: inline - block;
    vertical - align: middle; -
    webkit - transform: perspective(1 px) translateZ(0);
    transform: perspective(1 px) translateZ(0);
    box - shadow: 0 0 1 px transparent;
    position: relative;
    padding - right: 2.2e m;
}

.hvr - icon - spin: before {
    content: "\f021";
    position: absolute;
    right: 1e m;
    padding: 0 1 px;
    font - family: FontAwesome; -
    webkit - transition - duration: 1 s;
    transition - duration: 1 s; -
    webkit - transition - property: transform;
    transition - property: transform; -
    webkit - transition - timing - function: ease - in -out;
    transition - timing - function: ease - in -out;
}

.hvr - icon - spin: hover: before,
    .hvr - icon - spin: focus: before,
    .hvr - icon - spin: active: before {
        -webkit - transform: rotate(360 deg);
        transform: rotate(360 deg);
    }


/* Icon Drop */

@ - webkit - keyframes hvr - icon - drop {
    0 % {
        opacity: 0;
    }
    50 % {
        opacity: 0; -
        webkit - transform: translateY(-100 % );
        transform: translateY(-100 % );
    }
    51 % ,
        100 % {
            opacity: 1;
        }
}

@keyframes hvr - icon - drop {
    0 % {
        opacity: 0;
    }
    50 % {
        opacity: 0; -
        webkit - transform: translateY(-100 % );
        transform: translateY(-100 % );
    }
    51 % ,
        100 % {
            opacity: 1;
        }
}


/* Icon Drop */

.hvr - icon - drop {
    display: inline - block;
    vertical - align: middle; -
    webkit - transform: perspective(1 px) translateZ(0);
    transform: perspective(1 px) translateZ(0);
    box - shadow: 0 0 1 px transparent;
    position: relative;
    padding - right: 2.2e m;
}

.hvr - icon - drop: before {
    content: "\f041";
    position: absolute;
    right: 1e m;
    opacity: 1;
    padding: 0 1 px;
    font - family: FontAwesome; -
    webkit - transform: translateZ(0);
    transform: translateZ(0);
}

.hvr - icon - drop: hover: before,
    .hvr - icon - drop: focus: before,
    .hvr - icon - drop: active: before {
        opacity: 0; -
        webkit - transition - duration: 0.3 s;
        transition - duration: 0.3 s; -
        webkit - animation - name: hvr - icon - drop;
        animation - name: hvr - icon - drop; -
        webkit - animation - duration: 0.5 s;
        animation - duration: 0.5 s; -
        webkit - animation - delay: 0.3 s;
        animation - delay: 0.3 s; -
        webkit - animation - fill - mode: forwards;
        animation - fill - mode: forwards; -
        webkit - animation - timing - function: ease - in -out;
        animation - timing - function: ease - in -out; -
        webkit - animation - timing - function: cubic - bezier(0.52, 1.64, 0.37, 0.66);
        animation - timing - function: cubic - bezier(0.52, 1.64, 0.37, 0.66);
    }


/* Icon Fade */

.hvr - icon - fade {
    display: inline - block;
    vertical - align: middle; -
    webkit - transform: perspective(1 px) translateZ(0);
    transform: perspective(1 px) translateZ(0);
    box - shadow: 0 0 1 px transparent;
    position: relative;
    padding - right: 2.2e m;
}

.hvr - icon - fade: before {
    content: "\f00c";
    position: absolute;
    right: 1e m;
    padding: 0 1 px;
    font - family: FontAwesome; -
    webkit - transform: translateZ(0);
    transform: translateZ(0); -
    webkit - transition - duration: 0.5 s;
    transition - duration: 0.5 s; -
    webkit - transition - property: color;
    transition - property: color;
}

.hvr - icon - fade: hover: before,
    .hvr - icon - fade: focus: before,
    .hvr - icon - fade: active: before {
        color: #0F9E5E;
}


/* Icon Float Away */

@-webkit-keyframes hvr-icon-float-away {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        -webkit-transform: translateY(-1em);
        transform: translateY(-1em);
    }
}

@keyframes hvr-icon-float-away {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        -webkit-transform: translateY(-1em);
        transform: translateY(-1em);
    }
}


/* Icon Float Away */

.hvr-icon-float-away {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px transparent;
    position: relative;
    padding-right: 2.2em;
}

.hvr-icon-float-away:before,
.hvr-icon-float-away:after {
    content: "\f055";
    position: absolute;
    right: 1em;
    padding: 0 1px;
    font-family: FontAwesome;
}

.hvr-icon-float-away:after {
    opacity: 0;
    -webkit-animation-duration: 0.5s;
    animation-duration: 0.5s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
}

.hvr-icon-float-away:hover:after,
.hvr-icon-float-away:focus:after,
.hvr-icon-float-away:active:after {
    -webkit-animation-name: hvr-icon-float-away;
    animation-name: hvr-icon-float-away;
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
}


/* Icon Sink Away */

@-webkit-keyframes hvr-icon-sink-away {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        -webkit-transform: translateY(1em);
        transform: translateY(1em);
    }
}

@keyframes hvr-icon-sink-away {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        -webkit-transform: translateY(1em);
        transform: translateY(1em);
    }
}


/* Icon Sink Away */

.hvr-icon-sink-away {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px transparent;
    position: relative;
    padding-right: 2.2em;
}

.hvr-icon-sink-away:before,
.hvr-icon-sink-away:after {
    content: "\f056";
    position: absolute;
    right: 1em;
    padding: 0 1px;
    font-family: FontAwesome;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
}

.hvr-icon-sink-away:after {
    opacity: 0;
    -webkit-animation-duration: 0.5s;
    animation-duration: 0.5s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
}

.hvr-icon-sink-away:hover:after,
.hvr-icon-sink-away:focus:after,
.hvr-icon-sink-away:active:after {
    -webkit-animation-name: hvr-icon-sink-away;
    animation-name: hvr-icon-sink-away;
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
}


/* Icon Grow */

.hvr-icon-grow {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px transparent;
    position: relative;
    padding-right: 2.2em;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
}

.hvr-icon-grow:before {
    content: "\f118";
    position: absolute;
    right: 1em;
    padding: 0 1px;
    font-family: FontAwesome;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
}

.hvr-icon-grow:hover:before,
.hvr-icon-grow:focus:before,
.hvr-icon-grow:active:before {
    -webkit-transform: scale(1.3) translateZ(0);
    transform: scale(1.3) translateZ(0);
}


/* Icon Shrink */

.hvr-icon-shrink {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px transparent;
    position: relative;
    padding-right: 2.2em;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
}

.hvr-icon-shrink:before {
    content: "\f119";
    position: absolute;
    right: 1em;
    padding: 0 1px;
    font-family: FontAwesome;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
}

.hvr-icon-shrink:hover:before,
.hvr-icon-shrink:focus:before,
.hvr-icon-shrink:active:before {
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
}


/* Icon Pulse */

@-webkit-keyframes hvr-icon-pulse {
    25% {
        -webkit-transform: scale(1.3);
        transform: scale(1.3);
    }
    75% {
        -webkit-transform: scale(0.8);
        transform: scale(0.8);
    }
}

@keyframes hvr-icon-pulse {
    25% {
        -webkit-transform: scale(1.3);
        transform: scale(1.3);
    }
    75% {
        -webkit-transform: scale(0.8);
        transform: scale(0.8);
    }
}

.hvr-icon-pulse {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px transparent;
    position: relative;
    padding-right: 2.2em;
}

.hvr-icon-pulse:before {
    content: "\f015";
    position: absolute;
    right: 1em;
    padding: 0 1px;
    font-family: FontAwesome;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
}

.hvr-icon-pulse:hover:before,
.hvr-icon-pulse:focus:before,
.hvr-icon-pulse:active:before {
    -webkit-animation-name: hvr-icon-pulse;
    animation-name: hvr-icon-pulse;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
}


/* Icon Pulse Grow */

@-webkit-keyframes hvr-icon-pulse-grow {
    to {
        -webkit-transform: scale(1.3);
        transform: scale(1.3);
    }
}

@keyframes hvr-icon-pulse-grow {
    to {
        -webkit-transform: scale(1.3);
        transform: scale(1.3);
    }
}

.hvr-icon-pulse-grow {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px transparent;
    position: relative;
    padding-right: 2.2em;
}

.hvr-icon-pulse-grow:before {
    content: "\f015";
    position: absolute;
    right: 1em;
    padding: 0 1px;
    font-family: FontAwesome;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
}

.hvr-icon-pulse-grow:hover:before,
.hvr-icon-pulse-grow:focus:before,
.hvr-icon-pulse-grow:active:before {
    -webkit-animation-name: hvr-icon-pulse-grow;
    animation-name: hvr-icon-pulse-grow;
    -webkit-animation-duration: 0.3s;
    animation-duration: 0.3s;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-direction: alternate;
    animation-direction: alternate;
}


/* Icon Pulse Shrink */

@-webkit-keyframes hvr-icon-pulse-shrink {
    to {
        -webkit-transform: scale(0.8);
        transform: scale(0.8);
    }
}

@keyframes hvr-icon-pulse-shrink {
    to {
        -webkit-transform: scale(0.8);
        transform: scale(0.8);
    }
}

.hvr-icon-pulse-shrink {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px transparent;
    position: relative;
    padding-right: 2.2em;
}

.hvr-icon-pulse-shrink:before {
    content: "\f015";
    position: absolute;
    right: 1em;
    padding: 0 1px;
    font-family: FontAwesome;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
}

.hvr-icon-pulse-shrink:hover:before,
.hvr-icon-pulse-shrink:focus:before,
.hvr-icon-pulse-shrink:active:before {
    -webkit-animation-name: hvr-icon-pulse-shrink;
    animation-name: hvr-icon-pulse-shrink;
    -webkit-animation-duration: 0.3s;
    animation-duration: 0.3s;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-direction: alternate;
    animation-direction: alternate;
}


/* Icon Push */

@-webkit-keyframes hvr-icon-push {
    50% {
        -webkit-transform: scale(0.5);
        transform: scale(0.5);
    }
}

@keyframes hvr-icon-push {
    50% {
        -webkit-transform: scale(0.5);
        transform: scale(0.5);
    }
}

.hvr-icon-push {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px transparent;
    position: relative;
    padding-right: 2.2em;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
}

.hvr-icon-push:before {
    content: "\f006";
    position: absolute;
    right: 1em;
    padding: 0 1px;
    font-family: FontAwesome;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
}

.hvr-icon-push:hover:before,
.hvr-icon-push:focus:before,
.hvr-icon-push:active:before {
    -webkit-animation-name: hvr-icon-push;
    animation-name: hvr-icon-push;
    -webkit-animation-duration: 0.3s;
    animation-duration: 0.3s;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
}


/* Icon Pop */

@-webkit-keyframes hvr-icon-pop {
    50% {
        -webkit-transform: scale(1.5);
        transform: scale(1.5);
    }
}

@keyframes hvr-icon-pop {
    50% {
        -webkit-transform: scale(1.5);
        transform: scale(1.5);
    }
}

.hvr-icon-pop {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px transparent;
    position: relative;
    padding-right: 2.2em;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
}

.hvr-icon-pop:before {
    content: "\f005";
    position: absolute;
    right: 1em;
    padding: 0 1px;
    font-family: FontAwesome;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
}

.hvr-icon-pop:hover:before,
.hvr-icon-pop:focus:before,
.hvr-icon-pop:active:before {
    -webkit-animation-name: hvr-icon-pop;
    animation-name: hvr-icon-pop;
    -webkit-animation-duration: 0.3s;
    animation-duration: 0.3s;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
}


/* Icon Bounce */

.hvr-icon-bounce {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px transparent;
    position: relative;
    padding-right: 2.2em;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
}

.hvr-icon-bounce:before {
    content: "\f087";
    position: absolute;
    right: 1em;
    padding: 0 1px;
    font-family: FontAwesome;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
}

.hvr-icon-bounce:hover:before,
.hvr-icon-bounce:focus:before,
.hvr-icon-bounce:active:before {
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
    -webkit-transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
    transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
}


/* Icon Rotate */

.hvr-icon-rotate {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px transparent;
    position: relative;
    padding-right: 2.2em;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
}

.hvr-icon-rotate:before {
    content: "\f0c6";
    position: absolute;
    right: 1em;
    padding: 0 1px;
    font-family: FontAwesome;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
}

.hvr-icon-rotate:hover:before,
.hvr-icon-rotate:focus:before,
.hvr-icon-rotate:active:before {
    -webkit-transform: rotate(20deg);
    transform: rotate(20deg);
}


/* Icon Grow Rotate */

.hvr-icon-grow-rotate {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px transparent;
    position: relative;
    padding-right: 2.2em;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
}

.hvr-icon-grow-rotate:before {
    content: "\f095";
    position: absolute;
    right: 1em;
    padding: 0 1px;
    font-family: FontAwesome;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
}

.hvr-icon-grow-rotate:hover:before,
.hvr-icon-grow-rotate:focus:before,
.hvr-icon-grow-rotate:active:before {
    -webkit-transform: scale(1.5) rotate(12deg);
    transform: scale(1.5) rotate(12deg);
}


/* Icon Float */

.hvr-icon-float {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px transparent;
    position: relative;
    padding-right: 2.2em;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
}

.hvr-icon-float:before {
    content: "\f01b";
    position: absolute;
    right: 1em;
    padding: 0 1px;
    font-family: FontAwesome;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
}

.hvr-icon-float:hover:before,
.hvr-icon-float:focus:before,
.hvr-icon-float:active:before {
    -webkit-transform: translateY(-4px);
    transform: translateY(-4px);
}


/* Icon Sink */

.hvr-icon-sink {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px transparent;
    position: relative;
    padding-right: 2.2em;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
}

.hvr-icon-sink:before {
    content: "\f01a";
    position: absolute;
    right: 1em;
    padding: 0 1px;
    font-family: FontAwesome;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
}

.hvr-icon-sink:hover:before,
.hvr-icon-sink:focus:before,
.hvr-icon-sink:active:before {
    -webkit-transform: translateY(4px);
    transform: translateY(4px);
}


/* Icon Bob */

@-webkit-keyframes hvr-icon-bob {
    0% {
        -webkit-transform: translateY(-6px);
        transform: translateY(-6px);
    }
    50% {
        -webkit-transform: translateY(-2px);
        transform: translateY(-2px);
    }
    100% {
        -webkit-transform: translateY(-6px);
        transform: translateY(-6px);
    }
}

@keyframes hvr-icon-bob {
    0% {
        -webkit-transform: translateY(-6px);
        transform: translateY(-6px);
    }
    50% {
        -webkit-transform: translateY(-2px);
        transform: translateY(-2px);
    }
    100% {
        -webkit-transform: translateY(-6px);
        transform: translateY(-6px);
    }
}

@-webkit-keyframes hvr-icon-bob-float {
    100% {
        -webkit-transform: translateY(-6px);
        transform: translateY(-6px);
    }
}

@keyframes hvr-icon-bob-float {
    100% {
        -webkit-transform: translateY(-6px);
        transform: translateY(-6px);
    }
}

.hvr-icon-bob {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px transparent;
    position: relative;
    padding-right: 2.2em;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
}

.hvr-icon-bob:before {
    content: "\f077";
    position: absolute;
    right: 1em;
    padding: 0 1px;
    font-family: FontAwesome;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
}

.hvr-icon-bob:hover:before,
.hvr-icon-bob:focus:before,
.hvr-icon-bob:active:before {
    -webkit-animation-name: hvr-icon-bob-float, hvr-icon-bob;
    animation-name: hvr-icon-bob-float, hvr-icon-bob;
    -webkit-animation-duration: .3s, 1.5s;
    animation-duration: .3s, 1.5s;
    -webkit-animation-delay: 0s, .3s;
    animation-delay: 0s, .3s;
    -webkit-animation-timing-function: ease-out, ease-in-out;
    animation-timing-function: ease-out, ease-in-out;
    -webkit-animation-iteration-count: 1, infinite;
    animation-iteration-count: 1, infinite;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    -webkit-animation-direction: normal, alternate;
    animation-direction: normal, alternate;
}


/* Icon Hang */

@-webkit-keyframes hvr-icon-hang {
    0% {
        -webkit-transform: translateY(6px);
        transform: translateY(6px);
    }
    50% {
        -webkit-transform: translateY(2px);
        transform: translateY(2px);
    }
    100% {
        -webkit-transform: translateY(6px);
        transform: translateY(6px);
    }
}

@keyframes hvr-icon-hang {
    0% {
        -webkit-transform: translateY(6px);
        transform: translateY(6px);
    }
    50% {
        -webkit-transform: translateY(2px);
        transform: translateY(2px);
    }
    100% {
        -webkit-transform: translateY(6px);
        transform: translateY(6px);
    }
}

@-webkit-keyframes hvr-icon-hang-sink {
    100% {
        -webkit-transform: translateY(6px);
        transform: translateY(6px);
    }
}

@keyframes hvr-icon-hang-sink {
    100% {
        -webkit-transform: translateY(6px);
        transform: translateY(6px);
    }
}

.hvr-icon-hang {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px transparent;
    position: relative;
    padding-right: 2.2em;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
}

.hvr-icon-hang:before {
    content: "\f078";
    position: absolute;
    right: 1em;
    padding: 0 1px;
    font-family: FontAwesome;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
}

.hvr-icon-hang:hover:before,
.hvr-icon-hang:focus:before,
.hvr-icon-hang:active:before {
    -webkit-animation-name: hvr-icon-hang-sink, hvr-icon-hang;
    animation-name: hvr-icon-hang-sink, hvr-icon-hang;
    -webkit-animation-duration: .3s, 1.5s;
    animation-duration: .3s, 1.5s;
    -webkit-animation-delay: 0s, .3s;
    animation-delay: 0s, .3s;
    -webkit-animation-timing-function: ease-out, ease-in-out;
    animation-timing-function: ease-out, ease-in-out;
    -webkit-animation-iteration-count: 1, infinite;
    animation-iteration-count: 1, infinite;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    -webkit-animation-direction: normal, alternate;
    animation-direction: normal, alternate;
}


/* Icon Wobble Horizontal */

@-webkit-keyframes hvr-icon-wobble-horizontal {
    16.65% {
        -webkit-transform: translateX(6px);
        transform: translateX(6px);
    }
    33.3% {
        -webkit-transform: translateX(-5px);
        transform: translateX(-5px);
    }
    49.95% {
        -webkit-transform: translateX(4px);
        transform: translateX(4px);
    }
    66.6% {
        -webkit-transform: translateX(-2px);
        transform: translateX(-2px);
    }
    83.25% {
        -webkit-transform: translateX(1px);
        transform: translateX(1px);
    }
    100% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }
}

@keyframes hvr-icon-wobble-horizontal {
    16.65% {
        -webkit-transform: translateX(6px);
        transform: translateX(6px);
    }
    33.3% {
        -webkit-transform: translateX(-5px);
        transform: translateX(-5px);
    }
    49.95% {
        -webkit-transform: translateX(4px);
        transform: translateX(4px);
    }
    66.6% {
        -webkit-transform: translateX(-2px);
        transform: translateX(-2px);
    }
    83.25% {
        -webkit-transform: translateX(1px);
        transform: translateX(1px);
    }
    100% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }
}

.hvr-icon-wobble-horizontal {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px transparent;
    position: relative;
    padding-right: 2.2em;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
}

.hvr-icon-wobble-horizontal:before {
    content: "\f061";
    position: absolute;
    right: 1em;
    padding: 0 1px;
    font-family: FontAwesome;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
}

.hvr-icon-wobble-horizontal:hover:before,
.hvr-icon-wobble-horizontal:focus:before,
.hvr-icon-wobble-horizontal:active:before {
    -webkit-animation-name: hvr-icon-wobble-horizontal;
    animation-name: hvr-icon-wobble-horizontal;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
}


/* Icon Wobble Vertical */

@-webkit-keyframes hvr-icon-wobble-vertical {
    16.65% {
        -webkit-transform: translateY(6px);
        transform: translateY(6px);
    }
    33.3% {
        -webkit-transform: translateY(-5px);
        transform: translateY(-5px);
    }
    49.95% {
        -webkit-transform: translateY(4px);
        transform: translateY(4px);
    }
    66.6% {
        -webkit-transform: translateY(-2px);
        transform: translateY(-2px);
    }
    83.25% {
        -webkit-transform: translateY(1px);
        transform: translateY(1px);
    }
    100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
    }
}

@keyframes hvr-icon-wobble-vertical {
    16.65% {
        -webkit-transform: translateY(6px);
        transform: translateY(6px);
    }
    33.3% {
        -webkit-transform: translateY(-5px);
        transform: translateY(-5px);
    }
    49.95% {
        -webkit-transform: translateY(4px);
        transform: translateY(4px);
    }
    66.6% {
        -webkit-transform: translateY(-2px);
        transform: translateY(-2px);
    }
    83.25% {
        -webkit-transform: translateY(1px);
        transform: translateY(1px);
    }
    100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
    }
}

.hvr-icon-wobble-vertical {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px transparent;
    position: relative;
    padding-right: 2.2em;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
}

.hvr-icon-wobble-vertical:before {
    content: "\f062";
    position: absolute;
    right: 1em;
    padding: 0 1px;
    font-family: FontAwesome;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
}

.hvr-icon-wobble-vertical:hover:before,
.hvr-icon-wobble-vertical:focus:before,
.hvr-icon-wobble-vertical:active:before {
    -webkit-animation-name: hvr-icon-wobble-vertical;
    animation-name: hvr-icon-wobble-vertical;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
}


/* Icon Buzz */

@-webkit-keyframes hvr-icon-buzz {
    50% {
        -webkit-transform: translateX(3px) rotate(2deg);
        transform: translateX(3px) rotate(2deg);
    }
    100% {
        -webkit-transform: translateX(-3px) rotate(-2deg);
        transform: translateX(-3px) rotate(-2deg);
    }
}

@keyframes hvr-icon-buzz {
    50% {
        -webkit-transform: translateX(3px) rotate(2deg);
        transform: translateX(3px) rotate(2deg);
    }
    100% {
        -webkit-transform: translateX(-3px) rotate(-2deg);
        transform: translateX(-3px) rotate(-2deg);
    }
}

.hvr-icon-buzz {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px transparent;
    position: relative;
    padding-right: 2.2em;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
}

.hvr-icon-buzz:before {
    content: "\f017";
    position: absolute;
    right: 1em;
    padding: 0 1px;
    font-family: FontAwesome;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
}

.hvr-icon-buzz:hover:before,
.hvr-icon-buzz:focus:before,
.hvr-icon-buzz:active:before {
    -webkit-animation-name: hvr-icon-buzz;
    animation-name: hvr-icon-buzz;
    -webkit-animation-duration: 0.15s;
    animation-duration: 0.15s;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
}


/* Icon Buzz Out */

@-webkit-keyframes hvr-icon-buzz-out {
    10% {
        -webkit-transform: translateX(3px) rotate(2deg);
        transform: translateX(3px) rotate(2deg);
    }
    20% {
        -webkit-transform: translateX(-3px) rotate(-2deg);
        transform: translateX(-3px) rotate(-2deg);
    }
    30% {
        -webkit-transform: translateX(3px) rotate(2deg);
        transform: translateX(3px) rotate(2deg);
    }
    40% {
        -webkit-transform: translateX(-3px) rotate(-2deg);
        transform: translateX(-3px) rotate(-2deg);
    }
    50% {
        -webkit-transform: translateX(2px) rotate(1deg);
        transform: translateX(2px) rotate(1deg);
    }
    60% {
        -webkit-transform: translateX(-2px) rotate(-1deg);
        transform: translateX(-2px) rotate(-1deg);
    }
    70% {
        -webkit-transform: translateX(2px) rotate(1deg);
        transform: translateX(2px) rotate(1deg);
    }
    80% {
        -webkit-transform: translateX(-2px) rotate(-1deg);
        transform: translateX(-2px) rotate(-1deg);
    }
    90% {
        -webkit-transform: translateX(1px) rotate(0);
        transform: translateX(1px) rotate(0);
    }
    100% {
        -webkit-transform: translateX(-1px) rotate(0);
        transform: translateX(-1px) rotate(0);
    }
}

@keyframes hvr-icon-buzz-out {
    10% {
        -webkit-transform: translateX(3px) rotate(2deg);
        transform: translateX(3px) rotate(2deg);
    }
    20% {
        -webkit-transform: translateX(-3px) rotate(-2deg);
        transform: translateX(-3px) rotate(-2deg);
    }
    30% {
        -webkit-transform: translateX(3px) rotate(2deg);
        transform: translateX(3px) rotate(2deg);
    }
    40% {
        -webkit-transform: translateX(-3px) rotate(-2deg);
        transform: translateX(-3px) rotate(-2deg);
    }
    50% {
        -webkit-transform: translateX(2px) rotate(1deg);
        transform: translateX(2px) rotate(1deg);
    }
    60% {
        -webkit-transform: translateX(-2px) rotate(-1deg);
        transform: translateX(-2px) rotate(-1deg);
    }
    70% {
        -webkit-transform: translateX(2px) rotate(1deg);
        transform: translateX(2px) rotate(1deg);
    }
    80% {
        -webkit-transform: translateX(-2px) rotate(-1deg);
        transform: translateX(-2px) rotate(-1deg);
    }
    90% {
        -webkit-transform: translateX(1px) rotate(0);
        transform: translateX(1px) rotate(0);
    }
    100% {
        -webkit-transform: translateX(-1px) rotate(0);
        transform: translateX(-1px) rotate(0);
    }
}

.hvr-icon-buzz-out {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px transparent;
    position: relative;
    padding-right: 2.2em;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
}

.hvr-icon-buzz-out:before {
    content: "\f023";
    position: absolute;
    right: 1em;
    padding: 0 1px;
    font-family: FontAwesome;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
}

.hvr-icon-buzz-out:hover:before,
.hvr-icon-buzz-out:focus:before,
.hvr-icon-buzz-out:active:before {
    -webkit-animation-name: hvr-icon-buzz-out;
    animation-name: hvr-icon-buzz-out;
    -webkit-animation-duration: 0.75s;
    animation-duration: 0.75s;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
}


/* CURLS */


/* Curl Top Left */

.hvr-curl-top-left {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px transparent;
    position: relative;
}

.hvr-curl-top-left:before {
    pointer-events: none;
    position: absolute;
    content: '';
    height: 0;
    width: 0;
    top: 0;
    left: 0;
    background: white;
    /* IE9 */
    background: linear-gradient(135deg, white 45%, # aaa 50 % ,
        #ccc 56 % ,
        white 80 % );
filter: progid: DXImageTransform.Microsoft.gradient(GradientType = 0, startColorstr = '#ffffff', endColorstr = '#000000');
/*For IE7-8-9*/
z - index: 1000;
box - shadow: 1 px 1 px 1 px rgba(0, 0, 0, 0.4); -
webkit - transition - duration: 0.3 s;
transition - duration: 0.3 s; -
webkit - transition - property: width, height;
transition - property: width, height;
}

.hvr - curl - top - left: hover: before,
    .hvr - curl - top - left: focus: before,
    .hvr - curl - top - left: active: before {
        width: 25 px;
        height: 25 px;
    }


/* Curl Top Right */

.hvr - curl - top - right {
    display: inline - block;
    vertical - align: middle; -
    webkit - transform: perspective(1 px) translateZ(0);
    transform: perspective(1 px) translateZ(0);
    box - shadow: 0 0 1 px transparent;
    position: relative;
}

.hvr - curl - top - right: before {
    pointer - events: none;
    position: absolute;
    content: '';
    height: 0;
    width: 0;
    top: 0;
    right: 0;
    background: white;
    /* IE9 */
    background: linear - gradient(225 deg, white 45 % , #aaa 50 % , #ccc 56 % , white 80 % );
    box - shadow: -1 px 1 px 1 px rgba(0, 0, 0, 0.4); -
    webkit - transition - duration: 0.3 s;
    transition - duration: 0.3 s; -
    webkit - transition - property: width, height;
    transition - property: width, height;
}

.hvr - curl - top - right: hover: before,
    .hvr - curl - top - right: focus: before,
    .hvr - curl - top - right: active: before {
        width: 25 px;
        height: 25 px;
    }


/* Curl Bottom Right */

.hvr - curl - bottom - right {
    display: inline - block;
    vertical - align: middle; -
    webkit - transform: perspective(1 px) translateZ(0);
    transform: perspective(1 px) translateZ(0);
    box - shadow: 0 0 1 px transparent;
    position: relative;
}

.hvr - curl - bottom - right: before {
    pointer - events: none;
    position: absolute;
    content: '';
    height: 0;
    width: 0;
    bottom: 0;
    right: 0;
    background: white;
    /* IE9 */
    background: linear - gradient(315 deg, white 45 % , #aaa 50 % , #ccc 56 % , white 80 % );
    box - shadow: -1 px - 1 px 1 px rgba(0, 0, 0, 0.4); -
    webkit - transition - duration: 0.3 s;
    transition - duration: 0.3 s; -
    webkit - transition - property: width, height;
    transition - property: width, height;
}

.hvr - curl - bottom - right: hover: before,
    .hvr - curl - bottom - right: focus: before,
    .hvr - curl - bottom - right: active: before {
        width: 25 px;
        height: 25 px;
    }


/* Curl Bottom Left */

.hvr - curl - bottom - left {
    display: inline - block;
    vertical - align: middle; -
    webkit - transform: perspective(1 px) translateZ(0);
    transform: perspective(1 px) translateZ(0);
    box - shadow: 0 0 1 px transparent;
    position: relative;
}

.hvr - curl - bottom - left: before {
    pointer - events: none;
    position: absolute;
    content: '';
    height: 0;
    width: 0;
    bottom: 0;
    left: 0;
    background: white;
    /* IE9 */
    background: linear - gradient(45 deg, white 45 % , #aaa 50 % , #ccc 56 % , white 80 % );
    box - shadow: 1 px - 1 px 1 px rgba(0, 0, 0, 0.4); -
    webkit - transition - duration: 0.3 s;
    transition - duration: 0.3 s; -
    webkit - transition - property: width, height;
    transition - property: width, height;
}

.hvr - curl - bottom - left: hover: before,
    .hvr - curl - bottom - left: focus: before,
    .hvr - curl - bottom - left: active: before {
        width: 25 px;
        height: 25 px;
    }


/*# sourceMappingURL=hover.css.map */