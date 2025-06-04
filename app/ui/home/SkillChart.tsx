import { useLanguage } from "../LanguageContext";

const SkillChart = () => {
  const { t } = useLanguage();

  return (
    <div id="skillChart">
      <h1>{t.skillChart.title}</h1>
      <table>
        <tbody>
          <tr>
            <td id="htmlSkill">
              <div className="skillBar">HTML<div className="hover-indicator"><div>+1</div><span className="frameworkName">{t.skillChart.html.framework}</span></div></div>
            </td>
          </tr>
          <tr>
            <td id="xamlSkill">
              <div className="skillBar">XAML<div className="hover-indicator"><div>+1</div><span className="frameworkName">{t.skillChart.xaml.framework}</span></div></div>
            </td>
          </tr>
          <tr>
            <td id="cssSkill">
              <div className="skillBar">CSS<div className="hover-indicator"><div>+1</div><span className="frameworkName">{t.skillChart.css.framework}</span></div></div>
            </td>
          </tr>
          <tr>
            <td id="jsSkill">
              <div className="skillBar">JavaScript <div className="hover-indicator"><div>+2</div><span className="frameworkName">{t.skillChart.js.framework}</span></div>
              </div>
            </td>
          </tr>
          <tr>
            <td id="pySkill">
              <div className="skillBar">Python<div className="hover-indicator"><div>+2</div><span className="frameworkName">{t.skillChart.py.framework}</span></div></div>
            </td>
          </tr>
          <tr>
            <td id="csharpSkill">
              <div className="skillBar">C# <div className="hover-indicator"><div>+1</div><span className="frameworkName">{t.skillChart.csharp.framework}</span></div></div>
            </td>
          </tr>
          <tr>
            <td id="cppSkill">
              <div className="skillBar">C++</div>
            </td>
          </tr>
          <tr>
            <td id="holyCSkill">
              <div className="skillBar">Holy-C</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SkillChart;
