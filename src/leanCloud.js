import AV from 'leancloud-storage';

var APP_ID = 'BwlLHpUypqlQQTDTQarqgORI-gzGzoHsz';
var APP_KEY = '0EekaQvmuWuXdWhzo51gfRQR';
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
})

export default AV;


export function signUp(username,password,successFn,errorFn) {
    var user = new AV.User()
    // 设置用户名
    user.setUsername(username)
    // 设置密码
    user.setPassword(password)
    user.signUp().then(function (loggedInUser) {
        let user = getUserFromAVUser(loggedInUser)
        successFn.call(null,user)
        // Console.log(user)
    }, function (error) {
        errorFn.call(null,error)
        // console.log(error)
    });
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

