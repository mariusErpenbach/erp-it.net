const SkillChart = () => {
    return(
        <div id="skillChart">
        <h1>Mein Coding Skillset</h1>
        <table>
          <tbody>
          <tr>
            <td id="htmlSkill" >HTML</td>
          </tr>
          <tr>
            <td id="cssSkill" className="skillBar">CSS</td>
          </tr>
          <tr>
            <td>Javascript</td>
            <td><div id="jsSkill" className="skillBar"></div></td>
          </tr>
          <tr>
            <td>Python</td>
            <td><div id="pySkill" className="skillBar"></div></td>
          </tr>
          <tr>
            <td>C#</td>
            <td><div id="csharpSkill" className="skillBar"></div></td>
          </tr>
          <tr>
            <td>C++</td>
            <td><div id="cppSkill" className="skillBar"></div></td>
          </tr>
          <tr>
            <td>Holy-C</td>
            <td><div id="holyCSkill" className="skillBar"></div></td>
          </tr>
          </tbody>
        </table>
      </div>
    )
}
export default SkillChart