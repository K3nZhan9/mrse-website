import React, { useState, useMemo } from 'react';
import Layout from '../components/Layout';

// 模拟数据 - 实际使用时可以从API或JSON文件加载
const companyData = {
  "保定开拓精密仪器制造有限责任公司": {
    company_name: "保定开拓精密仪器制造有限责任公司",
    total_patents: 18,
    patents: [
      { 专利名称: "加速度计气密性检测系统、方法、装置、终端及存储介质", 专利号: "2023116859086", 年费到期日: "", 缴费金额: "", 通知状态: "无需通知", 缴费截止日: "" },
      { 专利名称: "一种微干扰石英挠性加速度计", 专利号: "202310667927X", 年费到期日: "", 缴费金额: "", 通知状态: "无需通知", 缴费截止日: "" },
      { 专利名称: "一种石英挠性加速度计伺服电路", 专利号: "2023100245900", 年费到期日: "2027-02-09", 缴费金额: "1200", 通知状态: "待通知", 缴费截止日: "2027-01-09" }
    ]
  },
  "保定市北方特种气体有限公司": {
    company_name: "保定市北方特种气体有限公司",
    total_patents: 10,
    patents: [
      { 专利名称: "一种高纯氩气制备系统", 专利号: "2023112345678", 年费到期日: "2026-08-15", 缴费金额: "1500", 通知状态: "已通知", 缴费截止日: "2026-07-15" },
      { 专利名称: "特种气体安全存储装置", 专利号: "2023109876543", 年费到期日: "2026-11-20", 缴费金额: "1800", 通知状态: "待通知", 缴费截止日: "2026-10-20" },
      { 专利名称: "气体检测分析仪器", 专利号: "2023123456789", 年费到期日: "2027-03-10", 缴费金额: "2000", 通知状态: "无需通知", 缴费截止日: "" },
      { 专利名称: "特种气体充装系统", 专利号: "2023123456790", 年费到期日: "2026-09-05", 缴费金额: "1350", 通知状态: "已通知", 缴费截止日: "2026-08-05" },
      { 专利名称: "气体纯化处理装置", 专利号: "2023123456791", 年费到期日: "2026-12-18", 缴费金额: "1650", 通知状态: "待通知", 缴费截止日: "2026-11-18" },
      { 专利名称: "高压气体存储罐", 专利号: "2023123456792", 年费到期日: "2027-01-22", 缴费金额: "1850", 通知状态: "待通知", 缴费截止日: "2026-12-22" },
      { 专利名称: "气体混合控制系统", 专利号: "2023123456793", 年费到期日: "2026-10-30", 缴费金额: "1450", 通知状态: "已通知", 缴费截止日: "2026-09-30" },
      { 专利名称: "特种气体输送管道", 专利号: "2023123456794", 年费到期日: "2027-04-15", 缴费金额: "2200", 通知状态: "无需通知", 缴费截止日: "" },
      { 专利名称: "气体泄漏检测装置", 专利号: "2023123456795", 年费到期日: "2026-11-28", 缴费金额: "1750", 通知状态: "待通知", 缴费截止日: "2026-10-28" },
      { 专利名称: "特种气体分析仪器", 专利号: "2023123456796", 年费到期日: "2027-02-14", 缴费金额: "1950", 通知状态: "待通知", 缴费截止日: "2027-01-14" }
    ]
  },
  "保定科海自动化科技有限公司": {
    company_name: "保定科海自动化科技有限公司",
    total_patents: 24,
    patents: [
      { 专利名称: "自动化控制系统", 专利号: "2023111111111", 年费到期日: "2026-09-30", 缴费金额: "1400", 通知状态: "已通知", 缴费截止日: "2026-08-30" },
      { 专利名称: "智能传感器网络", 专利号: "2023122222222", 年费到期日: "2027-01-15", 缴费金额: "1600", 通知状态: "待通知", 缴费截止日: "2026-12-15" }
    ]
  },
  "保定朗特电子产品制造有限公司": {
    company_name: "保定朗特电子产品制造有限公司",
    total_patents: 19,
    patents: [
      { 专利名称: "电子产品散热系统", 专利号: "2023133333333", 年费到期日: "2026-10-25", 缴费金额: "1300", 通知状态: "已通知", 缴费截止日: "2026-09-25" }
    ]
  },
  "沧州华宇特种气体科技有限公司": {
    company_name: "沧州华宇特种气体科技有限公司",
    total_patents: 15,
    patents: [
      { 专利名称: "特种气体混合装置", 专利号: "2023144444444", 年费到期日: "2026-12-05", 缴费金额: "1700", 通知状态: "待通知", 缴费截止日: "2026-11-05" }
    ]
  }
};

