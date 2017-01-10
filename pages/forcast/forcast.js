//和风天气api
const URL = "https://free-api.heweather.com/v5/forecast?key=&city=上海"

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
            daily_forecast: [  //7-10天天气预报
                {
                    astro: {   //天文数值
                        mr: "04:19",   //月升时间
                        ms: "18:07",   //月落时间
                        sr: "05:41",   //日出时间
                        ss: "18:47"   //日落时间
                    },
                    cond: {   //天气状况
                        code_d: "100",   //白天天气状况代码
                        code_n: "104",  //夜间天气状况代码
                        txt_d: "晴",   //白天天气状况描述
                        txt_n: "阴"   //夜间天气状况描述
                    },
                    date: "2016-08-31",  //预报日期
                    hum: "17",  //相对湿度（%）
                    pcpn: "0.0",  //降水量（mm）
                    pop: "1",  //降水概率
                    pres: "997",  //气压
                    tmp: {   //温度
                        max: "33",   //最高温度
                        min: "19"   //最低温度
                    },
                    vis: "10",   //能见度（km）
                    wind: {   //风力风向
                        deg: "342",   //风向（360度）
                        dir: "北风",  //风向
                        sc: "3-4",   //风力等级
                        spd: "10"   //风速（kmph）
                    }
                }
            ],
            status: "ok"   //接口状态 
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