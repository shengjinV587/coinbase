function validatemobile(mobile) {
    if (mobile.length == 0) {
      uni.showToast({
        title: '请输入手机号！',
        icon: 'none',
        duration: 1500
       })
     return false;
    }
    if (mobile.length != 11) {
        uni.showToast({
          title: '手机号长度有误！',
          icon: 'none',
          duration: 1500
        })
     return false;
    }
    var myreg = /^((13[0-9])|(14[0-9])|(15[0-9])|(17[0-9])|(18[0-9])|(19[0-9]))\d{8}$/
    if (!myreg.test(mobile)) {
        uni.showToast({
        title: '手机号有误！',
        icon: 'none',
        duration: 1500
       })
     return false;
    }
    return true;
}
module.exports = {
    validatemobile:validatemobile
} 