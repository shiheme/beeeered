export default class LastMayday {
	palette(obj) {
		return ({
			"width": "600px",
			"height": "1000px",
			"background":"#f5f5f5",
			"views": [
				
				{
					"type": "rect",
					"css": {
						"width": "580px",
						"height": "980px",
						"top": "10px",
						"left": "10px",
						"rotate": "0",
						"borderRadius": "5px",
						"borderWidth":"1px",
						"borderColor":`${obj.libbg}`,
						"color": "#ffffff",
					}
				},
				{
					"type": "rect",
					"css": {
						"width": "580px",
						"height": "580px",
						"top": "10px",
						"left": "10px",
						"rotate": "0",
						"borderRadius": "5px",
						"shadow": "",
						"color": `${obj.libbg}`,
					}
				},
				{
					"type": "image",
					"url": obj.libimg,
					// "css": {
					// 	"width": `${obj.libimgwd}px`,
					// 	"height": `${obj.libimght}px`,
					// 	"top": `${(360-obj.libimght)/2+120}px`,
					// 	"left": `${(360-obj.libimgwd)/2+120}px`,
					// 	"rotate": "0",
					// 	"borderRadius": `${obj.libimgrd}px`,
					// 	"shadow": "",
					// 	"mode": "aspectFill"
					// }
					"css": {
						"width": "580px",
						"height": "580px",
						"top": "10px",
						"left": "10px",
						"rotate": "0",
						"borderRadius": "5px",
						"shadow": "",
						"mode": "aspectFill"
						
					}
				},
				{
					"type": "image",
					"url": obj.qrcodePath,
					"css": {
						"width": "180px",
						"height": "180px",
						"top": "750px",
						"left": "380px",
						"rotate": "0",
						"borderRadius": "0px",
						"shadow": "",
						"mode": "scaleToFill"
					}
				},
				// {
				// 	"type": "rect",
				// 	"css": {
				// 		"width": "34px",
				// 		"height": "34px",
				// 		"top": "800px",
				// 		"left": "40px",
				// 		"rotate": "0",
				// 		"borderRadius": "34px",
				// 		"borderWidth":"5px",
				// 		"borderColor":`${obj.libcanborrow?obj.libbg:'#eee'}`,
				// 		"color": `${obj.libcanborrow?obj.libbg:'#eee'}`,
				// 	}
				// },
				// {
				// 	"type": "rect",
				// 	"css": {
				// 		"width": "5px",
				// 		"height": "26px",
				// 		"top": "805px",
				// 		"left": "58px",
				// 		"borderRadius": "5px",
				// 		"borderWidth":"0px",
				// 		"borderColor":`${obj.libcanborrow?'#fff':'#eee'}`,
				// 		"color": `${obj.libcanborrow?'#fff':'#eee'}`,
				// 		"rotate": "45",
				// 	}
				// },
				// {
				// 	"type": "rect",
				// 	"css": {
				// 		"width": "5px",
				// 		"height": "14px",
				// 		"top": "815px",
				// 		"left": "46px",
				// 		"borderRadius": "4px",
				// 		"borderWidth":"0px",
				// 		"borderColor":`${obj.libcanborrow?'#fff':'#eee'}`,
				// 		"color": `${obj.libcanborrow?'#fff':'#eee'}`,
				// 		"rotate": "-45",
				// 	}
				// },
				// {
				// 	"type": "text",
				// 	"text": "借阅",
				// 	"css": {
				// 		"color": `${obj.libcanborrow?obj.libbg:'#ccc'}`,
				// 		"width": "60px",
				// 		"height": '30px',
				// 		"top": "848px",
				// 		"left": "27px",
				// 		"rotate": "0",
				// 		"borderRadius": "",
				// 		"borderWidth": "",
				// 		"borderColor": "",
				// 		"shadow": "",
				// 		"padding": "0px",
				// 		"fontSize": "24px",
				// 		"fontWeight": "bold",
				// 		"maxLines": "1",
				// 		"lineHeight": "30px",
				// 		"textStyle": "fill",
				// 		"textDecoration": "none",
				// 		"fontFamily": "",
				// 		"textAlign": "center"
				// 	}
				// },
				// {
				// 	"type": "rect",
				// 	"css": {
				// 		"width": "34px",
				// 		"height": "34px",
				// 		"top": "800px",
				// 		"left": "120px",
				// 		"rotate": "0",
				// 		"borderRadius": "34px",
				// 		"borderWidth":"5px",
				// 		"borderColor":`${obj.libcandownload?obj.libbg:'#eee'}`,
				// 		"color": `${obj.libcandownload?obj.libbg:'#eee'}`,
				// 	}
				// },
				// {
				// 	"type": "rect",
				// 	"css": {
				// 		"width": "5px",
				// 		"height": "26px",
				// 		"top": "805px",
				// 		"left": "138px",
				// 		"borderRadius": "5px",
				// 		"borderWidth":"0px",
				// 		"borderColor":`${obj.libcandownload?'#fff':'#eee'}`,
				// 		"color": `${obj.libcandownload?'#fff':'#eee'}`,
				// 		"rotate": "45",
				// 	}
				// },
				// {
				// 	"type": "rect",
				// 	"css": {
				// 		"width": "5px",
				// 		"height": "14px",
				// 		"top": "815px",
				// 		"left": "126px",
				// 		"borderRadius": "4px",
				// 		"borderWidth":"0px",
				// 		"borderColor":`${obj.libcandownload?'#fff':'#eee'}`,
				// 		"color": `${obj.libcandownload?'#fff':'#eee'}`,
				// 		"rotate": "-45",
				// 	}
				// },
				// {
				// 	"type": "text",
				// 	"text": "下载",
				// 	"css": {
				// 		"color": `${obj.libcandownload?obj.libbg:'#ccc'}`,
				// 		"width": "60px",
				// 		"height": '30px',
				// 		"top": "848px",
				// 		"left": "107px",
				// 		"rotate": "0",
				// 		"borderRadius": "",
				// 		"borderWidth": "",
				// 		"borderColor": "",
				// 		"shadow": "",
				// 		"padding": "0px",
				// 		"fontSize": "24px",
				// 		"fontWeight": "bold",
				// 		"maxLines": "1",
				// 		"lineHeight": "30px",
				// 		"textStyle": "fill",
				// 		"textDecoration": "none",
				// 		"fontFamily": "",
				// 		"textAlign": "center"
				// 	}
				// },
				// {
				// 	"type": "rect",
				// 	"css": {
				// 		"width": "34px",
				// 		"height": "34px",
				// 		"top": "800px",
				// 		"left": "200px",
				// 		"rotate": "0",
				// 		"borderRadius": "34px",
				// 		"borderWidth":"5px",
				// 		"borderColor":`${obj.libcanonread?obj.libbg:'#eee'}`,
				// 		"color": `${obj.libcanonread?obj.libbg:'#eee'}`,
				// 	}
				// },
				// {
				// 	"type": "rect",
				// 	"css": {
				// 		"width": "5px",
				// 		"height": "26px",
				// 		"top": "805px",
				// 		"left": "218px",
				// 		"borderRadius": "5px",
				// 		"borderWidth":"0px",
				// 		"borderColor":`${obj.libcanonread?'#fff':'#eee'}`,
				// 		"color": `${obj.libcanonread?'#fff':'#eee'}`,
				// 		"rotate": "45",
				// 	}
				// },
				// {
				// 	"type": "rect",
				// 	"css": {
				// 		"width": "5px",
				// 		"height": "14px",
				// 		"top": "815px",
				// 		"left": "206px",
				// 		"borderRadius": "4px",
				// 		"borderWidth":"0px",
				// 		"borderColor":`${obj.libcanonread?'#fff':'#eee'}`,
				// 		"color": `${obj.libcanonread?'#fff':'#eee'}`,
				// 		"rotate": "-45",
				// 	}
				// },
				// {
				// 	"type": "text",
				// 	"text": "阅读",
				// 	"css": {
				// 		"color": `${obj.libcanonread?obj.libbg:'#ccc'}`,
				// 		"width": "60px",
				// 		"height": '30px',
				// 		"top": "848px",
				// 		"left": "187px",
				// 		"rotate": "0",
				// 		"borderRadius": "",
				// 		"borderWidth": "",
				// 		"borderColor": "",
				// 		"shadow": "",
				// 		"padding": "0px",
				// 		"fontSize": "24px",
				// 		"fontWeight": "bold",
				// 		"maxLines": "1",
				// 		"lineHeight": "30px",
				// 		"textStyle": "fill",
				// 		"textDecoration": "none",
				// 		"fontFamily": "",
				// 		"textAlign": "center"
				// 	}
				// },
				// {
				// 	"type": "rect",
				// 	"css": {
				// 		"width": "34px",
				// 		"height": "34px",
				// 		"top": "800px",
				// 		"left": "280px",
				// 		"rotate": "0",
				// 		"borderRadius": "34px",
				// 		"borderWidth":"5px",
				// 		"borderColor":`${obj.libcansell?obj.libbg:'#eee'}`,
				// 		"color": `${obj.libcansell?obj.libbg:'#eee'}`,
				// 	}
				// },
				// {
				// 	"type": "rect",
				// 	"css": {
				// 		"width": "5px",
				// 		"height": "26px",
				// 		"top": "805px",
				// 		"left": "298px",
				// 		"borderRadius": "5px",
				// 		"borderWidth":"0px",
				// 		"borderColor":`${obj.libcansell?'#fff':'#eee'}`,
				// 		"color": `${obj.libcansell?'#fff':'#eee'}`,
				// 		"rotate": "45",
				// 	}
				// },
				// {
				// 	"type": "rect",
				// 	"css": {
				// 		"width": "5px",
				// 		"height": "14px",
				// 		"top": "815px",
				// 		"left": "286px",
				// 		"borderRadius": "4px",
				// 		"borderWidth":"0px",
				// 		"borderColor":`${obj.libcansell?'#fff':'#eee'}`,
				// 		"color": `${obj.libcansell?'#fff':'#eee'}`,
				// 		"rotate": "-45",
				// 	}
				// },
				// {
				// 	"type": "text",
				// 	"text": "交易",
				// 	"css": {
				// 		"color": `${obj.libcansell?obj.libbg:'#ccc'}`,
				// 		"width": "60px",
				// 		"height": '30px',
				// 		"top": "848px",
				// 		"left": "267px",
				// 		"rotate": "0",
				// 		"borderRadius": "",
				// 		"borderWidth": "",
				// 		"borderColor": "",
				// 		"shadow": "",
				// 		"padding": "0px",
				// 		"fontSize": "24px",
				// 		"fontWeight": "bold",
				// 		"maxLines": "1",
				// 		"lineHeight": "30px",
				// 		"textStyle": "fill",
				// 		"textDecoration": "none",
				// 		"fontFamily": "",
				// 		"textAlign": "center"
				// 	}
				// },
				{
					"type": "text",
					"text": obj.sitename,
					"css": {
						"color": "#333333",
						"width": "400px",
						"height": '30px',
						"top": "900px",
						"left": "30px",
						"rotate": "0",
						"borderRadius": "",
						"borderWidth": "",
						"borderColor": "",
						"shadow": "",
						"padding": "0px",
						"fontSize": "28px",
						"fontWeight": "bold",
						"maxLines": "1",
						"lineHeight": "40px",
						"textStyle": "fill",
						"textDecoration": "none",
						"fontFamily": "",
						"textAlign": "left"
					}
				},
				{
					"type": "text",
					"text": obj.sitedesc,
					"css": {
						"color": "#666666",
						"width": "400px",
						"height": '30px',
						"top": "940px",
						"left": "30px",
						"rotate": "0",
						"borderRadius": "",
						"borderWidth": "",
						"borderColor": "",
						"shadow": "",
						"padding": "0px",
						"fontSize": "22px",
						"fontWeight": "normal",
						"maxLines": "1",
						"lineHeight": "30px",
						"textStyle": "fill",
						"textDecoration": "none",
						"fontFamily": "",
						"textAlign": "left"
					}
				},
				{
					"type": "text",
					"text": '长按识别二维码',
					"css": {
						"color": "#696969",
						"width": "200px",
						"height": '30px',
						"top": "940px",
						"left": "400px",
						"rotate": "0",
						"borderRadius": "",
						"borderWidth": "",
						"borderColor": "",
						"shadow": "",
						"padding": "0px",
						"fontSize": "18px",
						"fontWeight": "normal",
						"maxLines": "1",
						"lineHeight": "30px",
						"textStyle": "fill",
						"textDecoration": "none",
						"fontFamily": "",
						"textAlign": "left"
					}
				},
				{
					"type": "text",
					"text": obj.title,
					"css": {
						"color": "#000000",
						"width": "400px",
						"height": "50px",
						"top": '610px',
						"left": "30px",
						"rotate": "0",
						"borderRadius": "",
						"borderWidth": "",
						"borderColor": "",
						"shadow": "",
						"padding": "0px",
						"fontSize": "30px",
						"fontWeight": "normal",
						"maxLines": "1",
						"lineHeight": "",
						"textStyle": "fill",
						"textDecoration": "none",
						"fontFamily": "",
						"textAlign": "left"
					}
				},
				{
					"type": "text",
					"text": obj.excerpt,
					"css": {
						"color": "#666666",
						"width": "400px",
						"height": "30px",
						"top": '670px',
						"left": "30px",
						"rotate": "0",
						"borderRadius": "",
						"borderWidth": "",
						"borderColor": "",
						"shadow": "",
						"padding": "0px",
						"fontSize": "24px",
						"fontWeight": "",
						"maxLines": "3",
						"lineHeight": "30px",
						"textStyle": "fill",
						"textDecoration": "none",
						"fontFamily": "",
						"textAlign": "left"
					}
				}
			]
		});
	}
}
