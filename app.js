const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      number=0,
      name: '', 
      fullName:'', 
      lastName:''
    };
  },
  computed:{
      fullName(){
        console.log('Running Again');
        if(this.name === ''){
          return '';
        }
        return this.name + '' +'Schwarzmuller';
      },
    result(){
      if(this.number < 37){
        return "Not there yet!";
      }
      else if(this.number === 37){
        return this.number;
      }
      else{
        return 'Too Much';
      }
    }
  },
  watch:{
    result(){
      console.log("Watcher executing");
      const that = this;
      setTimeout=(function() {
        that.number=0;
      }, 5000);
    }
  }, 
    name(value){
      if(value == ''){
        this.fullName='';
      }else{
      this.fullName=value + ' ' + this.lastName;
      }
    }, 
    counter(value){
      if(value > 50){
        setTimeout(function(){
          this.counter=0;
        }, 2000);
      }
    },
    lastName(value){
      if(value == ''){
        this.fullName='';
      }else{
      this.fullName=value + ' ' +  this.lastName;
      }
    }
    
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    }, 
    resetInput(){
      this.name='';
    }, 
    outputFullName(){
      console.log('Running Again');
      if(this.name === ' '){
        return ' ';
      }
      return this.name + ' ' + 'Schwarzmuller' ;
    }
  }
});

app.mount('#assignment');
