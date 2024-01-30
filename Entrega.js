let products=[]

const Prod = function(title,description,image,price, code,stock){
    this.title= title
    this.description=description
    this.image=image
    this.code= code
    this.price = price
    this. stock = stock   
}


let Product1 = new Prod("Jordan 11", "sassss", "hbejh", 6, 100, 4);
let Product2 = new Prod("Jordan 11", "sassss", "hbejh", 3, 200, 5);
let Product3 = new Prod("kobe 5", "sassss", "hbejh", 9, 300, 18);


let addProduct = Product => {
    
    let existingProduct = products.find(x => x.code === Product.code);
    Product.id=  products.length + 1
    if (!existingProduct && Product.id && Product.title && Product.description && Product.image && Product.price && Product.code && Product.stock) {
      
     
        products.push(Product);
    } else {
        console.log("El producto no cumple con las condiciones para ser ingresado, intente nuevamente")
    }
  }; 


  addProduct(Product1); 
  addProduct(Product2); 
  addProduct(Product3);
  
  
  let getProduct= products.map((prod)=> prod)
  console.log("🚀 ~ getProduct:", getProduct)


  let getProductById = (id) => {
    let existingId = products.find(x => x.id === id);
    if (existingId !== undefined) {
        console.log("🚀existingId:", existingId) 
      } else {
        console.error("Not found")
      }}
      
      getProductById(3)

 
 
 