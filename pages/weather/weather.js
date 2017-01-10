//和风天气api
const URL = "https://free-api.heweather.com/v5/now?key=&city=上海"

let pageParams = {
  data: { 
      weather: [
        {
            basic: { //基本信息
                city: '',  //城市名称
                cnty: '',   //国家
                id: '',  //城市ID
                lat: '', //城市维度
                lon: '', //城市经度
                prov: '',  //城市所属省份（仅限国内城市）
                update: {  //更新时间
                    loc: '',  //当地时间
                    utc: '' //UTC时间
                }
            },
            now: {  //实况天气
                cond: {  //天气状况
                    code: '',  //天气状况代码
                    txt: ''  //天气状况描述
                },
                fl: '',  //体感温度
                hum: '',  //相对湿度（%）
                pcpn: '',  //降水量（mm）
                pres: '',  //气压
                tmp: '',  //温度
                vis: '',  //能见度（km）
                wind: {  //风力风向
                    deg: '',  //风向（360度）
                    dir: '',  //风向
                    sc: '',  //风力
                    spd: ''  //风速（kmph）
                }
            },
            status: ''  //接口状态
        }
    ] 
      }
}

pageParams.onLoad = function () {
  const that = this
  wx.request({
    url: URL,
    data: JSON.stringify({}),
    header: { 'content-type': 'application/json' },
    method: 'GET',
    success: res => {
      console.log(res.data)
      that.setData({
        weather: res.data
      })
    },
    fail: () => console.error('something is wrong'),
    complete: () => console.log('weather loaded')
  })
}

Page(pageParams)