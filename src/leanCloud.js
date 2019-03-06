import AV from 'leancloud-storage';

var APP_ID = 'BwlLHpUypqlQQTDTQarqgORI-gzGzoHsz';
var APP_KEY = '0EekaQvmuWuXdWhzo51gfRQR';
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
})

export default AV;

// 创建todomodel对象，用于todo的增加删除等
export const TodoModel = {
    create({title,content,deleted},successFn,errorFn){  
        var Todo = AV.Object.extend('Todo')
        // 新建一个 Todo 对象
        var todo = new Todo()
        todo.set('title', title)
        todo.set('content', content)
        todo.set('deleted',deleted)
        todo.save().then(function (todo) {
        successFn.call(null,todo.id)
        console.log('New object created with objectId: ' + todo.id);
        }, function (error) {
        errorFn.call(null,error)
        })
    },
    update(){},
    destory(){}
}



export function signUp(email,username,password,successFn,errorFn) {
    var user = new AV.User()
    // 设置用户名
    user.setUsername(username)
    // 设置密码
    user.setPassword(password)
    user.setEmail(email)
    user.signUp().then(function (loggedInUser) {
        let user = getUserFromAVUser(loggedInUser)
        successFn.call(null,user)
        // Console.log(user)
    }, function (error) {
        errorFn.call(null,error)
        // console.log(error)
    });
}

export function signIn(username,password,successFn,errorFn){
    AV.User.logIn(username, password).then(function (loggedInUser) {
        let user = getUserFromAVUser(loggedInUser)
        successFn.call(null,user)
      }, function (error) {
          errorFn.call(null,error)
      }) 
}
export function signOut(){
    AV.User.logOut()
    return undefined;
}

function getUserFromAVUser(AVUser){
    return {
        id: AVUser.id,
        ...AVUser.attributes
    }
}

export function getCurrentUser(){
    let user = AV.User.current()
    if(user){
        return getUserFromAVUser(user)
      }else{
        return null
      }
}

export function sendPasswordResetEmail(email,successFn,errorFn){
    AV.User.requestPasswordReset(email).then(function (success) {
        successFn.call()
    }, function (error) {
        errorFn.call(null,error)
    })
}

