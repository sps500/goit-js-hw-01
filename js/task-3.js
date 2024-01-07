function getElementWidth(content, padding, border) {
    
    var contentValue = parseFloat(content);
    var paddingValue = parseFloat(padding);
    var borderValue = parseFloat(border);
  
    
    if (!isNaN(contentValue) && !isNaN(paddingValue) && !isNaN(borderValue)) {
  
      var width = contentValue + 2 * paddingValue + 2 * borderValue;
      return width;
    } else {
      
      console.error("Invalid input values");
      return null;
    }
  }
  console.log(getElementWidth("50px", "8px", "4px"));   
console.log(getElementWidth("60px", "12px", "8.5px")); 
console.log(getElementWidth("200px", "0px", "0px"));  
