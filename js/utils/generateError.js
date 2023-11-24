const generateError = (errorText, generateTo) => {
  const tmpl = `
      <div class="alert alert--danger">
          <span>${errorText}</span>
      </div>
  `;
  
  generateTo.insertAdjacentHTML('beforeend', tmpl)
};

export { generateError }