// 公司列表（实际应该从JSON文件加载）
const companyList = [
  "保定开拓精密仪器制造有限责任公司",
  "保定市北方特种气体有限公司", 
  "保定科海自动化科技有限公司",
  "保定朗特电子产品制造有限公司",
  "沧州华宇特种气体科技有限公司",
  "河北尚德电力设备有限公司",
  "保定赛沃精密科技有限公司",
  "廊坊东旭特种气体有限公司",
  "保定众合特种气体有限公司",
  "石家庄新华特种气体有限公司"
];

const ClientCenter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // 每页显示5条专利

  // 过滤公司列表
  const filteredCompanies = useMemo(() => {
    if (!searchTerm.trim()) return [];
    const term = searchTerm.toLowerCase();
    return companyList.filter(company => 
      company.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  // 获取公司信息
  const companyInfo = selectedCompany ? companyData[selectedCompany as keyof typeof companyData] : null;

  // 分页计算
  const totalPages = companyInfo ? Math.ceil(companyInfo.patents.length / itemsPerPage) : 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPatents = companyInfo ? companyInfo.patents.slice(startIndex, endIndex) : [];

  const handleSearch = (company: string) => {
    setSelectedCompany(company);
    setShowResults(true);
    setCurrentPage(1); // 重置到第一页
    // 滚动到结果区域
    setTimeout(() => {
      const resultsSection = document.getElementById('search-results');
      if (resultsSection) {
        resultsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleReset = () => {
    setSearchTerm('');
    setSelectedCompany(null);
    setShowResults(false);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // 状态标签颜色
  const getStatusColor = (status: string) => {
    switch(status) {
      case '已通知': return 'bg-green-100 text-green-800 border-green-200';
      case '待通知': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case '无需通知': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <Layout>
      {/* 主内容区 */}
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* 页面标题 */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">🔍 客户年费监控系统</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              搜索您的公司，查看专利年费到期情况。数据自动更新，无需跳转。
            </p>
          </div>

          {/* 搜索区域 */}
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-6">🔍 公司搜索</h2>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="company-search" className="block text-sm font-medium text-gray-700 mb-2">
                  输入公司名称进行搜索（支持模糊搜索）
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="company-search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="例如：保定市北方特种气体有限公司"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <span className="text-gray-400">🔍</span>
                  </div>
                </div>
              </div>

              {/* 搜索结果列表 */}
              {filteredCompanies.length > 0 && (
                <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm mt-4">
                  <div className="bg-blue-50 px-4 py-3 text-sm font-medium text-blue-700">
                    📋 匹配到的公司（共 {filteredCompanies.length} 个）
                  </div>
                  <div className="max-h-60 overflow-y-auto">
                    {filteredCompanies.slice(0, 10).map((company, index) => (
                      <button
                        key={index}
                        onClick={() => handleSearch(company)}
                        className="w-full text-left px-4 py-3 hover:bg-blue-50 border-b border-gray-100 last:border-b-0 transition-colors flex items-center justify-between focus:outline-none focus:bg-blue-50"
                      >
                        <div className="flex items-center">
                          <span className="mr-2 text-gray-500">🏢</span>
                          <span className="text-gray-800 font-medium">{company}</span>
                        </div>
                        <span className="text-blue-600 text-sm whitespace-nowrap">查看详情 →</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {searchTerm && filteredCompanies.length === 0 && (
                <div className="text-center py-4 text-gray-500">
                  未找到匹配的公司，请尝试其他关键词。
                </div>
              )}
            </div>

            {selectedCompany && (
              <div className="mt-6 flex justify-between items-center">
                <button
                  onClick={handleReset}
                  className="px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  ↻ 重新搜索
                </button>
                <div className="text-sm text-gray-600">
                  当前选择: <span className="font-medium text-blue-600">{selectedCompany}</span>
                </div>
              </div>
            )}
          </div>

          {/* 搜索结果展示区域 */}
          {showResults && companyInfo && (
            <div id="search-results" className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-8">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    📋 {companyInfo.company_name} - 专利年费详情
                  </h2>
                  <div className="flex items-center space-x-4 text-gray-600">
                    <span className="flex items-center">
                      📊 专利总数: <span className="font-bold ml-1">{companyInfo.total_patents}</span>
                    </span>
                    <span className="flex items-center">
                      📄 当前展示: <span className="font-bold ml-1">{currentPatents.length}条 (第{currentPage}/{totalPages}页)</span>
                    </span>
                  </div>
                </div>
                <button
                  onClick={handleReset}
                  className="px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  ↻ 重新搜索
                </button>
              </div>

              {/* 专利表格 */}
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        专利号
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        专利名称
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        年费到期日
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        缴费金额(¥)
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        通知状态
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        缴费截止日
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {currentPatents.map((patent, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {patent.专利号}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700 max-w-xs">
                          {patent.专利名称}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          {patent.年费到期日 || '-'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          {patent.缴费金额 ? `¥${patent.缴费金额}` : '-'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(patent.通知状态)}`}>
                            {patent.通知状态}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          {patent.缴费截止日 || '-'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* 分页控件 */}
              {totalPages > 1 && (
                <div className="mt-8 flex items-center justify-between">
                  <div className="text-sm text-gray-700">
                    显示第 {startIndex + 1} 到 {Math.min(endIndex, companyInfo.patents.length)} 条，共 {companyInfo.patents.length} 条专利
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className={`px-3 py-2 rounded-md text-sm font-medium ${currentPage === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                    >
                      上一页
                    </button>
                    
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`px-3 py-2 rounded-md text-sm font-medium ${currentPage === page ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                      >
                        {page}
                      </button>
                    ))}
                    
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className={`px-3 py-2 rounded-md text-sm font-medium ${currentPage === totalPages ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                    >
                      下一页
                    </button>
                  </div>
                </div>
              )}

              {/* 表格说明 */}
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-medium text-blue-800 mb-2">📝 表格说明</h3>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">已通知</span>：提醒已发送给客户</li>
                  <li>• <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 border border-yellow-200">待通知</span>：待发送提醒，即将到期</li>
                  <li>• <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 border border-gray-200">无需通知</span>：无年费或已缴费</li>
                </ul>
              </div>
            </div>
          )}

          {/* 使用指南 */}
          {!showResults && (
            <div className="max-w-6xl mx-auto mt-16">
              <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">📖 使用指南</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="text-blue-600 text-2xl mb-4">🔍</div>
                  <h3 className="font-bold text-lg text-gray-800 mb-3">搜索公司</h3>
                  <p className="text-gray-600">在搜索框中输入公司名称，系统会自动匹配并显示相关结果。</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="text-blue-600 text-2xl mb-4">📋</div>
                  <h3 className="font-bold text-lg text-gray-800 mb-3">查看详情</h3>
                  <p className="text-gray-600">点击搜索结果中的公司名称，系统会立即展示该公司的专利年费详情。</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="text-blue-600 text-2xl mb-4">🔒</div>
                  <h3 className="font-bold text-lg text-gray-800 mb-3">数据安全</h3>
                  <p className="text-gray-600">每个公司只能查看自己的专利数据，确保商业信息的保密性和安全性。</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ClientCenter;