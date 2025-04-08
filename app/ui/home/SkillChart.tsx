const SkillChart = () => {
  return (
    <div id="skillChart">
      <h1>Mein Coding Skillset</h1>
      <table>
        <tbody>
          <tr>
            <td id="htmlSkill">
              <div className="skillBar">HTML<div className="hover-indicator"><div>+1</div><span className="frameworkName">Next.js</span></div></div>
              
            </td>
          </tr>
          <tr>
            <td id="xamlSkill">
              <div className="skillBar">XAML<div className="hover-indicator"><div>+1</div><span className="frameworkName">Avalonia</span></div></div>
              
            </td>
          </tr>
          <tr>
            <td id="cssSkill">
              <div className="skillBar">CSS<div className="hover-indicator"><div>+1</div><span className="frameworkName">SCSS/SASS</span></div></div>
              
            </td>
          </tr>
          <tr>
            <td id="jsSkill">
              <div className="skillBar">JavaScript <div className="hover-indicator"><div>+1</div><span className="frameworkName">Next.js, TypeScript</span></div>
              </div>
            </td>
          </tr>
          <tr>
            <td id="pySkill">
              <div className="skillBar">Python<div className="hover-indicator"><div>+1</div><span className="frameworkName">Django </span></div></div>
              
            </td>
          </tr>
          <tr>
            <td id="csharpSkill">
              <div className="skillBar">C# <div className="hover-indicator"><div>+1</div><span className="frameworkName">Avalonia</span></div></div>
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
