import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Mail, Phone, MapPin, Send, Clock } from 'lucide-react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 这里可以添加表单提交逻辑
    alert('感谢您的留言！我们会尽快回复您。')
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

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
            <h1 className="ml-4 text-3xl font-bold text-gray-900">联系我们</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Contact Info */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">联系方式</h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                欢迎与我们联系，获取更多信息
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <div className="flex justify-center">
                  <MapPin className="h-12 w-12 text-primary-600" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900">学校地址</h3>
                <p className="mt-4 text-gray-600">
                  河南省永城市实验中学<br />
                  南校区/北校区
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <div className="flex justify-center">
                  <Phone className="h-12 w-12 text-primary-600" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900">联系电话</h3>
                <p className="mt-4 text-gray-600">
                  校办公室: 0370-XXXXXXX<br />
                  教务处: 0370-XXXXXXX
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <div className="flex justify-center">
                  <Mail className="h-12 w-12 text-primary-600" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900">电子邮箱</h3>
                <p className="mt-4 text-gray-600">
                  校办公室: office@ycsyzx.edu.cn<br />
                  招生咨询: zsb@ycsyzx.edu.cn
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">给我们留言</h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                如果您有任何问题或建议，请填写以下表单
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        姓名
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm input"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        电子邮箱
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm input"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                      主题
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm input"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      留言内容
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm input"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="btn btn-primary btn-md w-full flex items-center justify-center"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      发送留言
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Office Hours */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">办公时间</h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                学校各部门办公时间安排
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <div className="flex items-center mb-4">
                      <Clock className="h-6 w-6 text-primary-600 mr-2" />
                      <h3 className="text-lg font-bold text-gray-900">校办公室</h3>
                    </div>
                    <p className="text-gray-600">
                      周一至周五: 8:00 - 12:00, 14:30 - 18:00<br />
                      周六、周日: 休息
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-4">
                      <Clock className="h-6 w-6 text-primary-600 mr-2" />
                      <h3 className="text-lg font-bold text-gray-900">教务处</h3>
                    </div>
                    <p className="text-gray-600">
                      周一至周五: 8:00 - 12:00, 14:30 - 18:00<br />
                      周六、周日: 休息
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-4">
                      <Clock className="h-6 w-6 text-primary-600 mr-2" />
                      <h3 className="text-lg font-bold text-gray-900">学生处</h3>
                    </div>
                    <p className="text-gray-600">
                      周一至周五: 8:00 - 12:00, 14:30 - 18:00<br />
                      周六、周日: 休息
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-4">
                      <Clock className="h-6 w-6 text-primary-600 mr-2" />
                      <h3 className="text-lg font-bold text-gray-900">招生办</h3>
                    </div>
                    <p className="text-gray-600">
                      周一至周五: 8:00 - 12:00, 14:30 - 18:00<br />
                      周六: 9:00 - 12:00, 14:00 - 17:00<br />
                      周日: 休息
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default ContactPage