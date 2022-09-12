
// rgb to hex
function rgbToHex(r, g, b) {
  var hex = ((r << 16) | (g << 8) | b).toString(16);
  return "#" + new Array(Math.abs(hex.length - 7)).join("0") + hex;
}

// hex to rgb
function hexToRgb(hex) {
  var rgb = [];
  for (var i = 1; i < 7; i += 2) {
    rgb.push(parseInt("0x" + hex.slice(i, i + 2)));
  }
  return rgb;
}

// 计算渐变过渡色
export function gradient(startColor, endColor, step) {
  // 将 hex 转换为rgb
  var sColor = hexToRgb(startColor),
    eColor = hexToRgb(endColor);

  // 计算R\G\B每一步的差值
  var rStep = (eColor[0] - sColor[0]) / step,
    gStep = (eColor[1] - sColor[1]) / step,
    bStep = (eColor[2] - sColor[2]) / step;

  var gradientColorArr = [];
  for (var i = 0; i < step; i++) {
    // 计算每一步的hex值
    gradientColorArr.push(rgbToHex(parseInt(rStep * i + sColor[0]), parseInt(gStep * i + sColor[1]), parseInt(bStep * i + sColor[2])));
  }
  return gradientColorArr;
}
//点击下载按钮判断
export function appDown() {
  var u = navigator.userAgent;
  var p = navigator.platform;
  // alert(JSON.stringify(u))
  // alert(p)
  var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
  let platform = ''
  if (isiOS) {
    platform = 'iOS'
    // alert(p == 'iphone')
    // window.location.href = '安卓下载地址'
    // if(new RegExp("iphone","i").test(u)){
    //   platform = 'iphone'
    // }
  } else if (isAndroid) {
    platform = 'android'
    // window.location.href = '安卓下载地址'
  }
  return platform
}

export function getFillColor(value, max,) {
  let color = 'red';
  
  if (value > 0 && value < 1)
    color = '#1a5916';
  if (value >= 1 && value < 5)
    color = '#7a9900';
  if (value >= 5 && value < 10)
    color = '#ebcf0d';
  if (value >= 10 && value < 20)
    color = '#eba70d';
  if (value >= 20 && value < 30)
    color = '#ff8100';
  if (value >= 30 && value < 40)
    color = '#936c00';
  if (value >= 40 && value < 50)
    color = '#c34903';
  if (value >= 50 && value < 70)
    color = '#ff5e00';
  if (value >= 70 && value < 100)
    color = '#ff4600';
  if (value >= 100 && value < 150)
    color = '#a20085';
  if (value >= 150 && value < 200)
    color = '#ff2a6f';
  if (value >= 200 && value < 300)
    color = '#b9003c';
  if (value >= 300 && value < 500)
    color = '#ff41df';
  if (value >= 500 && value < 1000)
    color = '#00ffff';
  if ((value > 1000 ))
    color = 'red';
  

  return color;
}

export const TableLimitData = [
  {bet:'Straight-Up', min:0.5, max:200, win:'X36'},
  {bet:'Split', min:0.5, max:200, win:'X18'},
  {bet:'Street', min:0.5, max:200, win:'X12'},
  {bet:'Corner', min:0.5, max:200, win:'X9'},
  {bet:'Line Bet', min:0.5, max:200, win:'X6'},
  {bet:'Even', min:0.5, max:200, win:'X2'},
  {bet:'Odd', min:0.5, max:200, win:'X2'},
  {bet:'Split', min:0.5, max:200, win:'X2'},
  {bet:'Red', min:0.5, max:200, win:'X2'},
  {bet:'Black', min:0.5, max:200, win:'X2'},
  {bet:'1-18', min:0.5, max:200, win:'X2'},
  {bet:'19-36', min:0.5, max:200, win:'X2'},
  
]

export const API_SERVER_URL = "https://api.asian888.club/";