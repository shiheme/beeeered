export default class LastMayday {
	palette(obj) {
		const temp = {
			"width": `${obj.canvasWidth}px`,
			"height": `${obj.canvasHeight}px`,
			"background": `rgba(${obj.canvasColor.r},${obj.canvasColor.g},${obj.canvasColor.b},${obj.canvasColor.a})`,
			"views": []
		}
		if (obj.pickbgImage) {
			temp.views.push({
				"type": "image",
				// "url": obj.avatarFrame[i].icon, 
				"url": obj.pickbgImage,
				"css": {
					"width": `${obj.pickbgImageWidth}px`, 
					"height": `${obj.pickbgImageHeight}px`,
					"top": `${obj.pickbgImageLeft}px`,
					"left": `${obj.pickbgImageRight}px`,
					"rotate": "0",
					"borderRadius": '',
					"shadow": "",
					"mode": "aspectFill"
				}
			});
		}
		if (obj.avatarImage) {
			temp.views.push({
				"type": "image",
				// "url": obj.avatarFrame[i].icon, 
				"url": obj.avatarImage,
				"css": {
					"width": `${obj.avatarImageWidth}px`,
					"height": `${obj.avatarImageHeight}px`,
					"top": `${obj.avatarImageLeft}px`,
					"left": `${obj.avatarImageRight}px`,
					"rotate": "0",
					"borderRadius": `${obj.avatarRadius}px`,
					"shadow": "",
					"mode": "aspectFill"

				}
			});
		}
		if (obj.avatarFrame.length > 0) {
			for (let i = 0; i < obj.avatarFrame.length; i++) {
				temp.views.push({
					"type": "image",
					// "url": obj.avatarFrame[i].icon, 
					"url": obj.avatarFrame[i].icon,
					"css": {
						"width": `${obj.avatarFrame[i].custom.width}px`,
						"height": `${obj.avatarFrame[i].custom.height}px`,
						"top": `${obj.avatarFrame[i].custom.marginy}px`,
						"left": `${obj.avatarFrame[i].custom.marginx}px`,
						"rotate": "0",
						"borderRadius": "",
						"shadow": "",
						"mode": "aspectFill"

					}
				});
			}
		}
		return temp;
	}
}
