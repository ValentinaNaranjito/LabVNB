import "./components/export";
import { navigate } from "./store/actions";
import { addObserver, appState, dispatch } from "./store/index";
import { Screens } from "./types/store";
import { getProductsListener } from "./utils/firebase";

class AppContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    addObserver(this);
  }
  
  connectedCallback() {
    this.render();
    
  }

  async render() {

    if (!this.shadowRoot) return;
    if (this.shadowRoot) this.shadowRoot.innerHTML = "";

    this.shadowRoot.innerHTML = "<product-info></product-info>"
    getProductsListener ((products)=>{
      
    })
  }
}

customElements.define("app-container", AppContainer);
