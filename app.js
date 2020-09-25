const app = Vue.createApp({
  data() {
    return {
      counter: 0,
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
  },
  watch:{
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
