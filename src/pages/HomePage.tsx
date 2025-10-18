import { Link } from 'react-router-dom'
import { ArrowRight, Award, Users, BookOpen, GraduationCap } from 'lucide-react'

const HomePage = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-700 to-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
              永城市实验中学
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-primary-100">
              培养德智体美劳全面发展的社会主义建设者和接班人
            </p>
            <div className="mt-10 flex justify-center">
              <Link
                to="/about"
                className="btn btn-primary btn-lg inline-flex items-center"
              >
                了解更多
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="flex justify-center">
                <Users className="h-12 w-12 text-primary-600" />
              </div>
              <p className="mt-4 text-3xl font-bold text-gray-900">7849</p>
              <p className="mt-1 text-lg text-gray-500">在校学生</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center">
                <BookOpen className="h-12 w-12 text-primary-600" />
              </div>
              <p className="mt-4 text-3xl font-bold text-gray-900">110</p>
              <p className="mt-1 text-lg text-gray-500">教学班</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center">
                <GraduationCap className="h-12 w-12 text-primary-600" />
              </div>
              <p className="mt-4 text-3xl font-bold text-gray-900">426</p>
              <p className="mt-1 text-lg text-gray-500">教职工</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center">
                <Award className="h-12 w-12 text-primary-600" />
              </div>
              <p className="mt-4 text-3xl font-bold text-gray-900">82%</p>
              <p className="mt-1 text-lg text-gray-500">高中录取率</p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">学校简介</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              永城市实验中学是永城市教育的重要基地，多年来培养了大批优秀人才
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="prose prose-lg max-w-none text-gray-500">
                <p>
                  永城市实验中学分南北两个校区，占地面积70889平方米，建筑面积30495平方米，
                  辅助用房4443平方米，体育场28600平方米。现有110个教学班，在校学生7849人，
                  教职工426人，其中正高级1人，高级教师116，中级教师179人。研究生学历11人，
                  本科389人，专科26人。
                </p>
                <p className="mt-4">
                  在市教育局的正确领导下，在党支部书记、校长王子民同志的科学引领下，
                  在全体师生的不懈追求下，永城市实验中学几年来获得了长足发展。
                </p>
              </div>
              <div className="mt-8 flex justify-center">
                <Link
                  to="/about"
                  className="btn btn-primary btn-md inline-flex items-center"
                >
                  查看更多
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">荣誉成就</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              学校多年来获得的荣誉与成就
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "全国群众体育工作先进单位",
              "全国青少年校园足球特色学校",
              "全国国防教育示范学校",
              "河南省教育系统先进集体",
              "河南省师德师风建设先进校",
              "河南省基层'五好'党组织"
            ].map((achievement, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center">
                  <Award className="h-8 w-8 text-primary-600" />
                  <h3 className="ml-3 text-lg font-medium text-gray-900">{achievement}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/achievements"
              className="btn btn-secondary btn-md inline-flex items-center"
            >
              查看全部成就
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              <span className="block">联系我们</span>
            </h2>
            <p className="mt-4 text-lg text-primary-100 max-w-2xl mx-auto">
              如果您有任何问题或建议，欢迎与我们联系
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="btn bg-white text-primary-700 hover:bg-gray-100 btn-lg inline-flex items-center"
              >
                联系我们
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage