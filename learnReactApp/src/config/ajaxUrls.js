import SERVERHOSTNAME from "./serverHostName.js";
const hostname=SERVERHOSTNAME+"index.php/";

const ajaxUrls={
     login:hostname+"Login/loginus",//登录
     checkUserName:hostname+"Signup/checkname",//检测用户名
     signUs:hostname+"Signup/signupus",//注册
     saygoodbye:hostname+"Login/saygoodbye",//退出
     postyoumusic:hostname+"Musicdo/postyoumusic"//提交表格
}
export default ajaxUrls;