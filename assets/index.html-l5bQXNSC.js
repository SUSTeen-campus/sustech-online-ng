import{_ as o,r as p,o as i,c as l,d as n,e as s,a as e,f as t}from"./app-Nm0Yc3WX.js";const c={},r=n("h1",{id:"校内远程桌面使用指北",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#校内远程桌面使用指北","aria-hidden":"true"},"#"),s(" 校内远程桌面使用指北")],-1),u={href:"https://github.com/jerrylususu",target:"_blank",rel:"noopener noreferrer"},d=t('<div class="custom-container tip"><p class="custom-container-title">提示</p><p>本文初版写于2020年12月，文中所述内容可能已发生变化。请参考各贡献者的修订以获取最新情报。</p></div><h2 id="远程桌面是什么" tabindex="-1"><a class="header-anchor" href="#远程桌面是什么" aria-hidden="true">#</a> 远程桌面是什么？</h2><p>远程桌面，是一种远程访问技术，可以从其他设备连接到你的电脑，并访问所有应用、文件和资源，就像坐在自己的电脑前一样。换句话说，这是一项可以把不属于自己的设备（如机房电脑）当成自己的设备使用的技术。</p><p>作为一项技术，远程桌面有不同的实现。在 Windows 环境下，最常见的远程桌面实现为 Remote Desktop Protocol （RDP，远程桌面协议），Windows 为其提供了完善的支持。在 Linux 环境下，最常见的远程桌面实现为 Virtual Network Computing （VNC）。其他厂家也有自己的远程桌面实现，如 TeamViewer，AnyDesk，ToDesk，向日葵，甚至于 QQ 的「远程协助」。</p><p>本文将着眼于 Windows 环境下 RDP 的配置（即从 Windows 设备连接到 Windows 设备），这也是校内最常见的用例。</p><p>（若需要从 iOS / Android / Mac 端远程控制 Windows，可以直接在应用商店中搜索安装 RD Client，iPad 端最新版本支持完整的鼠标操作。若需要从 Windows 端远程控制 Mac，除了 Mac 提供的 VNC 之外，推荐使用流畅性更高的第三方软件，例如 NoMachine 等。）</p><h2 id="远程桌面的典型使用场景" tabindex="-1"><a class="header-anchor" href="#远程桌面的典型使用场景" aria-hidden="true">#</a> 远程桌面的典型使用场景</h2><ul><li>购买了重量较重的游戏本或不便于携带的台式机在宿舍，但是想从图书馆、实验室等位置使用。</li><li>在参加计算机系的实验课程时，使用宿舍或实验室内性能强大的设备进行编译操作，而不必被机房性能羸弱的电脑限制。</li><li>在图书馆专心复习时，仍能访问宿舍电脑上存储的课件、笔记、电子书等资料。</li><li>在教室 Pre 的时候发现自己忘了携带所需的资料，可以使用远程桌面从宿舍电脑上取回。</li><li>在校内有 WiFi 信号覆盖的位置使用远程桌面连接回宿舍电脑继续工作/学习，而无需手动维持不同设备（如笔记本和台式机）间的数据同步状态。</li><li>在宿舍床上使用 iPad 等平板类设备游玩床下电脑中的 Galgame。</li></ul><h2 id="不建议使用远程桌面的场景" tabindex="-1"><a class="header-anchor" href="#不建议使用远程桌面的场景" aria-hidden="true">#</a> 不建议使用远程桌面的场景</h2>',9),k=n("li",null,"玩大型游戏、看电影/视频（RDP 主要为日常工作使用优化，变化频繁的画面使用 Steam Remote Play 等技术更适合）",-1),m={href:"https://www.appinn.com/landrop-files-transfer-tools/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://send.cra.moe/",target:"_blank",rel:"noopener noreferrer"},b=n("blockquote",null,[n("p",null,"下称自己的设备为「服务端」，机房/教室/图书馆等的设备为「客户端」")],-1),h=n("h2",{id:"服务端配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#服务端配置","aria-hidden":"true"},"#"),s(" 服务端配置")],-1),_={href:"https://support.microsoft.com/zh-cn/windows/%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8%E8%BF%9C%E7%A8%8B%E6%A1%8C%E9%9D%A2-5fe128d5-8fb1-7a23-3b8a-41e636865e8c",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/stascorp/rdpwrap",target:"_blank",rel:"noopener noreferrer"},f={href:"https://www.iplaysoft.com/rdp-wrapper-library.html",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"rdpwrap.ini",-1),P={href:"https://github.com/stascorp/rdpwrap/issues",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"rdpwrap.ini",-1),q={href:"https://b23.tv/TTaRTD",target:"_blank",rel:"noopener noreferrer"},I={href:"https://docs.microsoft.com/zh-cn/windows-server/remote/remote-desktop-services/clients/change-listening-port",target:"_blank",rel:"noopener noreferrer"},A=n("s",null,"（此为信息中心的限制，为防止病毒通过远程桌面传播，默认阻断了 3389 端口上的 TCP 链接）",-1),C=n("li",null,[n("p",null,[s("查看并记录自己的 IP 地址：打开「任务管理器」，切换到「性能」标签页，在左侧找到「Wi-Fi」，在右侧找到「IPv4 地址」并记录。（通常为以小数点分割的一组数字，如 "),n("code",null,"10.XX.XX.XX"),s("）")])],-1),S=n("blockquote",null,[n("p",null,"注：如有可能，建议使用网线直接连接。使用 WiFi 可能导致在高峰期时的延迟抖动。")],-1),D={start:"4"},E={href:"https://www.zerotier.com/",target:"_blank",rel:"noopener noreferrer"},x={href:"https://b23.tv/MzHzMi",target:"_blank",rel:"noopener noreferrer"},T=n("h3",{id:"一键开启远程桌面功能并修改端口为-13389-的注册表文件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#一键开启远程桌面功能并修改端口为-13389-的注册表文件","aria-hidden":"true"},"#"),s(" 一键开启远程桌面功能并修改端口为 13389 的注册表文件:")],-1),M={href:"https://github.com/BadBoyGuangzhi",target:"_blank",rel:"noopener noreferrer"},N=n("code",null,"xxx.reg",-1),W={href:"https://raw.githubusercontent.com/SUSTC/sustech-online-ng/master/docs/files/rdp-13389.reg",target:"_blank",rel:"noopener noreferrer"},H=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Windows Registry Editor Version 5.00

[HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Control\\Terminal Server]
&quot;fDenyTSConnections&quot;=dword:00000000

[HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Control\\Terminal Server\\Wds\\rdpwd\\Tds\\tcp]
&quot;PortNumber&quot;=dword:0000344d

[HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Control\\Terminal Server\\WinStations\\RDP-Tcp]
&quot;PortNumber&quot;=dword:0000344d

[HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\SharedAccess\\Parameters\\FirewallPolicy\\FirewallRules]
&quot;{4043AE3F-5762-46B6-A755-23E34F020290}&quot;=&quot;v2.30|Action=Allow|Active=TRUE|Dir=In|Protocol=17|LPort=13389|Name=RDP-13389-UDP|&quot;

[HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\SharedAccess\\Parameters\\FirewallPolicy\\FirewallRules]
&quot;{8A4F4940-93E0-4BFC-B35F-2C89A6AD260F}&quot;=&quot;v2.30|Action=Allow|Active=TRUE|Dir=In|Protocol=6|LPort=13389|Name=RDP-13389-TCP|&quot;

[HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Winlogon]
&quot;DisableCAD&quot;=dword:00000001
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="从客户端连接" tabindex="-1"><a class="header-anchor" href="#从客户端连接" aria-hidden="true">#</a> 从客户端连接</h2><ol><li>在「开始」菜单中选择「Windows 附件 / 远程桌面」（或使用 <code>Win+R</code> 打开「运行」窗口，然后输入 <code>mstsc</code>，按下回车）</li><li>在「计算机」文本框中输入自己的 IP 和端口号，用英文冒号分割。（例：<code>10.XX.XX.XX:YYYY</code>）</li><li>点击「连接」按钮</li><li>在弹出的认证窗口中输入自己的用户名和密码（如果服务端使用的是微软账户，需要输入微软账户的邮箱和密码）</li><li>在证书确认窗口点击「是」</li><li>如果一切正常，应该能见到远程设备的桌面了。</li></ol><h3 id="用于在校内网通过邮箱获取服务端ip地址的-python-脚本" tabindex="-1"><a class="header-anchor" href="#用于在校内网通过邮箱获取服务端ip地址的-python-脚本" aria-hidden="true">#</a> 用于在校内网通过邮箱获取服务端IP地址的 <code>Python</code> 脚本:</h3>`,4),R={href:"https://github.com/KagaJiankui",target:"_blank",rel:"noopener noreferrer"},F=t(`<details class="custom-container details"><summary>获取IP的脚本</summary><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># coding: utf-8</span>

<span class="token keyword">import</span> smtplib
<span class="token keyword">import</span> time
<span class="token keyword">import</span> datetime
<span class="token keyword">from</span> email<span class="token punctuation">.</span>mime<span class="token punctuation">.</span>text <span class="token keyword">import</span> MIMEText
<span class="token keyword">from</span> email<span class="token punctuation">.</span>header <span class="token keyword">import</span> Header
<span class="token keyword">import</span> socket

_local_ip <span class="token operator">=</span> <span class="token boolean">None</span>

mail_info <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;recv_address&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;recv@example.sustech.com&#39;</span><span class="token punctuation">,</span> <span class="token comment">#你的接收端邮箱地址</span>
    <span class="token string">&#39;sender_name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;send@example.sustech.com&#39;</span><span class="token punctuation">,</span> <span class="token comment">#你的发送端邮箱地址</span>
    <span class="token string">&#39;sender_pwd&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;authenticationcode&#39;</span><span class="token punctuation">,</span> <span class="token comment">#授权码（用于qq或163邮箱）</span>
    <span class="token string">&#39;smtp_server&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;smtp.example.com&#39;</span><span class="token punctuation">,</span> <span class="token comment">#smtp发送服务器（在邮箱帮助页面查看）</span>
    <span class="token string">&#39;subject&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;远程电脑IP信息已更新&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;content&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;您的校内网IP信息: {}&#39;</span>
<span class="token punctuation">}</span>


<span class="token keyword">def</span> <span class="token function">send_message</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 设置发送邮件的内容</span>
    msg <span class="token operator">=</span> MIMEText<span class="token punctuation">(</span>content<span class="token punctuation">,</span> <span class="token string">&#39;plain&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
    msg<span class="token punctuation">[</span><span class="token string">&#39;From&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> Header<span class="token punctuation">(</span>mail_info<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;sender_name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    msg<span class="token punctuation">[</span><span class="token string">&#39;Subject&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> Header<span class="token punctuation">(</span>mail_info<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;subject&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
    msg<span class="token punctuation">[</span><span class="token string">&#39;To&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> Header<span class="token punctuation">(</span>mail_info<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;recv_address&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment"># 发送邮件</span>
    smtp <span class="token operator">=</span> smtplib<span class="token punctuation">.</span>SMTP<span class="token punctuation">(</span><span class="token punctuation">)</span>
    smtp<span class="token punctuation">.</span>connect<span class="token punctuation">(</span>mail_info<span class="token punctuation">[</span><span class="token string">&#39;smtp_server&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    smtp<span class="token punctuation">.</span>login<span class="token punctuation">(</span>mail_info<span class="token punctuation">[</span><span class="token string">&#39;sender_name&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> mail_info<span class="token punctuation">[</span><span class="token string">&#39;sender_pwd&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    smtp<span class="token punctuation">.</span>sendmail<span class="token punctuation">(</span>mail_info<span class="token punctuation">[</span><span class="token string">&#39;sender_name&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> mail_info<span class="token punctuation">[</span><span class="token string">&#39;recv_address&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>msg<span class="token punctuation">.</span>as_string<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        smtp<span class="token punctuation">.</span>quit<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">except</span> smtplib<span class="token punctuation">.</span>SMTPException <span class="token keyword">as</span> e<span class="token punctuation">:</span>
        e <span class="token operator">=</span> <span class="token string">&quot;Failed to close SMTP session.&quot;</span>


<span class="token keyword">def</span> <span class="token function">get_host_ip</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    这个方法是目前见过最优雅获取本机服务器的IP方法了。没有任何的依赖，也没有去猜测机器上的网络设备信息。
    而且是利用 UDP 协议来实现的，生成一个UDP包，把自己的 IP 放如到 UDP 协议头中，然后从UDP包中获取本机的IP。
    这个方法并不会真实的向外部发包，所以用抓包工具是看不到的。但是会申请一个 UDP 的端口，所以如果经常调用也会比较耗时的，这里如果需要可以将查询到的IP给缓存起来，性能可以获得很大提升。
    :return:
    &quot;&quot;&quot;</span>
    <span class="token keyword">global</span> _local_ip
    s <span class="token operator">=</span> <span class="token boolean">None</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> _local_ip<span class="token punctuation">:</span>
            s <span class="token operator">=</span> socket<span class="token punctuation">.</span>socket<span class="token punctuation">(</span>socket<span class="token punctuation">.</span>AF_INET<span class="token punctuation">,</span> socket<span class="token punctuation">.</span>SOCK_DGRAM<span class="token punctuation">)</span>
            s<span class="token punctuation">.</span>connect<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&#39;8.8.8.8&#39;</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            _local_ip <span class="token operator">=</span> s<span class="token punctuation">.</span>getsockname<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
        <span class="token keyword">return</span> _local_ip
    <span class="token keyword">finally</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> s<span class="token punctuation">:</span>
            s<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">mail_ip_send</span><span class="token punctuation">(</span>ip_real<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    使用邮件发送IP地址.
    &quot;&quot;&quot;</span>
    info_dict <span class="token operator">=</span> <span class="token string">&quot;校内网IP: &quot;</span> <span class="token operator">+</span> ip_real <span class="token operator">+</span> <span class="token string">&quot;\\n&quot;</span> <span class="token operator">+</span> datetime<span class="token punctuation">.</span>datetime<span class="token punctuation">.</span>now<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>strftime<span class="token punctuation">(</span>
        <span class="token string">&quot;%Y-%m-%d %H:%M:%S %Z&quot;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;\\n&quot;</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>info_dict<span class="token punctuation">)</span>
    send_message<span class="token punctuation">(</span>info_dict<span class="token punctuation">)</span>


ip_val <span class="token operator">=</span> get_host_ip<span class="token punctuation">(</span><span class="token punctuation">)</span>
num <span class="token operator">=</span> <span class="token number">0</span>
seconds_sleep <span class="token operator">=</span> <span class="token number">5</span>  <span class="token comment"># 检测IP地址的时间间隔</span>
itr <span class="token operator">=</span> <span class="token number">4</span> <span class="token operator">*</span> <span class="token number">3600</span> <span class="token operator">/</span> seconds_sleep  <span class="token comment"># IP地址无变动时默认发送邮件的小时数</span>
<span class="token keyword">while</span> <span class="token number">1</span><span class="token punctuation">:</span>
    ip_real <span class="token operator">=</span> get_host_ip<span class="token punctuation">(</span><span class="token punctuation">)</span>
    h <span class="token operator">=</span> datetime<span class="token punctuation">.</span>datetime<span class="token punctuation">.</span>now<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>hour
    <span class="token keyword">if</span> <span class="token punctuation">(</span>ip_real <span class="token operator">!=</span> ip_val<span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>h <span class="token operator">&lt;=</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token punctuation">(</span>h <span class="token operator">&gt;=</span> <span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">|</span> num <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>  <span class="token comment">#晚上3点到早7点之间不发送IP</span>
        mail_ip_send<span class="token punctuation">(</span>ip_real<span class="token punctuation">)</span>
        ip_val <span class="token operator">=</span> ip_real
    num <span class="token operator">+=</span> <span class="token number">1</span>
    <span class="token keyword">if</span> num <span class="token operator">&gt;=</span> itr<span class="token punctuation">:</span>
        mail_ip_send<span class="token punctuation">(</span>ip_real<span class="token punctuation">)</span>
        ip_val <span class="token operator">=</span> ip_real
        num <span class="token operator">=</span> <span class="token number">0</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span>seconds_sleep<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>本脚本要求<code>python&gt;3.0</code> 与对应的依赖。建议使用您的私人邮箱而非学校提供的邮箱作为收发端。在您的台式机或游戏本上直接运行脚本：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ python ./mailer.py <span class="token comment">#将文件保存为mailer.py</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),L={href:"https://www.appinn.com/rbtray/",target:"_blank",rel:"noopener noreferrer"},B={href:"https://www.appinn.com/rbtray/",target:"_blank",rel:"noopener noreferrer"},V=t('<p>当您的移动端设备与您的主机连接到同一局域网时，您可以使用这个 IP 地址与对应的端口号连接到您的远程桌面、SSH、Jupyter 等应用的服务端。</p><h2 id="在图书馆使用远程桌面" tabindex="-1"><a class="header-anchor" href="#在图书馆使用远程桌面" aria-hidden="true">#</a> 在图书馆使用远程桌面</h2><p>在南科大的三个图书馆中，都有公共的电脑区域，使用此区域的电脑作为远程桌面的客户端也是不错的选择。（笔者自测可以提升 50% ~ 200% 不等的工作/学习效率。）</p><p>不同图书馆间电脑对比如下表。</p><table><thead><tr><th>图书馆</th><th>电脑设备数（约）</th><th>操作系统</th><th>屏幕分辨率</th><th>连接速度</th></tr></thead><tbody><tr><td>琳恩</td><td>~50</td><td>Windows 7</td><td>1080p, 100% DPI</td><td>百兆</td></tr><tr><td>一丹</td><td>~100</td><td>Windows 10</td><td>1080p, 125% DPI</td><td>千兆</td></tr><tr><td>涵泳</td><td>~10</td><td>Windows 10</td><td>1080p, 125% DPI</td><td>千兆</td></tr></tbody></table><p>在图书馆使用远程桌面的时候，以下几点可以帮助你获得更好的体验：</p><ol><li>如果觉得卡顿，可以在连接前在「体验」标签页中设置连接速度为 <code>WAN （10 Mbps 或更高速度，高延迟）</code> ，并取消勾选「拖动时显示窗口内容」和「菜单和窗口动画」。</li><li>可以携带一条有线耳机插入主机的前端耳机插口（通常为绿色），以在远程桌面中使从服务端获取音频（听歌）。注意每次连接的时候远端设备音量会被设置为 100。</li><li>使用完成后，在关闭远程桌面之外，最好手动关机/重启公用电脑。即使登出了公用电脑（恢复输入学号/密码界面），远程桌面的连接信息（IP，端口号，用户名等）依然会保存在远程桌面应用中，存在泄露个人信息的可能。</li><li>可以安装一个其他远程桌面软件（笔者自己使用 ToDesk）备用，以防因网络波动导致服务端 IP 改变无法连接。</li></ol><blockquote><p>注：在图书馆如果不想远程桌面，但是却想用公用电脑的屏幕，可以携带一根 HDMI / DP / miniDP 转 DVI 转接线。三个图书馆的公用电脑的屏幕的接口均为 VGA + DVI，其中 VGA 接口连接主机，DVI 接口未连接。不建议为了使用屏幕而断开连接主机的 VGA 线，这会为图书馆的维护人员带来困扰。</p></blockquote>',8);function Y(X,O){const a=p("ExternalLinkIcon");return i(),l("div",null,[r,n("p",null,[s("by "),n("a",u,[s("@jerrylususu"),e(a)])]),d,n("ul",null,[k,n("li",null,[s("复制体积较大的文件（RDP 对在不同设备间转移小文件十分合适，但文件体积过大可能造成网络阻塞，操作卡死。如有需要转移大文件的需求，可使用 "),n("a",m,[s("LANDrop"),e(a)]),s("，"),n("a",v,[s("校内 Send 文件分享"),e(a)]),s(" 等工具）")])]),b,h,n("ol",null,[n("li",null,[n("p",null,[n("a",_,[s("开启「远程桌面」功能。"),e(a)]),s("（此功能需要专业版本 Windows，家庭版本可以使用 GitHub 上的开源工具 "),n("a",g,[s("RDPWrap"),e(a)]),s(" 开启此功能，"),n("a",f,[s("教程"),e(a)]),s(")。")]),n("p",null,[s("注：若按照教程仍然无法开启功能，则可能是服务端 "),w,s(" 文件与当前 Windows 版本不匹配，可以从 "),n("a",P,[s("Github Issues"),e(a)]),s(" 或其他地方获取 "),y,s(" 文件并替换。详情可参考此 "),n("a",q,[s("B站视频演示"),e(a)]),s("。")])]),n("li",null,[n("p",null,[n("a",I,[s("设置远程桌面端口为非 3389 端口"),e(a)]),s(" ，并记住这个端口号 "),A,s(" ，此限制实测在工学院和慧园地区已取消，其他地区待认证。")])]),C]),S,n("ol",D,[n("li",null,[s("（非必需设置）如果想从非校园网络访问远程设备，可以尝试使用 "),n("a",E,[s("ZeroTier One"),e(a)]),s(" 等软件 "),n("a",x,[s("配置内网穿透"),e(a)]),s(" 功能。")])]),T,n("p",null,[s("by "),n("a",M,[s("@BadBoyGuangzhi"),e(a)])]),n("p",null,[s("打开记事本，复制下方文本到记事本内，另存为 "),N,s(" 文件，右键管理员运行即可（已经开启过的也可以使用此文件修改端口为13389，不会重复添加导致冲突）。或者也可以直接使用成品 "),n("a",W,[s("点我下载成品"),e(a)])]),H,n("p",null,[s("by "),n("a",R,[s("@KagaJiankui"),e(a)])]),F,n("p",null,[s("该脚本便会自动检测当前IP地址并发送到您指定的接收端邮箱中。若检测到IP地址变动或经过您指定的等待小时数，脚本即重复发送IP地址。直接运行脚本会占用一个命令行窗口。如果想要隐藏该窗口，可使用 "),n("a",L,[s("RBTray"),e(a)]),s(" 等最小化至托盘类工具，或使用 "),n("a",B,[s("NSSM"),e(a)]),s(" 等工具将该脚本以系统服务的方式运行。")]),V])}const K=o(c,[["render",Y],["__file","index.html.vue"]]);export{K as default};