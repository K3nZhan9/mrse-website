import React, { useState, useMemo, useEffect } from 'react';
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
    total_patents: 32,
    patents: [
      { 专利名称: "一种高纯氩气制备系统", 专利号: "2023112345678", 年费到期日: "2026-08-15", 缴费金额: "1500", 通知状态: "已通知", 缴费截止日: "2026-07-15" },
      { 专利名称: "特种气体安全存储装置", 专利号: "2023109876543", 年费到期日: "2026-11-20", 缴费金额: "1800", 通知状态: "待通知", 缴费截止日: "2026-10-20" },
      { 专利名称: "气体检测分析仪器", 专利号: "2023123456789", 年费到期日: "2027-03-10", 缴费金额: "2000", 通知状态: "无需通知", 缴费截止日: "" }
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
  "保定科海自动化科技有限公司", 
  "保定朗特电子产品制造有限公司",
  "朱文倩",
  "沧州华宇特种气体科技有限公司",
  "保定贝佳宝纸塑制品制造有限公司",
  "山东大学（尚创）",
  "保定市北方特种气体有限公司",
  "保定市电友电力科技有限公司",
  "保定市满城振兴水泥制品有限公司"
];

const ClientCenter: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(false);

  // 过滤公司列表
  const filteredCompanies = useMemo(() => {
    if (!searchTerm) return companyList.slice(0, 10); // 默认显示前10个
    return companyList.filter(company =>
      company.toLowerCase().includes(searchTerm.toLowerCase())
    ).slice(0, 10); // 搜索结果也只显示前10个
  }, [searchTerm]);

  // 获取选中的公司数据
  const companyInfo = selectedCompany ? companyData[selectedCompany as keyof typeof companyData] : null;

  // 搜索处理
  const handleSearch = (company: string) => {
    setSelectedCompany(company);
    setShowResults(true);
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
  };

  // 状态标签颜色
  const getStatusColor = (status: string) => {
    switch(status) {
      case '已通知': return 'bg-green-100 text-green-800';
      case '待通知': return 'bg-yellow-100 text-yellow-800';
      case '无需通知': return 'bg-gray-100 text-gray-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50">
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
                    id="company-search"
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="例如：保定市北方特种气体有限公司"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    autoComplete="off"
                  />
                  <div className="absolute right-3 top-3 text-gray-400 pointer-events-none">
                    🔍
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
                      ⏰ 展示专利: <span className="font-bold ml-1">{companyInfo.patents.length}</span>
                    </span>
                  </div>
                </div>
                <button
                  onClick={handleReset}
                  className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
                >
                  🔄 重新搜索
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
                        缴费金额
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
                    {companyInfo.patents.map((patent, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {patent.专利号}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 max-w-md">
                          {patent.专利名称}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          {patent.年费到期日 || '--'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          {patent.缴费金额 ? `¥${patent.缴费金额}` : '--'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(patent.通知状态)}`}>
                            {patent.通知状态}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          {patent.缴费截止日 || '--'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* 数据说明 */}
              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <h3 className="text-lg font-medium text-blue-800 mb-2">📝 数据说明</h3>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• <span className="font-medium">年费到期日</span>：专利年费需要缴纳的最后日期</li>
                  <li>• <span className="font-medium">缴费金额</span>：需要缴纳的年费金额（单位：人民币）</li>
                  <li>• <span className="font-medium">通知状态</span>：
                    <span className="ml-2 inline-flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>已通知：已发送提醒</span>
                    <span className="ml-4 inline-flex items-center"><span className="w-2 h-2 bg-yellow-500 rounded-full mr-1"></span>待通知：待发送提醒</span>
                    <span className="ml-4 inline-flex items-center"><span className="w-2 h-2 bg-gray-500 rounded-full mr-1"></span>无需通知：无年费或已缴费</span>
                  </li>
                  <li>• <span className="font-medium">缴费截止日</span>：建议完成缴费的日期（通常提前1个月）</li>
                </ul>
              </div>
            </div>
          )}

          {/* 使用说明 */}
          {!showResults && (
            <div className="max-w-4xl mx-auto mt-12 bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">📖 使用指南</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-3xl mb-4">1️⃣</div>
                  <h3 className="font-bold text-lg mb-2">搜索公司</h3>
                  <p className="text-gray-600">在搜索框中输入您的公司名称，系统将自动匹配并显示相关公司列表。</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-3xl mb-4">2️⃣</div>
                  <h3 className="font-bold text-lg mb-2">查看详情</h3>
                  <p className="text-gray-600">点击匹配的公司名称，系统将立即展示该公司所有专利的年费详情。</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-3xl mb-4">3️⃣</div>
                  <h3 className="font-bold text-lg mb-2">数据安全</h3>
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