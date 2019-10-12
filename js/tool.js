//轮播图的封装函数(原生态)
class Banner{
		constructor(boxDom,obj){
			this.boxDom=boxDom;

			this.boxImg=null;//所有图片标签的容器
			this.ul=null;//所有li标签的容器
			this.boxBut=null;
			this.ps=null;

			this.imgs=obj.imgs;//要播放的图片（路径）数组
			this.width=obj.width;
			this.height=obj.height;

			this.timeSpace=obj.timeSpace;
			this.index=obj.index; //当前播放到了第几张

			this.douSize=obj.douSize;
			this.douIsCircle=obj.douIsCircle;
			this.douborder=this.douborder;
			this.douColor = obj.douColor;
        	this.douHighColor =obj.douHighColor;
			
			this.myTimer=null;
			this.render();
			this.autoPlay();
			this.addEvent();
		}
		render(){
			this.boxImg=document.createElement("div");
			this.boxImg.style.cssText=`
			position:absolute;
			width:100%;
			height:100%;`
			this.boxDom.appendChild(this.boxImg);

			this.boxBut=document.createElement("div");
			this.boxBut.style.cssText=`
			position:absolute;
			margin-top:150px;
			width:20px;
			height:35px;
			background-color:red;
			opacity:0.3;
			z-index:1`;
			this.boxDom.appendChild(this.boxBut);

			this.boxBut=document.createElement("div");
			this.boxBut.style.cssText=`
			position:absolute;
			left:380px;
			margin-top:150px;
			width:20px;
			height:35px;
			background-color:red;
			z-index:1;
			opacity:0.3;`;
			this.boxDom.appendChild(this.boxBut);

			this.ps=document.createElement("p");
			this.ps.style.cssText=`
			position:absolute;
			z-index=1;
			margin:10px auto;
			`;
			this.boxBut.appendChild(this.ps);


			let num=this.imgs.length;
			for(let i=0;i<num;i++){
				let imgDom=document.createElement("img");

				imgDom.src=this.imgs[i];

				imgDom.style.cssText=`
				position:absolute;
				width:100%;
				height:100%;
				opacity:0;`;
				if(i==0){
					imgDom.style.opacity=1;
				}
				this.boxImg.appendChild(imgDom);
			}

			this.ul=document.createElement("ul");
			this.ul.style.cssText=`
			position:absolute;
			bottom:25px;
			left:20px;
			list-style:none;
			z-index:1;`;

			this.boxDom.appendChild(this.ul);
			for(let i=0;i<num;i++){
				let li=document.createElement("li");
				li.style.cssText=`
				float:left;
				margin-left:8px;
				width:${this.douSize}px;
				height:${this.douSize}px;
				border:${this.douBorder};
				background-color:${this.douColor};`;
				if(this.douIsCircle){
					li.style.borderRadius="50%";
				}
				if(i==0){
					li.style.backgroundColor=this.douHighColor;
				}
				this.ul.appendChild(li);
			}
		}

		autoPlay(){
			this.myTimer=setInterval(()=>{
				let outIndex=this.index;
				this.index++;
				if(this.index>this.imgs.length-1){
					this.index=0;
				}

				//改变外观
				let imgDoms=this.boxImg.children;

				fadeInOut(imgDoms[this.index],imgDoms[outIndex],this.timeSpace/3);

				let liDoms=this.ul.children;
				liDoms[this.index].style.backgroundColor=this.douHighColor;
				liDoms[outIndex].style.backgroundColor=this.douColor;
			},this.timeSpace);
		}

		stop(){
			window.clearInterval(this.myTimer);
		}

		goImg(transOrd){
			let outIndex=this.index;
			this.index=transOrd;
			if(this.index>this.imgs.length-1){
				this.index=0;
			}
			let imgDoms=this.boxImg.children;

				fadeInOut(imgDoms[this.index],imgDoms[outIndex],this.timeSpace/3);

				let liDoms=this.ul.children;
				liDoms[this.index].style.backgroundColor=this.douHighColor;
				liDoms[outIndex].style.backgroundColor=this.douColor;
		}
		addEvent(){
			this.boxDom.onmouseover=()=>{
				this.stop();
			}
			this.boxDom.onmouseout=()=>{
				this.autoPlay();
			}

			this.ul.onmouseout = function(event){
	        let evt = event || window.event;
	        evt.stopPropagation();
	    	}

	    	this.ul.onmouseover = function(event){
	        let evt = event || window.event;
	        evt.stopPropagation();
	    	}

			let liDoms=this.ul.children;
			for(let i=0;i<liDoms.length;i++){
				liDoms[i].onclick=()=>{
					this.goImg(i);
				}
			}
		}
	}


//功能：让两张图片淡入淡出
//参数：
//淡入的图片
//淡出的图片
//时长
//返回值：定时器
function fadeInOut(inImg,outImg,timeLong){
	let opacity=0;
	let timeSpace=16;
	let step=1/(timeLong/timeSpace);
	let myTimer=setInterval(()=>{
		opacity=opacity+step;
		if(opacity>=1){
			opacity=1;
			window.clearInterval(myTimer);
		}
		//外观
		inImg.style.opacity=opacity;
		outImg.style.opacity=1-opacity;
	},timeSpace)
}
