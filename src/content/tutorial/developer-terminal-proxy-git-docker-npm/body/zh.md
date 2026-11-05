> **实测导读与核心结论（TL;DR）**：
> 开发者最头疼的网络痛点之一：浏览器查阅文档飞快，但在终端执行 `git clone`、`docker pull`、`npm install` 或 `pip install` 时频繁出现 `Connection timed out` 或几十 KB/s 的龟速。产生原因是终端命令行默认**绝不继承操作系统的系统代理**。解决该问题有两种优雅路径：1. 开启客户端的 **TUN 虚拟网卡模式** 实现全终端 100% 透明接管；2. 为终端编写快捷 Shell 脚本（如 `setproxy` / `unsetproxy`），按需将流量定向至本地混合端口（如 `127.0.0.1:7897`）。实测搭配 [光速云 2.5Gbps IEPL 专线](/artworks/guangsu-cloud)，Git 克隆大型 Linux 仓库下行速率可跑满 70MB/s。

---

## 1. PowerShell 与 Bash 终端一键环境变量函数

编辑 PowerShell 配置文件（`$PROFILE`），追加以下轻量函数：

```powershell
# 编辑 PowerShell 配置文件：notepad $PROFILE
function setproxy {
    $env:HTTP_PROXY = "http://127.0.0.1:7897"
    $env:HTTPS_PROXY = "http://127.0.0.1:7897"
    $env:ALL_PROXY = "socks5://127.0.0.1:7897"
    Write-Host "✓ 终端代理已开启 [127.0.0.1:7897]" -ForegroundColor Green
    curl.exe https://api.ipify.org
}

function unsetproxy {
    Remove-Item env:HTTP_PROXY
    Remove-Item env:HTTPS_PROXY
    Remove-Item env:ALL_PROXY
    Write-Host "✗ 终端代理已关闭" -ForegroundColor Yellow
}
```

在任何新建的终端窗口中输入 `setproxy` 即可秒级开启代理，输入 `unsetproxy` 即可复原直连。

---

## 2. Git 专属代理配置（仅对 GitHub 生效）

无需将所有内网 Git 请求导向代理，仅为 GitHub 单独绑定本地代理端口：

```bash
# 仅针对 github.com 域名设置 HTTP/HTTPS 代理
git config --global http.https://github.com.proxy http://127.0.0.1:7897
git config --global https.https://github.com.proxy http://127.0.0.1:7897

# 恢复默认直连
# git config --global --unset http.https://github.com.proxy
# git config --global --unset https.https://github.com.proxy
```

---

## 3. Docker 守护进程出海拉取配置

Docker 容器拉取镜像走的是后台 Docker Daemon 服务，普通终端代理对其无效。在 `~/.docker/config.json` 或系统服务中注入：

```json
{
  "proxies": {
    "default": {
      "httpProxy": "http://127.0.0.1:7897",
      "httpsProxy": "http://127.0.0.1:7897",
      "noProxy": "localhost,127.0.0.1,.internal"
    }
  }
}
```

配合高带宽专线（如 [光速云 2.5Gbps IEPL 专线](/artworks/guangsu-cloud)），可在 30 秒内拉取数 GB 的大型 PyTorch 或 CUDA 深度学习容器。

---

## 4. 蜂巢式关联与扩展阅读矩阵

- **一劳永逸免配置**：通过 TUN 模式实现全终端免配，查阅 [Clash Verge Rev TUN 模式与虚拟网卡深度调优](/tutorial/clash-verge-rev-tun-mode-setup)；
- **底层网络知识**：理解操作系统包拦截机制，参考 [TUN 虚拟网卡模式原理深度解析](/tutorial/tun-mode-osi-layer3-deep-dive)；
- **高吞吐专线保障**：查看开发者专属大带宽套餐，参考 [致敬斯诺克 147 永久套餐深度精算](/airport/snooker-147-permanent-package-review)；
- **返回聚合中心**：探索全套教程体系，查看 [客户端教程库聚合中心](/tutorial)。
