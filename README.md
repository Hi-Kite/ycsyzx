# 非官方网站

这是一个由校友创建的永城市实验中学非官方网站。

## 项目简介

本项目使用 React + TypeScript + Vite + Tailwind CSS 构建，是一个现代化的响应式网站，展示了基本情况、荣誉成就和联系方式。

## 技术栈

- **框架**: React 18
- **语言**: TypeScript
- **构建工具**: Vite
- **样式**: Tailwind CSS
- **路由**: React Router
- **图标**: Lucide React

## 项目结构

```
/home/kite/data/Dev/ycsyzx/
├── public/
│   └── _redirects          # Netlify 部署所需重定向配置
├── src/
│   ├── components/
│   │   ├── layout/         # 布局组件
│   │   └── ui/             # 通用UI组件
│   ├── pages/              # 页面组件
│   ├── lib/                # 工具函数
│   ├── hooks/              # 自定义Hooks
│   ├── assets/             # 静态资源
│   ├── App.tsx             # 应用根组件与路由
│   ├── main.tsx            # 应用入口
│   └── index.css           # 全局样式
├── index.html              # HTML入口文件
├── package.json            # 项目依赖
├── tailwind.config.js      # Tailwind配置
├── tsconfig.json           # TypeScript配置
└── vite.config.ts          # Vite配置
```

## 开发和部署

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 设计原则

本项目遵循以下设计原则：

1. **内容为王，清晰第一**：UI元素采用柔和、半透明或极简设计，确保内容清晰可读。
2. **空间层次与视觉呼吸**：善用留白组织内容，通过微妙的阴影、边框和分层构建视觉深度。
3. **一致且可预测的体验**：相同功能的组件拥有统一的视觉表现和交互行为。
4. **有意义的动效与即时反馈**：动画仅用于指示状态变化、平滑过渡或响应用户操作。
5. **功能驱动的极简主义**：每个视觉元素的存在都必须服务于一个明确的功能目的。
6. **无障碍设计优先**：设计从始至终考虑可访问性，支持亮色与暗色两种主题模式。

## 浏览器支持

- Chrome (推荐)
- Firefox
- Safari
- Edge

## 许可证

本项目仅用于展示目的，不涉及商业用途。若要使用源代码，请先与我沟通。