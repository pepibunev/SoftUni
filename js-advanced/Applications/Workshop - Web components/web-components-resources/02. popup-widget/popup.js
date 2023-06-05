import { html, render } from '../node_modules/lit-html/lit-html.js';

const popupTemplate = () => html`
<template id="popup-template">
    <style>
      .wrapper {
        position: relative;
      }

      .info {
        font-size: 0.8rem;
        width: 200px;
        display: inline-block;
        border: 1px solid black;
        padding: 10px;
        background: white;
        border-radius: 10px;
        opacity: 0;
        transition: 0.6s all;
        position: absolute;
        bottom: 20px;
        left: 10px;
        z-index: 3;
      }

      img {
        width: 1.2rem;
      }

      .icon:hover + .info, .icon:focus + .info {
        opacity: 1;
      }
    </style>
    <span class="wrapper">
      <span class="icon" tabindex="0">
        <img src=${ctx.image}>
      </span>

      <span class="info">
        ${ctx.text}
      </span>
    </span>
  </template>
`;

class Popup extends HTMLAllCollection {
    constuctor(){
        super();

        this.state = {
          text: this.atachShadow('text'),
          image: this.getAttribute('image'),  
        };
    }
}