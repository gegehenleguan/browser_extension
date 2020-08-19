 var localurl = location.href;
    var targeturl = '';
    'use strict';
    function addGlobalStyle(css) {
        var head, style;
        head = document.getElementsByTagName('head')[0];
        if (!head) { return; }
        style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
    }

        function runonclick(){
            document.querySelector('#runad').style.display='none';
			document.querySelector('#godisplay').style.display='none';
            window.open(targeturl);
		}
    function rungogo(){
            console.log('gogogo')
			document.querySelector('#runad').style.display='block';
			document.querySelector('#godisplay').style.display='none';
			var c=16;
			var ele = document.querySelector('#elecount');
			ele.innerText = c;
			function runpreprocess(){
				c--;
				ele.innerText = c;
				if(c==0){
					document.querySelector('#godisplay').style.display='block';
				}else{
					setTimeout(runpreprocess,1000);
				}
			}
			runpreprocess();
		}

    function addrunad(){
        console.log('ok')
			var ele='<div id="runad" style="display:none;"><div  style="z-index:9999995;position:absolute;opacity: 70%;background-color: black;width:100%;height:9999px;"></div><div style="z-index:9999996;padding:20px;border-radius:5px;position: fixed;top: 40%;left: 0;right:0;margin:auto;background-color: white;width: 60%;text-align: center;font-size:20px;font-weight: bold;"><div >脚本的视频解析接口部分涉及到油猴平台 “不喜欢” 的域名，后期可能会被意外删除！</div><div >因此强烈建议手动添加脚本，同时不影响脚本更新！</div><div >手动添加的Pro版本<span style="color:red;">免费</span>使用且没有此<span style="color:red">提示</span>！</div>			<div ><a target="_blank" href="https://xsyhnb.lanzous.com/iF3HDfswieh" style="text-decoration: none;color: red;">脚本下载地址（内附手动安装教程）</a></div>			<div id="elecount">10</div>			<div id="godisplay" style="margin-top: 10px;display: none;"><a id="gogogo" href="###" style="background-color: dodgerblue;color:white;padding:5px 10px;text-decoration: none;border-radius: 3px;">知道了，关闭</a></div></div></div>';
		if(document.querySelectorAll('#runad').length==0){
        $('body').before(ele);$('#gogogo').click(runonclick)}
    }
    addrunad();

    function active(){
        if(localurl.search('www.bilibili.com')>=0 && document.querySelectorAll('.download').length==0 && localurl.search('message')==-1){bilibili();video();}
        else if(localurl.search('message.bilibili')>=0){}
        else if(localurl.search('xbeibeix')>=0){console.log('ok');adddlurl();}
    }

    active();

    function adddlurl(){
        var url = document.querySelector('video').src;
        var btn=`<div style="position:fixed;top:5%;"><a id="btndl" style="padding:5px 10px;background:red;color:white;text-decoration:none;" href="${url}"  download>点击下载</a></div>`
        $('body').append(btn);
    }



    function video(){
        $('#videolinkparse').remove();
        var url = window.location.href;
        addGlobalStyle('.a-link{text-decoration: none;color: white;}.a-link-div{padding:10px 20px;margin-bottom: 5px;background-color: #1E90FF;	}.btn-play{	background-color: #1E90FF;padding:10px;font-size: 18px;	height: fit-content;color: white;cursor: pointer;}.a-link-list{	padding-left: 5px;display: none;}.btn-play:hover + .a-link-list,.a-link-list:hover{display: block;}.a-link-div:hover{background-color: red;color:white;	} ');
        var btn = `<div id="videolinkparse" style="position:fixed;z-index:990;top:20%;left:0;font-size:10px"><div style="display: flex;margin-bottom: 5px;"><div class="btn-play" >▶</div><div class="a-link-list"><a class="a-link" href="http://tv.wandhi.com/go.html?url=${url}" target='_blank'><div class="a-link-div">线路1</div></a><a class="a-link" href="https://z1.m1907.cn/?jx=${url}" target='_blank'><div class="a-link-div">线路2</div></a><a class="a-link" href="https://www.sounm.com/?url=${url}" target='_blank'><div class="a-link-div">线路3</div></a><a target='_blank' class="a-link" href="http://jx.598110.com/?url=${url}"><div class="a-link-div">线路4</div></a> <a target="_blank" class="a-link" style="width:40px;"><div class="a-link-div">解析失败，可前往在线影院搜索</div></a></div></div><a class="a-link" href="http://www.redbean.top" target='_blank' style='color:white'><div style="background-color: #1E90FF;color:#FFFFFF;padding:8px;width:20px;">在线影院</div></a></div>`
        if($('#videolinkparse').length>0){}
        else{$("body").append(btn);}
    }

       function bilibili(){
        var aid,cid

       function getvideourl(){
           var url,abtn;
           var data = __INITIAL_STATE__||false;
           console.log(data)
           if(data){

           if(data.p.length!==0){
               url = `https://xbeibeix.com/api/bilibili/biliplayer/?url=${data.bvid}?p=${data.p}`;
           }else{
               url = `https://xbeibeix.com/api/bilibili/biliplayer/?url=${data.bvid}`;
           }
               $('#dltext').remove();abtn = `<span id="dltext"><a id="dlbtna" style="background: red;color: white; padding: 5px;" href="javascript:void(0)" >解析链接</a></span>`;$('#download').append(abtn);$('a#dlbtna').click(function(){targeturl=url;console.log(targeturl);rungogo();})
           }else{
           $('#dltext').remove();abtn = `<span id="dltext"><a style="background: red;color: white; padding: 5px;" target="_blank" href="javascript:void(0)">解析失败</a></span>`;$('#download').append(abtn);}
       }
        function addbtn(){
            $('#download').remove();
            var ele1 =  $('div.ops').children()[0].innerText;
            var isok=document.querySelectorAll('img.up-face').length;;
            if(ele1!=='--' && isok>0){
                $('div#arc_toolbar_report').before('<div id="download" style="padding:5px;">下載地址：<span id="dltext" style="color:red;">正在獲取下載地址</span></div>');
                getvideourl();

            }else{ setTimeout(addbtn,500)}
        }
        function addbagumi(){
            try{
            $('#download').remove();
            var txt = $('.coin-info').children()[1].innerText;
            if(txt!=='--'){$('.media-wrapper').before('<div id="download" style="padding:5px;">下载地址：<span id="dltext" style="color:red;">暂不支持该类视频！</span></div>')}
            else{setTimeout(addbagumi,500)}}catch(e){}
        }
        function isbangumi(){if(localurl.search('bangumi')!==-1){return true}else{return false}};
        function isvideo(){if(localurl.search('video')!==-1){return true}else{return false}};
        if(isbangumi()){addbagumi();}
        if(isvideo()){addbtn();}
        function refresh(){
        if(localurl!==location.href){
            localurl=location.href;
            if(isbangumi()){addbagumi();}
            if(isvideo()){
                addbtn();

            }
            video();
            }
        }
        setInterval(refresh,500);
    }
