import type { Locale } from "./config";

/**
 * UI strings: every piece of interface text that is not editorial content.
 */
const zh = {
  nav: {
    home: "首页",
    airport: "机场测评天梯",
    tutorial: "客户端教程库",
    artworks: "机场品牌库",
    artists: "代理客户端",
    events: "测速横评专题",
    news: "节点动态",
    about: "评测实验室准则",
  },
  menu: {
    open: "菜单",
    close: "关闭",
    showreel: "实测节点速览",
    opensInNewTab: "(新窗口打开)",
  },
  home: {
    artists: "主流代理客户端",
    latestNews: "最新测速与动态",
    readAllNews: "查看全部快讯",
  },
  artists: {
    title: "代理客户端指南",
    description:
      "收录 Windows / Android / iOS / macOS 主流客户端（Clash Verge、v2rayN、小火箭等）官方下载与订阅导入教程。",
    tabArtists: "客户端列表",
    tabEstates: "高级核心工具",
    viewCv: "官方项目/下载",
    featuredWorks: "推荐搭配使用的机场",
  },
  artworks: {
    title: "42家机场品牌库",
    description:
      "全景收录 42 家主流机场，覆盖 IPLC 专线、IEPL 内网中转、BGP 智能直连，晚高峰实测延迟与流媒体 AI 解锁一览。",
    gridView: "全部品牌",
    viewingRoom: "编辑首推",
    privateCollection: "高性价比/小众专线",
    sold: "已售罄",
    notForSale: "内部专线",
    inquire: "直达官网注册",
    framed: "网络协议:",
    height: "最高",
    width: "带宽",
    noteTitle: "实测说明",
    noteText:
      "本站所有测速数据基于真实网络环境实测，包含晚高峰压力测试与流媒体/AI工具解锁测试。",
    shippingTitle: "推广赞助与透明度声明",
    shippingText:
      "本站部分链接为推广赞助链接，通过链接购买可能为本站带来维护佣金，但绝不影响用户实际支付价格与独立测评结论。",
    related: "同类型优质机场推荐",
    viewArtist: "查看相关客户端",
  },
  privateCollection: {
    title: "高性价比与小众专线推荐",
    description:
      "专为大流量下载、海外游戏联机与超低预算尝鲜用户整理的差异化小众机场集合。",
    preloaderFirst: "专线",
    preloaderSecond: "实测",
  },
  viewingRoom: {
    title: "年度机皇展厅 · 光速云实测特展",
    description:
      "深度实测光速云致敬斯诺克147永久套餐247GB、轻量版99元/年与2.5Gbps专线表现。",
  },
  events: {
    title: "测速横评与专题报告",
    description:
      "17家主流机场晚高峰实测大横评、4K流媒体解锁实测与 ChatGPT/Claude 专用节点测试专题。",
    tabCurrent: "最新实测",
    tabPast: "往期归档",
    current: "当前最新实测专题",
    upcoming: "进行中与即将发布实测",
    past: "往期测速归档",
    workshops: "实操配置教程",
    when: "实测时间",
    admission: "实测批次",
    location: "测试环境",
    openingHours: "测试节点明细",
  },
  workshops: {
    title: "配置教程与避坑指南",
    description:
      "从零开始教你配置代理客户端、规则分流、游戏加速与避免劣质免费VPN泄密风险。",
    register: "阅读教程",
    aboutWorkshop: "教程概述",
    learn: "核心要点",
    skillsLevel: "适合人群",
    duration: "阅读耗时",
    classSize: "适用平台",
    included: "包含工具",
    form: {
      heading: "获取最新订阅配置模板",
      description:
        "填写您的邮箱，系统将自动发送主流客户端分流规则与防DNS泄漏配置模板。",
      namePlaceholder: "您的昵称",
      emailPlaceholder: "您的电子邮箱",
      phonePlaceholder: "您的 Telegram 或联系方式（可选）",
      button: "免费获取配置包",
      terms: "提交即代表您同意本站使用条款与隐私政策。",
      loading: "提交中…",
      invalidEmail: "请输入有效的电子邮箱",
      invalidName: "请输入昵称",
      success: "已发送！请检查您的收件箱。",
      error: "提交失败，请重试",
    },
  },
  workshop: {
    fullName: "您的姓名 / 昵称",
    fullNamePlaceholder: "例如：Alex",
    email: "电子邮箱",
    emailPlaceholder: "alex@example.com",
    preferredDate: "期望日期",
    submit: "提交获取配置",
    submitting: "提交中…",
    nameTooShort: "姓名至少需要2个字符",
    invalidEmail: "请输入有效的电子邮箱地址",
    dateRequired: "请选择日期",
    success: "提交成功！最新配置模板已发送至您的邮箱。",
    error: "提交失败，请稍后重试",
  },
  news: {
    title: "节点快讯与技术前沿",
    description:
      "即时跟踪 VLESS、Reality、Hysteria2 协议演进，发布最新机场优惠码与节点迁移通报。",
    author: "评测员：",
    published: "发布日期：",
    share: "分享文章",
    readMore: "阅读全文",
  },
  about: {
    title: "关于 freevpn.my 评测实验室",
    description:
      "我们是一群长期关注跨境网络性能、网络隐私与协议加密的独立技术爱好者。坚持真实测速、拒绝虚假背书。",
  },
  footer: {
    terms: "使用条款",
    privacy: "隐私政策",
    craftedBy: "独立测评运营：",
    source: "评测指南",
  },
  newsletter: {
    heading: "订阅晚高峰测速月报与最新折扣",
    placeholder: "输入您的电子邮箱",
    button: "立即订阅",
    loading: "订阅中…",
    invalidEmail: "请输入有效的邮箱地址",
    success: "订阅成功！最新折扣与测速图将定期推送至您的邮箱。",
    error: "提交失败，请稍后重试",
    terms: "提交即代表您同意本站服务条款与隐私政策，随时可退订。",
  },
  notFound: {
    title: "404 - 页面未找到",
    description: "您访问的节点评测或页面可能已迁移或不存在。",
    firstLine: "404",
    secondLine: "页面未找到",
    goBack: "返回上一页",
    backHome: "返回首页",
  },
};

