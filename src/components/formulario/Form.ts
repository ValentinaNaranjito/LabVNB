import { addDoc, collection } from "firebase/firestore";
import { db } from "../../utils/firebase";

class Form extends HTMLElement {
    constructor(){
        super ()
        this.attachShadow({mode:"open"})
    }

    render (){
        if (!this.shadowRoot) return;
        this.shadowRoot.innerHTML = `
        <input name="producto" type="text" placeholder="Nombre del Producto">
        <input name="precio" type="text" placeholder="Precio del Producto">
        <input name="Unidades" type="text" placeholder="Cantidad de unidades">
        <input name="imagen" type="text" placeholder="Link imagen">
        <button class="crear">Crear</button>
        `
        const nameinput = this.shadowRoot.querySelector <HTMLInputElement> ('[name="producto"]')
        const priceinput = this.shadowRoot.querySelector <HTMLInputElement> ('[name="precio"]')
        const numberinput = this.shadowRoot.querySelector <HTMLInputElement> ('[name="Unidades"]')
        const imageinput = this.shadowRoot.querySelector <HTMLInputElement> ('[name="imagen"]')
        const button = this.shadowRoot.querySelector <HTMLInputElement> ('button')
        button?.addEventListener("click", async ()=>{
            //aquí va lo que pasa al dar click en el botón
            const namevalue = nameinput?.value;
            const pricevalue = priceinput?.value;
            const numbervalue = numberinput?.value;
            const imagevalue = imageinput?.value;
            const col = collection (db, "products")
            await addDoc (col, {
                name: namevalue,
                price: pricevalue,
                number: numbervalue,
                image: imagevalue,

            }) 
            window.alert("Producto creado")
        })



    }
    connectedCallback(){
        this.render()
    }
}

customElements.define ("product-info", Form)