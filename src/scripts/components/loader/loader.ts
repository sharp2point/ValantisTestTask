export default class Loader extends HTMLElement {
    private root: ShadowRoot = null;

    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        this.root.innerHTML = renderTemplate();
        this.setAttribute("class", "loader-screen");
        this.root.querySelector("img").src = "public/gem.webp";
    }

    appendToDOM = (parent: HTMLElement) => parent.appendChild(this);

    show(is_show: boolean) {
        if (is_show) {
            this.classList.remove("opaq-0");
            this.classList.add("opaq-100");
            setTimeout(() => {
                this.classList.remove("hide");
            }, 300);
        } else {
            this.classList.remove("opaq-100");
            this.classList.add("opaq-0");
            setTimeout(() => {
                this.classList.add("hide");
            }, 1000);
        }
    }
}

if (!customElements.get("nice2jm-loader")) {
    customElements.define("nice2jm-loader", Loader);
}

function renderTemplate() {
    const html = `
            <div class="loader">
                <img>
                <span style="--i:0"></span>
                <span style="--i:1"></span>
                <span style="--i:2"></span>
                <span style="--i:3"></span>
                <span style="--i:4"></span>
                <span style="--i:5"></span>
                <span style="--i:6"></span>
                <span style="--i:7"></span>
                <span style="--i:8"></span>
                <span style="--i:9"></span>
                <span style="--i:10"></span>
                <span style="--i:11"></span>
                <span style="--i:12"></span>
                <span style="--i:13"></span>
                <span style="--i:14"></span>
                <span style="--i:15"></span>
                <span style="--i:16"></span>
                <span style="--i:17"></span>
                <span style="--i:18"></span>
                <span style="--i:19"></span>
            </div>
    `;
    const css = `
        <style>
        :host{
            width: 100vw;
            height: 100vh;
            position: absolute;
            top:0;
            left:0;
            background-color: rgba(30, 25, 115, 0.7);
            display:flex;
            justify-content: center;
            align-items: center;
            z-index:10;
            color:white;
            user-select: none;
        }

        .loader{
            position: relative;
            width:160px;
            height:160px;
        }
        .loader span{
            position: absolute;
            top:0;
            left:0;
            width: 100%;
            height: 100%;
            transform: rotate(calc(18deg*var(--i)));
        }
        .loader img{
            position: absolute;
            top:calc(50% - 40px);
            left:calc(50% - 40px);
            width: 80px;
            height: 80px;
            animation: rotateanim 5s linear infinite;
        }
        .loader span::before {
            content:"";
            position: absolute;
            top: 0;
            left: 0;
            width: 40px;
            height: 40px;
            border:1px solid rgba(157, 160, 0, 0.9);
            border-radius: 30%;
            transform: scale(5);
            transform: rotate(calc(18deg * var(--i)));
            animation: scaleanim 3s linear infinite;
            animation-delay: calc(0.1s * var(--i));
        }
        .hide{
            display: none;
        }
        .opaq-0{
            animation: opaqanim 1s linear;
        }
        .opaq-1 {
            animation: opaqanim 1s linear reverse;
        }
        @keyframes scaleanim {
            0%{
                transform: scale(0);
                opacity: 1;
            }
            10%{
                transform: scale(1.1);
                opacity: 0.3;
            }
            50%{
                transform: scale(1.1);
                opacity: 0.8;
            }
            100%{
                transform: scale(0.5);
                opacity: 0;
            }
        }
        @keyframes rotateanim {
            0% {
                transform: rotateY(0);
            }

            100% {
                transform: rotateY(360deg);
            }
        }        
        @keyframes opaqanim {
            0%{
                opacity: 1;
            }
            100%{
                opacity: 0;
            }
        }
        </style>
    `;
    return `${html}${css}`;
}