const en: typeof zh = {
  nav: {
    home: "Home",
    airport: "Speed Ladder",
    tutorial: "Client Tutorials",
    artworks: "42 VPN & Proxy Brands",
    artists: "Proxy Clients",
    events: "Speed Benchmarks",
    news: "Node Updates",
    about: "Testing Methodology",
  },
  menu: {
    open: "Menu",
    close: "Close",
    showreel: "Node Performance Preview",
    opensInNewTab: "(opens in a new tab)",
  },
  home: {
    artists: "Popular Proxy Clients",
    latestNews: "Latest Benchmarks & News",
    readAllNews: "Read all updates",
  },
  artists: {
    title: "Proxy Clients Guide",
    description:
      "Download links and setup tutorials for Clash Verge, v2rayN, Shadowrocket, and Sing-box across Windows, macOS, iOS, and Android.",
    tabArtists: "Client Applications",
    tabEstates: "Advanced Core Tools",
    viewCv: "Official Docs / Download",
    featuredWorks: "Recommended Providers",
  },
  artworks: {
    title: "42 Airport Brands Directory",
    description:
      "Comprehensive directory of 42 proxy providers, featuring IPLC dedicated lines, IEPL relays, BGP routing, evening peak latency, and streaming/AI unlock stats.",
    gridView: "All Providers",
    viewingRoom: "Editor's Choice",
    privateCollection: "High Value / Private Line",
    sold: "Sold Out",
    notForSale: "Enterprise Dedicated",
    inquire: "Visit Official Site",
    framed: "Protocol:",
    height: "Max",
    width: "Bandwidth",
    noteTitle: "Test Note",
    noteText:
      "All benchmark figures reflect real-world network testing, including evening peak load tests and streaming/AI access verification.",
    shippingTitle: "Affiliate & Transparency Disclosure",
    shippingText:
      "Some links on this site are affiliate sponsor links. We may earn a commission at no additional cost to you. Ratings remain completely independent.",
    related: "Related Recommended Providers",
    viewArtist: "View Related Client",
  },
  privateCollection: {
    title: "High Value & Niche Dedicated Lines",
    description:
      "Curated collection of proxy providers for high-bandwidth downloads, international gaming, and budget-friendly trials.",
    preloaderFirst: "Dedicated",
    preloaderSecond: "Benchmark",
  },
  viewingRoom: {
    title: "Top Pick Exhibition Room · Guangsu Cloud",
    description:
      "In-depth testing of Guangsu Cloud Snooker 147 lifetime package, ¥99/yr plan, and 2.5 Gbps dedicated routes.",
  },
  events: {
    title: "Benchmarks & Special Reports",
    description:
      "Peak-hour stress test reports for 17 providers, 4K streaming unlock verification, and ChatGPT/Claude accessibility tests.",
    tabCurrent: "Latest Tests",
    tabPast: "Archive",
    current: "Current Benchmark Specials",
    upcoming: "Active & Upcoming Tests",
    past: "Past Benchmark Archive",
    workshops: "Configuration Guides",
    when: "Testing Window",
    admission: "Batch ID",
    location: "Test Environment",
    openingHours: "Node Test Details",
  },
  workshops: {
    title: "Tutorials & Avoid Pitfalls",
    description:
      "Step-by-step guides on configuring proxy clients, traffic routing rules, gaming latency reduction, and risks of unsafe free VPNs.",
    register: "Read Guide",
    aboutWorkshop: "Guide Overview",
    learn: "Key Takeaways",
    skillsLevel: "Difficulty",
    duration: "Read Time",
    classSize: "Platforms",
    included: "Included Tools",
    form: {
      heading: "Get Latest Routing Templates",
      description:
        "Enter your email to receive pre-configured Clash/Shadowrocket rule sets and DNS leak prevention templates.",
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your Email",
      phonePlaceholder: "Telegram / Contact (Optional)",
      button: "Get Config Templates",
      terms: "By submitting, you agree to our Terms of Use and Privacy Policy.",
      loading: "Submitting…",
      invalidEmail: "Please enter a valid email address",
      invalidName: "Please enter your name",
      success: "Sent! Please check your inbox.",
      error: "Submission failed, please try again",
    },
  },
  workshop: {
    fullName: "Full Name / Nickname",
    fullNamePlaceholder: "e.g. Alex",
    email: "Email Address",
    emailPlaceholder: "alex@example.com",
    preferredDate: "Preferred Date",
    submit: "Get Configuration",
    submitting: "Submitting…",
    nameTooShort: "Name must be at least 2 characters",
    invalidEmail: "Please enter a valid email address",
    dateRequired: "Please select a date",
    success: "Success! Configuration template sent to your inbox.",
    error: "Submission failed, please try again",
  },
  news: {
    title: "Node News & Tech Insights",
    description:
      "Tracking VLESS, Reality, and Hysteria2 protocol developments, discount codes, and server migration updates.",
    author: "Evaluator:",
    published: "Published:",
    share: "Share",
    readMore: "Read More",
  },
  about: {
    title: "About freevpn.my Testing Lab",
    description:
      "An independent team of network engineers and privacy enthusiasts committed to genuine performance tests and zero fake rankings.",
  },
  footer: {
    terms: "Terms of Use",
    privacy: "Privacy Policy",
    craftedBy: "Independent Evaluation by:",
    source: "Evaluation Guide",
  },
  newsletter: {
    heading: "Subscribe to Monthly Peak Speed Reports",
    placeholder: "Enter your email",
    button: "Subscribe",
    loading: "Submitting…",
    invalidEmail: "Please enter a valid email address",
    success: "Subscribed! You will receive monthly reports and promo codes.",
    error: "Submission failed, please try again later",
    terms:
      "By subscribing you agree to our Terms and Privacy Policy. Unsubscribe anytime.",
  },
  notFound: {
    title: "404 - Page Not Found",
    description: "The requested review or page does not exist.",
    firstLine: "404",
    secondLine: "Page Not Found",
    goBack: "Go Back",
    backHome: "Back to Home",
  },
};

export type UIStrings = typeof zh;

export const ui: Record<Locale, typeof zh> = {
  zh,
  en,
};

export function useUI(locale: Locale): typeof zh {
  return ui[locale] ?? ui.zh;
}
