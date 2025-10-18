import { Link } from 'react-router-dom'
import { ArrowLeft, MapPin, Users, BookOpen, Award, School } from 'lucide-react'

const AboutPage = () => {
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
            <h1 className="ml-4 text-3xl font-bold text-gray-900">学校简介</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow">
        {/* School Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  永城市实验中学概览
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  永城市实验中学分南北两个校区，占地面积70889平方米，建筑面积30495平方米，
                  辅助用房4443平方米，体育场28600平方米。现有110个教学班，在校学生7849人，
                  教职工426人，其中正高级1人，高级教师116，中级教师179人。研究生学历11人，
                  本科389人，专科26人。
                </p>
                <p className="mt-4 text-lg text-gray-500">
                  在市教育局的正确领导下，在党支部书记、校长王子民同志的科学引领下，
                  在全体师生的不懈追求下，永城市实验中学几年来获得了长足发展。
                </p>
              </div>
              <div className="mt-10 lg:mt-0">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-center">
                      <MapPin className="h-8 w-8 text-primary-600" />
                      <div className="ml-4">
                        <p className="text-2xl font-bold text-gray-900">70889</p>
                        <p className="text-gray-500">占地面积(平方米)</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-center">
                      <School className="h-8 w-8 text-primary-600" />
                      <div className="ml-4">
                        <p className="text-2xl font-bold text-gray-900">30495</p>
                        <p className="text-gray-500">建筑面积(平方米)</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-center">
                      <Users className="h-8 w-8 text-primary-600" />
                      <div className="ml-4">
                        <p className="text-2xl font-bold text-gray-900">7849</p>
                        <p className="text-gray-500">在校学生</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-center">
                      <BookOpen className="h-8 w-8 text-primary-600" />
                      <div className="ml-4">
                        <p className="text-2xl font-bold text-gray-900">110</p>
                        <p className="text-gray-500">教学班</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">学校领导</h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                优秀的领导团队是学校发展的核心力量
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-shrink-0">
                    <div className="h-32 w-32 rounded-full bg-primary-100 flex items-center justify-center">
                      <Users className="h-16 w-16 text-primary-600" />
                    </div>
                  </div>
                  <div className="mt-6 md:mt-0 md:ml-8 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-gray-900">王子民</h3>
                    <p className="text-lg text-primary-600">党支部书记、校长</p>
                    <p className="mt-4 text-gray-600 max-w-2xl">
                      在王子民校长的科学引领下，永城市实验中学坚持习近平新时代中国特色社会主义思想铸魂育人，
                      落实立德树人根本任务，努力培养担当民族复兴大任的时代新人，
                      努力培养德智体美劳全面发展的社会主义建设者和接班人，
                      努力创办党和人民满意的教育。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission and Vision */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">办学理念</h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                我们的使命与愿景
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="bg-gray-50 rounded-lg p-8">
                <div className="flex justify-center">
                  <Award className="h-12 w-12 text-primary-600" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900 text-center">使命</h3>
                <p className="mt-4 text-gray-600 text-center">
                  以领跑永城初中教育为己任，坚持习近平新时代中国特色社会主义思想铸魂育人，
                  落实立德树人根本任务。
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-8">
                <div className="flex justify-center">
                  <Users className="h-12 w-12 text-primary-600" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900 text-center">愿景</h3>
                <p className="mt-4 text-gray-600 text-center">
                  努力培养担当民族复兴大任的时代新人，培养德智体美劳全面发展的
                  社会主义建设者和接班人。
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-8">
                <div className="flex justify-center">
                  <School className="h-12 w-12 text-primary-600" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900 text-center">目标</h3>
                <p className="mt-4 text-gray-600 text-center">
                  努力创办党和人民满意的教育，为学生提供优质的教育资源和成长环境。
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default AboutPage