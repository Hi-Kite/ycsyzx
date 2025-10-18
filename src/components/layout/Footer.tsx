import { MapPin, Github } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 学校信息 */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">永城市实验中学</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              永城市实验中学分南北两个校区，占地面积70889平方米，建筑面积30495平方米。
              现有110个教学班，在校学生7849人，教职工426人。
            </p>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} 永城市实验中学校友网站. 保留所有权利.
            </p>
          </div>

          {/* 快速链接 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-white transition-colors">
                  首页
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-white transition-colors">
                  学校简介
                </a>
              </li>
              <li>
                <a href="/achievements" className="text-gray-300 hover:text-white transition-colors">
                  荣誉成就
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  联系我们
                </a>
              </li>
            </ul>
          </div>

          {/* 联系信息 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">联系方式</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                <span className="text-gray-300">河南省永城市实验中学</span>
              </li>
            </ul>
            <div className="mt-4 flex space-x-4">
              <a
                href="https://github.com/Hi-Kite/ycsyzx"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer