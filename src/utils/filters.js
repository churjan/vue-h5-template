
import Vue from 'vue'

/*省略字符*/
Vue.filter('ellipsis', function(input, length){
  if(!input){
    return;
  }
  if(input.length > length){
    return input.substring(0, length) + '....';
  }else{
    return input;
  }
});
