import{_ as p,r,o as c,c as d,d as a,a as n,w as t,e as s,f as o}from"./app-Nm0Yc3WX.js";const u={},h=a("h1",{id:"🌐网络与信息中心-its-sustech-edu-cn",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#🌐网络与信息中心-its-sustech-edu-cn","aria-hidden":"true"},"#"),s(" 🌐网络与信息中心 (its@sustech.edu.cn)")],-1),k={class:"table-of-contents"},b=o('<h2 id="校内局域网" tabindex="-1"><a class="header-anchor" href="#校内局域网" aria-hidden="true">#</a> 校内局域网</h2><p>南科大的校内局域网主要分为主要包含教学/科研/业务计算机的科研教学网段(<code>172.18.0.0/16</code>)和包含大部分师生员工的个人有线与无线设备的普通网段(<code>10.16.0.0/13</code>)。</p><p>在普通网段中，<code>10.20.0.0/16</code>，<code>10.16.0.0/16</code>为有线网段，<code>10.22.0.0/16</code>为电信自费宽带网段。</p>',3),v=a("code",null,"2001:DA8:201D::/48",-1),m={href:"http://www.nic.edu.cn/member-cgi/i6obj?query=SUSTC6-CERNET2",target:"_blank",rel:"noopener noreferrer"},_=a("h3",{id:"接入网络",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#接入网络","aria-hidden":"true"},"#"),s(" 接入网络")],-1),g=a("p",null,"南科大师生员工无需为互联网服务付费（电信自费宽带除外）。设备获取的内网IP地址在遵循前述原则下与Mac地址绑定，在较长的时间内不会改变。",-1),f={href:"http://172.16.16.20:8900/home",target:"_blank",rel:"noopener noreferrer"},x=a("ul",null,[a("li",null,"MAC 无感知认证：为无法进行 Web 认证的设备，例如：Nintendo Switch，智能音箱，进行入网认证。"),a("li",null,"查看上网设备"),a("li",null,"查看上网记录")],-1),y=a("h4",{id:"有线网络",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#有线网络","aria-hidden":"true"},"#"),s(" 有线网络")],-1),w=a("p",null,"接入学校有线网络暂时无需认证，接入电信自费宽带的有线网络时需要验证购买过套餐的同学的学号与密码。",-1),q=a("h4",{id:"无线网络",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#无线网络","aria-hidden":"true"},"#"),s(" 无线网络")],-1),E={href:"http://172.16.16.20:803/sustc_cas.php",target:"_blank",rel:"noopener noreferrer"},A={href:"https://www.whexy.com/post/openwrt-zhi-jie-jue-nan-ke-da-xiao-yuan-wang-deng-lu-nan-ti/",target:"_blank",rel:"noopener noreferrer"},C={class:"custom-container details"},S=o(`<summary>同学制作的无线网络登陆脚本</summary><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token builtin class-name">source</span> /etc/profile
<span class="token builtin class-name">set</span> <span class="token parameter variable">-e</span>
<span class="token function">curl</span> https://cas.sustech.edu.cn/cas/login?service<span class="token operator">=</span>http%3A%2F%2F172.16.16.20%3A803%2Fsustc_cas.php <span class="token operator">&gt;</span> a.txt
<span class="token assign-left variable">s</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">grep</span> <span class="token parameter variable">-o</span> <span class="token parameter variable">-E</span> <span class="token string">&quot;on<span class="token entity" title="\\&quot;">\\&quot;</span>\\ value=<span class="token entity" title="\\&quot;">\\&quot;</span>(.+?)<span class="token entity" title="\\&quot;">\\&quot;</span>&quot;</span> a.txt<span class="token variable">)</span></span>
<span class="token builtin class-name">echo</span> <span class="token variable">$s</span>
<span class="token assign-left variable">s</span><span class="token operator">=</span><span class="token variable">\${s<span class="token operator">#</span>*\\&quot;}</span>
<span class="token assign-left variable">s</span><span class="token operator">=</span><span class="token variable">\${s<span class="token operator">#</span>*\\&quot;}</span>
<span class="token assign-left variable">s</span><span class="token operator">=</span><span class="token variable">\${s<span class="token operator">%%</span>\\&quot;*}</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$s</span>
<span class="token assign-left variable">unm</span><span class="token operator">=</span>此处填入教/学工号
<span class="token assign-left variable">pwd</span><span class="token operator">=</span>此处填入密码
<span class="token function">curl</span> <span class="token string">&quot;https://cas.sustech.edu.cn/cas/login?service=http%3A%2F%2F172.16.16.20%3A803%2Fsustc_cas.php&quot;</span> <span class="token parameter variable">--data</span> <span class="token string">&quot;username=<span class="token variable">$unm</span>&amp;password=<span class="token variable">$pwd</span>&amp;execution=<span class="token variable">$s</span>&amp;_eventId=submit&amp;geolocation=&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),$={href:"https://www.whexy.com/post/openwrt-zhi-jie-jue-nan-ke-da-xiao-yuan-wang-deng-lu-nan-ti/",target:"_blank",rel:"noopener noreferrer"},I={id:"湖畔宿舍区域的有线网络",tabindex:"-1"},P=a("a",{class:"header-anchor",href:"#湖畔宿舍区域的有线网络","aria-hidden":"true"},"#",-1),F=a("p",null,[s("湖畔区域墙上的网口仅能以百兆接入校园网。若需以千兆速度接入校园网，可使用AP上的网口接入校园网。"),a("strong",null,"AP上的网口仅能访问校园网内网，但不能访问校外网络"),s("。")],-1),N=a("h3",{id:"其他有关网络的问题",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#其他有关网络的问题","aria-hidden":"true"},"#"),s(" 其他有关网络的问题")],-1),B=a("h4",{id:"在路由器后获取ipv6地址",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#在路由器后获取ipv6地址","aria-hidden":"true"},"#"),s(" 在路由器后获取IPv6地址")],-1),T={href:"https://c.cra.moe/t/topic/38",target:"_blank",rel:"noopener noreferrer"},U=o('<h4 id="使用dhcpclient时获取不到ipv6地址" tabindex="-1"><a class="header-anchor" href="#使用dhcpclient时获取不到ipv6地址" aria-hidden="true">#</a> 使用<code>dhcpclient</code>时获取不到IPv6地址</h4><ul><li>通常是因为学校的DHCPv6服务器不响应DHCPv6 Solicitation造成的。此问题常出现在安装Debian/Ubuntu（使用dhcpclient作为dhcp客户端的发行版中），如果希望快速解决，可以尝试讲dhcp客户端更改为<code>dhcpcd</code>。</li></ul><h2 id="互联网" tabindex="-1"><a class="header-anchor" href="#互联网" aria-hidden="true">#</a> 互联网</h2><h3 id="出口" tabindex="-1"><a class="header-anchor" href="#出口" aria-hidden="true">#</a> 出口</h3>',4),M={href:"https://biddingoffice.sustc.edu.cn/search/news/id/5085/pid",target:"_blank",rel:"noopener noreferrer"},j=a("p",null,"学校目前对普通网段设备不限速（Fair Use@Up to 1000Mbps），对科研教学网段限速50Mbps，对教育网IPv4限速20Mbps，暂不对教育网IPv6限速。",-1),W={id:"电信自费宽带",tabindex:"-1"},D=a("a",{class:"header-anchor",href:"#电信自费宽带","aria-hidden":"true"},"#",-1),R=a("div",{class:"custom-container warning"},[a("p",{class:"custom-container-title"},"注意"),a("p",null,[s("由于学校已经放宽网络限速，电信宽带的性价比较低。建议参考"),a("a",{href:"#%E6%B9%96%E7%95%94%E5%AE%BF%E8%88%8D%E5%8C%BA%E5%9F%9F%E7%9A%84%E6%9C%89%E7%BA%BF%E7%BD%91%E7%BB%9C"},"湖畔宿舍区域的有线网络"),s("一节进行配置。")])],-1),z=a("p",null,"中国电信为居住于湖畔宿舍区的同学提供自费电信宽带。",-1),H=a("p",null,"宽带速率可选50Mbps和100Mbps。其中，100Mbps宽带和手机卡套餐的总价为70元/月。",-1),G=a("p",null,"电信自费宽带也需要使用购买套餐同学的校园卡账户登录后才可使用，登陆方式为Web认证。也有同学制作了第三方脚本以方便快速验证。",-1),L={href:"https://mirrors.sustech.edu.cn/git/sustech-online/sustech-online-ng/-/raw/master/docs/service/network/CT_campus_broadband_plan.pdf",target:"_blank",rel:"noopener noreferrer"},O={class:"custom-container details"},V=o(`<summary>同学制作的电信自费网络登陆脚本</summary><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">loginurl</span><span class="token operator">=</span><span class="token string">&quot;https://cas.sustech.edu.cn/cas/login&quot;</span>
<span class="token assign-left variable">authip</span><span class="token operator">=</span><span class="token string">&quot;219.134.142.194&quot;</span>
<span class="token comment"># Insert your CAS info below:</span>
<span class="token assign-left variable">username</span><span class="token operator">=</span><span class="token string">&quot;YOUR_USER_NAME_HERE&quot;</span>
<span class="token assign-left variable">password</span><span class="token operator">=</span><span class="token string">&quot;YOUR_PASSWORD_HERE&quot;</span>

<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token boolean">true</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
	<span class="token assign-left variable">ret_code</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">curl</span> <span class="token parameter variable">-I</span> <span class="token parameter variable">-s</span> --connect-timeout <span class="token number">5</span> http://www.baidu.com <span class="token parameter variable">-w</span> %<span class="token punctuation">{</span>http_code<span class="token punctuation">}</span> <span class="token operator">|</span> <span class="token function">tail</span> <span class="token parameter variable">-n1</span><span class="token variable">\`</span></span>

	<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$ret_code</span> <span class="token parameter variable">-ne</span> <span class="token number">200</span> <span class="token punctuation">]</span> <span class="token punctuation">;</span> <span class="token keyword">then</span>
		<span class="token builtin class-name">echo</span> <span class="token string">&quot;Attempting to log in the enet system&quot;</span>
		<span class="token function">rm</span> <span class="token parameter variable">-f</span> /tmp/cascookie

		<span class="token comment"># You may need to modify the following regex for different distros.</span>
		<span class="token assign-left variable">routerip</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">ifconfig</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-A</span> <span class="token number">1</span> <span class="token string">&quot;^eth0.2&quot;</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-P</span> <span class="token parameter variable">-o</span> <span class="token string">&quot;(?&lt;=inet addr:).*(?=  Bcast)&quot;</span><span class="token variable">)</span></span>
		<span class="token assign-left variable">eneturl</span><span class="token operator">=</span><span class="token string">&quot;http://125.88.59.131:10001/sz/sz112/index.jsp?wlanuserip=<span class="token variable">$routerip</span>&amp;wlanacip=<span class="token variable">$authip</span>&quot;</span>
		<span class="token assign-left variable">execution</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">--silent</span> --cookie-jar /tmp/cascookies <span class="token parameter variable">-H</span> <span class="token string">&quot;User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:71.0) Gecko/20100101 Firefox/71.0&quot;</span> <span class="token parameter variable">-L</span> <span class="token string">&quot;<span class="token variable">$eneturl</span>&quot;</span>  <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-o</span> <span class="token string">&#39;execution.*/&gt;&lt;input type&#39;</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-o</span> <span class="token string">&#39;[^&quot;]\\{50,\\}&#39;</span><span class="token variable">)</span></span>

		<span class="token function">curl</span> <span class="token parameter variable">--silent</span> <span class="token parameter variable">--output</span> /dev/null <span class="token parameter variable">--cookie</span> /tmp/cascookies --cookie-jar /tmp/cascookies <span class="token parameter variable">-H</span> <span class="token string">&quot;Content-Type: application/x-www-form-urlencoded&quot;</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:71.0) Gecko/20100101 Firefox/71.0&quot;</span> <span class="token parameter variable">-L</span> <span class="token parameter variable">-X</span> POST <span class="token string">&quot;<span class="token variable">$loginurl</span>&quot;</span> <span class="token parameter variable">--data</span> <span class="token string">&quot;username=<span class="token variable">$username</span>&amp;password=<span class="token variable">$password</span>&amp;execution=<span class="token variable">$execution</span>&amp;_eventId=submit&amp;geolocation=&quot;</span>
	<span class="token keyword">else</span>
		<span class="token builtin class-name">echo</span> <span class="token string">&quot;Connected to Internet, recheck a second later&quot;</span>
	<span class="token keyword">fi</span>
	<span class="token function">sleep</span> 1s
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),X={href:"https://github.com/NewbieOrange/SUSTech-EnetLogin",target:"_blank",rel:"noopener noreferrer"},Y=o('<h2 id="信息中心" tabindex="-1"><a class="header-anchor" href="#信息中心" aria-hidden="true">#</a> 信息中心</h2><p>信息中心老师的联系方式如下：</p><table><thead><tr><th style="text-align:center;">岗位名称</th><th style="text-align:center;">在岗人员名单</th><th style="text-align:center;">联系方式</th></tr></thead><tbody><tr><td style="text-align:center;">主任</td><td style="text-align:center;">杨海琨</td><td style="text-align:center;">88010799</td></tr><tr><td style="text-align:center;">副主任</td><td style="text-align:center;">孙乔羽</td><td style="text-align:center;">88010798</td></tr><tr><td style="text-align:center;">运维管理</td><td style="text-align:center;">管立生</td><td style="text-align:center;">88010776</td></tr><tr><td style="text-align:center;">综合保障</td><td style="text-align:center;">刘敬、张炳坤</td><td style="text-align:center;">88010780</td></tr><tr><td style="text-align:center;">信息化管理</td><td style="text-align:center;">郑善辉</td><td style="text-align:center;">88010779</td></tr><tr><td style="text-align:center;">招生信息化</td><td style="text-align:center;">詹涵舒、韩少亮</td><td style="text-align:center;">88010789</td></tr><tr><td style="text-align:center;">教学信息化</td><td style="text-align:center;">宋伟中</td><td style="text-align:center;">88010788</td></tr><tr><td style="text-align:center;">综合信息化</td><td style="text-align:center;">朱朝阳</td><td style="text-align:center;">88010775</td></tr><tr><td style="text-align:center;">科技管理</td><td style="text-align:center;">尹荣荣</td><td style="text-align:center;">88010787</td></tr><tr><td style="text-align:center;">项目管理</td><td style="text-align:center;">陈毅</td><td style="text-align:center;">88010726</td></tr></tbody></table>',3),J={href:"http://116.7.234.209/wlzx",target:"_blank",rel:"noopener noreferrer"},K=o('<ul><li>南科大信息中心沟通群：<strong>434226835</strong></li></ul><h2 id="我可以请求信息中心做什么" tabindex="-1"><a class="header-anchor" href="#我可以请求信息中心做什么" aria-hidden="true">#</a> 我可以请求信息中心做什么？</h2><ul><li>重置CAS密码</li><li>重置邮箱密码</li><li><a href="./apply-for-vpn">申请回校VPN</a></li><li><a href="/service/unifound">给打印机加纸</a></li><li>调整往某个网段的路由</li></ul><p><strong>关于学校提供的更多信息服务，请见<a href="/service">服务</a>一节</strong></p><h2 id="选择合适的电子产品" tabindex="-1"><a class="header-anchor" href="#选择合适的电子产品" aria-hidden="true">#</a> 选择合适的电子产品</h2><ul><li>电脑</li><li><a href="./choose-a-pad">平板</a></li><li><a href="./choose-a-router">路由器</a></li></ul><h2 id="校内网络使用技巧" tabindex="-1"><a class="header-anchor" href="#校内网络使用技巧" aria-hidden="true">#</a> 校内网络使用技巧</h2><ul><li><a href="./remote-desktop">远程桌面</a></li></ul>',8),Q={id:"同学自行运营的千兆网络加速服务",tabindex:"-1"},Z=a("a",{class:"header-anchor",href:"#同学自行运营的千兆网络加速服务","aria-hidden":"true"},"#",-1),aa=a("div",{class:"custom-container tip"},[a("p",{class:"custom-container-title"},"提示"),a("p",null,[s("你是否在为湖畔无法使用有线网络，或是校园网游戏丢包而苦恼？现在订阅SUSTC IX，即可以低至30元每月的价格畅享高达1Gbps的电信宽带，性价比远超湖畔电信并保证家庭宽带级别的低丢包率，任何宿舍区域均可订购，可一对一提供安装及技术支持。详情请咨询：qq "),a("strong",null,"2353508907"),s(" 或邮件 "),a("a",{href:"mailto:mai.sakurajima.qwq@gmail.com?subject=SUSTC%20IX%E5%92%A8%E8%AF%A2"},"mai.sakurajima.qwq@gmail.com")])],-1);function sa(na,ea){const e=r("router-link"),i=r("Badge"),l=r("ExternalLinkIcon");return c(),d("div",null,[h,a("nav",k,[a("ul",null,[a("li",null,[n(e,{to:"#校内局域网"},{default:t(()=>[s("校内局域网")]),_:1}),a("ul",null,[a("li",null,[n(e,{to:"#接入网络"},{default:t(()=>[s("接入网络")]),_:1})]),a("li",null,[n(e,{to:"#其他有关网络的问题"},{default:t(()=>[s("其他有关网络的问题")]),_:1})])])]),a("li",null,[n(e,{to:"#互联网"},{default:t(()=>[s("互联网")]),_:1}),a("ul",null,[a("li",null,[n(e,{to:"#出口"},{default:t(()=>[s("出口")]),_:1})])])]),a("li",null,[n(e,{to:"#电信自费宽带"},{default:t(()=>[s("电信自费宽带"),n(i,{text:"不再推荐",type:"warning"})]),_:1})]),a("li",null,[n(e,{to:"#信息中心"},{default:t(()=>[s("信息中心")]),_:1})]),a("li",null,[n(e,{to:"#我可以请求信息中心做什么"},{default:t(()=>[s("我可以请求信息中心做什么？")]),_:1})]),a("li",null,[n(e,{to:"#选择合适的电子产品"},{default:t(()=>[s("选择合适的电子产品")]),_:1})]),a("li",null,[n(e,{to:"#校内网络使用技巧"},{default:t(()=>[s("校内网络使用技巧")]),_:1})]),a("li",null,[n(e,{to:"#同学自行运营的千兆网络加速服务"},{default:t(()=>[s("同学自行运营的千兆网络加速服务"),n(i,{text:"广告",type:"tip"})]),_:1})])])]),b,a("p",null,[s("学校为支持IPv6的设备分配前缀为"),v,s("的IPv6地址。(仅教育网可访问："),a("a",m,[s("SUSTC6-CERNET2"),n(l)]),s(")")]),_,g,a("p",null,[s("网络接入管理地址："),a("a",f,[s("http://172.16.16.20:8900/home"),n(l)])]),x,y,w,q,a("p",null,[s("接入无线网络时，需要通过Web认证，输入学号与密码后才可上网，否则只能访问校内局域网，无线网络的认证地址为："),a("a",E,[s("http://172.16.16.20:803/sustc_cas.php"),n(l)])]),a("p",null,[s("如联网设备不支持通过Web进行验证（如路由器，开发板等），可以尝试使用同学制作的"),a("a",A,[s("第三方脚本"),n(l)]),s("进行联网，或是更改可进行Web认证设备的Mac地址为不支持Web认证设备的Mac地址代为认证。")]),a("details",C,[S,a("p",null,[a("a",$,[s("给路由器写了一个登录南科大校园网的脚本"),n(l)])])]),a("h4",I,[P,s(" 湖畔宿舍区域的有线网络"),n(i,{text:"需特别配置",type:"warning"})]),F,N,B,a("ul",null,[a("li",null,[a("a",T,[s("https://c.cra.moe/t/topic/38"),n(l)])])]),U,a("p",null,[s("学校目前拥有4Gbps电信163出口带宽，2.5Gbps电信CN2出口带宽，以及1.5Gbps教育网出口带宽。"),a("a",M,[n(l)]),s("学校信息中心会将访问境外网站的流量发往CN2出口，因此学校内访问境外网站的质量会显著高于普通电信网络。")]),j,a("h2",W,[D,s(" 电信自费宽带"),n(i,{text:"不再推荐",type:"warning"})]),R,z,H,G,a("p",null,[a("a",L,[s("此处(PDF)"),n(l)]),s("是一份电信为南科大同学提供的学生卡套餐的具体内容（含流量与宿舍宽带）。")]),a("details",O,[V,a("p",null,[a("a",X,[s("NewbieOrange/SUSTech-EnetLogin"),n(l)])])]),Y,a("p",null,[a("a",J,[s("网络信息中心（页面即将停用）"),n(l)])]),K,a("h2",Q,[Z,s(" 同学自行运营的千兆网络加速服务"),n(i,{text:"广告",type:"tip"})]),aa])}const la=p(u,[["render",sa],["__file","index.html.vue"]]);export{la as default};
