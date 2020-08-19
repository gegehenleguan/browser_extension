var localurl = location.href;
    function runonclick(){
			document.querySelector('#runad').style.display='none';
        	document.querySelector('#runad1').style.display='none';
            run();

		}
    function addrunad(){
        console.log('ok')
			var ele='<div id="runad" style="z-index:1;display:none;position:absolute;opacity: 70%;background-color: black;width:100%;height:100%;"></div><div id="runad1" style="z-index:2;padding:20px;border-radius:5px;position: fixed;top: 40%;left: 0;right:0;margin:auto;background-color: white;width: 60%;text-align: center;font-size:20px;font-weight: bold;"><div >由于不确定原因，油猴平台经常出现无辜删除脚本现象！</div><div >因此强烈建议手动添加脚本，同时不影响脚本更新！</div><div >手动添加的Pro版本<span style="color:red;">免费</span>使用且没有此<span style="color:red">提示</span>！</div>			<div ><a target="_blank" href="https://xsyhnb.lanzous.com/iF3HDfswieh" style="text-decoration: none;color: red;">脚本下载地址（内附手动安装教程）</a></div>			<div id="elecount">10</div>			<div id="godisplay" style="margin-top: 10px;display: none;"><a id="gogogo" href="###" style="background-color: dodgerblue;color:white;padding:5px 10px;text-decoration: none;border-radius: 3px;">知道了，关闭</a></div></div>';
		if(document.querySelectorAll('#runad').length==0){
        $('body').before(ele);$('#gogogo').click(runonclick)}

        function checkele(){
            if(document.querySelectorAll('#runad').length>0){
                rungogo();
            }else{
                setTimeout(checkele,500);
            }
        }
        checkele();
    }
    function addbtn(){
        var btn = '<button id="getlitbtn"  style="color: white;margin-left:20px;background-color: red;border: none;padding: 5px 10px;">提取群成员</button>';
        $('.group-tit').append(btn);
        $('#getlitbtn').click(addrunad);
    }

    function addstatus(){
        var s = '<div id="getliststatus" style=" position: fixed; top: 50%; left: 50%;  background-color: black;  color: white;  padding: 20px;  font-size: 20px;  opacity: 70%;  border-radius: 5px;">提取群成员中... </div>';
        $('body').append(s);
    }
    function changestatus(n,t){
        document.querySelector('#getliststatus').innerText = `提取群成员中(${n}/${t})...`;
    }

    function adddownloadbtn(srcdata){
        var blob = new Blob(["\ufeff" + srcdata], {type: 'text/csv'});
        var btn = `<a id="numlistdl" class="btn" style="margin-left:20px;" href="${URL.createObjectURL(blob)}" download="${document.querySelector('#groupTit').innerText+'/'+new Date(new Date().getTime()).toLocaleDateString()}.csv">下载CSV</a>`;
        $('.group-tit').append(btn);
    }
    function showlist(){
        //console.log('showlist');
        var totalnum = parseInt(document.querySelector('#groupMemberNum').innerText);
        var num = document.querySelectorAll('tr.mb').length;
        //console.log('totalnum:',totalnum,' num get:',num);
        changestatus(num,totalnum);
        if(num<totalnum){
            scrollTo(0,document.documentElement.scrollHeight);
            setTimeout(showlist,500);
        }else{
            document.querySelector('#getliststatus').remove();
            //var nlist = getlist();
            var csvinfo = getcsvinfo();
            //console.log(csvinfo);
            scrollTo(0,0);
            adddownloadbtn(csvinfo);
        }
    }

		
		function rungogo(){
            console.log('gogogo')
			document.querySelector('#runad').style.display='block';
            document.querySelector('#runad1').style.display='block';
			document.querySelector('#godisplay').style.display='none';
			var c=31;
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
    function getlist(){
        console.log('getlist')
        var nlist = document.querySelectorAll('tr.mb');
        var res=[];
        for(var i=0;i<nlist.length;i++){
            res.push(document.querySelectorAll('tr.mb')[i].className.match(/(\d.*)/)[0])
        }
        return res
    }
    // Your code here...
    function runad(){
        var c = 10;
        function runprocess(){
            if(c==0){
                run();
            }else{
                c--;
                setTimeout(runprocess,1000);
            }
        }
    }
    function run(){
        addstatus();
        console.log('run')
        if(document.querySelectorAll('tr.mb').length>0){
            showlist();
        }else{
            console.log('run')
            setTimeout(run,500)
        }
    }
    function getcsvinfo(){
        var csvinfolist=[];
        var trs = document.querySelectorAll('tr');
        for(var i=0;i<trs.length;i++){
            var memberinfolist=[];
            var member = trs[i].children;
            for(var j=0;j<member.length;j++){
                memberinfolist.push(member[j].innerText);
            }
            csvinfolist.push(memberinfolist.join(','))
        }
        return csvinfolist.join('\n');
    }
    function checkurl(){
    if(location.href!==localurl){
        if(document.querySelectorAll('#numlistdl').length>0){document.querySelector('#numlistdl').remove();}
        localurl = location.href;
        checkurl();
    }else{
        console.log('checkurl');
        setTimeout(checkurl,500);
    }
    }
    addbtn();
    checkurl();
