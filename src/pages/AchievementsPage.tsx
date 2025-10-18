import { Link } from 'react-router-dom'
import { ArrowLeft, Award, TrendingUp, Star, Trophy } from 'lucide-react'

const AchievementsPage = () => {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center">
            <Link
              to="/"
              className="inline-flex items-center text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="h-5 w-5 mr-1" />
              返回首页
            </Link>
            <h1 className="ml-4 text-3xl font-bold text-gray-900">荣誉成就</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow">
        {/* 2024年中考成绩 */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex justify-center">
                <TrendingUp className="h-12 w-12 text-primary-600" />
              </div>
              <h2 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">2024年中考成绩创历史新高</h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                我校学生在2024年中考中取得了优异成绩
              </p>
            </div>

            <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">一高上线情况</h3>
                  <p className="text-3xl font-bold text-primary-600 mb-2">611人</p>
                  <p className="text-gray-600 mb-6">一高上线人数</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">高中录取情况</h3>
                  <p className="text-gray-600 mb-2">毕业生报考人数: 2130人</p>
                  <p className="text-3xl font-bold text-primary-600 mb-6">高中录取率: 82%</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 学校荣誉 */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex justify-center">
                <Award className="h-12 w-12 text-primary-600" />
              </div>
              <h2 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">学校荣誉</h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                学校近年来获得的各项荣誉与认可
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* 国家级荣誉 */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="bg-primary-700 px-6 py-4">
                  <h3 className="text-lg font-bold text-white">国家级荣誉</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">全国群众体育工作先进单位</span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">全国青少年校园足球特色学校</span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">全国国防教育示范学校</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* 省级荣誉 */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="bg-primary-600 px-6 py-4">
                  <h3 className="text-lg font-bold text-white">省级荣誉</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">河南省教育系统先进集体</span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">河南省师德师风建设先进校</span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">河南省基层"五好"党组织</span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">河南省卓越家长学校</span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">河南省绿色学校</span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">河南省知识产权保护先进单位</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* 市级荣誉 */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="bg-primary-500 px-6 py-4">
                  <h3 className="text-lg font-bold text-white">市级荣誉</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">商丘市文明校园</span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">商丘市"五星"党支部</span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">永城市先进党支部</span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">永城市高质量发展先进单位</span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">永城市第一、二届市长教育质量先进学校奖</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default AchievementsPage