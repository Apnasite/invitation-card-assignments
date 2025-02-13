class InvitationComponent extends HTMLElement {
    // Default configuration and data
    defaultConfig = {
      backgroundClass:"background",
        purpleClass:"purple",
        goldenClass:"golden",
        design1Class:"design1",
        ganeshaClass:"ganesha",
        titleClass:"title",
        headlineLineClass:"headlineLine",
        hrClass:"hr",
        headerClass:"header",
        hr2Class:"hr2",
        dateClass:"date",
        saveClass:"save",
        saveDateClass:"saveDate",
        locationClass:"location",
        design2Class:"design2",
        swastikClass:"swastik"
    };
    defaultData = {
      
        design1 : "./img/upper-design.png",
        ganesha : "./img/ganesha.png",
        title:"Mr. and Mrs. Kumar",
        headlineLine:"REQUEST YOU TO PLEASURE YOUR PRESENCE TO GRACE THE WEDDING OF",
        header : "OMKAR & SAKSHI",
        date : "MAY 25 | 2025",
        save : "SAVE THE DATE",
        location:"PUNE",
        saveDate:"25 / 05 / 2025",
        swastik:"./img/swastik.png"
      
    };
  
    constructor() {
      super();
      this.config = this.defaultConfig;
      this.data = this.defaultData;
  
      // Attach a shadow root
      const shadow = this.attachShadow({ mode: 'open' });
  
      // Load external CSS file
      const linkElement = document.createElement('link');
      linkElement.setAttribute('rel', 'stylesheet');
      linkElement.setAttribute('href', 'style.css');
      shadow.appendChild(linkElement);
  
      // wrapper div created  for the menu card
      this.wrapper = document.createElement('div');
      shadow.appendChild(this.wrapper); 
    }
  
    static get observedAttributes() {
      return ['config', 'data'];
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      if (oldValue !== newValue) {
        try {
          if (name === 'config') {
            this.config = { ...this.defaultConfig, ...JSON.parse(newValue) };
          }
          if (name === 'data') {
            this.data = { ...this.defaultData, ...JSON.parse(newValue) };
          }
        } catch (e) {
          console.error(`Invalid JSON for ${name}:`, e);
        }
        this.render();
      }
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.wrapper.innerHTML = ''; // Clear previous content
      const config = this.config || this.defaultConfig;
      const data = this.data || this.defaultData;
  
      // Background
      const background = document.createElement('div');
      background.classList.add(config.backgroundClass);
      this.wrapper.appendChild(background);
      
      const purple = document.createElement('div');
      purple.classList.add(config.purpleClass);
      background.appendChild(purple);

      const golden = document.createElement('div');
      golden.classList.add(config.goldenClass);
      background.appendChild(golden);

      const design1 = document.createElement('img');
      design1.classList.add(config.design1Class);
      design1.src = data.design1;
      purple.appendChild(design1);

      const ganesha = document.createElement('img');
      ganesha.classList.add(config.ganeshaClass);
      ganesha.src = data.ganesha;
      purple.appendChild(ganesha);
      
      const title = document.createElement('h1');
      title.classList.add(config.titleClass);
      title.textContent = (data.title);
      purple.appendChild(title); 

      const headlineLine = document.createElement('p');
      headlineLine.classList.add(config.headlineLineClass);
      headlineLine.textContent = (data.headlineLine);
      purple.appendChild(headlineLine);

      var hr = document.createElement('hr');
      hr.classList.add(config.hrClass);
      purple.appendChild(hr);

      const header = document.createElement('h1');
      header.classList.add(config.headerClass);
      header.textContent = (data.header);
      purple.appendChild(header);

      var hr = document.createElement('hr');
      hr.classList.add(config.hr2Class);
      purple.appendChild(hr);

      const date = document.createElement('h1');
      date.classList.add(config.dateClass);
      date.textContent = (data.date);
      purple.appendChild(date);

      const save = document.createElement('p');
      save.classList.add(config.saveClass);
      save.textContent = (data.save);
      purple.appendChild(save);

      const saveDate = document.createElement('p');
      saveDate.classList.add(config.saveDateClass);
      saveDate.textContent = (data.saveDate);
      purple.appendChild(saveDate);

      const location = document.createElement('p');
      location.classList.add(config.locationClass);
      location.textContent = (data.location);
      purple.appendChild(location);

      const design2 = document.createElement('img');
      design2.classList.add(config.design2Class);
      design2.src = data.design1;
      purple.appendChild(design2);

      const swastik = document.createElement('img');
      swastik.classList.add(config.swastikClass);
      swastik.src = data.swastik;
      golden.appendChild(swastik);
  }
}
  customElements.define('invitation-component', InvitationComponent);