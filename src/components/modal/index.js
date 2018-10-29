import modalComponent from "./modal.vue";

const modal = {};

//注册modal
modal.install = function(Vue,options) {
  // 生成一个Vue的子类
  // 同时这个子类也就是组件
  const modalConstructor = Vue.extend(modalComponent);
  // 生成一个该子类的实例
  const instance = new modalConstructor();
  // 将这个实例挂载在我创建的div上
  // 并将此div加入全局挂载点内部
  instance.$mount(document.createElement("div"));
  document.body.appendChild(instance.$el);

  // 通过Vue的原型注册一个方法
  // 让所有实例共享这个方法
  Vue.prototype.$modal = (msg,type=1, duration = 2000) => {
    instance.type=type;
    instance.msg = msg;
    instance.isvisible = true;


  };

};


export default modal;
