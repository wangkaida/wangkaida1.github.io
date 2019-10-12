function Tab1(mains,footer){
        this.mains = document.getElementsByClassName(mains);
        this.footer= document.getElementById(footer)    
        this.ulLiArr= this.footer.children[0].children[0].children;
        
        this.TabClick();
    
    }
    Tab1.prototype = {
        TabClick:function(){
            var that=this
            for(var i=0; i<this.ulLiArr.length; i++){
                this.ulLiArr[i].onclick=function(){
                    //排他思想，当前加cur  显示对应的图片
                    for(var j=0; j<that.ulLiArr.length; j++){
                        that.ulLiArr[j].className=""
                        that.mains[j].style.display="none";
                        if(this==that.ulLiArr[j]){
                            //关联计算机
                            that.mains[j].style.display="block";
                            this.className="true1";
                        }
                    }
                }
            }
        }
    }
function Tab2(conts,ulLis){
        this.conts= document.getElementsByClassName(conts);
        this.ulLis= document.getElementsByClassName(ulLis);
        console.log(this.conts,this.ulLis)
        this.TabClick();
    
    }
    Tab2.prototype = {
        TabClick:function(){
            var that=this
            for(var i=0; i<this.ulLis.length; i++){
                this.ulLis[i].onclick=function(){
                    //排他思想，当前加cur  显示对应的图片
                    for(var j=0; j<that.ulLis.length; j++){
                        that.ulLis[j].className=""
                        that.conts[j].style.display="none";
                        if(this==that.ulLis[j]){
                            //关联计算机
                            that.conts[j].style.display="block";
                            this.className="true1";
                        }
                    }
                }
            }
        }
    }
    function Tab3(main,tit){
            this.main = document.getElementsByClassName(main);
            this.mains = main.children;
            this.tit= document.getElementById(tit)    
            this.ulLiArr= this.tit.children[0].children;
            
            this.TabClick();
        
        }
        Tab1.prototype = {
            TabClick:function(){
                var that=this
                for(var i=0; i<this.ulLiArr.length; i++){
                    this.ulLiArr[i].onclick=function(){
                        //排他思想，当前加cur  显示对应的图片
                        for(var j=0; j<that.ulLiArr.length; j++){
                            that.ulLiArr[j].className=""
                            that.mains[j].style.display="none";
                            if(this==that.ulLiArr[j]){
                                //关联计算机
                                that.mains[j].style.display="block";
                                this.className="true1";
                            }
                        }
                    }
                }
            }
        }
    function Lunbotu(inner){
        this.inner = document.getElementById(inner);
        this.ul = this.inner.children[0];
        this.ulLiArr = this.ul.children;
        this.ol = this.inner.children[1];
        this.olLiArr = this.ol.children;

        this.k=0;//计数器
        this.timer=null;
        this.init();
        }
    Lunbotu.prototype={
       init:function(){
            this.autoplay()
            this.autostep()
            this.bindEnter()
            this.bindOut()
            // this.bindClick()
            // this.bindRClick()
            this.bindOver()
        },
    //1.自动轮播
    autoplay:function(){
        var that=this;
       this.timer =setInterval(()=>{
            that.autostep();
       },2000)
       
       },
    //2.走一步函数
    autostep:function(){
        this.k++;
        //判断临界值
        if(this.k>7){
            this.k=0;
        }
        //其他图片都透明度为0
        for(var i=0; i<this.ulLiArr.length; i++){
            this.ulLiArr[i].style.opacity=0;
            //修改对应的小方块显示
            this.olLiArr[i].className="";
        }
        this.ulLiArr[this.k].style.opacity=1;
        this.olLiArr[this.k].className="cur"
      },
    //3.鼠标进入main
    bindEnter:function(){
        var that=this
        this.inner.onmouseenter=function(){
            clearInterval(that.timer)
          }
    },
    
    //4.鼠标移开mian
    bindOut:function(){
        var that=this
        this.inner.onmouseleave=function(){
            that.autoplay();
          }
    },
   
    //7.鼠标经过方块
    bindOver:function(){
        var that=this
        for(var i=0; i<this.olLiArr.length; i++){
            this.olLiArr[i].onclick=function(){
                //排他思想，当前加cur  显示对应的图片
                for(var j=0; j<that.olLiArr.length; j++){
                    that.olLiArr[j].className=""
                    that.ulLiArr[j].style.opacity=0;
                    if(this==that.olLiArr[j]){
                        //关联计算机
                        k=j;
                        that.ulLiArr[k].style.opacity=1;
                        this.className="cur"
                    }
                }
            }
        }
    }
}  

function Tuozhuai(contert){
    var imgArr=document.getElementById('main').children;
		console.log(imgArr[0].getAttribute("data-src"))
	window.onscroll=function(){
		var sTop=document.body.scrollTop||document.documentElement.scrollTop;
		console.log(sTop)
		for(var i=0; i<imgArr.length; i++){

	if(getPos(imgArr[i]).top-sTop<=200){
		//符合条件的当前图片赋值
		imgArr[i].src=imgArr[i].getAttribute("data-src")
			}
		}   
	}
	function getPos(ele){
		var posLeft=0;
		var posTop=0;
		while(ele.offsetParent){
			posLeft+=ele.offsetLeft;
			posTop+=ele.offsetTop;
			ele=ele.offsetParent;
		}
		return{
			left:posLeft,
			top:posTop,
		}
	}


}

function tab4(titi,contt){
    this.titi = document.getElementById(titi);
    this.contt = document.getElementById(contt);
    this.lis = this.titi.children[0].children;
    this.dls = this.contt.children;
    this.onclick();
}
tab4.prototype ={
    onclick:function(){
        var that=this
                for(var i=0; i<this.lis.length; i++){
                    this.lis[i].onclick=function(){
                        //排他思想，当前加cur  显示对应的图片
                        for(var j=0; j<that.lis.length; j++){
                            that.lis[j].className=""
                            that.dls[j].style.display="none";
                            if(this==that.lis[j]){
                                //关联计算机
                                that.dls[j].style.display="block";
                                this.className="true2";
                            }
                        }
                    }
                }
    }
}

window.onload=function(){

    new Tab1("main","footer")
    new Tab1("main","footer")
    new Tab2("cont2","fenlei")
   new tab4("tit11","cont_ent")
    new Lunbotu("inner")

}