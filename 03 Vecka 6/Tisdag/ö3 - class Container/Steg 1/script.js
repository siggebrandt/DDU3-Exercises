class Container {
        static instances = new Set();
    
        constructor(data) {
            this.parent = data.parent || document.querySelector("main");
            if (!this.parent) {
                this.parent = document.createElement("main");
                document.body.appendChild(this.parent);
            }
            
            this.tag = data.tag || "div";
            this.classes = data.classes || [];
            
            this.htmlElement = document.createElement(this.tag);
            if (Array.isArray(this.classes) && this.classes.length > 0) {
                this.htmlElement.classList.add(...this.classes);
            }
            
            this.parent.appendChild(this.htmlElement);
        }
    
        get html() {
            return this.htmlElement;
        }
    
        get id() {
            return this.htmlElement.id;
        }
    
        set id(newId) {
            if (typeof newId !== "string" || newId.length === 0) {
                throw new Error("Id måste vara en icke-tom sträng.");
            }
            if (Container.instances.has(newId)) {
                throw new Error(`Id '${newId}' används redan av en annan instans.`);
            }
            
            if (this.htmlElement.id) {
                Container.instances.delete(this.htmlElement.id);
            }
            this.htmlElement.id = newId;
            Container.instances.add(newId);
        }
    }
    
    let c = new Container({
        parent: document.querySelector("#randomId"),
        tag: "div",
        classes: ["alert", "zombie"],
    });