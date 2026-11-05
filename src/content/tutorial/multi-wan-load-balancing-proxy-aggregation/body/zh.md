> **实测导读与核心结论（TL;DR）**：
> 对于跨境电商（亚马逊、TikTok 运营）、外贸团队以及远程外企开发者而言，网络中断一分钟就意味着巨大的经济损失。单一宽带或单一家机场订阅存在天然的单点故障（SPOF）。**基于 iStoreOS / OpenWrt 的多拨负载均衡与多机场聚合方案** 提供了企业级的网络韧性：通过接入两条物理宽带（如电信千兆主线 + 联通备用），并在软路由内部同时挂载两套独立的机场专线（主线采用 [光速云 2.5Gbps IEPL 专线](/artworks/guangsu-cloud)，副线作为冷备容灾），配合 MWAN3 策略路由实现：出海带宽无损叠加、单宽带断纤秒级无感切换、业务连续性保障 99.99%。

---

## 1. 双宽带物理多拨接入与 MWAN3 配置

在 iStoreOS / OpenWrt 路由器上，通过划分 VLAN 或利用双网口实现多 WAN 口接入：

1. **WAN1（电信千兆）**：承担主力出海数据流，权重设为 3；
2. **WAN2（联通/移动）**：承担常规下载与容灾备用，权重设为 1；
3. 进入【网络】→【负载均衡 (MWAN3)】，创建跟踪目标（Ping 8.8.8.8 与 223.5.5.5），设置检测间隔为 3 秒。一旦某条宽带发生丢包或断纤，系统在 3 秒内将全部局域网流量平滑迁移至备用线路。

---

## 2. 双机场专线跨服务商容灾编排

在 OpenClash 或 PassWall 插件中，同时导入两套完全异构的机场订阅：

- **Primary 专线**：主力配置 [光速云 2.5Gbps IEPL 专线](/artworks/guangsu-cloud)，享受极低延迟与零丢包传输；
- **Secondary 备用**：配置备用大流量容灾套餐；
- **创建回退策略组 (Fallback Group)**：
  ```yaml
  proxy-groups:
    - name: "🛡️ 高可用容灾出海"
      type: fallback
      url: "https://www.google.com/generate_204"
      interval: 15
      proxies:
        - "光速云-香港IEPL-01"
        - "备用机场-香港节点-01"
  ```

当主节点因机房突发维护超过 15 秒无响应时，内核自动接管并切换至备用节点，办公电脑的浏览器、SSH 连接毫无感知。

---

## 3. 蜂巢式关联与扩展阅读矩阵

- **软路由基础入门**：回顾 OpenWrt 部署，参考 [OpenWrt 软路由科学出海全流程](/tutorial/openwrt-passwall-openclash-side-gateway-guide)；
- **全屋智能设备加速**：配置电视与游戏机网络，查阅 [全屋智能设备无感出海方案](/tutorial/home-network-apple-tv-ps5-switch-proxy)；
- **冷备与热备理论**：了解双订阅灾备体系架构，参考 [多机场冷备与热备灾备体系搭建](/airport/high-availability-dual-subscription-failover)；
- **专线天梯实测**：查看主力专线稳定性跑分，参考 [42 家机场晚高峰链路抖动详实记录](/airport/packet-loss-jitter-benchmark-500-probes)。
