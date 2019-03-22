const module = () => {
  console.log('module works');
  class Test {
    constructor( name ){
      this.name = name;
    }
  }

  class SuperTest extends Test {
    constructor(props){
      super(props);
    }
  }

  const test = () => {
    console.log('Yo!');
  }
  
}

export default module;
