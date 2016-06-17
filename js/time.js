var clock = document.getElementById('clock');
var cxt = clock.getContext('2d');
function drawClock() {
    //清屏,可以看到针在移动
    cxt.clearRect(0,0,200,200);

    //得到系统当前的时间
    var now = new Date();
    //得到时分秒
    var sec = now.getSeconds();
    var min = now.getMinutes();
    var hour = now.getHours();
    //小时是浮点数 类型要得到时针准确的位置，必须将当前的分钟也转换为//小时
    hour = hour+min/60;
    //将24小时转化为12小时制
    hour =(hour>12)?(hour-12):hour;


    //绘制表盘
    cxt.lineWidth=7;
    cxt.strokeStyle = "bfdae1";
    cxt.beginPath();
    cxt.arc(100,100,80,0,150,false);
    cxt.stroke();
    cxt.closePath();
    //绘制刻度
    //时刻度
    for(var i = 0; i < 12; i++) {
        cxt.save();
        //设置时针的粗细
        cxt.lineWidth = 4;
        //设置时针的颜色
        cxt.strokeStyle="#000";
        //设置异次元空间的0,0点
        cxt.translate(100,100);
        //再设置旋转角度
        cxt.rotate(i*30*Math.PI/180);
        //开始绘制
        cxt.beginPath();
        cxt.moveTo(0,-68);
        cxt.lineTo(0,-76);
        cxt.stroke();
        cxt.closePath();
        cxt.restore();

    }
    //分刻度
    for(var i = 0; i < 60; i++) {
        cxt.save();
        //设置分刻度的粗细
        cxt.lineWidth = 1;
        //设置分刻度的颜色
        cxt.strokeStyle = "#000";
        //设置或者重置画布的0,0点
        cxt.translate(100,100);
        //设置旋转的角度
        cxt.rotate(i*6*Math.PI/180);
        //开始绘制
        cxt.beginPath();
        cxt.moveTo(0,-72);
        cxt.lineTo(0,-76);
        cxt.stroke();
        cxt.closePath();
        cxt.restore();
    }
    //时针
    cxt.save();
    //设置时针风格
    cxt.lineWidth = 7;
    //设置时针的颜色
    cxt.strokeStyle = "#000" ;
    //设置异次元空间的0,0点
    cxt.translate(100,100);
    //设置旋转的角度
    cxt.rotate(hour*30*Math.PI/180);
    //开始绘制
    cxt.beginPath();
    cxt.moveTo(0,-48);
    cxt.lineTo(0,4);
    cxt.stroke();
    cxt.closePath();
    cxt.restore();
    //分针
    cxt.save();
    //设置分针的风格
    cxt.lineWidth = 5;
    cxt.strokeStyle = "#000";
    //设置异次元空间分针画布的圆心
    cxt.translate(100,100);
    //设置旋转角度
    cxt.rotate(min*6*Math.PI/180);
    //开始绘制
    cxt.beginPath();
    cxt.moveTo(0,-64);
    cxt.lineTo(0,6);
    cxt.stroke();
    cxt.closePath();
    cxt.restore();

    //秒针
    cxt.save();
    //设置秒针的风格
    cxt.lineWidth = 2;
    cxt.strokeStyle = '#000';
    //设置异次元分针画布的圆心
    cxt.translate(100,100);
    //设置旋转角度
    cxt.rotate(sec*6*Math.PI/180);
    //绘制秒针
    cxt.beginPath();
    cxt.moveTo(0,-68);
    cxt.lineTo(0,8);
    cxt.stroke();
    cxt.closePath();
    //画出时针，分针，秒针的交叉点
    cxt.beginPath();
    cxt.arc(0,0,2,0,144,false);
    //设置填充样式
    cxt.fillStyle = "gray";
    cxt.fill();
    //设置笔触样式(秒针已设置)
    cxt.stroke();
    cxt.closePath();

    //设置秒针前段的小圆点
    cxt.beginPath();
    cxt.arc(0,-60,2,0,144,false);
    //设置填充样式
    cxt.fillStyle="gray";
    cxt.fill();
    //设置笔触样式(秒针已设置)
    cxt.stroke();
    cxt.closePath();

    cxt.restore();

}
//使用setInterval(方法名，每隔多少毫秒重绘一下）每隔一段时间重新绘制，看到动的效果
drawClock();  //刷新不出现延迟
setInterval(drawClock,1000)